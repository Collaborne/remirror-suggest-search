import { ResolvedPos } from 'prosemirror-model';
import { useMemo } from 'react';
import { isDocNodeEmpty } from 'remirror';

function isSingleTextChild(resolvedPos: ResolvedPos): boolean {
	const fragment = resolvedPos.doc.content;
	const content = fragment.child(0).content;
	return (
		content.childCount === 1 &&
		content.child(0).type.name === 'text' &&
		content.child(0).marks.length === 0
	);
}

function cursorWithinLastNode(resolvedPos: ResolvedPos): boolean {
	const fragment = resolvedPos.doc.content;
	const docSize = fragment.size - 1;
	const lastNodeSize = fragment.child(0)?.lastChild?.nodeSize ?? docSize;
	const from = docSize - lastNodeSize;
	const cursorPos = resolvedPos.pos;

	return cursorPos >= from && cursorPos <= docSize;
}

function startsWithWhitespace(resolvedPos: ResolvedPos): boolean {
	const nodeBefore = resolvedPos.nodeBefore;
	if (nodeBefore && nodeBefore.isText) {
		return /^\s/.test(nodeBefore.text || '');
	}
	return false;
}

export function useCanShowSuggestions(props: {
	$anchor: ResolvedPos;
	isTriggeredSuggester: boolean;
}) {
	const { $anchor, isTriggeredSuggester } = props;
	const canShowSuggestions = useMemo(() => {
		const isValidPosition = cursorWithinLastNode($anchor);
		const isValidText = startsWithWhitespace($anchor);

		return (
			isDocNodeEmpty($anchor.doc) ||
			isSingleTextChild($anchor) ||
			isTriggeredSuggester ||
			(isValidPosition && isValidText)
		);
	}, [$anchor, isTriggeredSuggester]);

	return canShowSuggestions;
}
