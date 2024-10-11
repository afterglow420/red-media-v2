// src/hooks/usePrevious.ts
import { useEffect, useRef } from 'react';

/**
 * usePrevious Hook
 * Stores the previous value of a state or prop.
 *
 * @param value - The current value to track.
 * @returns The previous value.
 */
export const usePrevious = <T>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
};
