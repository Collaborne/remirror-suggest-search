/* eslint-disable max-lines */
// Copied from Remirror and slightly modified to replace the content correctly
// when adding a mention mark (keep the matcher char 3.g creator:[MARK])
// TODO: open PR in remirror from these changes
import {
	ApplySchemaAttributes,
	command,
	ErrorConstant,
	extension,
	ExtensionTag,
	GetMarkRange,
	getMarkRange,
	getMatchString,
	Handler,
	InputRulesExtension,
	invariant,
	isElementDomNode,
	isMarkActive,
	isPlainObject,
	isString,
	LEAF_NODE_REPLACING_CHARACTER,
	MarkExtension,
	MarkExtensionSpec,
	MarkSpecOverride,
	omitExtraAttributes,
	pick,
	ProsemirrorAttributes,
	ProsemirrorNode,
	RangeProps,
	removeMark,
	replaceText,
	ShouldSkipProps,
	Static,
	KeyBindings,
} from '@remirror/core';
import type { CommandFunction } from '@remirror/core';
import type { CreateEventHandlers } from '@remirror/extension-events';
import { MarkPasteRule } from '@remirror/pm/paste-rules';
import {
	createRegexFromSuggester,
	DEFAULT_SUGGESTER,
	isInvalidSplitReason,
	isRemovedReason,
	isSelectionExitReason,
	isSplitReason,
	MatchValue,
	RangeWithCursor,
	Suggester,
} from '@remirror/pm/suggest';
import type { SuggestChangeHandlerProps } from '@remirror/pm/suggest';
import { ReplaceAroundStep, ReplaceStep } from '@remirror/pm/transform';
import { Plugin, PluginKey } from 'prosemirror-state';

import {
	getLastTextNode,
	getRangeFromMatchedText,
} from '../search-editor/utils/get-last-text-node';

function getLastWord(node?: ProsemirrorNode): string | null {
	if (!node || !node.textContent) {
		return null;
	}

	const words = node.textContent.trim().split(/\s+/);
	return words.length > 0 ? words[words.length - 1] : null;
}

/**
 * The static settings passed into a mention
 */
export interface MentionOptions
	extends Pick<
		Suggester,
		| 'invalidNodes'
		| 'validNodes'
		| 'invalidMarks'
		| 'validMarks'
		| 'isValidPosition'
		| 'disableDecorations'
	> {
	/**
	 * Provide a custom tag for the mention
	 */
	mentionTag?: Static<string>;

	/**
	 * Provide the custom matchers that will be used to match mention text in the
	 * editor.
	 */
	matchers: Static<MentionExtensionMatcher[]>;

	/**
	 * Text to append after the mention has been added.
	 *
	 * **NOTE**: If you're using whitespace characters but it doesn't seem to work
	 * for you make sure you're using the css provided in `@remirror/styles`.
	 *
	 * The `white-space: pre-wrap;` is what allows editors to add space characters
	 * at the end of a section.
	 *
	 * @defaultValue ''
	 */
	appendText?: string;

	/**
	 * Tag for the prosemirror decoration which wraps an active match.
	 *
	 * @defaultValue 'span'
	 */
	suggestTag?: string;

	/**
	 * Called whenever a suggestion becomes active or changes in any way.
	 *
	 * @remarks
	 *
	 * It receives a parameters object with the `reason` for the change for more
	 * granular control.
	 *
	 * The second parameter is a function that can be called to handle exits
	 * automatically. This is useful if you're mention can be any possible value,
	 * e.g. a `#hashtag`. Call it with the optional attributes to automatically
	 * create a mention.
	 *
	 * @defaultValue () => void
	 */
	onChange?: Handler<MentionChangeHandler>;

	/**
	 * Listen for click events to the mention extension.
	 */
	onClick?: Handler<
		(event: MouseEvent, markRange: GetMarkRange) => boolean | undefined | void
	>;

	/**
	 * A predicate check for whether the mention is valid. It proves the mention
	 * mark and it's attributes as well as the text it contains.
	 *
	 * This is used for checking that a recent update to the document hasn't made
	 * a mention invalid.
	 *
	 * For example a mention for `@valid` => `valid` would be considered
	 * invalidating. Return false to remove the mention.
	 *
	 * @param attrs - the attrs for the mention
	 * @param text - the text which is wrapped by the mention
	 */
	isMentionValid?: (
		attrs: NamedMentionExtensionAttributes,
		text: string,
	) => boolean;
}

