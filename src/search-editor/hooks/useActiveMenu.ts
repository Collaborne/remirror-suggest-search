import { useCallback, useState } from 'react';
import { ProsemirrorNode } from 'remirror';

interface UseActiveMenuProps {
	disabledSearch?: boolean;
	onClose?: (doc: ProsemirrorNode) => void;
}
export default function useActiveMenu({
	disabledSearch,
	onClose,
}: UseActiveMenuProps) {
	const [isActive, setIsActive] = useState(false);

	const showMenu = useCallback(() => {
		setIsActive(!disabledSearch);
	}, [disabledSearch]);

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
