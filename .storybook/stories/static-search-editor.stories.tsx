import { JSX } from 'react/jsx-runtime';

import { Fields, StaticSearchEditor, StaticSearchEditorProps } from '../../src';

import {
	SOURCES,
	TAGS,
	USERS,
	useEditorMention,
} from './hooks/useEditorMention';
import { StoryFn } from '@storybook/react/*';

export default {
	title: 'Editors / Static Search Editor',
	component: StaticSearchEditor,
};

const SEARCH_QUERY = `list:item1,item2,item3 user:${USERS[0].id} tag:${TAGS[0].id} source:${SOURCES[0].id} ger`;

const Template: StoryFn<Omit<StaticSearchEditorProps, 'fields'>> = (
	props: JSX.IntrinsicAttributes & Omit<StaticSearchEditorProps, 'fields'>,
) => {
	const { renderSource, renderUser, renderTag, renderDate } =
		useEditorMention();

	const fields: Fields = {
		list: {
			type: 'keyword',
			name: 'list',
			render: ({ id }) => <>{id}</>,
		},
		tag: {
			type: 'keyword',
			name: 'tag',
			render: renderTag,
			getExtraAttrs: async (id: string) => {
				const tag = TAGS.find(tag => tag.id === id);

				if (!tag) {
					return;
				}

				return {
					id: tag.id,
					label: tag.name,
					name: 'tag',
					color: tag.color,
				};
			},
		},
		date: {
			type: 'range',
			name: 'date',
			render: renderDate,
		},
		creator: {
			type: 'keyword',
			name: 'creator',
			render: renderUser,
		},
		source: {
			type: 'keyword',
			name: 'source',
			render: renderSource,
		},
	};

	return (
		<div>
			<StaticSearchEditor fields={fields} {...props} />
		</div>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	searchQuery: SEARCH_QUERY,
};
