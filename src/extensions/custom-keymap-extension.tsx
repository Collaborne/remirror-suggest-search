import { KeyBindings, PlainExtension } from 'remirror';

export class CustomKeymapExtension extends PlainExtension {
	get name() {
		return 'customKeymap' as const;
	}

	/**
	 * Injects the baseKeymap into the editor.
	 */
	public createKeymap(): KeyBindings {
		return {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			Enter() {
				return true;
			},
		};
	}
}
