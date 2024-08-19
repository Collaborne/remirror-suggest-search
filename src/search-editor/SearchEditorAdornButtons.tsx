import { IconButton, Button, Divider } from '@mui/material';
import { useCallback } from 'react';
import { PiX } from 'react-icons/pi';
import intl from 'react-intl-universal';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => {
	return {
		root: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			gap: theme.spacing(0.5),
			alignSelf: 'stretch',
		},
		clearIconButton: {
			padding: theme.spacing(0.375),
			color: `${theme.palette.text.secondary} !important`,
		},
	};
});

export interface SearchEditorAdornButtonsProps {
	isActive?: boolean;
	isEmpty?: boolean;
	clear: VoidFunction;
	focus: VoidFunction;
	close: VoidFunction;
}
export default function SearchEditorAdornButtons({
	close,
	isActive,
	isEmpty,
	clear,
	focus,
}: SearchEditorAdornButtonsProps) {
	const { classes } = useStyles();

	const clearAnd = useCallback(
		(handler: VoidFunction) => () => {
			clear();
			handler();
		},
		[clear],
	);

	return (
		<div className={classes.root}>
			{isActive && !isEmpty && (
				<>
					<Button onClickCapture={clearAnd(focus)} size="small" variant="text">
						{intl.get('search-editor.clear-button')}
					</Button>
					<Divider orientation="vertical" flexItem />
				</>
			)}
			{!isActive && !isEmpty && (
				<IconButton
					size="small"
					onClickCapture={clearAnd(close)}
					className={classes.clearIconButton}
				>
					<PiX />
				</IconButton>
			)}
			{isActive && (
				<IconButton
					size="small"
					onClickCapture={close}
					className={classes.clearIconButton}
				>
					<PiX />
				</IconButton>
			)}
		</div>
	);
}
