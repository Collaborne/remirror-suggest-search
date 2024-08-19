import { Button, ButtonGroup } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { useRef } from 'react';
import { PiCalendarBlank, PiTag } from 'react-icons/pi';
import { NamedMentionAtomNodeAttributes } from 'remirror/extensions';

import { Fields, SearchImperativeRef } from '../../src';
import { MentionSuggester } from '../../src/search-editor/MentionSuggester';
import {
	SearchEditor,
	SearchEditorProps,
} from '../../src/search-editor/SearchEditor';
import { withIntl } from '../decorators/with-intl';
import { withTheme } from '../decorators/with-theme';

import { Story } from './utils/doc';
import { TAGS, USERS, useEditorMention } from './utils/hooks/useEditorMention';
import { promiseAction } from './utils/promiseAction';

export default {
	title: 'Editors / Search Editor',
	component: SearchEditor,
	decorators: [withTheme, withIntl],
};

const SEARCH_QUERY = `list:item1,item2,item3 creator:${USERS[0].id} tag:${TAGS[0].id}`;

type SearchEditorStoryArgs = Pick<
	SearchEditorProps,
	'initialSearchQuery' | 'disabledSearch' | 'menuFooter' | 'fixedFooter'
>;

const Template: Story<SearchEditorStoryArgs> = (
	props: SearchEditorStoryArgs,
) => {
	const {
		renderUser,
		renderTag,
		renderDate,
		dateOptions,
		tagOptions,
		userOptions,
	} = useEditorMention();

	const editorRef = useRef<SearchImperativeRef>(null);

	const defaultGetExtraAttrs =
		(options: NamedMentionAtomNodeAttributes[]) => async (id: string) => {
			return options.find(option => option.id === id);
		};

	const fields: Fields = {
		tag: {
			getExtraAttrs: defaultGetExtraAttrs(tagOptions),
			type: 'keyword',
			name: 'tag',
			render: renderTag,
			fieldIcon: <PiTag />,
		},
		date: {
			getExtraAttrs: defaultGetExtraAttrs(dateOptions),
			type: 'range',
			name: 'date',
			render: renderDate,
			fieldIcon: <PiCalendarBlank />,
		},
		creator: {
			getExtraAttrs: defaultGetExtraAttrs(userOptions),
			type: 'keyword',
			name: 'creator',
			render: renderUser,
			fieldIcon: <PiCalendarBlank />,
		},
	};

	return (
		<div>
			<SearchEditor
				placeholder="Search by tags or users"
				fields={fields}
				innerRef={editorRef}
				onSubmit={action('onSubmit')}
				getSuggestions={promiseAction('getSuggestions')}
				{...props}
			/>
			<ButtonGroup>
				<Button
					variant="contained"
					onClick={() => editorRef.current?.clearContent()}
				>
					Clear content
				</Button>{' '}
			</ButtonGroup>
		</div>
	);
};

export const Basic: Story<SearchEditorStoryArgs> = Template.bind({});
Basic.args = {};

export const Filled: Story<SearchEditorStoryArgs> = Template.bind({});
Filled.args = {
	initialSearchQuery: SEARCH_QUERY,
};

export const Disabled: Story<SearchEditorStoryArgs> = Template.bind({});
Disabled.args = {
	initialSearchQuery: SEARCH_QUERY,
	disabledSearch: true,
};

export const FixedFooter: Story<SearchEditorStoryArgs> = Template.bind({});
FixedFooter.args = {
	fixedFooter: <div style={{ textAlign: 'center' }}>Fixed Footer</div>,
};

export const MenuFooter: Story<SearchEditorStoryArgs> = Template.bind({});
MenuFooter.args = {
	menuFooter: <div style={{ textAlign: 'center' }}>Menu Footer</div>,
};

export const Loading = () => {
	return (
		<MentionSuggester
			isLoadingSuggestions
			options={[]}
			fields={{}}
			renderOption={() => null}
			renderSelectOption={() => null}
			getItemProps={() => ({} as any)}
			indexIsHovered={() => false}
			indexIsSelected={() => false}
			getMenuProps={() => ({} as any)}
		/>
	);
};
