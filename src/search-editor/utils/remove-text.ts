const SPECIAL_CHARACTERS_REGEX = /[.*+?^${}()|[\]\\]/g;

function escapeRegExp(text: string): string {
	return text.replace(SPECIAL_CHARACTERS_REGEX, '\\$&');
}

export function removeExtraSpaces(input: string) {
	return input.replace(/\s+/g, ' ');
}

export function removeTextFromEnd(input: string, textToRemove: string): string {
	return input.replace(new RegExp(`${escapeRegExp(textToRemove)}$`), '');
}

export function removeTextFromFront(
	input: string,
	textToRemove: string,
): string {
	return input.replace(new RegExp(`^${escapeRegExp(textToRemove)}`), '');
}
