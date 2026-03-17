import { InputRulesExtension } from '@remirror/core';
import { renderEditor } from 'jest-remirror';

import { MentionExtension } from '../../../extensions/mention-extension';

export function setupEditor(): ReturnType<typeof renderEditor> {
	const mentionExtension = new MentionExtension({
		matchers: [],
	});

	return renderEditor([
		new InputRulesExtension({}),
		mentionExtension,
	] as unknown as Parameters<typeof renderEditor>[0]);
}
