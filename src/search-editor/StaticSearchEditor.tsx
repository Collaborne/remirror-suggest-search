import { Tooltip, Chip } from '@mui/material';
import { Doc, RemirrorRenderer } from '@remirror/react-renderer';
import type { MarkMap } from '@remirror/react-renderer';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { PiTextAlignLeft } from 'react-icons/pi';
import intl from 'react-intl-universal';
import { EMPTY_NODE, RemirrorJSON } from 'remirror';
import { NamedMentionAtomNodeAttributes } from 'remirror/dist-types/extensions';

import useRenderMention from './hooks/useRenderMention';
import { Fields, MentionHandler, TextHandler } from './types';
import {
	searchToStaticRemirror,
	TEXT_ATOM_TYPE,
} from './utils/search-to-remirror';

const Text: TextHandler = ({ node }) => {
	if (!node.text) {
		return null;
	}

	return (
		<Tooltip title={node.text} arrow placement="top">
			<Chip
				component="span"
				variant="outlined"
				label={intl.get('static-search-editor.prompt_filter')}
				size="small"
				icon={<PiTextAlignLeft />}
			/>
		</Tooltip>
	);
};
export interface StaticSearchEditorProps {
	searchQuery?: string;
	fields: Fields;
	className?: string;
}
export function StaticSearchEditor({
	searchQuery,
	fields,
	...props
}: StaticSearchEditorProps): JSX.Element {
	const [remirrorJson, setRemirrorJson] = useState<RemirrorJSON>(EMPTY_NODE);
	useEffect(() => {
		const fetchRemirrorContent = async () => {
			const remirrorContent = await searchToStaticRemirror(
				{
					searchQuery,
					fields,
				},
				{ showTextAsNode: true },
			);
			setRemirrorJson(remirrorContent);
		};
		void fetchRemirrorContent();
	}, [searchQuery, fields]);
	const renderMention = useRenderMention({ fields });

	const mentionAtomHandler: MentionHandler = useCallback(
		({ node }) => {
			if (!node.attrs) {
				return null;
			}

			return renderMention(
				node.attrs.name as string,
				node.attrs as NamedMentionAtomNodeAttributes,
			);
		},
		[renderMention],
	);

	const typeMap: MarkMap = useMemo(() => {
		const result: MarkMap = {
			doc: Doc,
			[TEXT_ATOM_TYPE]: Text,
			mentionAtom: mentionAtomHandler,
			paragraph: 'p',
		};
		return result;
	}, [mentionAtomHandler]);

	return (
		<div className={props.className}>
			<RemirrorRenderer
				json={remirrorJson}
				typeMap={typeMap}
				skipUnknownMarks
				skipUnknownTypes
			/>
		</div>
	);
}
