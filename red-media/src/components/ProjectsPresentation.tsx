import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";
import Navigation from "./Navigation";

const ProjectsPresentation = () => {
    // Store 
    const { currentSection, animationsEnabled } = useSectionStore();

    // Refs
    const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

    const completeExperiencesRef = useRef<HTMLParagraphElement | null>(null);

    const leftBracketRef = useRef<HTMLImageElement | null>(null);
    const rightBracketRef = useRef<HTMLImageElement | null>(null);

    // Ref for "LET'S WORK TOGETHER" button (optional)
    // const workTogetherButtonRef = useRef<HTMLButtonElement | null>(null);

    // Ref to track if animation has been played
    const animationPlayed = useRef(false);

    // Animation Effect
    useEffect(() => {

        // Trigger animations only when on section 1 and not already played
        if (currentSection === 1 && !animationPlayed.current) {
            if (!animationsEnabled) return; // Skip animations if disabled
            animationPlayed.current = true; // Mark animation as played

            const businessText = "COMPLETE EXPERIENCES";

            const timeline = anime.timeline({ loop: false });

            // Add a 750ms delay before starting animations
            timeline.add({
                targets: paragraphsRef.current.filter((el) => el !== null),
                opacity: [0, 1],
                easing: "easeInExpo",
                duration: 600,
                delay: anime.stagger(600), // Stagger delay for paragraphs
                offset: '+=750', // 750ms delay before this step starts
                begin: () => console.log("Paragraphs Fade-In Started"),
            });

            // Fade in brackets overlapping with previous animations
            timeline.add({
                targets: [leftBracketRef.current, rightBracketRef.current],
                opacity: [0, 1],
                easing: "easeInExpo",
                duration: 500,
                offset: '-=400', // Starts 400ms before the previous animation ends
                begin: () => console.log("Brackets Fade-In Started"),
            });

            // Typing effect for "COMPLETE EXPERIENCES"
            timeline.add({
                targets: completeExperiencesRef.current,
                opacity: [0, 1],
                easing: "linear",
                duration: 500,
                begin: function () {
                    console.log("Typing Effect Started");
                    if (completeExperiencesRef.current) {
                        completeExperiencesRef.current.innerHTML = ""; // Reset text
                        let progress = 0;
                        const typingEffect = setInterval(() => {
                            if (progress < businessText.length && completeExperiencesRef.current) {
                                completeExperiencesRef.current.innerHTML += businessText.charAt(progress);
                                progress++;
                            } else {
                                clearInterval(typingEffect);
                                console.log("Typing Effect Completed");
                            }
                        }, 100); // Typing speed (100ms per character)
                    }
                },
            });

            // Optional: Fade in "LET'S WORK TOGETHER" button if present
            /*
            timeline.add({
                targets: workTogetherButtonRef.current,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 500,
                delay: 300,
                begin: () => console.log("Button Fade-In Started"),
            });
            */
        }
    }, [currentSection, animationsEnabled]);

    return (
        <div className="flex flex-col h-full w-full">
            <Navigation />
            <div className="flex flex-col items-center justify-center h-full w-full">
                {/* Animated Paragraphs */}
                <div className="flex flex-col items-center justify-center text-center h-full w-full leading-loose text-shadow-white">
                    <p
                        ref={(el) => (paragraphsRef.current[0] = el)}
                        className={`text-white font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] pb-5 ${animationsEnabled ? "opacity-0" : "opacity-100"}`}
                    >
                        IN THE LAST 10 YEARS
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[1] = el)}
                        className={`text-white font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] pb-5 ${animationsEnabled ? "opacity-0" : "opacity-100"}`}
                    >
                        WE HAD THE CHANCE TO DELIVER AMAZING PROJECTS.
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[2] = el)}
                        className={`text-white font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] pb-5 ${animationsEnabled ? "opacity-0" : "opacity-100"}`}
                    >
                        BUT NOW IT'S TIME TO TAKE THE NEXT STEP
                    </p>
                    <p
                        ref={(el) => (paragraphsRef.current[3] = el)}
                        className={`text-white font-bold text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] pb-5 ${animationsEnabled ? "opacity-0" : "opacity-100"}`}
                    >
                        AND DELIVER:
                    </p>
                </div>

                {/* Animated Brackets and Main Text */}
                <div className="flex flex-row items-center gap-0 h-2/5 w-full justify-center">
                    {/* Left Bracket */}
                    <img
                        ref={leftBracketRef}
                        src="/images/brackets/white-outline-bracket.png"
                        alt="White outline bracket"
                        className={`h-32 lg:h-72 w-auto opacity-0 ${animationsEnabled ? "opacity-0" : "opacity-100"}`}
                    />

                    {/* "COMPLETE EXPERIENCES" Text */}
                    <p
                        ref={completeExperiencesRef}
                        className={`text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[30px] md:text-[36px] lg:text-[44px] xl:text-[56px] text-shadow-md ${animationsEnabled ? "opacity-0" : "opacity-100"} text-center`}
                    >
                        {animationsEnabled ? "" : "COMPLETE EXPERIENCES"}
                    </p>

                    {/* Right Bracket */}
                    <img
                        ref={rightBracketRef}
                        src="/images/brackets/white-outline-bracket.png"
                        alt="White outline bracket"
                        className={`rotate-180 h-32 lg:h-72 w-auto opacity-0 ${animationsEnabled ? "opacity-0" : "opacity-100"}`}
                    />
                </div>

                {/* Optional: "LET'S WORK TOGETHER" Button */}
                {/* Uncomment and add a ref if you have a button to animate */}
                {/* <div className="mt-10">
                            <button
                                ref={workTogetherButtonRef}
                                className="bg-customRed rounded-2xl text-white text-sm lg:text-lg lg:rounded-3xl px-2 py-1 lg:px-4 lg:py-2 text-center cursor-pointer hover:bg-white hover:text-customRed transition-colors duration-300 opacity-0"
                                onClick={() => console.log("LET'S WORK TOGETHER button clicked")}
                            >
                                <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold tracking-extra-wide">
                                    LET'S WORK TOGETHER
                                </p>
                            </button>
                        </div> */}
            </div>
        </div>
    );
};

export default ProjectsPresentation;