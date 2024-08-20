import {
	AnyExtension,
	EMPTY_PARAGRAPH_NODE,
	ProsemirrorNode,
	RemirrorEventListenerProps,
	RemirrorJSON,
} from '@remirror/core';
import { Remirror, useRemirror } from '@remirror/react';
import { ReactElement, useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import { useSearchExtension } from '../hooks/useSearchExtensions';

import { useInitializeDoc } from './hooks/useInitializeDoc';
import {
	SearchImperativeRef,
	SearchImperativeHandle,
} from './SearchImperativeHandle';
import { Fields } from './types';
import { searchToRemirror } from './utils/search-to-remirror';

const useStyles = makeStyles()(theme => {
	return {
		emptyNode: {
			'&:first-of-type::before': {
				position: 'absolute',
				color: theme.palette.text.secondary,
				pointerEvents: 'none',
				height: 0,
				content: 'attr(data-placeholder)',
			},
		},
		mentionClass: {
			color: theme.palette.action.active,
		},
		editor: {
			maxHeight: theme.spacing(3),
			color: theme.palette.text.primary,
			outline: 'none',
			cursor: 'text',
			width: '100%',
			overflow: 'hidden !important' as 'hidden',

			'& p': {
				lineHeight: theme.spacing(3),
				margin: 0,
				caretColor: theme.palette.primary.main,
				cursor: 'pointer',
			},
		},
	};
});

export interface SearchEditorProviderProps {
	placeholder?: string;
	initialSearchQuery?: string | null;
	disabledSearch?: boolean;
	isActive?: boolean;
	fields: Fields;
	innerRef?: React.RefObject<SearchImperativeRef>;
	onSubmit?: (doc: ProsemirrorNode) => void;
	onFocus?: (params: RemirrorEventListenerProps<AnyExtension>) => boolean;
	onBlur?: (
		params: RemirrorEventListenerProps<AnyExtension>,
		event: Event,
	) => boolean;
	children: ReactElement<HTMLElement>;
}

export function SearchEditorProvider({
	innerRef,
	initialSearchQuery,
	fields,
	onBlur,
	onFocus,
	onSubmit,
	placeholder,
	children,
	disabledSearch,
}: SearchEditorProviderProps): JSX.Element {
	const { classes } = useStyles();
	const [initialContent, setInitialContent] =
		useState<RemirrorJSON>(EMPTY_PARAGRAPH_NODE);
	const extensions = useSearchExtension({
		fields,
		placeholder,
		emptyNodeClass: classes.emptyNode,
		mentionClass: classes.mentionClass,
	});

	useEffect(() => {
		const initializeContent = async () => {
			const initialContent = await searchToRemirror({
				searchQuery: initialSearchQuery,
				fields,
			});
			setInitialContent(initialContent);
		};
		void initializeContent();
	}, [fields, initialSearchQuery]);

	const { manager, state, onChange, getContext } = useRemirror({
		extensions,
		content: initialContent,
	});

	useInitializeDoc({
		initialContent,
		getContext,
	});

	return (
		<Remirror
			manager={manager}
			initialContent={state}
			classNames={[classes.editor]}
			onFocus={onFocus}
			onBlur={onBlur}
			onChange={onChange}
			editable={!disabledSearch}
		>
			<SearchImperativeHandle ref={innerRef} onSubmit={onSubmit} />
			{children}
		</Remirror>
	);
}
