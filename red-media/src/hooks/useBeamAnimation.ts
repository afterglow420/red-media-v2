// hooks/useBeamAnimation.ts
import { useEffect } from "react";
import anime from "animejs";

export function useBeamAnimation(
    animatedBarRef: React.RefObject<HTMLDivElement>,
    repetitions: number,
    width: number
) {
    useEffect(() => {
        if (animatedBarRef.current) {
            const outerChildren = animatedBarRef.current.children;
            const elements = Array.from(outerChildren).map(
                (child) => child.firstChild as HTMLElement
            );

            const n = elements.length;
            const beamLength = width < 1024 ? 3 : 5; // Number of Rs in the beam
            const totalDuration = width < 1024 ? 1200 : 2500; // Total duration of the animation in milliseconds

            // Initialize all Rs to no filter
            anime.set(elements, {
                filter: "drop-shadow(0 0 0 transparent)",
            });

            const beam = { beamPos: 0 };

            anime({
                targets: beam,
                beamPos: n + beamLength,
                duration: totalDuration,
                easing: "linear",
                loop: true,
                update: function () {
                    const beamStart = Math.floor(beam.beamPos - beamLength);
                    const beamEnd = Math.floor(beam.beamPos);

                    elements.forEach((el, index) => {
                        if (index >= beamStart && index < beamEnd) {
                            // Inside the beam
                            anime.set(el, {
                                filter:
                                    "drop-shadow(2px 4px 8px #c9111d) drop-shadow(4px 8px 32px #c9111d) drop-shadow(8px 16px 64px #c9111d)",
                            });
                        } else {
                            // Outside the beam
                            anime.set(el, {
                                filter: "drop-shadow(0 0 0 transparent)",
                            });
                        }
                    });
                },
            });
        }
    }, [animatedBarRef, repetitions, width]);
}
