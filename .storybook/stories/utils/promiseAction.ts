import { action } from '@storybook/addon-actions';

export function promiseAction<T>(name: string, result?: T) {
	const handler = action(name);
	return (...args: unknown[]) => {
		handler(args);
		return Promise.resolve(result as T);
	};
}
