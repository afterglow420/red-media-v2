// src/hooks/useAnimateScroll.ts
import { useEffect } from 'react';
import anime from 'animejs';
import { useSectionStore } from '@store/useSectionStore';

const useAnimateScroll = () => {
    const currentSection = useSectionStore((state) => state.currentSection);

    useEffect(() => {
        const targetElement = document.getElementById(`section-${currentSection}`);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop;
            const scrollingElement = document.scrollingElement || document.documentElement;

            anime({
                targets: scrollingElement,
                scrollTop: targetPosition,
                duration: 600,
                easing: 'easeInOutQuad',
            });
        }
    }, [currentSection]);
};

export default useAnimateScroll;
