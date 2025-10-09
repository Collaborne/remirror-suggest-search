import { MarkMap, Doc, TextHandler, RemirrorRenderer } from '@remirror/react';
import { Node } from 'prosemirror-model';
import { ReactElement, useCallback, useMemo } from 'react';
import { RemirrorJSON } from 'remirror';
import { NamedMentionAtomNodeAttributes } from 'remirror/extensions';
import { makeStyles } from 'tss-react/mui';

import { INPUT_OPTION, Fields, MentionHandler } from '../types';
import { convertMentionMarksToNodes } from '../utils/convert-mention-marks-to-mention-nodes';

import { useRenderMention } from './useRenderMention';

const useStyles = makeStyles()(theme => ({
	editor: {
		lineHeight: theme.spacing(2),
		overflowX: 'hidden',
		textOverflow: 'ellipsis',
		display: 'inline-block',
		color: theme.palette.text.primary,
		outline: 'none',
		fontSize: 14,
		paddingRight: theme.spacing(0.5),
		'& div': {
			margin: 0,
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		flexGrow: 0,
	},
}));

function OptionStaticEditor(props: {
	doc: RemirrorJSON;
	renderOptions: (
		name: string,
		attrs: NamedMentionAtomNodeAttributes,
	) => ReactElement | null;
}) {
	const { doc, renderOptions } = props;
	const { classes } = useStyles();

	const mentionAtomHandler: MentionHandler = useCallback(
		({ node }) => {
			if (!node.attrs) {
				return null;
			}

			return renderOptions(
				node.attrs.name as string,
				node.attrs as NamedMentionAtomNodeAttributes,
			);
		},
		[renderOptions],
	);

	const typeMap: MarkMap = useMemo(
		() => ({
			doc: Doc,
			paragraph: 'div',
			text: TextHandler,
			mentionAtom: mentionAtomHandler,
		}),
		[mentionAtomHandler],
	);

	return (
		<div className={classes.editor}>
			<RemirrorRenderer
				json={doc}
				typeMap={typeMap}
				skipUnknownMarks
				skipUnknownTypes
			/>
		</div>
	);
}
export function useRenderOption(props: { doc: Node; fields: Fields }) {
	const { doc, fields } = props;

	const filterNames = useMemo(() => {
		return Object.keys(fields);
	}, [fields]);
	const renderMention = useRenderMention({ fields });
	const renderOption = useCallback(
		(option: NamedMentionAtomNodeAttributes): ReactElement | null => {
			const isInputOption = option.name === INPUT_OPTION.name;
			const matchedText = option.matchedText as string | undefined;

			const jsonDoc = convertMentionMarksToNodes(
				doc,
				filterNames,
				!isInputOption ? matchedText : undefined,
			);
			return (
				<>
					<OptionStaticEditor renderOptions={renderMention} doc={jsonDoc} />
					{isInputOption ? null : renderMention(option.name, option)}
				</>
			);
		},
		[doc, filterNames, renderMention],
	);

	return renderOption;
}
