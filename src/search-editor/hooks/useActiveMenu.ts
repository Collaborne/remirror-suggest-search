import { useCallback, useState } from 'react';
import { ProsemirrorNode } from 'remirror';

interface UseActiveMenuProps {
	disabledSearch?: boolean;
	onClose?: (doc: ProsemirrorNode) => void;
	onOpen?: () => void;
}
export function useActiveMenu({
	disabledSearch,
	onClose,
	onOpen,
}: UseActiveMenuProps) {
	const [isActive, setIsActive] = useState(false);

	const showMenu = useCallback(() => {
		if (disabledSearch) {
			return;
		}

		setIsActive(true);
		onOpen?.();
	}, [disabledSearch, onOpen]);

	const closeMenu = useCallback(
		(doc?: ProsemirrorNode, preventOnClose?: boolean) => {
			if (!preventOnClose && doc) {
				onClose?.(doc);
			}
			setIsActive(false);
		},
		[onClose],
	);

	return { isActive, showMenu, closeMenu };
}
