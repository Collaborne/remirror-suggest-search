import { findTextNodes, NodeWithPosition, ProsemirrorNode } from 'remirror';

import { isMentionMark } from './is-mention-mark';

export function getLastTextNode(
	doc: ProsemirrorNode,
): NodeWithPosition | undefined {
	const textNodes = findTextNodes({
		node: doc,
	});
	const lastNode = textNodes[textNodes.length - 1];
	const lastNodeMarks = textNodes[textNodes.length - 1]?.node?.marks;

	if (
		lastNodeMarks &&
		lastNodeMarks.length > 0 &&
		isMentionMark(lastNodeMarks[0])
	) {
		return;
	}

	return lastNode;
}

export function getTextFromNode(node?: NodeWithPosition) {
	return node?.node.textContent;
}

export function getTextRange(doc: ProsemirrorNode, text: string) {
	const lastTextNode = getLastTextNode(doc);

	if (!lastTextNode) {
		return;
	}
	const searchInput = getTextFromNode(lastTextNode) || '';
	const trimmedInput = searchInput.trim();
	const lastWord = trimmedInput.split(' ').pop() || '';
	const index = text
		.toLocaleLowerCase()
		.lastIndexOf(lastWord.toLocaleLowerCase());
	if (index === -1) {
		return;
	}

	const from = trimmedInput.lastIndexOf(lastWord) + lastTextNode.pos;
	const to = from + lastWord.length;
	return { from, to };
}

export function getRangeFromMatchedText(doc: ProsemirrorNode, text: string) {
	const lastTextNode = getLastTextNode(doc);

	if (!lastTextNode || !text) {
		return undefined;
	}

	const searchInput = getTextFromNode(lastTextNode) || '';
	const lowercaseSearchInput = searchInput.toLocaleLowerCase();
	const index = lowercaseSearchInput.lastIndexOf(text.toLocaleLowerCase());

	if (index === -1) {
		return undefined;
	}

	const from = index + lastTextNode.pos;
	const to = from + text.length;

	return { from, to, cursor: from };
}
