import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";

const Manifest = () => {
    // Store
    const { currentSection, animationsEnabled } = useSectionStore();

    // Refs
    const topLaser = useRef<HTMLDivElement>(null);
    const topText = useRef<HTMLDivElement>(null);
    const bottomLaser = useRef<HTMLDivElement>(null);
    const bottomText = useRef<HTMLDivElement>(null);
    const manifestText = useRef<HTMLDivElement>(null);

    // Animation speed coefficient
    const animationSpeed = 1; // Adjust this value to speed up (>1) or slow down (<1) the animations

    // Effects
    useEffect(() => {
        if (currentSection === 3 && animationsEnabled) {
            // Use requestAnimationFrame to ensure animations run smoothly
            requestAnimationFrame(() => {
                const timeline = anime.timeline({
                    easing: "easeOutExpo",
                });

                // Top Laser Animation - scaleX from 0 to 1
                timeline.add(
                    {
                        targets: topLaser.current,
                        scaleX: [0, 1],
                        duration: 2000 * animationSpeed,
                        easing: 'easeOutExpo',
                    },
                    400 * animationSpeed // Delay in milliseconds
                );

                // Top Text Animation - opacity and translateY
                timeline.add(
                    {
                        targets: topText.current,
                        opacity: [0, 1],
                        translateY: ['0vw', '-10vw'], // Using viewport units for better performance
                        duration: 1000 * animationSpeed,
                        easing: 'easeOutExpo',
                    },
                    900 * animationSpeed // Delay
                );

                // Manifest Text Animation - opacity and translateX
                timeline.add(
                    {
                        targets: manifestText.current,
                        opacity: [0, 1],
                        translateX: ['300vw', '0vw'], // Using viewport units for better performance
                        duration: 1500 * animationSpeed,
                        easing: 'easeOutExpo',
                    },
                    1400 * animationSpeed // Delay
                );

                // Bottom Laser Animation - scaleX from 0 to 1
                timeline.add(
                    {
                        targets: bottomLaser.current,
                        scaleX: [0, 1],
                        duration: 2000 * animationSpeed,
                        easing: 'easeOutExpo',
                    },
                    1400 * animationSpeed // Delay
                );

                // Bottom Text Animation - opacity and translateY
                timeline.add(
                    {
                        targets: bottomText.current,
                        opacity: [0, 1],
                        translateY: ['0vw', '10vw'], // Using viewport units for better performance
                        duration: 1000 * animationSpeed,
                        easing: 'easeOutExpo',
                    },
                    2150 * animationSpeed // Delay
                );
            });
        }
    }, [currentSection, animationsEnabled, animationSpeed]);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div
                className="z-20 h-[85%] w-full"
                style={{
                    backgroundImage: 'url(/images/bg/manifest.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="relative w-full h-full">
                    {/* Top Text */}
                    <div
                        ref={topText}
                        className={`z-0 absolute top-[6px] md:top-[8px] xl:top-[12px] left-[5%] leading-none font-bold text-[32px] md:text-[52px] xl:text-[80px] text-shadow-md opacity-0`}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <p>OUR</p>
                    </div>

                    {/* Top Laser */}
                    <div
                        ref={topLaser}
                        className="absolute top-0 left-0 w-full h-5 bg-white origin-left"
                        style={{
                            transformOrigin: 'left center',
                            transform: 'scaleX(0)', // Initial scaleX set to 0
                            willChange: 'transform',
                        }}
                    >
                        {/* Top Laser */}
                    </div>

                    {/* Manifest Text */}
                    <div
                        ref={manifestText}
                        className={`absolute flex flex-col lg:flex-row lg:w-full items-start justify-between top-[5%] left-0 font-bold h-[90%] text-[60px] md:text-[80px] lg:text-[120px] xl:text-[160px] leading-none px-1 text-shadow-lg opacity-0`}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {"MANIFEST".split("").map((letter, index) => (
                            <div key={index}>{letter}</div>
                        ))}
                    </div>

                    {/* Bottom Laser */}
                    <div
                        ref={bottomLaser}
                        className="absolute bottom-0 left-0 w-full h-5 bg-white origin-left"
                        style={{
                            transformOrigin: 'left center',
                            transform: 'scaleX(0)', // Initial scaleX set to 0
                            willChange: 'transform',
                        }}
                    >
                        {/* Bottom Laser */}
                    </div>

                    {/* Bottom Text */}
                    <div
                        ref={bottomText}
                        className={`absolute bottom-[4px] md:bottom-[6px] xl:bottom-[10px] left-[5%] leading-none font-bold text-[32px] md:text-[52px] xl:text-[80px] text-shadow-md opacity-0`}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <p>IS FINALLY HERE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manifest;
