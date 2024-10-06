// Resources.tsx
import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";

const Resources = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const setCurrentSection = useSectionStore((state) => state.setCurrentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

    // Refs
    const imageTopRef = useRef<HTMLDivElement>(null);
    const imageBottomRef = useRef<HTMLDivElement>(null);
    const leftBracketRef = useRef<HTMLParagraphElement>(null);
    const rightBracketRef = useRef<HTMLParagraphElement>(null);
    const businessTextRef = useRef<HTMLDivElement>(null);
    const workTogetherPillRef = useRef<HTMLDivElement>(null);

    // Handlers and Functions
    const handleBackToTop = () => {
        setCurrentSection(1);
    };

    // Effects
    useEffect(() => {
        if (currentSection !== 7) return;

        const businessText = "LET'S TALK BUSINESS";

        if (businessTextRef.current) {
            businessTextRef.current.innerHTML = ''; // Start with an empty string
        }

        if (!animationsEnabled) {
            // Set elements to their final state immediately
            if (imageTopRef.current) {
                anime.set(imageTopRef.current, { opacity: 1 });
            }
            if (imageBottomRef.current) {
                anime.set(imageBottomRef.current, { opacity: 1 });
            }
            if (leftBracketRef.current) {
                anime.set(leftBracketRef.current, { opacity: 1 });
            }
            if (rightBracketRef.current) {
                anime.set(rightBracketRef.current, { opacity: 1 });
            }
            if (businessTextRef.current) {
                businessTextRef.current.innerHTML = businessText;
            }
            if (workTogetherPillRef.current) {
                anime.set(workTogetherPillRef.current, { opacity: 1 });
            }
            return;
        }

        // Animation code
        anime
            .timeline({ loop: false })
            .add({
                targets: imageTopRef.current,
                opacity: [0, 1],
                easing: 'linear',
                duration: 500,
                delay: 200,
            })
            .add(
                {
                    targets: imageBottomRef.current,
                    opacity: [0, 1],
                    easing: 'linear',
                    duration: 500,
                },
                '-=200' // Starts 200ms before the previous animation ends
            )
            .add({
                targets: [leftBracketRef.current, rightBracketRef.current],
                opacity: [0, 1],
                easing: 'linear',
                duration: 500,
            })
            .add({
                targets: businessTextRef.current,
                update: function (anim) {
                    const progress = Math.round((anim.progress / 100) * businessText.length);
                    if (businessTextRef.current) {
                        businessTextRef.current.innerHTML = businessText.slice(0, progress);
                    }
                },
                easing: 'linear',
                duration: 100 * businessText.length,
            })
            .add({
                targets: workTogetherPillRef.current,
                opacity: [0, 1],
                easing: 'linear',
                duration: 500,
            });
    }, [currentSection, animationsEnabled]);

    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full py-5 lg:py-8">
            {/* Laser Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="laser-border w-full h-full"></div>
            </div>

            {/* Header and Button */}
            <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 bg-[#212121] h-10 flex items-center justify-center px-5 translate-y-[5%] lg:translate-y-[25%] w-3/4">
                <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed text-transparent font-bold text-[24px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-start lg:tracking-extra-wider">
                    Resources
                </p>
            </div>
            <div className="absolute z-10 top-0 right-[10%] transform translate-x-1/2 translate-y-[25%]">
                <button
                    className="bg-white rounded-2xl text-customRed border border-customRed text-sm lg:text-lg lg:rounded-3xl px-2 py-1 lg:px-4 lg:py-2 text-center cursor-pointer hover:bg-customRed hover:text-white transition-colors duration-300"
                    onClick={() => console.log('MORE button clicked')} // Replace with your desired action
                >
                    <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold tracking-extra-wide">
                        MORE
                    </p>
                </button>
            </div>

            {/* Main Content with White Border */}
            <div className="relative border-4 border-white w-full h-full flex flex-col items-center justify-center bg-transparent p-5 gap-3 pt-7 lg:pt-10">
                <div
                    ref={imageTopRef}
                    className="flex flex-col items-center justify-center border-2 border-white w-full h-2/5 bg-[gray]"
                    style={{ opacity: animationsEnabled ? 0 : 1 }}
                ></div>
                <div
                    ref={imageBottomRef}
                    className="flex flex-col items-center justify-center border-2 border-white w-full h-2/5 bg-[gray]"
                    style={{ opacity: animationsEnabled ? 0 : 1 }}
                ></div>
                <div className="flex flex-col items-center justify-center w-full h-1/5">
                    <div className="flex flex-row items-center justify-center">
                        <p
                            ref={leftBracketRef}
                            className="text-transparent text-stroke-2 text-stroke-customRed font-bold text-[80px] lg:text-[120px]"
                            style={{ opacity: animationsEnabled ? 0 : 1 }}
                        >
                            [
                        </p>
                        <p
                            ref={businessTextRef}
                            className="mt-5 text-white text-[20px] lg:text-[50px] max-lg:mb-2"
                        >
                            {animationsEnabled ? '' : "LET'S TALK BUSINESS"}
                        </p>
                        <p
                            ref={rightBracketRef}
                            className="text-transparent text-stroke-2 text-stroke-customRed font-bold text-[80px] lg:text-[120px]"
                            style={{ opacity: animationsEnabled ? 0 : 1 }}
                        >
                            ]
                        </p>
                    </div>
                    <div
                        ref={workTogetherPillRef}
                        style={{ opacity: animationsEnabled ? 0 : 1 }}
                    >
                        <button
                            className="bg-customRed rounded-2xl text-white text-sm lg:text-lg lg:rounded-3xl px-2 py-1 lg:px-4 lg:py-2 text-center cursor-pointer hover:bg-white hover:text-customRed transition-colors duration-300"
                            onClick={() => console.log("LET'S TALK BUSINESS button clicked")} // Replace with your desired action
                        >
                            <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold tracking-extra-wide">
                                LET'S WORK TOGETHER
                            </p>
                        </button>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={handleBackToTop}
                className="absolute bottom-4 left-4 z-30 bg-customRed text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-customRed transition-colors duration-300"
                aria-label="Back to Top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Resources;
