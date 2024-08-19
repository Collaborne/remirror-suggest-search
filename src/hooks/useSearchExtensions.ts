import { ResolvedRangeWithCursor, SuggestMatch } from '@remirror/pm/suggest';
import { useMemo } from 'react';
import { SchemaAttributes, Static } from 'remirror';
import { ParagraphExtension, PlaceholderExtension } from 'remirror/extensions';

import { CustomKeymapExtension } from '../extensions/custom-keymap-extension';
import {
	MentionExtension,
	MentionExtensionMatcher,
} from '../extensions/mention-extension';
import { Fields } from '../search-editor';

import { useDeepCompareMemoize } from './useDeepCompare';

function getExtraAttributesFromFields(fields: Fields) {
	return Object.values(fields).reduce((extraAttributes, field) => {
		return {
			...extraAttributes,
			...field.extraAttributes,
		};
	}, {} as Static<SchemaAttributes>);
}
function createSupportedCharactersRegex(name: string): RegExp {
	// Escape special characters in the name to avoid regex injection
	const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	// Create a regex that matches any word character or digit, but not the predefined text
	return new RegExp(`(?!${escapedName})[\\w\\d_]+`);
}

function convertFieldsToMentionMatchers(
	fields: Fields,
	mentionClass?: string,
): Static<MentionExtensionMatcher[]> {
	const mentionMatchers: MentionExtensionMatcher[] = Object.values(fields).map(
		field => {
			const { name } = field;

			return {
				name,
				char: `${name}:`,
				matchOffset: 0,
				unicode: true,
				mentionClassName: mentionClass,
				supportedCharacters: createSupportedCharactersRegex(`${name}:`),
			};
		},
	);

	return mentionMatchers;
}

interface UseSearchExtensionProps {
	fields: Fields;
	emptyNodeClass?: string;
	mentionClass?: string;
	placeholder?: string;
	extraAttributes?: Static<SchemaAttributes>;
}

export function createSearchExtensions(params: UseSearchExtensionProps) {
	const extraAttributes = getExtraAttributesFromFields(params.fields);

	const extensions = [
		new CustomKeymapExtension(),
		new ParagraphExtension(),
		new PlaceholderExtension({
			emptyNodeClass: params.emptyNodeClass,
			placeholder: params.placeholder,
		}),
		new MentionExtension({
			extraAttributes,
			matchers: [
				...convertFieldsToMentionMatchers(params.fields, params.mentionClass),
			],
			invalidMarks: ['mention'],
			// Trigger the suggester at the end of the document
			isValidPosition: (
				resolvedPos: ResolvedRangeWithCursor,
				match: SuggestMatch,
			) => {
				const { to } = match.range;
				return to === resolvedPos.$cursor.doc.content.size - 1;
			},
		}),
	];

	return extensions;
}

export function useSearchExtension(props: UseSearchExtensionProps) {
	const extensions = useMemo(
		() => () => createSearchExtensions(props),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		useDeepCompareMemoize([props]),
	);
	return extensions;
}
