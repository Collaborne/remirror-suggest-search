import { css } from '@emotion/css';
import { useRemirrorContext } from '@remirror/react';
import {
	componentsStyledCss,
	coreStyledCss,
	addStylesToElement,
} from '@remirror/styles/dom';
import { useRef, useEffect } from 'react';

const materialRemirrorStyles = css`
	${componentsStyledCss}
	${coreStyledCss}
`;

export interface EditorComponentProps {
	className?: string;
}

/**
 * A custom version of the EditorComponent exposed by Remirror
 * but uses a ref so to style the element without CSS file imports
 * Fix for carrot-vscode-extension - CSS file imports don't work
 */
export function SearchEditorComponent({
	className,
}: EditorComponentProps): JSX.Element {
	const editorRef = useRef<HTMLElement | null>(null);
	const { getRootProps } = useRemirrorContext();

	useEffect(() => {
		if (editorRef.current) {
			addStylesToElement(editorRef.current, materialRemirrorStyles);
		}
	}, []);

	return <div {...getRootProps({ ref: editorRef })} className={className} />;
}
