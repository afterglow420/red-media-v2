// src/hooks/useAnimateScroll.ts
import { useEffect } from 'react';
import { useSectionStore } from '@store/useSectionStore';
import { SCROLL_DURATION } from '@lib/constants/constants-animations';

const useAnimateScroll = () => {
    const currentSection = useSectionStore((state) => state.currentSection);
    const setIsScrolling = useSectionStore((state) => state.setIsScrolling);

    useEffect(() => {
        const targetElement = document.getElementById(`section-${currentSection}`);
        if (targetElement) {
            setIsScrolling(true); // Indicate that scrolling has started
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Set a timeout to reset the scrolling flag after the animation duration
            const scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, SCROLL_DURATION - 200); 

            // Clean up the timeout if the component unmounts or currentSection changes
            return () => clearTimeout(scrollTimeout);
        }
    }, [currentSection, setIsScrolling]);
};

export default useAnimateScroll;
