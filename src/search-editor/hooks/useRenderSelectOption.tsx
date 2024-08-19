import { Chip } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { CSSProperties } from 'remirror';
import { NamedMentionExtensionAttributes } from 'remirror/extensions';
import { makeStyles } from 'tss-react/mui';

import { Field, Fields } from '../types';
export const SELECT_FIELD = { name: 'static' };

function convertKeyToSelectOption(field: Field) {
	return {
		id: field.name,
		label: `${field.name}:`,
		name: SELECT_FIELD.name,
	} as NamedMentionExtensionAttributes;
}

const useStyles = makeStyles()(theme => ({
	chip: {
		...(theme.typography.caption as CSSProperties),
	},
}));

export function isSelectOption(name: string) {
	return name === SELECT_FIELD.name;
}
export function useRenderSelectOptions(props: {
	fields: Fields;
	hideSelectOptions: boolean;
}) {
	const { classes } = useStyles();

	// Field with no icon are considered disabled and will not be suggested
	const allSelectOptions = useMemo(() => {
		if (props.hideSelectOptions) {
			return [];
		}
		return Object.values(props.fields)
			.filter(field => !!field.fieldIcon)
			.map(convertKeyToSelectOption);
	}, [props.fields, props.hideSelectOptions]);

	const renderSelectOption = useCallback(
		(attrs: NamedMentionExtensionAttributes): JSX.Element | null => {
			if (!attrs) {
				return null;
			}
			const icon = props.fields[attrs.id]?.fieldIcon;
			return (
				<Chip
					component="span"
					variant="outlined"
					label={attrs.label}
					size="small"
					icon={icon}
					classes={{
						root: classes.chip,
					}}
				/>
			);
		},
		[classes.chip, props.fields],
	);

	return {
		selectOptions: allSelectOptions,
		renderSelectOption,
	};
}
