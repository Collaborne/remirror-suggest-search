import { usePrevious } from '@reactuses/core';
import { useState, useEffect } from 'react';
import { ProsemirrorNode } from 'remirror';

import { Fields } from '../types';
import { getLastTextNode, getTextFromNode } from '../utils/get-last-text-node';
import { remirrorToSearch } from '../utils/remirror-to-search';
import {
	removeExtraSpaces,
	removeTextFromEnd,
	removeTextFromFront,
} from '../utils/remove-text';

export function useSuggestInput(props: {
	doc: ProsemirrorNode;
	fields: Fields;
}) {
	const { doc, fields } = props;
	const [searchInput, setSearchInput] = useState<string>();
	const [searchedTerm, setSearchedTerm] = useState<string>();
	const prevSearchInput = usePrevious(searchInput);
	useEffect(() => {
		const lastNode = getLastTextNode(doc);
		const lastNodeText = removeExtraSpaces(getTextFromNode(lastNode) ?? '');
		const currentSearchTerm = removeExtraSpaces(
			remirrorToSearch({ doc, fields }),
		);
		const searched = lastNodeText
			? removeTextFromEnd(currentSearchTerm, lastNodeText)
			: currentSearchTerm;

		const input = removeTextFromFront(lastNodeText, searched);

		setSearchInput(input);
		setSearchedTerm(searched);
	}, [doc, fields]);

	return {
		searchInput,
		searchedTerm,
		searchInputChanged: searchInput !== prevSearchInput,
	};
}
