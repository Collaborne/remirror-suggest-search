const SPECIAL_CHARACTERS_REGEX = /[.*+?^${}()|[\]\\]/g;

function escapeRegExp(text: string): string {
	return text.replace(SPECIAL_CHARACTERS_REGEX, '\\$&');
}

export function removeText(input: string, textToRemove: string): string {
	return input.replace(new RegExp(`${escapeRegExp(textToRemove)}$`), '');
}
