import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		controls: { expanded: true },
	},
	globalTypes: {
		theme: {
			name: 'Dark Mode',
			description: 'Dark mode enabled/disabled',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'circlehollow', title: 'Light mode' },
					{ value: 'dark', icon: 'circle', title: 'Dark mode' },
				],
			},
		},
		locale: {
			name: 'Locale',
			description: 'Internationalization locale',
			defaultValue: 'en',
			toolbar: {
				icon: 'globe',
				items: [
					{ value: 'en', right: '🇺🇸', title: 'English' },
					{ value: 'nl', right: '🇳🇱', title: 'Nederlands' },
				],
			},
		},
	},
};

export default preview;