/**
 * The default matcher to use when none is provided in options
 */
const DEFAULT_MATCHER = {
	...pick(DEFAULT_SUGGESTER, [
		'startOfLine',
		'supportedCharacters',
		'validPrefixCharacters',
		'invalidPrefixCharacters',
		'suggestClassName',
	]),
	appendText: '',
	matchOffset: 1,
	mentionClassName: 'mention',
};

/**
 * Check that the attributes exist and are valid for the mention update command
 * method.
 */
function isValidMentionAttributes(
	attributes: unknown,
): attributes is NamedMentionExtensionAttributes {
	return !!(
		attributes &&
		isPlainObject(attributes) &&
		attributes.id &&
		isString(attributes.id) &&
		attributes.label &&
		isString(attributes.label) &&
		attributes.name &&
		isString(attributes.name)
	);
}

/**
 * Gets the matcher from the list of matchers if it exists.
 *
 * @param name - the name of the matcher to find
 * @param matchers - the list of matchers to search through
 */
function getMatcher(name: string, matchers: MentionExtensionMatcher[]) {
	const matcher = matchers.find(matcher => matcher.name === name);
	return matcher ? { ...DEFAULT_MATCHER, ...matcher } : undefined;
}

/**
 * Get the append text value which needs to be handled carefully since it can
 * also be an empty string.
 */
function getAppendText(
	preferred: string | undefined,
	fallback: string | undefined,
) {
	if (isString(preferred)) {
		return preferred;
	}

	if (isString(fallback)) {
		return fallback;
	}

	return DEFAULT_MATCHER.appendText;
}

/**
 * Checks whether the mention is valid and hasn't been edited since being
 * created.
 */
export function isMentionValidDefault(
	attrs: NamedMentionExtensionAttributes,
	text: string,
): boolean {
	return attrs.label === text;
}

/**
 * The mention extension wraps mentions as a prosemirror mark. It allows for
 * fluid social experiences to be built. The implementation was inspired by the
 * way twitter and similar social sites allows mentions to be edited after
 * they've been created.
 *
 * @remarks
 *
 * Mentions have the following features
 * - An activation character or regex pattern which you define.
 * - A min number of characters before mentions are suggested
 * - Ability to exclude matching character.
 * - Ability to wrap content in a decoration which excludes mentions from being
 *   suggested.
 * - Decorations for in-progress mentions
 */
export
@extension<MentionOptions>({
	defaultOptions: {
		mentionTag: 'span' as const,
		matchers: [],
		appendText: '',
		suggestTag: 'span' as const,
		disableDecorations: false,
		invalidMarks: [],
		invalidNodes: [],
		isValidPosition: () => true,
		validMarks: null,
		validNodes: null,
		isMentionValid: isMentionValidDefault,
	},
	handlerKeyOptions: { onClick: { earlyReturnValue: true } },
	handlerKeys: ['onChange', 'onClick'],
	staticKeys: ['mentionTag', 'matchers'],
	customHandlerKeys: [],
})
class MentionExtension extends MarkExtension<MentionOptions> {
	get name() {
		return 'mention' as const;
	}

	/**
	 * Tag this as a behavior influencing mark.
	 */
	createTags() {
		return [ExtensionTag.Behavior, ExtensionTag.ExcludeInputRules];
	}

