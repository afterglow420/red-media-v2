// src/hooks/useScrollControl.ts
import { SCROLL_DURATION } from '@lib/constants/constants-animations';
import { useSectionStore } from '@store/useSectionStore';
import { useEffect, useCallback, useRef } from 'react';

// Throttle function to limit the rate at which a function can fire.
const throttle = (func: (...args: any[]) => void, limit: number) => {
    let inThrottle: boolean = false;
    return function (this: any, ...args: any[]) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

const SCROLL_TIMEOUT = SCROLL_DURATION;

const useScrollControl = () => {
    // Destructure necessary state and actions from the store
    const {
        currentSection,    // Current active section
        setCurrentSection, // Function to update the current section
        totalSections,     // Total number of sections
        isScrolling,       // Flag to indicate if scrolling is in progress
        setIsScrolling     // Function to set the scrolling flag
    } = useSectionStore();

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const startYRef = useRef<number>(0); // To track touch start position
    const threshold = 50; // Minimum swipe distance in pixels to trigger scroll

    // Handle scroll direction
    const handleScroll = useCallback(
        (direction: number) => {
            if (isScrolling) {
                console.log('Currently scrolling, ignoring scroll event.');
                return; // Prevent handling scroll if already scrolling
            }

            // Determine if scrolling in the desired direction is possible
            if (
                (direction === 1 && currentSection >= totalSections) || // At last section and trying to scroll down
                (direction === -1 && currentSection <= 1)             // At first section and trying to scroll up
            ) {
                console.log('Scroll direction out of bounds, ignoring.');
                return; // Do not scroll further in this direction
            }

            // Update the current section based on direction
            const nextSection = Math.min(Math.max(currentSection + direction, 1), totalSections);
            console.log(`Changing section from ${currentSection} to ${nextSection}`);
            setCurrentSection(nextSection);

            setIsScrolling(true); // Indicate that scrolling has started
            console.log('Scrolling started.');

            // Reset the scrolling flag after the timeout
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
                console.log('Scrolling ended.');
            }, SCROLL_TIMEOUT); // Use SCROLL_TIMEOUT without subtracting
        },
        [setCurrentSection, totalSections, isScrolling, setIsScrolling, currentSection]
    );

    useEffect(() => {
        // Throttled version of handleScroll to prevent excessive calls on touchmove and wheel
        const throttledHandleScroll = throttle(handleScroll, 300); // Lower throttle limit for better responsiveness

        // Handle wheel scroll events for desktop
        const onWheel = (event: WheelEvent) => {
            if (isScrolling) {
                console.log('Currently scrolling, ignoring wheel event.');
                return; // Ignore wheel events if scrolling is in progress
            }

            // Prevent default scrolling behavior to implement custom scroll
            event.preventDefault();

            const direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction
            console.log(`Wheel event detected. Direction: ${direction}`);
            throttledHandleScroll(direction);
        };

        // Handle touch start events for touch devices
        const onTouchStart = (event: TouchEvent) => {
            if (isScrolling) {
                console.log('Currently scrolling, ignoring touchstart event.');
                return; // Ignore touchstart events if scrolling is in progress
            }

            startYRef.current = event.touches[0].clientY; // Record the initial touch position
            console.log(`Touch start Y position: ${startYRef.current}`);
        };

        // Handle touch move events for touch devices
        const onTouchMove = (event: TouchEvent) => {
            if (isScrolling) {
                console.log('Currently scrolling, ignoring touchmove event.');
                return; // Ignore touchmove events if scrolling is in progress
            }

            const currentY = event.touches[0].clientY;
            const deltaY = startYRef.current - currentY;
            if (Math.abs(deltaY) < threshold) {
                // Not enough movement to trigger scroll
                console.log(`Touch move delta (${deltaY}px) below threshold (${threshold}px). Ignoring.`);
                return;
            }

            const direction = deltaY > 0 ? 1 : -1; // Determine touch scroll direction
            console.log(`Touch move detected. Direction: ${direction}`);
            throttledHandleScroll(direction);

            // Reset startYRef to prevent multiple triggers for a single swipe
            startYRef.current = currentY;
        };

        // Add event listeners for wheel and touch events
        document.addEventListener('wheel', onWheel, { passive: false }); // For desktop
        document.addEventListener('touchstart', onTouchStart, { passive: true }); // For touch devices
        document.addEventListener('touchmove', onTouchMove, { passive: false }); // For touch devices

        console.log('Custom scroll event listeners added for all devices.');

        // Cleanup event listeners on unmount
        return () => {
            document.removeEventListener('wheel', onWheel);
            document.removeEventListener('touchstart', onTouchStart);
            document.removeEventListener('touchmove', onTouchMove);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            console.log('Custom scroll event listeners removed and timeouts cleared.');
        };
    }, [handleScroll, isScrolling]);

    return null; // This hook does not render anything
};

export default useScrollControl;
