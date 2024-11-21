// Resources.tsx
import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import whiteBracketsLogo from "/images/logos/white-brackets-r.png";

const Resources = () => {
    // Store
    const { currentSection, animationsEnabled, isScrolling, setCurrentSection } = useSectionStore();

    // Navigation
    const navigate = useNavigate();
    const handleMore = () => {
        setCurrentSection(2);
        navigate('/what-we-do');
    };
    const handleBusiness = () => {
        setCurrentSection(1);
        navigate('/contact');
    };

    // Refs
    const imageTopRef = useRef<HTMLDivElement>(null);
    const imageBottomRef = useRef<HTMLDivElement>(null);
    const leftBracketRef = useRef<HTMLParagraphElement>(null);
    const rightBracketRef = useRef<HTMLParagraphElement>(null);
    const businessTextRef = useRef<HTMLDivElement>(null);
    const workTogetherPillRef = useRef<HTMLDivElement>(null);

    // Ref to track if animations are active
    const animationsActive = useRef(false);

    // Business Text for Typewriter Effect
    const businessText = "LET'S TALK BUSINESS";

    // Handlers and Functions
    const handleBackToTop = () => {
        setCurrentSection(1);
    };

    // Entry and Exit Animations
    useEffect(() => {
        if (currentSection === 7 && animationsEnabled && !isScrolling) {
            if (!animationsActive.current) {
                animationsActive.current = true;

                // Entry animations
                anime.timeline({ loop: false })
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
                        // Typewriter effect
                        opacity: [1, 1],
                        duration: 1000,
                        easing: 'linear',
                        update: function (anim) {
                            const progress = Math.round((anim.progress / 100) * businessText.length);
                            if (businessTextRef.current) {
                                businessTextRef.current.innerHTML = businessText.slice(0, progress);
                            }
                        },
                    })
                    .add({
                        targets: workTogetherPillRef.current,
                        opacity: [0, 1],
                        easing: 'linear',
                        duration: 500,
                    });
            }
        } else if (animationsActive.current && isScrolling) {
            animationsActive.current = false;

            // Exit animations
            anime.timeline({ loop: false })
                .add({
                    targets: [businessTextRef.current, workTogetherPillRef.current],
                    opacity: [1, 0],
                    easing: 'linear',
                    duration: 250,
                    complete: () => {
                        if (businessTextRef.current) {
                            businessTextRef.current.innerHTML = '';
                        }
                    },
                }, 0) // Start at the beginning
                .add({
                    targets: [leftBracketRef.current, rightBracketRef.current],
                    opacity: [1, 0],
                    easing: 'linear',
                    duration: 250,
                }, 0) // Start at the beginning
                .add({
                    targets: imageBottomRef.current,
                    opacity: [1, 0],
                    easing: 'linear',
                    duration: 250,
                }, 0) // Start at the beginning
                .add({
                    targets: imageTopRef.current,
                    opacity: [1, 0],
                    easing: 'linear',
                    duration: 250,
                }, 0); // Start at the beginning
        }

        return () => {
            // Cleanup any running animations on unmount
            anime.remove([
                imageTopRef.current,
                imageBottomRef.current,
                leftBracketRef.current,
                rightBracketRef.current,
                businessTextRef.current,
                workTogetherPillRef.current,
            ]);
        };

        // We remove the cleanup function here
    }, [currentSection, animationsEnabled, isScrolling]);

    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full py-5 lg:py-8">
            {/* Laser Overlay */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="laser-border w-full h-full"></div>
            </div>

            {/* Header and Button */}
            <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 bg-[#212121] h-10 flex items-center justify-center px-5 translate-y-[5%] lg:translate-y-[25%] w-3/4 gap-1 lg:gap-5">
                <img src={whiteBracketsLogo} alt="White brackets logo" className="h-6 md:h-12 lg:h-12 w-auto" />
                <p className="text-stroke-1 md:text-stroke-3 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[24px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-start lg:tracking-extra-wider">
                    Resources
                </p>
            </div>
            <div className="absolute z-10 top-0 right-[12%] lg:right-[15%] transform translate-x-1/2 translate-y-[25%]">
                <button
                    className="bg-white rounded-2xl text-customRed border border-customRed text-sm lg:text-lg lg:rounded-3xl px-2 py-1 lg:px-4 lg:py-2 text-center cursor-pointer hover:bg-customRed hover:text-white transition-colors duration-300"
                    onClick={handleMore} // Replace with your desired action
                >
                    <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold tracking-extra-wide">
                        MORE
                    </p>
                </button>
            </div>

            {/* Main Content with White Border */}
            <div className="relative border-4 border-white w-full h-full flex flex-col items-center justify-center bg-transparent p-5 gap-3 pt-7 lg:pt-10">
                {/* Image Top */}
                <div
                    ref={imageTopRef}
                    className="flex flex-col items-center justify-center border-2 border-white w-full h-2/5 bg-[gray]"
                    style={{ opacity: animationsEnabled ? 0 : 1 }}
                ></div>
                {/* Image Bottom */}
                <div
                    ref={imageBottomRef}
                    className="flex flex-col items-center justify-center border-2 border-white w-full h-2/5 bg-[gray]"
                    style={{ opacity: animationsEnabled ? 0 : 1 }}
                ></div>
                {/* Business Text and Brackets */}
                <div className="flex flex-col items-center justify-center w-full h-1/5">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <p
                            ref={leftBracketRef}
                            style={{ opacity: animationsEnabled ? 0 : 1 }}
                        >
                            <img
                                src="/images/brackets/red-outline-bracket.png"
                                alt="Red Outline Bracket"
                                className="h-20 w-auto"
                            />
                        </p>
                        <p
                            ref={businessTextRef}
                            className="text-white text-[20px] lg:text-[50px]"
                            style={{ opacity: animationsEnabled ? 0 : 1 }}
                        >
                            {animationsEnabled ? '' : businessText}
                        </p>
                        <p
                            ref={rightBracketRef}
                            style={{ opacity: animationsEnabled ? 0 : 1 }}
                        >
                            <img
                                src="/images/brackets/red-outline-bracket.png"
                                alt="Red Outline Bracket"
                                className="h-20 w-auto transform -scale-x-100"
                            />
                        </p>
                    </div>
                    <div
                        ref={workTogetherPillRef}
                        className="mt-0"
                        style={{ opacity: animationsEnabled ? 0 : 1 }}
                    >
                        <button
                            className="bg-customRed rounded-2xl text-white text-sm lg:text-lg lg:rounded-3xl px-2 py-1 lg:px-4 lg:py-2 text-center cursor-pointer hover:bg-white hover:text-customRed transition-colors duration-300"
                            onClick={handleBusiness} // Replace with your desired action
                        >
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold tracking-extra-wide">
                                LET'S WORK TOGETHER
                            </p>
                        </button>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={handleBackToTop}
                className="absolute bottom-5 left-0 z-30 bg-customRed text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-customRed transition-colors duration-300"
                aria-label="Back to Top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 lg:h-6 lg:w-6"
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
