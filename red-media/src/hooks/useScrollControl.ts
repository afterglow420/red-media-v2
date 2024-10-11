// src/hooks/useScrollControl.ts
import { SCROLL_DURATION } from '@lib/constants/constants-animations';
import { useSectionStore } from '@store/useSectionStore';
import { useEffect, useCallback, useRef } from 'react';

const SCROLL_TIMEOUT = SCROLL_DURATION;

const useScrollControl = () => {
    const { setCurrentSection, totalSections, isScrolling, setIsScrolling } = useSectionStore();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = useCallback(
        (direction: number) => {
            if (isScrolling) return; // Prevent handling scroll if already scrolling

            setCurrentSection((prevSection) => {
                let nextSection = prevSection + direction;
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
        [setCurrentSection, totalSections, isScrolling, setIsScrolling]
    );

    useEffect(() => {
        let startY = 0;

        const onWheel = (event: WheelEvent) => {
            if (isScrolling) return; // Ignore scroll events if scrolling is in progress

            event.preventDefault();

            const direction = event.deltaY > 0 ? 1 : -1;
            handleScroll(direction);
        };

        const onTouchStart = (event: TouchEvent) => {
            if (isScrolling) return; // Ignore touch events if scrolling is in progress

            startY = event.touches[0].clientY;
        };

        const onTouchMove = (event: TouchEvent) => {
            if (isScrolling) return; // Ignore touch events if scrolling is in progress

            event.preventDefault();

            const currentY = event.touches[0].clientY;
            const direction = startY - currentY > 0 ? 1 : -1;
            handleScroll(direction);
        };

        // Disable native scrolling
        document.body.style.overflow = 'hidden';
        document.addEventListener('wheel', onWheel, { passive: false });
        document.addEventListener('touchstart', onTouchStart, { passive: false });
        document.addEventListener('touchmove', onTouchMove, { passive: false });

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('wheel', onWheel);
            document.removeEventListener('touchstart', onTouchStart);
            document.removeEventListener('touchmove', onTouchMove);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [handleScroll, isScrolling]);

    return null;
};

export default useScrollControl;