	createMarkSpec(
		extra: ApplySchemaAttributes,
		override: MarkSpecOverride,
	): MarkExtensionSpec {
		const dataAttributeId = 'data-mention-id';
		const dataAttributeName = 'data-mention-name';

		return {
			excludes: '_',
			inclusive: false,
			...override,
			attrs: {
				...extra.defaults(),
				id: { default: null },
				label: { default: null },
				name: { default: null },
			},
			parseDOM: [
				{
					tag: `${this.options.mentionTag}[${dataAttributeId}]`,
					getAttrs: element => {
						if (!isElementDomNode(element)) {
							return false;
						}

						const id = element.getAttribute(dataAttributeId);
						const name = element.getAttribute(dataAttributeName);
						const label = element.textContent;
						return { ...extra.parse(element), id, label, name };
					},
				},
				...(override.parseDOM ?? []),
			],
			toDOM: mark => {
				const { id, name } = omitExtraAttributes(mark.attrs, extra);
				const matcher = this.options.matchers.find(
					matcher => matcher.name === name,
				);

				const mentionClassName = matcher
					? matcher.mentionClassName ?? DEFAULT_MATCHER.mentionClassName
					: DEFAULT_MATCHER.mentionClassName;

				return [
					this.options.mentionTag,
					{
						...extra.dom(mark),
						class: name
							? `${mentionClassName} ${mentionClassName}-${name}`
							: mentionClassName,
						[dataAttributeId]: id,
						[dataAttributeName]: name,
					},
					0,
				];
			},
		};
	}

	onCreate(): void {
		// Add the `shouldSkip` predicate check to this extension.
		this.store
			.getExtension(InputRulesExtension)
			.addHandler('shouldSkipInputRule', this.shouldSkipInputRule.bind(this));
	}

	createExternalPlugins() {
		return [
			new Plugin({
				key: new PluginKey('mentionValidation'),
				appendTransaction: (transactions, _, newState) => {
					const tr = newState.tr;
					let modified = false;

					transactions.forEach(transaction => {
						transaction.steps.forEach(step => {
							let from;

							if (
								step instanceof ReplaceStep ||
								step instanceof ReplaceAroundStep
							) {
								from = step.from;
							} else {
								return;
							}

							if (!from) {
								return;
							}
							const $from = newState.doc.resolve(from - 1);
							const markRange = getMarkRange($from, this.type);

							if (!markRange) {
								return;
							}

							const { from: markFrom, to: markTo } = markRange;
							const text = newState.doc.textBetween(
								markFrom,
								markTo,
								LEAF_NODE_REPLACING_CHARACTER,
								' ',
							);

							const isValidMention = this.options.isMentionValid(
								markRange.mark.attrs as NamedMentionExtensionAttributes,
								text,
							);

							if (!isValidMention) {
								tr.removeMark(markFrom, markTo, this.type);
								modified = true;
							}
						});
					});

					return modified ? tr : null;
				},
			}),
		];
	}

	/**
	 * Track click events passed through to the editor.
	 */
	createEventHandlers(): CreateEventHandlers {
		return {
			clickMark: (event, clickState) => {
				const markRange = clickState.getMark(this.type);

				if (!markRange) {
					return;
				}

				return this.options.onClick(event, markRange);
			},
		};
	}

	/**
	 * Manages the paste rules for the mention.
	 *
	 * It creates regex tests for each of the configured matchers.
	 */
	createPasteRules(): MarkPasteRule[] {
		return this.options.matchers.map(matcher => {
			const { startOfLine, char, supportedCharacters, name, matchOffset } = {
				...DEFAULT_MATCHER,
				...matcher,
			};

			const regexp = new RegExp(
				`(${
					createRegexFromSuggester({
						char,
						matchOffset,
						startOfLine,
						supportedCharacters,
						captureChar: true,
						caseInsensitive: false,
						multiline: false,
					}).source
				})`,
				'g',
			);

			return {
				type: 'mark',
				regexp,
				markType: this.type,
				getAttributes: string => ({
					id: getMatchString(string.slice(string[2]?.length, string.length)),
					label: getMatchString(string),
					name,
				}),
			};
		});
	}

