import { findChildren, ProsemirrorNode } from 'remirror';

export function getExistentMentionIds(doc: ProsemirrorNode): string[] {
	const mentionNodes = findChildren({
		node: doc,
		predicate: ({ node }) => node.type.name === 'mentionAtom',
		descend: true,
	});

	const mentionNodeIds = mentionNodes.map(({ node }) => {
		return node.attrs.id as string;
	});
	return mentionNodeIds;
}
