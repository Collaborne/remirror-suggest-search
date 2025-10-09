import {
	EMPTY_NODE,
	findChildrenByMark,
	ProsemirrorNode,
} from '@remirror/core';
import { useRemirrorContext } from '@remirror/react';
import React, { useImperativeHandle } from 'react';
import { NamedMentionExtensionAttributes } from 'remirror/extensions';

import { MentionExtension } from '../extensions/mention-extension';

export interface SearchImperativeRef {
	/**
	 * Clears the editor's content.
	 */
	clearContent: () => void;

	/**
	 * Adds a mention in the editor
	 *
	 * @param attrs - the attributes that should be passed through. Required
	 * values are `id`, `label` and `name`.
	 */
	createMention(attrs: NamedMentionExtensionAttributes): void;

	/**
	 * Returns true if mention exists
	 */
	hasMention(mentionId: string): boolean;

	/**
	 * Removes the mention from the editor
	 *.
	 */
	removeMention(attrs: NamedMentionExtensionAttributes): void;
}

export interface SearchEditorImperativeProps {
	onSubmit?: (doc: ProsemirrorNode) => void;
}

function InnerSearchImperativeHandle(
	{ onSubmit }: SearchEditorImperativeProps,
	ref: React.Ref<SearchImperativeRef>,
) {
	const { view, clearContent, commands } = useRemirrorContext<MentionExtension>(
		{
			autoUpdate: true,
		},
	);

	// Expose content handling to outside
	useImperativeHandle(ref, () => ({
		clearContent: () => {
			clearContent({ triggerChange: true });
			onSubmit?.(view.state.doc);
		},

		createMention: (attrs: NamedMentionExtensionAttributes) => {
			const doc = view.state.doc;
			const from = doc.content.size - 1;
			const to = doc.content.size;
			const range = { cursor: from, from, to };
			commands.createMention({ ...attrs, range, prefix: ' ' });
			onSubmit?.(view.state.doc);
		},

		removeMention: (attrs: NamedMentionExtensionAttributes) => {
			const mentionNodes = findChildrenByMark({
				type: view.state.schema.marks.mention,
				node: view.state.doc,
			});

			if (!mentionNodes || mentionNodes.length === 0) {
				return;
			}

			for (const nodeWithPos of mentionNodes) {
				if (nodeWithPos.node.marks[0].attrs?.id !== attrs.id) {
					continue;
				}

				const mentionRange = {
					from: nodeWithPos.pos,
					to: nodeWithPos.pos + nodeWithPos.node.textContent.length,
				};

				if (!attrs?.name?.length || attrs.name.length === 0) {
					continue;
				}
				const prefixLength = `${attrs.name}:`.length;

				const tr = view.state.tr.replaceRangeWith(
					mentionRange.from - prefixLength,
					mentionRange.to,
					view.state.schema.nodeFromJSON(EMPTY_NODE),
				);

				if (tr.doc.textContent.trim().length <= 1) {
					clearContent({ triggerChange: true });
					return;
				} else {
					view.dispatch(tr);
				}
			}

			onSubmit?.(view.state.doc);
		},

		hasMention: (id: string) => {
			const hasMention = findChildrenByMark({
				node: view.state.doc,
				type: view.state.schema.marks.mention,
				descend: true,
			}).find(({ node }) => node.marks[0].attrs?.id === id);

			return !!hasMention;
		},
	}));

	return <></>;
}

/**
 * Expose a handle to call some editor methods imperatively
 */
export const SearchImperativeHandle = React.forwardRef(
	InnerSearchImperativeHandle,
);
