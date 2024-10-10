import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";

const Manifest = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

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
        if (currentSection === 3) {
            if (!animationsEnabled) return;

            const timeline = anime.timeline({
                easing: "easeOutExpo",
            });

            // Top Laser Animation
            timeline.add(
                {
                    targets: topLaser.current,
                    width: ["0%", "100%"],
                    duration: 2000 * animationSpeed,
                },
                400 * animationSpeed // Delay
            );

            // Top Text Animation
            timeline.add(
                {
                    targets: topText.current,
                    opacity: [0, 1],
                    translateY: ["0%", "-100%"],
                    duration: 1000 * animationSpeed,
                },
                900 * animationSpeed // Delay
            );

            // Manifest Text Animation
            timeline.add(
                {
                    targets: manifestText.current,
                    opacity: [0, 1],
                    translateX: ["300%", "0%"],
                    duration: 1500 * animationSpeed,
                },
                1400 * animationSpeed // Delay
            );

            // Bottom Laser Animation
            timeline.add(
                {
                    targets: bottomLaser.current,
                    width: ["0%", "100%"],
                    duration: 2000 * animationSpeed,
                },
                1400 * animationSpeed // Delay
            );

            // Bottom Text Animation
            timeline.add(
                {
                    targets: bottomText.current,
                    opacity: [0, 1],
                    translateY: ["0%", "100%"],
                    duration: 1000 * animationSpeed,
                },
                2150 * animationSpeed // Delay
            );
        }
    }, [currentSection, animationSpeed]);

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
                        className={`z-0 absolute top-[6px] md:top-[8px] xl:top-[12px] translate-y-[-100%] left-[5%] leading-none font-bold text-[32px] md:text-[52px] xl:text-[80px] text-shadow-md ${!animationsEnabled ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <p>OUR</p>
                    </div>

                    {/* Top Laser */}
                    <div
                        ref={topLaser}
                        className="absolute top-0 left-0 w-full h-5 bg-white"
                    >
                        {/* Top Laser */}
                    </div>

                    {/* Manifest Text */}
                    <div
                        ref={manifestText}
                        className={`absolute flex flex-col lg:flex-row lg:w-full items-start justify-between top-[5%] left-0 font-bold h-[90%] text-[60px] md:text-[80px] lg:text-[160px] xl:text-[220px] leading-none px-1 text-shadow-lg ${!animationsEnabled ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {"MANIFEST".split("").map((letter, index) => (
                            <div key={index}>{letter}</div>
                        ))}
                    </div>

                    {/* Bottom Laser */}
                    <div
                        ref={bottomLaser}
                        className="absolute bottom-0 left-0 w-full h-5 bg-white"
                    >
                        {/* Bottom Laser */}
                    </div>

                    {/* Bottom Text */}
                    <div
                        ref={bottomText}
                        className={`absolute bottom-[4px] md:bottom-[6px] xl:bottom-[10px] translate-y-[100%] left-[5%] leading-none font-bold text-[32px] md:text-[52px] xl:text-[80px] text-shadow-md ${!animationsEnabled ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <p>IS FINALLY HERE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manifest;