	/**
	 * Create the suggesters from the matchers that were passed into the editor.
	 */
	createSuggesters(): Suggester[] {
		const options = pick(this.options, [
			'invalidMarks',
			'invalidNodes',
			'isValidPosition',
			'validMarks',
			'validNodes',
			'suggestTag',
			'disableDecorations',
		]);

		return this.options.matchers.map<Suggester>(matcher => ({
			...DEFAULT_MATCHER,
			...options,
			...matcher,
			onChange: props => {
				const command = (attrs: MentionChangeHandlerCommandAttributes = {}) => {
					this.mentionExitHandler(
						props,
						attrs,
					)(this.store.helpers.getCommandProp());
				};

				this.options.onChange(
					{ ...props, defaultAppendTextValue: this.options.appendText },
					command,
				);
			},
		}));
	}

	/**
	 * This is the command which can be called from the `onChange` handler to
	 * automatically handle exits for you. It decides whether a mention should
	 * be updated, removed or created and also handles invalid splits.
	 *
	 * It does nothing for changes and only acts when an exit occurred.
	 *
	 * @param handler - the parameter that was passed through to the
	 * `onChange` handler.
	 * @param attrs - the options which set the values that will be used (in
	 * case you want to override the defaults).
	 */
	@command()
	mentionExitHandler(
		handler: SuggestChangeHandlerProps,
		attrs: MentionChangeHandlerCommandAttributes = {},
	): CommandFunction {
		return props => {
			const reason = handler.exitReason ?? handler.changeReason;

			// Get boolean flags of the reason for this exit.
			const isInvalid = isInvalidSplitReason(reason);
			const isRemoved = isRemovedReason(reason);

			if (isInvalid || isRemoved) {
				handler.setMarkRemoved();

				try {
					// This might fail when a deletion has taken place.
					return (
						isInvalid && this.removeMention({ range: handler.range })(props)
					);
				} catch {
					// This happens when removing the mention failed. If you select the
					// whole document and delete while there are mentions active then
					// this catch block will activate. It's not harmful, just prevents
					// you seeing `RangeError: Position X out of range`. I'll leave it
					// like this until more is known about the impact. Please create an
					// issue if this blocks you in some way.
					//
					// TODO test if this still fails.
					return true;
				}
			}

			const { tr } = props;
			const { range, text, query, name } = handler;
			const { from, to } = range;

			// Check whether the mention marks is currently active at the provided
			// for the command.
			const isActive = isMarkActive({ from, to, type: this.type, trState: tr });

			// Use the correct command, either update when currently active or
			// create when not active.
			const command = isActive
				? this.updateMention.bind(this)
				: this.createMention.bind(this);

			// Destructure the `attrs` and using the defaults.
			const {
				replacementType = isSplitReason(reason) ? 'partial' : 'full',
				id = query[replacementType],
				label = text[replacementType],
				appendText = this.options.appendText,
				...rest
			} = attrs;

			// Make sure to preserve the selection, if the reason for the exit was a
			// cursor movement and not due to text being added to the document.
			const keepSelection = isSelectionExitReason(reason);

			return command({
				name,
				id,
				label,
				appendText,
				replacementType,
				range,
				keepSelection,
				...rest,
			})(props);
		};
	}

	/**
	 * Select a field
	 */
	@command()
	selectField(
		config: NamedMentionExtensionAttributes & KeepSelectionProps,
	): CommandFunction {
		return props => {
			const { label } = config;
			let labelToAdd = label;
			const { dispatch, tr } = props;

			const lastNode = getLastTextNode(tr.doc);
			const lastWord = getLastWord(lastNode?.node);
			const isMatch = label.includes(lastWord || '');
			const docSize = tr.doc.content.size - 1;
			let range = {
				from: docSize,
				to: docSize,
			};

			if (isMatch) {
				range = getRangeFromMatchedText(tr.doc, lastWord || '') || range;
			} else {
				const docText = tr.doc.textBetween(0, tr.doc.content.size - 1, ' ');
				if (!docText.endsWith(' ')) {
					labelToAdd = ` ${label}`;
				}
			}

			tr.insertText(labelToAdd, range?.from, range?.to);
			dispatch?.(tr);
			return true;
		};
	}

