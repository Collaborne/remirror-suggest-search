import { MarkMap } from '@remirror/react';
import { FC, ReactElement } from 'react';
import { RemirrorJSON, SchemaAttributes, Static } from 'remirror';
import { NamedMentionExtensionAttributes } from 'remirror/extensions';

export type FieldType = 'keyword' | 'range';
export type RenderField = (
	attrs: NamedMentionExtensionAttributes,
) => ReactElement | null;
export interface Field {
	type: FieldType;
	name: string;
	render: RenderField;
	fieldIcon?: React.ReactElement;
	extraAttributes?: Static<SchemaAttributes>;
	getExtraAttrs?: (
		id: string,
	) => Promise<NamedMentionExtensionAttributes | undefined>;
}

// Maps ID -> Field
export type Fields = Record<string, Field>;

export type MentionHandler = FC<{
	node: RemirrorJSON;
	markMap: MarkMap;
}>;

export type TextHandler = FC<{
	node: RemirrorJSON;
	markMap: MarkMap;
}>;

export type GetSuggestions = (props: {
	searchedTerm?: string;
	input?: string;
}) => Promise<NamedMentionExtensionAttributes[]>;

// Always add first option without any suggestions
export const INPUT_OPTION: NamedMentionExtensionAttributes = {
	id: 'input',
	label: 'input',
	name: 'input',
};
