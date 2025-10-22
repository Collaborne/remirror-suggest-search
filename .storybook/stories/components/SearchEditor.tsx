import { JSX, useCallback, useMemo, useRef } from 'react';
import {
	RemirrorEventListenerProps,
	AnyExtension,
	ProsemirrorNode,
} from 'remirror';
import { makeStyles } from 'tss-react/mui';

import { useActiveMenu } from '../../../src/search-editor/hooks/useActiveMenu';
import { SearchEditorComponent } from './SearchEditorComponent';
import {
	SearchEditorProvider,
	SearchEditorProviderProps,
} from './SearchEditorProvider';
import { SuggesterComponent } from '../../../src/search-editor/SuggesterComponent';
import { GetSuggestions } from '../../../src/search-editor/types';
import { remirrorToSearch } from '../../../src/search-editor/utils/remirror-to-search';

const useStyles = makeStyles()(theme => ({
	root: {
		position: 'relative',
		minHeight: theme.spacing(5),
		width: '100%',
		// The active editor should have higher index then cards menu (e.g hover on
		// highlight card)
		zIndex: 5,
	},
	container: {
		position: 'absolute',
		top: 0,
		width: '100%',
		borderRadius: theme.shape.borderRadius,
		border: `${theme.spacing(0.125)} solid ${theme.palette.divider}`,
		background: theme.palette.background.default,
	},
	activeContainer: {
		boxShadow: theme.palette.background.default,
	},
	editorInputRoot: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: theme.spacing(0.5),
		alignSelf: 'stretch',
		paddingRight: theme.spacing(0.625),
		maxHeight: theme.spacing(3),
	},
	editorWrapper: {
		display: 'flex',
		alignItems: 'flex-start',
		alignContent: 'center',
		gap: theme.spacing(0.75),
		flex: '1 0 0',
		flexWrap: 'wrap',
		width: '100%',
		overflow: 'hidden',
	},
	searchBox: {
		padding: theme.spacing(1),
	},
	footer: {
		padding: theme.spacing(2),
		width: '100%',
		borderTop: `${theme.spacing(0.125)} solid ${theme.palette.divider}`,
	},
}));

export interface SearchEditorProps
	extends Omit<
		SearchEditorProviderProps,
		'onSubmit' | 'onBlur' | 'onFocus' | 'children' | 'isActive'
	> {
	onSubmit?: (searchQuery: string) => void;
	classes?: {
		root?: string;
		container?: string;
		activeContainer?: string;
		searchBox?: string;
	};
	// Prevent triggering search when the editor is blurred
	// when clicking outside the editor (i.e in AI chat)
	preventOnBlurSearch?: boolean;
	menuFooter?: JSX.Element;
	fixedFooter?: JSX.Element;
	getSuggestions?: GetSuggestions;
}

export function SearchEditor({
	disabledSearch,
	onSubmit,
	fields,
	classes: classesProps,
	innerRef,
	initialSearchQuery,
	placeholder,
	menuFooter,
	fixedFooter,
	preventOnBlurSearch,
	getSuggestions,
}: SearchEditorProps) {
	const { classes, cx } = useStyles();

	// Only use this function to trigger search
	const handleSubmit = useCallback(
		(doc: ProsemirrorNode) => {
			const searchQuery = remirrorToSearch({
				doc,
				fields,
			});
			onSubmit?.(searchQuery);
		},
		[fields, onSubmit],
	);

	// trigger search on close menu
	const { isActive, closeMenu, showMenu } = useActiveMenu({
		onClose: handleSubmit,
		disabledSearch,
	});

	const handleEditorFocus = useCallback(() => {
		showMenu();
		return true;
	}, [showMenu]);

	const rootRef = useRef<HTMLDivElement>(null);

	// Clicking inside the menu (select option), blurs the editor but does not
	// close the menu.
	// clicking outside the entire search box blurs the editor, closes the menu
	// (implicitly trigger search)
	const handleEditorBlur = useCallback(
		(params: RemirrorEventListenerProps<AnyExtension>, event: Event) => {
			const { doc } = params.view.state;
			const relatedTarget = (event as FocusEvent).relatedTarget as Node | null;
			if (
				!doc ||
				rootRef.current === null ||
				rootRef.current.contains(relatedTarget)
			) {
				event.preventDefault();
				return false;
			}

			closeMenu(params.view.state.doc, preventOnBlurSearch);
			return true;
		},
		[closeMenu, preventOnBlurSearch, rootRef],
	);

	const containerClassName = useMemo(() => {
		return cx(classes.container, classesProps?.container, {
			[cx(classes.activeContainer, classesProps?.activeContainer)]: isActive,
		});
	}, [
		classes.activeContainer,
		classes.container,
		classesProps?.activeContainer,
		classesProps?.container,
		cx,
		isActive,
	]);

	const showMenuFooter = isActive && menuFooter;
	return (
		<SearchEditorProvider
			onFocus={handleEditorFocus}
			onBlur={handleEditorBlur}
			onSubmit={handleSubmit}
			fields={fields}
			innerRef={innerRef}
			disabledSearch={disabledSearch}
			initialSearchQuery={initialSearchQuery}
			placeholder={placeholder}
			isActive={isActive}
		>
			<div ref={rootRef} className={cx(classes.root, classesProps?.root)}>
				<div className={containerClassName}>
					<div className={cx(classes.searchBox, classesProps?.searchBox)}>
						<div className={classes.editorInputRoot}>
							<SearchEditorComponent className={classes.editorWrapper} />
						</div>
					</div>
					<SuggesterComponent
						fields={fields}
						isActive={isActive}
						closeMenu={closeMenu}
						getSuggestions={getSuggestions}
						optionLabel="search"
						selectLabel="select"
					/>
					{showMenuFooter && <div className={classes.footer}>{menuFooter}</div>}
					{fixedFooter && <div className={classes.footer}>{fixedFooter}</div>}
				</div>
			</div>
		</SearchEditorProvider>
	);
}
