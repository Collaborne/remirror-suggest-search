import { Fields } from '../../types';
import { searchToRemirror } from '../search-to-remirror';

const FIELDS: Fields = {
	label: {
		getExtraAttrs: async (id: string) => {
			if (!id) {
				return;
			}
			return { id, label: 'label1', name: 'label' };
		},
		type: 'keyword',
		name: 'label',
		render: () => null,
	},
	highlight: {
		getExtraAttrs: async (id: string) => {
			if (!id) {
				return;
			}
			return { id, label: 'highlight', name: 'highlight' };
		},
		type: 'keyword',
		name: 'highlight',
		render: () => null,
	},
};

describe('search-to-remirror', () => {
	it('converts search query to Remirror doc', async () => {
		const actual = await searchToRemirror({
			searchQuery: 'before label:___label#label1 after',
			fields: FIELDS,
		});

		expect(actual).toEqual({
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{ type: 'text', text: 'before label:' },
						{
							type: 'text',
							text: 'label1',
							marks: [
								{
									attrs: {
										id: '___label#label1',
										name: 'label',
										label: 'label1',
									},
									type: 'mention',
								},
							],
						},
						{ type: 'text', text: ' after ' },
					],
				},
			],
		});
	});

	it('handles text-only search query', async () => {
		const actual = await searchToRemirror({
			searchQuery: 'text',
			fields: FIELDS,
		});

		expect(actual).toEqual({
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [{ type: 'text', text: 'text' }],
				},
			],
		});
	});

	it('handles list atoms', async () => {
		const actual = await searchToRemirror({
			searchQuery: 'highlight:id1,id2',
			fields: FIELDS,
		});

		expect(actual).toEqual({
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							text: 'highlight:',
							type: 'text',
						},
						{
							marks: [
								{
									attrs: {
										id: 'id1,id2',
										label: 'highlight',
										name: 'highlight',
									},
									type: 'mention',
								},
							],
							text: 'highlight',
							type: 'text',
						},
						{
							text: ' ',
							type: 'text',
						},
					],
				},
			],
		});
	});

	it('handles negation', async () => {
		const actual = await searchToRemirror({
			searchQuery: '-label:___label#label1',
			fields: FIELDS,
		});

		expect(actual).toEqual({
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [
						{
							text: '-label:',
							type: 'text',
						},
						{
							marks: [
								{
									attrs: {
										id: '___label#label1',
										label: 'label1',
										name: 'label',
									},
									type: 'mention',
								},
							],
							text: 'label1',
							type: 'text',
						},
						{
							text: ' ',
							type: 'text',
						},
					],
				},
			],
		});
	});

	it('returns empty doc if there is no search query', async () => {
		const actual = await searchToRemirror({
			searchQuery: undefined,
			fields: FIELDS,
		});

		expect(actual).toEqual({
			type: 'doc',
			content: [
				{
					type: 'paragraph',
					content: [],
				},
			],
		});
	});
});
