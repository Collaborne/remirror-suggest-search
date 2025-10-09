import { useEffect, useRef } from 'react';

export function usePreviousValue<T>(value: T): T | undefined {
	const previousValueRef = useRef<T>(undefined);

	useEffect(() => {
		previousValueRef.current = value;
	});

	return previousValueRef.current;
}