	/**
	 * Create a new mention
	 */
	@command()
	createMention(
		config: NamedMentionExtensionAttributes & KeepSelectionProps,
	): CommandFunction {
		return props => this.createMentionFactory(config, false)(props);
	}

	/**
	 * Update an existing mention.
	 */
	@command()
	updateMention(
		config: NamedMentionExtensionAttributes & KeepSelectionProps,
	): CommandFunction {
		return props => this.createMentionFactory(config, true)(props);
	}

	/**
	 * Remove the mention(s) at the current selection or provided range.
	 */
	@command()
	removeMention({ range }: Partial<RangeProps> = {}): CommandFunction {
		const value = removeMark({ type: this.type, expand: true, range });

		return value;
	}

	/**
	 * Injects the baseKeymap into the editor.
	 */
	public createKeymap(): KeyBindings {
		return {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			Enter() {
				return true;
			},
		};
	}

	/**
	 * The factory method for mention commands to update and create new mentions.
	 */
	private createMentionFactory(
		config: NamedMentionExtensionAttributes & KeepSelectionProps,
		shouldUpdate: boolean,
	): CommandFunction {
		invariant(isValidMentionAttributes(config), {
			code: ErrorConstant.EXTENSION,
			message:
				'Invalid configuration attributes passed to the MentionExtension command.',
		});

		const { range, appendText, keepSelection, name, prefix, ...attributes } =
			config;

		const allowedNames = this.options.matchers.map(({ name }) => name);
		const matcher = getMatcher(name, this.options.matchers);

		invariant(allowedNames.includes(name) && matcher, {
			code: ErrorConstant.EXTENSION,
			message: `The name '${name}' specified for this command is invalid. Please choose from: ${JSON.stringify(
				allowedNames,
			)}.`,
		});

		return props => {
			const { tr } = props;

			let { from, to } = {
				from: range?.from ?? tr.selection.from,
				to: range?.cursor ?? tr.selection.to,
			};

			if (shouldUpdate) {
				// Remove mark at previous position
				let { oldFrom, oldTo } = {
					oldFrom: from,
					oldTo: range ? range.to : to,
				};
				const $oldTo = tr.doc.resolve(oldTo);

				({ from: oldFrom, to: oldTo } = getMarkRange($oldTo, this.type) ?? {
					from: oldFrom,
					to: oldTo,
				});

				tr.removeMark(oldFrom, oldTo, this.type).setMeta('addToHistory', false);

				// Remove mark at current position
				const $newTo = tr.selection.$from;
				const { from: newFrom, to: newTo } = getMarkRange(
					$newTo,
					this.type,
				) ?? {
					from: $newTo.pos,
					to: $newTo.pos,
				};

				tr.removeMark(newFrom, newTo, this.type).setMeta('addToHistory', false);
			} else {
				const matcherLabel = `${prefix || ''}${name}:`;
				const textToMatch = (attributes?.matchedText as string) || '';

				const replaceRange =
					getRangeFromMatchedText(tr.doc, textToMatch) || range;

				tr.insertText(matcherLabel, replaceRange?.from, replaceRange?.to);
				from = from + matcherLabel.length;
				to = to + matcherLabel.length;
			}

			return replaceText({
				keepSelection,
				type: this.type,
				attrs: { ...attributes, name },
				appendText: getAppendText(appendText, matcher.appendText),
				range: range
					? {
							from,
							to,
					  }
					: undefined,
				content: attributes.label,
			})(props);
		};
	}

	private shouldSkipInputRule(props: ShouldSkipProps) {
		const { ruleType, state, end, start } = props;

		if (ruleType === 'node') {
			return false;
		}

		if (
			// Check if the mark for this mention is active anywhere in the captured
			// input rule group.
			isMarkActive({ trState: state, type: this.type, from: start, to: end }) ||
			// Check whether the suggester is active and it's name is one of the
			// registered matchers.
			this.isMatcherActive(start, end)
		) {
			return true;
		}

		return false;
	}

