import { Divider, IconButton, ListItemIcon, Typography } from '@mui/material';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import { UseMenuNavigationReturn } from '@remirror/react';
import { ReactElement, useMemo } from 'react';
import { PiMagnifyingGlass, PiOption } from 'react-icons/pi';
import { NamedMentionAtomNodeAttributes } from 'remirror/extensions';
import { makeStyles } from 'tss-react/mui';

import { isSelectOption } from './hooks/useRenderSelectOption';
import { SuggesterSkeleton } from './SuggesterSkeleton';

const useStyles = makeStyles()(theme => ({
	highlighted: {
		backgroundColor: theme.palette.action.selected,
	},
	hovered: {
		backgroundColor: theme.palette.action.hover,
	},
	menuItem: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: theme.spacing(0.625, 0.625),
	},
	menuIconEnd: {
		margin: theme.spacing(0, 0, 0, 1),
	},
	optionEndIcon: {
		color: theme.palette.text.secondary,
	},
	startIconButton: {
		color: `${theme.palette.text.primary} !important`,
		borderRadius: theme.shape.borderRadius,
		border: `${theme.spacing(0.125)} solid ${theme.palette.divider}`,
	},
	optionWrapper: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'flex-start',
		gap: 0,
		'& > p': {
			height: theme.spacing(2.5),
			margin: 0,
		},
		overflowX: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	},
	suggester: {
		position: 'relative',
		maxHeight: theme.spacing(40),
		borderTop: `${theme.spacing(0.125)} solid ${theme.palette.divider}`,
		overflow: 'auto',
		padding: theme.spacing(0.5, 1),
	},
}));

export interface MentionSuggesterProps
	extends Pick<
		UseMenuNavigationReturn<NamedMentionAtomNodeAttributes>,
		'getItemProps' | 'indexIsHovered' | 'indexIsSelected' | 'getMenuProps'
	> {
	options: NamedMentionAtomNodeAttributes[];
	renderOption: (option: NamedMentionAtomNodeAttributes) => ReactElement | null;
	renderSelectOption: (
		attrs: NamedMentionAtomNodeAttributes,
	) => ReactElement | null;
	isLoadingSuggestions?: boolean;
	optionLabel: string;
	selectLabel: string;
}

export function MentionSuggester({
	getMenuProps,
	getItemProps,
	indexIsHovered,
	indexIsSelected,
	options,
	renderOption,
	renderSelectOption,
	isLoadingSuggestions,
	optionLabel,
	selectLabel,
}: MentionSuggesterProps) {
	const { classes, cx } = useStyles();

	// Divider is shown at the index of the first static option
	const dividerIndex = useMemo(
		() =>
			options ? options.findIndex(attrs => isSelectOption(attrs.name)) : -1,
		[options],
	);

	const loader = useMemo(() => {
		return (
			<SuggesterSkeleton
				classes={{
					menuItem: classes.menuItem,
				}}
			/>
		);
	}, [classes.menuItem]);

	return (
		<List className={classes.suggester} {...getMenuProps()}>
			{options.map((option, index) => {
				const isHighlighted = indexIsSelected(index);
				const isHovered = indexIsHovered(index);
				const showDivider = dividerIndex === index;
				const isSelect = isSelectOption(option.name);

				const optionComponent = !isSelect
					? renderOption(option)
					: renderSelectOption(option);

				return (
					<div key={`${option.id}_${index}`}>
						{showDivider && <Divider />}
						<MenuItem
							className={cx(classes.menuItem, {
								[classes.highlighted]: isHighlighted,
								[classes.hovered]: isHovered,
							})}
							{...getItemProps<HTMLLIElement>({
								item: option,
								index,
							})}
						>
							<ListItemIcon>
								<IconButton
									size="small"
									disabled
									className={classes.startIconButton}
								>
									{!isSelect ? <PiMagnifyingGlass /> : <PiOption />}
								</IconButton>
							</ListItemIcon>
							<div className={classes.optionWrapper}>{optionComponent}</div>
							<ListItemIcon className={classes.menuIconEnd}>
								<Typography variant="caption" className={classes.optionEndIcon}>
									{!isSelect ? optionLabel : selectLabel}
								</Typography>
							</ListItemIcon>
						</MenuItem>
					</div>
				);
			})}
			{isLoadingSuggestions ? loader : null}
		</List>
	);
}
