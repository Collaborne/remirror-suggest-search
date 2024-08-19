import { useCallback } from 'react';
import { NamedMentionAtomNodeAttributes } from 'remirror/extensions';

import { Field, Fields } from '../types';

export default function useRenderMention(props: { fields: Fields }) {
	const renderMention = useCallback(
		(name: string, attrs: NamedMentionAtomNodeAttributes) => {
			const field: Field | undefined = Object.values(props.fields).find(
				field => field.name === name,
			);
			if (!field) {
				return null;
			}
			return field.render(attrs);
		},
		[props.fields],
	);
	return renderMention;
}
