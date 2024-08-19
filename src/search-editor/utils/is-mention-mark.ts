// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMentionMark(mark: any): boolean {
	return mark.type.name === 'mention';
}
