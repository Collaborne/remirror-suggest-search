import { Divider, MenuItem, Skeleton } from '@mui/material';
import { Fragment } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
	row: {
		display: 'flex',
		justifyContent: 'start',
		gap: theme.spacing(0.75),
	},
	icon: {
		borderRadius: theme.shape.borderRadiusSmall,
	},
	text: {
		borderRadius: theme.shape.borderRadiusTiny,
	},
}));

interface SuggesterSkeletonProps {
	classes: {
		menuItem: string;
	};
}

function random(min: number, max: number) {
	const diff = Math.random() * (max - min);
	return Math.round(min + diff);
}

const DIVIDER_AT = 3;
export function SuggesterSkeleton(props: SuggesterSkeletonProps) {
	const { cx, classes } = useStyles();
	return (
		<>
			{Array.from({ length: 6 }).map((_, index) => (
				<Fragment key={index}>
					{index === DIVIDER_AT ? <Divider /> : null}
					<MenuItem
						key={index}
						className={cx(props.classes.menuItem, classes.row)}
					>
						<Skeleton
							variant="rounded"
							width={24}
							height={24}
							className={classes.icon}
						/>
						<Skeleton
							variant="rounded"
							width={random(64, 96)}
							height={20}
							className={classes.text}
						/>
					</MenuItem>
				</Fragment>
			))}
		</>
	);
}
