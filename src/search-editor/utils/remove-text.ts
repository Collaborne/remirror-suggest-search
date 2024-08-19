export function removeText(input: string, textToRemove: string): string {
	// Use the replace method with a global regular expression to remove all occurrences
	const regex = new RegExp(`${textToRemove}$`);
	return input.replace(regex, '');
}
