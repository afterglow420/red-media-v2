// src/hooks/useAnimateScroll.ts
import { useEffect } from 'react';
import { useSectionStore } from '@store/useSectionStore';

const useAnimateScroll = () => {
    const currentSection = useSectionStore((state) => state.currentSection);

    useEffect(() => {
        const targetElement = document.getElementById(`section-${currentSection}`);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentSection]);
};

export default useAnimateScroll;
