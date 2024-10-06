// hooks/useRepetitions.ts
import { useState, useEffect } from "react";

export function useRepetitions(animatedBarRef: React.RefObject<HTMLDivElement>, width: number) {
    const [repetitions, setRepetitions] = useState<number>(0);

    useEffect(() => {
        const calculateRepetitions = () => {
            if (animatedBarRef.current) {
                const divWidth = animatedBarRef.current.offsetWidth;
                const charWidth = 43.48;
                const reps = Math.floor(divWidth / charWidth);
                setRepetitions(reps);
            }
        };

        calculateRepetitions();

        window.addEventListener("resize", calculateRepetitions);
        return () => window.removeEventListener("resize", calculateRepetitions);
    }, [width, animatedBarRef]);

    return repetitions;
};
