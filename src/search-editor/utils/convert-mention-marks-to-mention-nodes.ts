import { Mark } from 'prosemirror-model';
import { ProsemirrorNode, RemirrorJSON } from 'remirror';

import { isMentionMark } from './is-mention-mark';

function createMentionAtomNode(mark: Mark): RemirrorJSON {
	return {
		type: 'mentionAtom',
		attrs: mark.attrs,
		text: mark.attrs.label,
	};
}

function removeKeyContent(node: ProsemirrorNode, keys: string[]): RemirrorJSON {
	// Matches the entire text if no spaces, or the last word if there's one
	// space before it.
	const keyPattern = new RegExp(`(${keys.join('|')}):$`);
	const match = node.text?.match(keyPattern);

	if (!match) {
		return node.toJSON();
	}

	// Remove the key pattern from the text
	const newText = node.text?.replace(keyPattern, ' ') || ' ';
	return { ...node.toJSON(), text: newText };
}

function processTextNode(node: ProsemirrorNode, keys: string[]) {
	const mentionMark = node.marks.find(isMentionMark);
	if (mentionMark) {
		return createMentionAtomNode(mentionMark);
	}
	return removeKeyContent(node, keys);
}

function escapeRegExp(string: string): string {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function removeTextFromNode(
	node: RemirrorJSON,
	textToRemove?: string,
): RemirrorJSON {
	if (!textToRemove) {
		return node;
	}
	const nodeText = node.text || '';
	const escapedTextToRemove = escapeRegExp(textToRemove);
	const searchRegExp = new RegExp(`${escapedTextToRemove}$`);
	const updatedText = nodeText.trim().replace(searchRegExp, '');
	return { ...node, text: updatedText };
}

export function removeTextFromContent(
	content: RemirrorJSON[],
	matchedText?: string,
) {
	const lastTextNode = content.pop();
	const isTextNode =
		lastTextNode &&
		lastTextNode?.type === 'text' &&
		(!lastTextNode.marks || lastTextNode?.marks?.length === 0);

	if (isTextNode) {
		const updatedLastTextNode = removeTextFromNode(lastTextNode, matchedText);
		content.push(updatedLastTextNode);
	} else if (lastTextNode) {
		content.push(lastTextNode);
	}

	return content;
}

export function convertMentionMarksToNodes(
	node: ProsemirrorNode,
	keys: string[],
	matchedText?: string,
): RemirrorJSON {
	const newContent: RemirrorJSON[] = [];
	let accumulatedText = '';
	node.descendants(child => {
		if (child.isText) {
			const processedNode = processTextNode(child, keys);
			newContent.push(processedNode);
			accumulatedText += processedNode.text;
		}
	});

	return {
		content: removeTextFromContent(newContent, matchedText),
		text: accumulatedText,
		type: node.type.name,
	};
}
