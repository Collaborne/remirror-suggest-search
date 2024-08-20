import { useDebounceFn, usePrevious } from '@reactuses/core';
import { useRemirrorContext } from '@remirror/react';
import { Node } from 'prosemirror-model';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { CommandsExtension, isDocNodeEmpty } from 'remirror';
import { NamedMentionExtensionAttributes } from 'remirror/extensions';

import { useSuggesterNavigation } from '../search-editor/hooks/useSuggesterNavigation';
import { GetSuggestions } from '../types';

import { useCanShowSuggestions } from './hooks/useCanShowSuggestions';
import { useRenderOption } from './hooks/useRenderOption';
import { useRenderSelectOptions } from './hooks/useRenderSelectOption';
import useSuggestInput from './hooks/useSuggestInput';
import { MentionSuggester } from './MentionSuggester';
import { Fields, INPUT_OPTION } from './types';

const GET_SUGGESTIONS_DEBOUNCE_MS = 300;

export interface SuggesterComponentProps {
	isActive: boolean;
	fields: Fields;
	closeMenu: (doc: Node) => void;
	getSuggestions?: GetSuggestions;
}

export function SuggesterComponent({
	isActive,
	fields,
	closeMenu,
	getSuggestions,
}: SuggesterComponentProps) {
	const { getState, commands } = useRemirrorContext<CommandsExtension>({
		autoUpdate: true,
	});
	const { doc, selection } = getState();
	const { $anchor } = selection;

	const [isLoading, setIsLoading] = useState(false);
	const [suggestedItems, setSuggestedItems] =
		useState<NamedMentionExtensionAttributes[]>();

	const { searchInput, searchedTerm, searchInputChanged } = useSuggestInput({
		doc,
		fields,
	});
	const prevIsActive = usePrevious(isActive);

	const handleCloseMenu = useCallback(() => {
		setTimeout(() => {
			closeMenu(getState().doc);
			commands.blur();
		}, 0);
	}, [closeMenu, getState, commands]);

	const { state, ...menu } = useSuggesterNavigation({
		items: suggestedItems || [],
		isOpen: isActive,
		closeMenu: handleCloseMenu,
	});

	const { selectOptions, renderSelectOption } = useRenderSelectOptions({
		fields,
		hideSelectOptions: !!state,
	});

	const inputOption = useMemo(() => {
		if (isDocNodeEmpty(doc) || state) {
			return undefined;
		}
		return [INPUT_OPTION];
	}, [doc, state]);

	useEffect(() => {
		if (!isLoading) {
			return undefined;
		}
		setSuggestedItems(inputOption);
	}, [inputOption, isLoading]);

	const canShowSuggestions = useCanShowSuggestions({
		$anchor,
		isTriggeredSuggester: !!state,
	});

	const fetchSuggestions = useCallback(async () => {
		try {
			const options = await getSuggestions?.({
				searchedTerm,
				input: searchInput,
			});

			const newSuggestedItems = [
				...(inputOption || []),
				...(options || []),
				...selectOptions,
			];

			setSuggestedItems(newSuggestedItems);
			setIsLoading(false);
		} catch (error) {
			console.error('Failed to fetch suggestions:', error);
		}
	}, [getSuggestions, inputOption, searchInput, searchedTerm, selectOptions]);

	const { run: debouncedFetchSuggestions } = useDebounceFn(
		fetchSuggestions,
		GET_SUGGESTIONS_DEBOUNCE_MS,
	);

	useEffect(() => {
		const isActivated = isActive && prevIsActive !== isActive;

		const canFetchSuggestions =
			isActivated ||
			(!isLoading && canShowSuggestions && searchInputChanged && isActive);

		if (!canFetchSuggestions) {
			return;
		}
		setIsLoading(true);
		void debouncedFetchSuggestions();
	}, [
		canShowSuggestions,
		debouncedFetchSuggestions,
		isActive,
		isLoading,
		prevIsActive,
		searchInputChanged,
	]);

	const renderOption = useRenderOption({
		doc,
		fields,
	});

	if (!isActive) {
		return null;
	}
	return (
		<MentionSuggester
			options={suggestedItems || []}
			fields={fields}
			renderOption={renderOption}
			renderSelectOption={renderSelectOption}
			isLoadingSuggestions={isLoading}
			{...menu}
		/>
	);
}
