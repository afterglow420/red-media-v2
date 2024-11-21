// src/hooks/useScrollControl.ts
import { SCROLL_DURATION } from '@lib/constants/constants-animations';
import { useSectionStore } from '@store/useSectionStore';
import { useEffect, useCallback, useRef } from 'react';

const SCROLL_TIMEOUT = SCROLL_DURATION;

const useScrollControl = () => {
    // Destructure necessary state and actions from the store
    const {
        currentSection,      // Current active section
        setCurrentSection,   // Function to update the current section
        totalSections,       // Total number of sections
        isScrolling,         // Flag to indicate if scrolling is in progress
        setIsScrolling       // Function to set the scrolling flag
    } = useSectionStore();

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Handle scroll direction
    const handleScroll = useCallback(
        (direction: number) => {
            if (isScrolling) return; // Prevent handling scroll if already scrolling

            // Determine if scrolling in the desired direction is possible
            if (
                (direction === 1 && currentSection >= totalSections) || // At last section and trying to scroll down
                (direction === -1 && currentSection <= 1)             // At first section and trying to scroll up
            ) {
                return; // Do not scroll further in this direction
            }

            // Update the current section based on direction
            setCurrentSection((prevSection) => {
                let nextSection = prevSection + direction;
                // Clamp the next section within valid bounds
                if (nextSection < 1) nextSection = 1;
                if (nextSection > totalSections) nextSection = totalSections;
                return nextSection;
            });

            setIsScrolling(true); // Indicate that scrolling has started

            // Reset the scrolling flag after the timeout
            timeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, SCROLL_TIMEOUT - 200);
        },
        [setCurrentSection, totalSections, isScrolling, setIsScrolling, currentSection]
    );

    useEffect(() => {
        let startY = 0; // Initial touch position for touch devices

        // Handle wheel scroll events
        const onWheel = (event: WheelEvent) => {
            if (isScrolling) return; // Ignore scroll events if scrolling is in progress

            event.preventDefault(); // Prevent default scrolling behavior

            const direction = event.deltaY > 0 ? 1 : -1; // Determine scroll direction
            handleScroll(direction);
        };

        // Handle touch start events
        const onTouchStart = (event: TouchEvent) => {
            if (isScrolling) return; // Ignore touch events if scrolling is in progress

            startY = event.touches[0].clientY; // Record the initial touch position
        };

        // Handle touch move events
        const onTouchMove = (event: TouchEvent) => {
            if (isScrolling) return; // Ignore touch events if scrolling is in progress

            event.preventDefault(); // Prevent default touch behavior

            const currentY = event.touches[0].clientY;
            const direction = startY - currentY > 0 ? 1 : -1; // Determine touch scroll direction
            handleScroll(direction);
        };

        // Disable native scrolling for the entire document
        document.body.style.overflow = 'hidden';
        // Add event listeners for wheel and touch events
        document.addEventListener('wheel', onWheel, { passive: false });
        document.addEventListener('touchstart', onTouchStart, { passive: false });
        document.addEventListener('touchmove', onTouchMove, { passive: false });

        // Cleanup event listeners and reset styles on unmount
        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('wheel', onWheel);
            document.removeEventListener('touchstart', onTouchStart);
            document.removeEventListener('touchmove', onTouchMove);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [handleScroll, isScrolling]);

    return null; // This hook does not render anything
};

export default useScrollControl;
