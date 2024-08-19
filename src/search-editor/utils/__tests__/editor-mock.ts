import { renderEditor } from 'jest-remirror';

import { MentionExtension } from '../../../extensions/mention-extension';

export function setupEditor() {
	return renderEditor([
		new MentionExtension({
			matchers: [],
		}),
	]);
}
