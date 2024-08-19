import { useMemo, useRef } from 'react';
import { isEqual } from 'remirror';

// Taken from https://github.com/kentcdodds/use-deep-compare-effect
type DependencyList = Parameters<typeof useMemo>[1];
export function useDeepCompareMemoize(value: DependencyList) {
	const ref = useRef<DependencyList>();
	const signalRef = useRef<number>(0);

	if (!isEqual(value, ref.current)) {
		ref.current = value;
		signalRef.current += 1;
	}

	return [signalRef.current];
}
