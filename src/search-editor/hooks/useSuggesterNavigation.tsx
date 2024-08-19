import { CommandsExtension, Replace } from '@remirror/core';
import type {
	MentionChangeHandler,
	MentionChangeHandlerCommand,
} from '@remirror/extension-mention';
import {
	ChangeReason,
	ExitReason,
	SuggestChangeHandlerProps,
} from '@remirror/pm/suggest';
import {
	MenuNavigationOptions,
	UseMenuNavigationReturn,
	useCommands,
	useMenuNavigation,
} from '@remirror/react';
import { useExtensionEvent, useHelpers } from '@remirror/react-core';
import { useCallback, useMemo, useState } from 'react';
import { NamedMentionAtomNodeAttributes } from 'remirror/extensions';

import { MentionExtension } from '../../extensions/mention-extension';
import { INPUT_OPTION } from '../types';

import { SELECT_FIELD } from './useRenderSelectOption';

export interface MentionState<
	Data extends NamedMentionAtomNodeAttributes = NamedMentionAtomNodeAttributes,
> extends Pick<SuggestChangeHandlerProps, 'name' | 'query' | 'text' | 'range'> {
	/**
	 * This command when the mention is active.
	 */
	command: (item: Data) => void;

	/**
	 * The reason for the change.
	 */
	reason: ChangeReason;
}

export interface UseMentionReturn<
	Data extends NamedMentionAtomNodeAttributes = NamedMentionAtomNodeAttributes,
> extends UseMenuNavigationReturn<Data> {
	state: MentionState<Data> | null;
}

export function useSuggesterNavigation<
	Data extends NamedMentionAtomNodeAttributes = NamedMentionAtomNodeAttributes,
>(props: UseMentionProps<Data>): UseMentionReturn<Data> {
	const {
		items,
		ignoreMatchesOnDismiss = true,
		onExit,
		direction,
		dismissKeys,
		focusOnClick,
		submitKeys,
		isOpen,
		closeMenu,
	} = props;
	const [state, setState] = useState<MentionState | null>(null);
	const helpers = useHelpers();
	const { createMention, selectField } = useCommands<
		MentionExtension | CommandsExtension
	>();

	const onDismiss = useCallback(() => {
		if (!state) {
			return false;
		}

		const { range, name } = state;

		// TODO Revisit to see if the following is too extreme
		if (ignoreMatchesOnDismiss) {
			// Ignore the current mention so that it doesn't show again for this
			// matching area
			helpers
				.getSuggestMethods()
				.addIgnored({ from: range.from, name, specific: true });
		}

		// Remove the matches.
		setState(null);

		return true;
	}, [helpers, ignoreMatchesOnDismiss, state]);

	const onSubmit = useCallback(
		(item: Data) => {
			const isInputOption = item.id === INPUT_OPTION.id;
			const isSelectOption = item.name === SELECT_FIELD.name;

			if (isSelectOption) {
				selectField(item);
				return true;
			}

			if (!isInputOption) {
				createMention(item);
			}

			// Remove the matches.
			setState(null);
			closeMenu();
			return true;
		},
		[closeMenu, createMention, selectField],
	);

	const menu = useMenuNavigation<Data>({
		items,
		isOpen,
		onDismiss,
		onSubmit,
		direction,
		dismissKeys,
		focusOnClick,
		submitKeys,
	});
	const { setIndex } = menu;

	/**
	 * The is the callback for when a suggestion is changed.
	 */
	const onChange: MentionChangeHandler = useCallback(
		(props, cmd) => {
			const {
				query,
				text,
				range,
				ignoreNextExit,
				name,
				exitReason,
				changeReason,
				textAfter,
				defaultAppendTextValue,
			} = props;

			// Ignore the next exit since it has been triggered manually but only when
			// this is caused by a change. This is because the command might be setup
			// to automatically be created on an exit.
			if (changeReason) {
				const command: MentionChangeHandlerCommand = attrs => {
					// Ignore the next exit since this exit is artificially being
					// generated.
					ignoreNextExit();

					const regex = /^\s+/;

					const appendText = regex.test(textAfter)
						? ''
						: defaultAppendTextValue;

					// Default to append text only when the textAfter the match does not
					// start with a whitespace character. However, this can be overridden
					// by the user.
					cmd({ appendText, ...attrs });

					// Reset the state, since the query has been exited.
					setState(null);
				};

				if (changeReason !== ChangeReason.Move) {
					setIndex(0);
				}
				// Update the active state after the change providing the command and
				// potentially updated index.
				setState({
					reason: changeReason,
					name,
					query,
					text,
					range,
					command,
				});

				return;
			}

			if (!exitReason || !onExit) {
				// Reset the state and do nothing when no onExit handler provided
				setState(null);
				return;
			}

			const exitCommand: MentionChangeHandlerCommand = attrs => {
				cmd({ appendText: '', ...attrs });
			};

			// Call the onExit handler.
			onExit({ reason: exitReason, name, query, text, range }, exitCommand);

			// Reset the state to remove the active query return.
			setState(null);
		},
		[onExit, setIndex],
	);

	// Add the handlers to the `MentionExtension`
	useExtensionEvent(MentionExtension, 'onChange', onChange);

	return useMemo(() => ({ ...menu, state }), [menu, state]);
}

export interface UseMentionProps<
	Data extends NamedMentionAtomNodeAttributes = NamedMentionAtomNodeAttributes,
> extends MenuNavigationOptions {
	/**
	 * The list of data from which an index can be calculated. Must include at
	 * least an `id` and a `label`.
	 */
	items: Data[];

	/**
	 * This method is called when a user induced exit happens before a mention has
	 * been created. It receives the state, and gives the consumer of this hook
	 * the opportunity to manually create their own mention
	 *
	 * Leave this undefined to ignore exits.
	 *
	 * To enable automatic exit handling. The following will automatically set the
	 * id to be the query and the label to be the full matching text. Extra attrs
	 * like `href` can be added by you to the attrs object parameter.
	 *
	 * ```ts
	 * const mentionState = useMention({ items, onExit(_, command) => command(), });
	 * ```
	 */
	onExit?: UseMentionExitHandler<Data>;

	/**
	 * Whether matches should be permanently ignored when the user presses escape.
	 *
	 * @defaultValue true
	 */
	ignoreMatchesOnDismiss?: boolean;
	isOpen: boolean;
	closeMenu: () => void;
}

export type UseMentionExitHandler<
	Data extends NamedMentionAtomNodeAttributes = NamedMentionAtomNodeAttributes,
> = (
	props: OnExitProps<Data>,
	command: (attrs?: Partial<Data>) => void,
) => void;

type OnExitProps<
	Data extends NamedMentionAtomNodeAttributes = NamedMentionAtomNodeAttributes,
> = Replace<Omit<MentionState<Data>, 'command'>, { reason: ExitReason }>;
