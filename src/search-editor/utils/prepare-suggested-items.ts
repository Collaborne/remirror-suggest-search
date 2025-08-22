import { NamedMentionExtensionAttributes } from 'remirror/extensions';

/**
 * Prepares the list of suggested items to display.
 *
 * - Adds the current search input as the `matchedText` for each suggestion so
 *   that the typed query can be removed from the editor when the suggestion is
 *   inserted.
 * - Only includes the `INPUT_OPTION` when no other suggestions are available.
 */
export function prepareSuggestedItems(params: {
	options?: NamedMentionExtensionAttributes[];
	inputOption?: NamedMentionExtensionAttributes[];
	selectOptions: NamedMentionExtensionAttributes[];
	searchInput?: string;
}): NamedMentionExtensionAttributes[] {
	const { options, inputOption, selectOptions, searchInput } = params;
	const mappedOptions = (options ?? []).map(option => ({
		...option,
		matchedText: searchInput,
	}));

	const includeInput = mappedOptions.length > 0 ? [] : inputOption ?? [];

	return [...includeInput, ...mappedOptions, ...selectOptions];
}
