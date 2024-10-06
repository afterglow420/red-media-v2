// src/hooks/useAnimateScroll.ts
import { useEffect } from 'react';
import anime from 'animejs';
import { useSectionStore } from '@store/useSectionStore';

const useAnimateScroll = () => {
    const currentSection = useSectionStore((state) => state.currentSection);

    useEffect(() => {
        anime({
            targets: 'html, body',
            scrollTop: window.innerHeight * (currentSection - 1),
            duration: 600,
            easing: 'easeInOutQuad',
        });
    }, [currentSection]);
};

export default useAnimateScroll;
