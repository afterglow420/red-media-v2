import { useSectionStore } from "@store/useSectionStore";
import redOutlineBracket from "/images/brackets/red-outline-bracket.png";
import whiteOutlineBracket from "/images/brackets/white-outline-bracket.png";
import { useEffect, useRef } from "react";
import anime from "animejs";

const Values = () => {
    // Store
    const { currentSection, animationsEnabled, isScrolling } = useSectionStore();

    // Refs
    const redBracket = useRef<HTMLDivElement>(null);
    const topText = useRef<HTMLDivElement>(null);
    const whiteBracket = useRef<HTMLDivElement>(null);
    const ambitionText = useRef<HTMLDivElement>(null);
    const ambitionSlider = useRef<HTMLDivElement>(null);
    const empowermentText = useRef<HTMLDivElement>(null);
    const empowermentSlider = useRef<HTMLDivElement>(null);
    const trustworthinessText = useRef<HTMLDivElement>(null);
    const trustworthinessSlider = useRef<HTMLDivElement>(null);
    const animationsActive = useRef(false);

    useEffect(() => {
        if (currentSection === 4 && animationsEnabled && !isScrolling) {
            if (animationsActive.current) return; // Prevent redundant animations
            animationsActive.current = true;

            requestAnimationFrame(() => {
                // Entry Animations
                const timeline = anime.timeline({
                    easing: "easeOutQuart",
                });

                timeline
                    .add({
                        targets: redBracket.current,
                        translateX: ["-100vw", "0"],
                        opacity: [0, 1],
                        duration: 1000,
                        delay: 200,
                    })
                    .add(
                        {
                            targets: topText.current,
                            opacity: [0, 1],
                            translateX: ["-60px", "0px"],
                            duration: 800,
                        },
                        "-=600"
                    )
                    .add(
                        {
                            targets: whiteBracket.current,
                            translateX: ["100vw", "0"],
                            opacity: [0, 1],
                            duration: 800,
                        },
                        "-=600"
                    )
                    .add(
                        {
                            targets: [ambitionSlider.current, empowermentSlider.current, trustworthinessSlider.current],
                            translateX: ["0%", "100%"],
                            opacity: [0, 1],
                            duration: 500,
                            delay: anime.stagger(150),
                        },
                        "-=400"
                    )
                    .add(
                        {
                            targets: [ambitionText.current, empowermentText.current, trustworthinessText.current],
                            opacity: [0, 1],
                            translateX: ["-60px", "0px"],
                            duration: 500,
                            delay: anime.stagger(150),
                        },
                        "-=600"
                    );
            });
        } else if (animationsActive.current && currentSection !== 4) {
            // Exit Animations
            animationsActive.current = false;

            requestAnimationFrame(() => {
                // Exit animations

                // Animate all texts together
                anime({
                    targets: [ambitionText.current, empowermentText.current, trustworthinessText.current],
                    opacity: [1, 0],
                    translateX: ["0px", "-60px"],
                    duration: 500,
                    easing: "easeInOutSine",
                    complete: () => {
                        [ambitionText.current, empowermentText.current, trustworthinessText.current].forEach((element) => {
                            if (element) {
                                element.style.opacity = "0";
                                element.style.transform = "translateX(-60px)";
                            }
                        });
                    },
                });

                // Animate all sliders together
                anime({
                    targets: [ambitionSlider.current, empowermentSlider.current, trustworthinessSlider.current],
                    opacity: [1, 0],
                    translateX: ["100%", "0%"],
                    duration: 500,
                    easing: "easeInOutSine",
                    complete: () => {
                        [ambitionSlider.current, empowermentSlider.current, trustworthinessSlider.current].forEach((element) => {
                            if (element) {
                                element.style.opacity = "0";
                                element.style.transform = "translateX(0%)";
                            }
                        });
                    },
                });

                // Animate redBracket
                anime({
                    targets: redBracket.current,
                    opacity: [1, 0],
                    translateX: ["0", "-100vw"],
                    duration: 500,
                    easing: "easeInOutSine",
                    complete: () => {
                        if (redBracket.current) {
                            redBracket.current.style.opacity = "0";
                            redBracket.current.style.transform = "translateX(-100vw)";
                        }
                    },
                });

                // Animate topText
                anime({
                    targets: topText.current,
                    opacity: [1, 0],
                    translateX: ["0px", "-60px"],
                    duration: 500,
                    easing: "easeInOutSine",
                    complete: () => {
                        if (topText.current) {
                            topText.current.style.opacity = "0";
                            topText.current.style.transform = "translateX(-60px)";
                        }
                    },
                });

                // Animate whiteBracket
                anime({
                    targets: whiteBracket.current,
                    opacity: [1, 0],
                    translateX: ["0", "100vw"],
                    duration: 500,
                    easing: "easeInOutSine",
                    complete: () => {
                        if (whiteBracket.current) {
                            whiteBracket.current.style.opacity = "0";
                            whiteBracket.current.style.transform = "translateX(100vw)";
                        }
                    },
                });
            });
        }

        // Cleanup function to remove animations
        return () => {
            anime.remove([
                redBracket.current,
                topText.current,
                whiteBracket.current,
                ambitionText.current,
                ambitionSlider.current,
                empowermentText.current,
                empowermentSlider.current,
                trustworthinessText.current,
                trustworthinessSlider.current,
            ]);
        };
    }, [currentSection, animationsEnabled, isScrolling]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            {/* Top Section */}
            <div className="relative flex flex-row h-[50%] w-full">
                {/* Red Bracket and Top Text */}
                <div className="z-10 absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full flex flex-row justify-between py-1 md:py-2 lg:py-4 xl:py-5 px-4 md:px-6 lg:px-8 xl:px-10">
                        <div
                            ref={topText}
                            className="flex flex-col justify-center gap-5 text-center opacity-0"
                        >
                            <p className="text-[12px] md:text-[1.5rem] lg:text-[32px] xl:text-[3rem] 2xl:text-[3.5rem] md:tracking-wide xl:tracking-widest text-stroke-1 text-stroke-white text-transparent">
                                AFTER 10 YEARS OF
                            </p>
                            <p className="text-[12px] md:text-[1.5rem] lg:text-[32px] xl:text-[3rem] 2xl:text-[3.5rem] md:tracking-wide xl:tracking-widest text-stroke-1 text-stroke-white text-transparent">
                                GROWING ONLY BY RECOMMENDATION
                            </p>
                            <p className="text-[12px] md:text-[1.5rem] lg:text-[32px] xl:text-[3rem] 2xl:text-[3.5rem] md:tracking-wide xl:tracking-widest text-stroke-1 text-stroke-white text-transparent">
                                WE CHOOSE TO BE DISCOVERED
                            </p>
                        </div>
                        <div
                            ref={redBracket}
                            className="opacity-0"
                        >
                            <img
                                src={redOutlineBracket}
                                alt="Red bracket"
                                className="transform -scale-x-100 h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative flex flex-row h-[50%] w-full">
                {/* White Bracket and Values */}
                <div className="z-10 absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full flex flex-row xl:gap-10 py-1 md:py-2 lg:py-4 xl:py-5 px-4 md:px-6 lg:px-8 xl:px-10">
                        <div ref={whiteBracket} className="opacity-0">
                            <img
                                src={whiteOutlineBracket}
                                alt="White bracket"
                                className="h-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-4 text-start">
                            {/* Ambition */}
                            <div className="flex flex-row items-center gap-1 leading-none">
                                <p
                                    ref={ambitionText}
                                    className="text-[1.25rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[6rem] tracking-wide md:tracking-wider xl:tracking-extra-wider font-[900] opacity-0"
                                >
                                    AMBITION
                                </p>
                                <div
                                    ref={ambitionSlider}
                                    className="opacity-0"
                                >
                                    <img
                                        src="/images/brackets/white-outline-bracket.png"
                                        alt="White outline bracket"
                                        className="h-10 xl:h-16 2xl:h-28 w-auto transform -scale-x-100" // Adjust based on above
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* Empowerment */}
                            <div className="flex flex-row items-center gap-1">
                                <p
                                    ref={empowermentText}
                                    className="text-[1.25rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[6rem] tracking-wide md:tracking-wider xl:tracking-extra-wider font-[900] opacity-0"
                                >
                                    EMPOWERMENT
                                </p>
                                <div
                                    ref={empowermentSlider}
                                    className="opacity-0"
                                >
                                    <img
                                        src="/images/brackets/white-outline-bracket.png"
                                        alt="White outline bracket"
                                        className="h-10 xl:h-16 2xl:h-28 w-auto transform -scale-x-100" // Adjust based on above
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            {/* Trustworthiness */}
                            <div className="flex flex-row items-center gap-1 text-start">
                                <p
                                    ref={trustworthinessText}
                                    className="text-[1.25rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[6rem] tracking-wide md:tracking-wider xl:tracking-extra-wider font-[900] opacity-0 leading-none"
                                >
                                    TRUSTWORTHINESS
                                </p>
                                <div
                                    ref={trustworthinessSlider}
                                    className="opacity-0"
                                >
                                    <img
                                        src="/images/brackets/white-outline-bracket.png"
                                        alt="White outline bracket"
                                        className="h-10 xl:h-16 2xl:h-28 w-auto transform -scale-x-100" // Adjust based on above
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Values;
