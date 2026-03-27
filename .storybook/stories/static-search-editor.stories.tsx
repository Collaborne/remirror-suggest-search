import { StoryFn } from '@storybook/react/*';
import { useMemo } from 'react';
import { JSX } from 'react/jsx-runtime';

import { Fields, StaticSearchEditor, StaticSearchEditorProps } from '../../src';

import {
	SOURCES,
	TAGS,
	USERS,
	useEditorMention,
} from './hooks/useEditorMention';
import { sleep } from './utils/sleep';

export default {
	title: 'Editors / Static Search Editor',
	component: StaticSearchEditor,
};

const SEARCH_QUERY = `list:item1,item2,item3 ${TAGS.slice(0, 3).map(tag => `tag:${tag.id}`).join(' ')} creator:${USERS[0].id} source:${SOURCES[0].id} ger`;
const LONG_SEARCH_QUERY =
	'find highlights about onboarding friction across every customer interview and support ticket';

const Template: StoryFn<Omit<StaticSearchEditorProps, 'fields'>> = (
	props: JSX.IntrinsicAttributes & Omit<StaticSearchEditorProps, 'fields'>,
) => {
	const { renderSource, renderUser, renderTag, renderDate, renderList } =
		useEditorMention();

	const fields: Fields = useMemo(
		() => ({
			list: {
				type: 'keyword',
				name: 'list',
				render: renderList,
			},
			tag: {
				type: 'keyword',
				name: 'tag',
				render: renderTag,
				getExtraAttrs: async (id: string) => {
					// Simulate loading
					await sleep(200);
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
		}),
		[renderSource, renderUser, renderTag, renderDate, renderList],
	);

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

export const LongSearchTerm = Template.bind({});
LongSearchTerm.args = {
	searchQuery: LONG_SEARCH_QUERY,
};