	/**
	 * Check whether the mark is active within the provided start and end range.
	 */
	private isMatcherActive(start: number, end: number): boolean {
		const suggestState = this.store.helpers.getSuggestState();
		const names = new Set(this.options.matchers.map(({ name }) => name));
		const activeName = suggestState.match?.suggester.name;

		return (
			this.options.matchers.some(matcher => activeName === matcher.name) ||
			suggestState.decorationSet.find(start, end, ({ name }) => names.has(name))
				.length > 0
		);
	}
}

export interface OptionalMentionExtensionProps {
	/**
	 * The text to append to the replacement.
	 *
	 * @defaultValue ''
	 */
	appendText?: string;

	/**
	 * The range of the requested selection.
	 */
	range?: RangeWithCursor;

	/**
	 * Whether to replace the whole match (`full`) or just the part up until the
	 * cursor (`partial`).
	 */
	replacementType?: keyof MatchValue;
}

interface KeepSelectionProps {
	/**
	 * Whether to preserve the original selection after the replacement has
	 * occurred.
	 */
	keepSelection?: boolean;
}

/**
 * The attrs that will be added to the node. ID and label are plucked and used
 * while attributes like href and role can be assigned as desired.
 */
export type MentionExtensionAttributes = ProsemirrorAttributes<
	OptionalMentionExtensionProps & {
		/**
		 * A unique identifier for the suggesters node
		 */
		id: string;

		/**
		 * The text to be placed within the suggesters node
		 */
		label: string;
	}
>;

export type NamedMentionExtensionAttributes = ProsemirrorAttributes<
	OptionalMentionExtensionProps & {
		/**
		 * A unique identifier for the suggesters node
		 */
		id: string;

		/**
		 * The text to be placed within the suggesters node
		 */
		label: string;
	} & {
		/**
		 * The identifying name for the active matcher. This is stored as an
		 * attribute on the HTML that will be produced
		 */
		name: string;
	}
>;

/**
 * The options for the matchers which can be created by this extension.
 */
export interface MentionExtensionMatcher
	extends Pick<
		Suggester,
		| 'char'
		| 'name'
		| 'startOfLine'
		| 'supportedCharacters'
		| 'validPrefixCharacters'
		| 'invalidPrefixCharacters'
		| 'matchOffset'
		| 'suggestClassName'
	> {
	/**
	 * Provide customs class names for the completed mention
	 */
	mentionClassName?: string;

	/**
	 * Text to append after the suggestion has been added.
	 *
	 * @defaultValue ''
	 */
	appendText?: string;
}

export type MentionChangeHandlerCommand = (
	attrs?: MentionChangeHandlerCommandAttributes,
) => void;

export interface MentionChangeHandlerProps extends SuggestChangeHandlerProps {
	/**
	 * The default text to be appended if text should be appended.
	 */
	defaultAppendTextValue: string;
}

/**
 * A handler that will be called whenever the the active matchers are updated or
 * exited. The second argument which is the exit command is a function which is
 * only available when the matching suggester has been exited.
 */
export type MentionChangeHandler = (
	handlerState: MentionChangeHandlerProps,
	command: (attrs?: MentionChangeHandlerCommandAttributes) => void,
) => void;

/**
 * The dynamic properties used to change the behavior of the mentions created.
 */
export type MentionChangeHandlerCommandAttributes = ProsemirrorAttributes<
	Partial<
		Pick<NamedMentionExtensionAttributes, 'appendText' | 'replacementType'>
	> & {
		/**
		 * The ID to apply the mention.
		 *
		 * @defaultValue query.full
		 */
		id?: string;

		/**
		 * The text that is displayed within the mention bounds.
		 *
		 * @defaultValue text.full
		 */
		label?: string;
	}
>;
