import { Literal, RemirrorJSON } from 'remirror';
import {
	parse,
	SearchParserKeyWordOffset,
	SearchParserOptions,
	SearchParserResult,
	SearchParserTextOffset,
} from 'search-query-parser';

import { Fields, FieldType } from '../types';

export const TEXT_ATOM_TYPE = 'textAtom';

function isSearchParserTextOffset(
	offset: SearchParserKeyWordOffset | SearchParserTextOffset,
): offset is SearchParserTextOffset {
	return (offset as SearchParserTextOffset).text !== undefined;
}

function getFieldIds(fields: Fields, type: FieldType) {
	return Object.entries(fields)
		.filter(([_, field]) => field.type === type)
		.map(([id]) => id);
}

type CreateTextNodeJSON = (text?: string) => RemirrorJSON;
type CreateMentionNodeJSON = (
	attrs?: Record<string, Literal>,
) => RemirrorJSON[];
function defaultCreateTextNodeJSON(text?: string): RemirrorJSON {
	return { type: 'text', text: `${text}` };
}

function createMentionAtomNodeJSON(
	attrs?: Record<string, Literal>,
): RemirrorJSON[] {
	if (!attrs) {
		return [];
	}
	return [
		{
			type: 'mentionAtom',
			attrs,
		},
	];
}

function createMentionMarkJSON(
	attrs?: Record<string, Literal>,
): RemirrorJSON[] {
	if (!attrs) {
		return [];
	}
	return [
		{
			type: 'text',
			text: `${attrs.name}:`,
		},
		{
			type: 'text',
			text: String(attrs.label),
			marks: [
				{
					type: 'mention',
					attrs,
				},
			],
		},
		{
			type: 'text',
			text: ' ',
		},
	];
}

function createExcludeNodeJSON(): RemirrorJSON {
	return { type: 'text', text: '-' };
}
function parseSearchQuery(
	searchQuery: string | undefined | null,
	fields: Fields,
) {
	const options: SearchParserOptions = {
		keywords: getFieldIds(fields, 'keyword'),
		ranges: getFieldIds(fields, 'range'),
		offsets: true,
		alwaysArray: true,
	};

	return parse(searchQuery ?? '', options);
}

// Function to merge adjacent text nodes while preserving spaces
function mergeAdjacentTextNodes(
	nodes: RemirrorJSON[],
	createTextNodeJSON: CreateTextNodeJSON,
): RemirrorJSON[] {
	const mergedNodes: RemirrorJSON[] = [];
	let accumulatedText = '';

	for (const node of nodes) {
		if (node.type === 'text' && (!node.marks || node.marks.length === 0)) {
			accumulatedText += node.text;
		} else {
			if (accumulatedText) {
				// Push accumulated text as a single text node
				mergedNodes.push(createTextNodeJSON(accumulatedText));
				accumulatedText = '';
			}
			mergedNodes.push(node);
		}
	}

	if (accumulatedText) {
		// Push any remaining accumulated text
		mergedNodes.push(createTextNodeJSON(accumulatedText));
	}

	return mergedNodes;
}

async function toRemirrorContent(
	parsedSearch: string | SearchParserResult,
	fields: Fields,
	createTextNodeJSON: CreateTextNodeJSON,
	createMentionNodeJSON: CreateMentionNodeJSON,
): Promise<RemirrorJSON[]> {
	if (typeof parsedSearch === 'string') {
		if (parsedSearch.length > 0) {
			return [createTextNodeJSON(parsedSearch)];
		} else {
			return [];
		}
	}

	const promises = (parsedSearch.offsets ?? []).flatMap(async offset => {
		if (isSearchParserTextOffset(offset)) {
			return [createTextNodeJSON(`${offset.text} `)];
		}

		const field = fields[offset.keyword];
		if (!field) {
			throw new Error(`Unsupported field ${offset.keyword}`);
		}

		if (!offset.value || offset.value.length === 0) {
			return [createTextNodeJSON(`${offset.keyword}:`)];
		}

		const attrs = await field.getExtraAttrs?.(offset.value);

		const nodes: RemirrorJSON[] = [];
		if (attrs) {
			const mentionNodes = createMentionNodeJSON({
				...attrs,
				id: offset.value,
				name: field.name,
			});

			nodes.push(...mentionNodes);
		} else {
			const textNodes = createTextNodeJSON(`${field.name}:${offset.value} `);
			nodes.push(textNodes);
		}

		const isExcluded =
			parsedSearch.exclude?.[offset.keyword]?.findIndex(
				(value: string) => value === offset.value,
			) >= 0;

		const excludeNode = createExcludeNodeJSON();
		return isExcluded ? [excludeNode, ...nodes] : nodes;
	});
	const content = await Promise.all(promises);
	const flatContent = content.flat();

	return mergeAdjacentTextNodes(flatContent, createTextNodeJSON);
}

function toRemirrorText(parsedSearch: string | SearchParserResult): string {
	if (typeof parsedSearch === 'string') {
		return parsedSearch;
	}

	let text = '';

	for (const offset of parsedSearch.offsets ?? []) {
		if (!isSearchParserTextOffset(offset)) {
			continue;
		}
		text += `${offset.text} `;
	}

	return text;
}

export interface SearchToRemirrorParams {
	searchQuery: string | undefined | null;
	fields: Fields;
	createTextNodeJSON?: CreateTextNodeJSON;
}
export async function searchToRemirror(
	params: SearchToRemirrorParams,
): Promise<RemirrorJSON> {
	const parsedSearch = parseSearchQuery(params.searchQuery, params.fields);
	const content = await toRemirrorContent(
		parsedSearch,
		params.fields,
		defaultCreateTextNodeJSON,
		createMentionMarkJSON,
	);

	const doc: RemirrorJSON = {
		type: 'doc',
		content: [
			{
				type: 'paragraph',
				content,
			},
		],
	};

	return doc;
}

export async function searchToStaticRemirror(
	params: SearchToRemirrorParams,
	options?: { showTextAsNode?: boolean },
): Promise<RemirrorJSON> {
	const parsedSearch = parseSearchQuery(params.searchQuery, params.fields);

	// hide text
	const createTextNodeJSON = () => ({
		type: 'text',
		text: '',
	});
	const content = await toRemirrorContent(
		parsedSearch,
		params.fields,
		options?.showTextAsNode ? createTextNodeJSON : defaultCreateTextNodeJSON,
		createMentionAtomNodeJSON,
	);
	let textAtomNodes: RemirrorJSON[] = [];
	if (options?.showTextAsNode) {
		const text = toRemirrorText(parsedSearch);
		// show all text as a single node
		const textAtomNode: RemirrorJSON = {
			type: TEXT_ATOM_TYPE,
			text,
		};
		textAtomNodes = [textAtomNode];
	}
	const doc: RemirrorJSON = {
		type: 'doc',
		content: [
			{
				type: 'paragraph',
				content: [...content, ...textAtomNodes],
			},
		],
	};

	return doc;
}
