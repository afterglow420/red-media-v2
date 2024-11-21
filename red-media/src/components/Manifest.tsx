import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";
import useLazyBackgroundImage from "@hooks/useLazyBackgroundImage";

const Manifest = () => {
    // Store
    const { currentSection, animationsEnabled, isScrolling } = useSectionStore();

    // Refs
    const topLaser = useRef<HTMLDivElement>(null);
    const topText = useRef<HTMLDivElement>(null);
    const bottomLaser = useRef<HTMLDivElement>(null);
    const bottomText = useRef<HTMLDivElement>(null);
    const manifestText = useRef<HTMLDivElement>(null);
    const imageElement = useRef<HTMLDivElement>(null);
    const animationsActive = useRef(false);

    // Hooks
    const backgroundImage = useLazyBackgroundImage(
        imageElement,
        "/images/bg/manifest.png"
    );

    // Animation speed coefficient
    const animationSpeed = 1;

    // Effects
    useEffect(() => {
        if (currentSection === 3 && animationsEnabled && !isScrolling) {
            if (animationsActive.current) return;
            animationsActive.current = true;

            requestAnimationFrame(() => {
                const timeline = anime.timeline({
                    easing: "easeOutExpo",
                });

                timeline.add(
                    {
                        targets: imageElement.current,
                        opacity: [0, 1],
                        duration: 1000 * animationSpeed,
                        easing: "linear",
                    }
                )

                // Top Laser Animation using scaleX
                timeline.add(
                    {
                        targets: topLaser.current,
                        scaleX: [0, 1],
                        duration: 1000 * animationSpeed,
                    },
                );

                // Top Text Animation
                timeline.add(
                    {
                        targets: topText.current,
                        opacity: [0, 1],
                        translateY: ["0%", "-100%"],
                        duration: 500 * animationSpeed,
                    },
                    "-=500"
                );

                // Manifest Text Animation
                timeline.add(
                    {
                        targets: manifestText.current,
                        opacity: [0, 1],
                        translateX: ["300%", "0%"],
                        duration: 1000 * animationSpeed,
                    }, '-=250'
                );

                // Bottom Laser Animation using scaleX
                timeline.add(
                    {
                        targets: bottomLaser.current,
                        scaleX: [0, 1],
                        duration: 1000 * animationSpeed,
                    },
                    '-=750'
                );

                // Bottom Text Animation
                timeline.add(
                    {
                        targets: bottomText.current,
                        opacity: [0, 1],
                        translateY: ["0%", "100%"],
                        duration: 1000 * animationSpeed,
                    },'-=500'
                );
            });
        } else if (animationsActive.current) {
            // Exit Animations
            animationsActive.current = false;

            requestAnimationFrame(() => {
                const timeline = anime.timeline({
                    easing: "easeOutExpo",
                });

                // Reverse animations
                // Top Laser Exit Animation
                timeline.add(
                    {
                        targets: topLaser.current,
                        scaleX: [1, 0],
                        duration: 500 * animationSpeed,
                    },
                );

                // Top Text Exit Animation
                timeline.add(
                    {
                        targets: topText.current,
                        opacity: [1, 0],
                        translateY: ["-100%", "0%"],
                        duration: 500 * animationSpeed,
                    },
                    "-=500"
                );

                // Manifest Text Exit Animation
                timeline.add(
                    {
                        targets: manifestText.current,
                        opacity: [1, 0],
                        translateX: ["0%", "300%"],
                        duration: 500 * animationSpeed,
                    },
                    "-=500"
                );

                // Bottom Laser Exit Animation
                timeline.add(
                    {
                        targets: bottomLaser.current,
                        scaleX: [1, 0],
                        duration: 500 * animationSpeed,
                    },
                    "-=500"
                );

                // Bottom Text Exit Animation
                timeline.add(
                    {
                        targets: bottomText.current,
                        opacity: [1, 0],
                        translateY: ["100%", "0%"],
                        duration: 500 * animationSpeed,
                    },
                    "-=500"
                );

                // Image Exit Animation
                timeline.add(
                    {
                        targets: imageElement.current,
                        opacity: [1, 0],
                        duration: 500 * animationSpeed,
                    },
                    "-=500"
                );
            });
        }

        // Clean up animations when dependencies change or component unmounts
        return () => {
            anime.remove([
                topLaser.current,
                topText.current,
                bottomLaser.current,
                bottomText.current,
                manifestText.current,
            ]);
        };
    }, [currentSection, animationsEnabled, isScrolling]);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div
                ref={imageElement}
                className="z-20 h-[85%] w-full"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0,
                }}
            >
                <div className="z-20 relative w-full h-full">
                    {/* Top Text */}
                    <div
                        ref={topText}
                        className="z-0 absolute top-[6px] xl:top-[12px] 2xl:top-[14px] left-[5%] leading-none font-[900] text-[2.25rem] tracking-wider lg:text-[3rem] xl:text-[4.25rem] 2xl:text-[6rem]"
                        style={{
                            opacity: 0,
                            transform: 'translateY(0%)',
                        }}
                    >
                        <p>OUR</p>
                    </div>

                    {/* Top Laser */}
                    <div
                        ref={topLaser}
                        className="absolute top-0 left-0 w-full h-3 bg-white"
                        style={{
                            transform: 'scaleX(0)',
                            transformOrigin: 'left',
                        }}
                    >
                        {/* Top Laser */}
                    </div>

                    {/* Manifest Text */}
                    <div
                        ref={manifestText}
                        className="absolute flex flex-col lg:flex-row lg:w-full items-start justify-between top-[5%] lg:-left-2 font-[900] h-[90%] text-[4rem] md:text-[5rem] lg:text-[12rem] 2xl:text-[16rem] leading-none px-1 tracking-tighter"
                        style={{
                            opacity: 0,
                            transform: 'translateX(300%)',
                        }}
                    >
                        {"MANIFEST".split("").map((letter, index) => (
                            <div key={index} className="flex flex-col items-center justify-center tracking-tighter leading-none">{letter}</div>
                        ))}
                    </div>

                    {/* Bottom Laser */}
                    <div
                        ref={bottomLaser}
                        className="absolute bottom-0 left-0 w-full h-3 bg-white"
                        style={{
                            transform: 'scaleX(0)',
                            transformOrigin: 'right',
                        }}
                    >
                        {/* Bottom Laser */}
                    </div>

                    {/* Bottom Text */}
                    <div
                        ref={bottomText}
                        className="absolute bottom-[4px] md:bottom-[6px] xl:bottom-[10px] 2xl:bottom-[12px] left-[5%] leading-none font-[900] text-[2.25rem] tracking-wider lg:text-[3rem] xl:text-[4.25rem] 2xl:text-[6rem]"
                        style={{
                            opacity: 0,
                            transform: 'translateY(0%)',
                        }}
                    >
                        <p>IS FINALLY HERE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manifest;
