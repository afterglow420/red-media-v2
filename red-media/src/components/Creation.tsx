import { useSectionStore } from "@store/useSectionStore";
import whiteOutlineBracket from "/images/brackets/white-outline-bracket.png";
import { useEffect, useRef } from "react";
import anime from "animejs";
import useLazyBackgroundImage from "@hooks/useLazyBackgroundImage";

const Creation = () => {
    // Store
    const { currentSection, animationsEnabled, isScrolling } = useSectionStore();

    // Refs
    const redElement = useRef<HTMLDivElement>(null);
    const imageElement = useRef<HTMLDivElement>(null);
    const pillsContainer = useRef<HTMLDivElement>(null);
    const animationsActive = useRef(false);

    // Hooks 
    const backgroundImage = useLazyBackgroundImage(
        imageElement,
        "/images/bg/creation-meets-reality.jpg"
    );

    // Effects
    useEffect(() => {
        if (currentSection === 2 && animationsEnabled && !isScrolling) {
            // Set the animations as active
            animationsActive.current = true;

            requestAnimationFrame(() => {
                // Entry animations
                anime({
                    targets: imageElement.current,
                    opacity: [0, 1],
                    translateX: ["100vw", "0"],
                    duration: 1500,
                    easing: "easeOutExpo",
                });

                anime({
                    targets: redElement.current,
                    opacity: [0, 1],
                    translateX: ["-100vw", "0"],
                    duration: 1500,
                    easing: "easeOutExpo",
                });

                anime({
                    targets: pillsContainer.current,
                    opacity: [0, 1],
                    duration: 500,
                    delay: 1500,
                    easing: "easeInOutSine",
                });
            });
        } else if (animationsActive.current) {
            // Conditions no longer met; initiate exit animations
            animationsActive.current = false;

            requestAnimationFrame(() => {
                // Exit animations
                anime({
                    targets: imageElement.current,
                    opacity: [1, 0],
                    translateX: ["0", "100vw"],
                    duration: 500,
                    easing: "easeInOutSine",
                    complete: () => {
                        if (imageElement.current) {
                            imageElement.current.style.opacity = "0";
                            imageElement.current.style.transform = "translateX(100vw)";
                        }
                    },
                });

                anime({
                    targets: redElement.current,
                    opacity: [1, 0],
                    translateX: ["0", "-100vw"],
                    duration: 500,
                    easing: "easeInOutSine",
                    complete: () => {
                        if (redElement.current) {
                            redElement.current.style.opacity = "0";
                            redElement.current.style.transform = "translateX(-100vw)";
                        }
                    },
                });

                anime({
                    targets: pillsContainer.current,
                    opacity: [1, 0],
                    duration: 100,
                    easing: "easeInOutSine",
                    complete: () => {
                        if (pillsContainer.current) {
                            pillsContainer.current.style.opacity = "0";
                        }
                    },
                });
            });
        }

        return () => {
            // Remove any running animations
            anime.remove([imageElement.current, redElement.current, pillsContainer.current]);
        };
    }, [currentSection, animationsEnabled, isScrolling]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="relative flex flex-row h-[70%] w-full">
                {/* Red Element */}
                <div
                    ref={redElement}
                    className="z-10 absolute top-0 left-0 bg-customRed w-[50%] h-[70%] opacity-0"
                    style={{ clipPath: "polygon(0 0, 89% 0, 100% 100%, 0 100%)" }}
                >
                    {/* Content inside redElement */}
                    <div className="relative w-[95%] h-full flex flex-row justify-between items-center py-1 md:py-2 lg:py-4 xl:py-5 px-1 md:px-2 lg:px-4 xl:px-5">
                        <img
                            src={whiteOutlineBracket}
                            alt="White bracket"
                            className="h-4/5"
                            loading="lazy"
                        />
                        <div className="absolute right-0 top-[50%] translate-y-[-50%] flex flex-col items-end justify-center gap-5">
                            <p className="text-[26px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] font-[900] mr-3 lg:mr-8">
                                WHERE
                            </p>
                            <p className="text-[26px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] font-[900] mr-1 lg:mr-1">
                                MEETS
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Element */}
                <div
                    ref={imageElement}
                    className="z-5 absolute top-0 right-0 w-[75%] h-full opacity-0"
                    style={{
                        clipPath: "polygon(4% 0, 100% 0, 100% 100%, 14% 100%)",
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Content inside imageElement */}
                    <div className="relative w-[70%] h-[70%] flex flex-row items-center justify-end gap-2 py-1 md:py-2 lg:py-4 xl:py-5 px-1 md:px-2 lg:px-4 xl:px-5 ml-auto">
                        <div className="absolute left-0 top-[50%] translate-y-[-50%] flex flex-col items-start justify-center gap-5">
                            <p className="text-[26px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] font-[900]">
                                CREATION
                            </p>
                            <p className="text-[26px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] font-[900] ml-2 lg:ml-7">
                                REALITY
                            </p>
                        </div>
                        <img
                            src={whiteOutlineBracket}
                            alt="White bracket"
                            className="transform -scale-x-100 h-4/5"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Pills Container */}
                <div
                    ref={pillsContainer}
                    className="absolute bottom-[15%] left-[50%] translate-x-[-50%] w-full h-20 flex justify-around items-center opacity-0"
                >
                    <div className="flex-1 flex justify-center">
                        <button
                            className="bg-white rounded-2xl text-customRed border text-sm lg:text-lg lg:rounded-3xl p-1 px-4 py-2 text-center cursor-pointer hover:bg-customRed hover:text-white transition-colors duration-300"
                            onClick={() => console.log("FIND OUT HOW button clicked")}
                        >
                            FIND OUT HOW
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <button
                            className="bg-customRed rounded-2xl text-white text-sm lg:text-lg lg:rounded-3xl p-1 px-4 py-2 text-center cursor-pointer hover:bg-white hover:text-customRed transition-colors duration-300"
                            onClick={() => console.log("CONTACT US button clicked")}
                        >
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creation;
