import { Node } from 'prosemirror-model';

import { Fields } from '../../types';
import { remirrorToSearch } from '../remirror-to-search';
import { searchToRemirror } from '../search-to-remirror';

import { setupEditor } from './editor-mock';

const FIELDS: Fields = {
	date: {
		type: 'range',
		name: 'date',
		render: () => null,
	},
	tag: {
		type: 'keyword',
		name: 'tag',
		render: () => null,
	},
};

const { schema } = setupEditor();

async function toRemirorAndBack(searchQuery: string) {
	const remirrorJSON = await searchToRemirror({
		searchQuery,
		fields: FIELDS,
	});
	console.log('remirrorJSON:', JSON.stringify(remirrorJSON.content));
	const prosemirrorNode = Node.fromJSON(schema, remirrorJSON);

	const search = remirrorToSearch({
		doc: prosemirrorNode,
		fields: FIELDS,
	});
	return search;
}

describe('search-remirror-integration', () => {
	it('converts text', async () => {
		const search = 'text';
		const expected = await toRemirorAndBack(search);
		expect(expected).toBe(search);
	});

	it('converts keyword field', async () => {
		const search = 'BEFORE tag:___label#label1 AFTER';
		const expected = await toRemirorAndBack(search);

		expect(expected).toBe(search);
	});

	it('converts range field', async () => {
		const search = 'BEFORE date:1694093526611-1701959526612 AFTER';
		const expected = await toRemirorAndBack(search);

		expect(expected).toBe(search);
	});

	it('converts negation', async () => {
		const search = '-tag:___label#label1';
		const expected = await toRemirorAndBack(search);

		expect(expected).toBe(search);
	});
});
