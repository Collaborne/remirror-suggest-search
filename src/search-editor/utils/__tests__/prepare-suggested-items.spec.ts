import type { NamedMentionExtensionAttributes } from 'remirror/extensions';

import { INPUT_OPTION } from '../../types';
import { prepareSuggestedItems } from '../prepare-suggested-items';

describe('prepareSuggestedItems', () => {
	const selectOptions: NamedMentionExtensionAttributes[] = [];

	it('omits input option when suggestions exist and adds matchedText', () => {
		const options: NamedMentionExtensionAttributes[] = [
			{ id: '1', label: 'label', name: 'tag' },
		];

		const result = prepareSuggestedItems({
			options,
			inputOption: [INPUT_OPTION],
			selectOptions,
			searchInput: 'comm',
		});

		expect(result).toHaveLength(1);
		expect(result[0]).toMatchObject({ id: '1', matchedText: 'comm' });
	});

	it('includes input option when no suggestions exist', () => {
		const result = prepareSuggestedItems({
			options: [],
			inputOption: [INPUT_OPTION],
			selectOptions,
			searchInput: 'comm',
		});

		expect(result).toHaveLength(1);
		expect(result[0]).toEqual(INPUT_OPTION);
	});
});
