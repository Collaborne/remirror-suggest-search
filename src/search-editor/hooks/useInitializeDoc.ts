import {
	PlaceholderExtension,
	ReactExtensions,
	ReactFrameworkOutput,
} from '@remirror/react';
import { useEffect } from 'react';
import { EMPTY_PARAGRAPH_NODE, RemirrorJSON } from 'remirror';
import { ParagraphExtension } from 'remirror/extensions';

import { CustomKeymapExtension } from '../../extensions/custom-keymap-extension';
import { MentionExtension } from '../../extensions/mention-extension';

export function useInitializeDoc(props: {
	getContext: () =>
		| ReactFrameworkOutput<
				ReactExtensions<
					| ParagraphExtension
					| CustomKeymapExtension
					| PlaceholderExtension
					| MentionExtension
				>
		  >
		| undefined;
	initialContent?: RemirrorJSON;
}) {
	const { getContext, initialContent } = props;

	useEffect(() => {
		const context = getContext();
		if (!context) {
			return;
		}

		const modifiedContent = initialContent || EMPTY_PARAGRAPH_NODE;

		context.setContent(modifiedContent, { triggerChange: true });
	}, [initialContent, getContext]);
}
