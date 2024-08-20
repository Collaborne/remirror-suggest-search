import { Fields } from '../../types';
import { remirrorToSearch } from '../remirror-to-search';

import { setupEditor } from './editor-mock';

const FIELDS: Fields = {
	label: {
		type: 'keyword',
		name: 'label',
		render: () => null,
	},
};

const {
	add,
	nodes: { doc, p },
	schema,
} = setupEditor();

describe('remirror-to-search', () => {
	it('converts Remirror doc to search query', () => {
		// Create the label node with the required tags property
		const label = schema.text('myLabel', [
			schema.marks.mention.create({
				id: 'label1',
				label: 'myLabel',
				name: 'label',
			}),
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		]) as any; // Add type assertion here
		label.tags = ['label']; // Add the required 'tags' property

		// Add the label node to the document
		const editor = add(doc(p('before label:', label, ' after')));

		// Convert the document to a search query
		const actual = remirrorToSearch({
			doc: editor.state.doc,
			fields: FIELDS,
		});

		// Assert the expected output
		expect(actual).toBe('before label:label1 after');
	});
});
