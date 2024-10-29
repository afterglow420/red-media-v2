import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";

const AvailableLogistics = () => {
    // Store 
    const currentSection = useSectionStore((state) => state.currentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

    // Refs
    const leftBracketRef = useRef<HTMLParagraphElement>(null);
    const rightBracketRef = useRef<HTMLParagraphElement>(null);
    const businessTextRef = useRef<HTMLDivElement>(null);
    const workTogetherPillRef = useRef<HTMLDivElement>(null);

    // Effects
    useEffect(() => {
        // Only animate if the current section is 7
        if (currentSection !== 3) return;

        const businessText = "LET'S TALK BUSINESS";

        // Initialize business text as empty for typewriter effect
        if (businessTextRef.current) {
            businessTextRef.current.innerHTML = ''; // Start with an empty string
        }

        // If animations are disabled, set elements to their final state immediately
        if (!animationsEnabled) {
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

        // Create the animation timeline
        anime.timeline({ loop: false })
            // Fade in the left bracket
            .add({
                targets: leftBracketRef.current,
                opacity: [0, 1],
                easing: 'linear',
                duration: 500,
                delay: 200,
            })
            // Fade in the right bracket, overlapping the left bracket animation by 200ms
            .add({
                targets: rightBracketRef.current,
                opacity: [0, 1],
                easing: 'linear',
                duration: 500,
            }, '-=200') // Overlap by 200ms
            // Typewriter effect for business text
            .add({
                targets: businessTextRef.current,
                update: function (anim) {
                    const progress = Math.round((anim.progress / 100) * businessText.length);
                    if (businessTextRef.current) {
                        businessTextRef.current.innerHTML = businessText.slice(0, progress);
                    }
                },
                easing: 'linear',
                duration: 100 * businessText.length, // 100ms per character
            })
            // Fade in the "LET'S WORK TOGETHER" button
            .add({
                targets: workTogetherPillRef.current,
                opacity: [0, 1],
                easing: 'linear',
                duration: 500,
            });
    }, [currentSection, animationsEnabled]); // Dependencies
    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full pb-5 lg:pb-8">
            <div className="relative border-4 border-b-white border-r-white border-l-white border-t-0 w-full h-full flex flex-col items-center justify-center bg-transparent">
                <div className="relative flex flex-col items-center justify-center w-full h-full bg-[gray]">
                    Image
                    <div
                        className="absolute top-[100%] lg:top-[50%] translate-y-[-100%] lg:translate-y-[-50%] -left-1 w-4/5 lg:w-2/5 bg-customRed h-3/5 lg:h-1/2 z-20 flex flex-col items-center justify-center"
                        style={{
                            clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0 100%)',

                        }}
                    >
                        <div className="w-full pr-7 lg:pr-12 pl-2 text-white font-bold text-start text-[10px] lg:text-[14px]">
                            <p>
                                Our logistics expertise also extends to the assembly of all components, ensuring that every element is seamlessly integrated into the campaign. Whether it's coordinating the implementation of independent activations,
                                managing logistics for multi-element experiences or optimizing resource allocation for maximum efficiency, we handle assembly complexity with professionalism and skill.

                            </p>
                        </div>

                    </div>
                    {/* Top Gradient */}
                    <div
                        className="absolute top-0 left-0 w-full h-[45%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, #212121, rgba(45, 45, 45, 0))',
                        }}
                    />

                    {/* Bottom Gradient */}
                    <div
                        className="absolute bottom-0 left-0 w-full h-[45%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(to top, #212121, rgba(45, 45, 45, 0))',
                        }}
                    />
                </div>
                <div className="relative flex flex-col items-center justify-center w-full h-full bg-[gray]">
                    Image
                    <div
                        className="absolute bottom-[0%] lg:top-[50%] translate-y-[0%] lg:translate-y-[-50%] -right-[6px] w-4/5 lg:w-2/5 bg-customRed h-3/5 lg:h-1/2 z-20 flex flex-col items-center justify-center text-center"
                        style={{
                            clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0 100%)',

                        }}
                    >
                        <div className="w-full pr-2 pl-7 lg:pl-12 text-white font-bold text-end text-[10px] lg:text-[14px]">
                            <p>
                                The assembly and distribution of the campaign is carried out with the help of a fleet of 6 specialized vans, equipped with GPS system for monitoring and increased safety in transport.

                            </p>
                            <p>
                                Our coverage is not limited to one location: it is designed to extend across the country.

                            </p>
                        </div>
                    </div>
                    {/* Top Gradient */}
                    <div
                        className="absolute top-0 left-0 w-full h-[45%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, #212121, rgba(45, 45, 45, 0))',
                        }}
                    />

                    {/* Bottom Gradient */}
                    <div
                        className="absolute bottom-0 left-0 w-full h-[45%] pointer-events-none"
                        style={{
                            background: 'linear-gradient(to top, #212121, rgba(45, 45, 45, 0))',
                        }}
                    />
                </div>
            </div>
            <div className="w-full h-[20%] flex flex-col items-center justify-center text-white">
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
                            onClick={() => console.log("LET'S TALK BUSINESS button clicked")}
                        >
                            <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold tracking-extra-wide">
                                LET'S WORK TOGETHER
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableLogistics;