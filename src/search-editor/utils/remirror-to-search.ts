import { Node } from 'prosemirror-model';
import { ProsemirrorNode } from 'remirror';

import { Fields } from '../types';

export interface RemirrorToSearchProps {
	doc: ProsemirrorNode;
	fields: Fields;
}

function toQueryPart(node: Node) {
	const hasMark = node.marks.length > 0;

	if (hasMark) {
		return `${node.marks[0].attrs.id}`;
	}

	return node.text || '';
}

export function remirrorToSearch(params: RemirrorToSearchProps): string {
	const searchQueryParts: string[] = [];

	params.doc.descendants(node => {
		const part = toQueryPart(node);
		if (part) {
			searchQueryParts.push(part);
		}

		return true;
	});

	let searchQuery = '';
	for (const part of searchQueryParts) {
		searchQuery += part;

		// Don't separate negation from component that should be separated
		if (!part.endsWith('-')) {
			searchQuery += '';
		}
	}

	return searchQuery
		.replace(/\s+/g, ' ')
		.replace(/:(\s+)/g, ':')
		.trim();
}
