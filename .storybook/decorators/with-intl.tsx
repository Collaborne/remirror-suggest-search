import { StoryContext } from '@storybook/react';
import intl from 'react-intl-universal';

import EN from '../locales/en.json';

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
export const withIntl = (Story: any, context: StoryContext) => {
	intl
		.init({
			currentLocale: context.globals.locale,
			locales: {
				en: EN,
			},
		})
		.catch(err => {
			console.log(`Cannot initialize the intl support: ${err.message}`);
		});

	return <Story {...context} />;
};
