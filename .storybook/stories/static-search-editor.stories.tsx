import { JSX } from 'react/jsx-runtime';

import { Fields, StaticSearchEditor, StaticSearchEditorProps } from '../../src';
import { withIntl } from '../decorators/with-intl';
import { withTheme } from '../decorators/with-theme';

import { Story } from './utils/doc';
import {
	SOURCES,
	TAGS,
	USERS,
	useEditorMention,
} from './utils/hooks/useEditorMention';

export default {
	title: 'Editors / Static Search Editor',
	component: StaticSearchEditor,
	decorators: [withTheme, withIntl],
};

const SEARCH_QUERY = `list:item1,item2,item3 user:${USERS[0].id} tag:${TAGS[0].id} source:${SOURCES[0].id} ger`;

const Template: Story<Omit<StaticSearchEditorProps, 'fields'>> = (
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
			name: 'hash',
			render: renderTag,
		},
		date: {
			type: 'range',
			name: 'range',
			render: renderDate,
		},
		creator: {
			type: 'keyword',
			name: 'creator',
			render: renderUser,
		},
		source: {
			type: 'keyword',
			name: 'slash',
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
