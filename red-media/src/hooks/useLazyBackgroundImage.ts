// useLazyBackgroundImage.ts
import { useEffect, useState, RefObject } from 'react';

const useLazyBackgroundImage = (
    ref: RefObject<HTMLElement>,
    imageUrl: string,
    options?: IntersectionObserverInit
) => {
    const [bgImageLoaded, setBgImageLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setBgImageLoaded(true);
                        observerInstance.disconnect();
                    }
                });
            },
            options || { rootMargin: '0px', threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);

    return bgImageLoaded ? imageUrl : 'none';
};

export default useLazyBackgroundImage;
