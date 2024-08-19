import { IconButton } from '@mui/material';
import { useRemirrorContext } from '@remirror/react';
import { Node } from 'prosemirror-model';
import { useCallback } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { isDocNodeEmpty } from 'remirror';
import { makeStyles } from 'tss-react/mui';

import SearchEditorAdornButtons from './SearchEditorAdornButtons';
import { SearchEditorComponent } from './SearchEditorComponent';

const useStyles = makeStyles()(theme => {
	return {
		root: {
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
		startIcon: {
			color: `${theme.palette.text.primary} !important`,
		},
		invisible: {
			visibility: 'hidden',
		},
		visible: {
			visibility: 'visible',
		},
	};
});

export interface SearchEditorInputProps {
	disabledSearch?: boolean;
	isActive?: boolean;
	closeMenu: (doc?: Node | undefined) => void;
}
export default function SearchEditorInput({
	closeMenu,
	isActive,
}: SearchEditorInputProps) {
	const { classes } = useStyles();
	const { clearContent, getState, commands } = useRemirrorContext({
		autoUpdate: true,
	});

	const isEmpty = isDocNodeEmpty(getState().doc);

	const handleClearContent = useCallback(() => {
		if (isEmpty) {
			return;
		}
		clearContent({ triggerChange: true });
	}, [isEmpty, clearContent]);

	const handleCloseMenu = useCallback(() => {
		closeMenu(getState().doc);
		commands.blur();
	}, [closeMenu, getState, commands]);

	return (
		<div className={classes.root}>
			<IconButton size="small" disabled className={classes.startIcon}>
				<PiMagnifyingGlass />
			</IconButton>
			<SearchEditorComponent className={classes.editorWrapper} />
			<SearchEditorAdornButtons
				focus={commands.focus}
				isActive={isActive}
				isEmpty={isEmpty}
				clear={handleClearContent}
				close={handleCloseMenu}
			/>
		</div>
	);
}
