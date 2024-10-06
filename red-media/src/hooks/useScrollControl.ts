// src/hooks/useScrollControl.ts
import { useSectionStore } from '@store/useSectionStore';
import { useEffect, useCallback } from 'react';

const useScrollControl = () => {
    const { setCurrentSection, totalSections } = useSectionStore();

    const handleScroll = useCallback(
        (direction: number) => {
            setCurrentSection((prevSection) => {
                let nextSection = prevSection + direction;
                if (nextSection < 1) nextSection = 1;
                if (nextSection > totalSections) nextSection = totalSections;
                return nextSection;
            });
        },
        [setCurrentSection, totalSections]
    );

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout | null = null;

        const onWheel = (event: WheelEvent) => {
            event.preventDefault();

            if (scrollTimeout) return;

            const direction = event.deltaY > 0 ? 1 : -1;
            handleScroll(direction);

            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
            }, 700);
        };

        let startY = 0;

        const onTouchStart = (event: TouchEvent) => {
            startY = event.touches[0].clientY;
        };

        const onTouchMove = (event: TouchEvent) => {
            event.preventDefault();

            if (scrollTimeout) return;

            const currentY = event.touches[0].clientY;
            const direction = startY - currentY > 0 ? 1 : -1;
            handleScroll(direction);

            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
            }, 700);
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
        };
    }, [handleScroll]);

    return null;
};

export default useScrollControl;
