import { useSectionStore } from "@store/useSectionStore";
import anime, { AnimeTimelineInstance } from "animejs";
import React from "react";
import { useEffect, useRef } from "react";

const Team = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

    // Refs for the bars and title
    const leftBarRef = useRef<HTMLDivElement>(null);
    const rightBarRef = useRef<HTMLDivElement>(null);
    const teamTitleRef = useRef<HTMLDivElement>(null);

    // Create refs dynamically for team members (6 members in this case)
    const membersRef = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
    if (membersRef.current.length !== 6) {
        // Initialize refs if not already done
        membersRef.current = Array(6)
            .fill(null)
            .map(() => React.createRef<HTMLDivElement>());
    }

    // Refs for animations
    const entryAnimationRef = useRef<AnimeTimelineInstance | null>(null);
    const exitAnimationRef = useRef<AnimeTimelineInstance | null>(null);
    const animationsActive = useRef(false);

    // Effects
    useEffect(() => {
        if (currentSection === 2 && animationsEnabled && !animationsActive.current) {
            animationsActive.current = true;

            requestAnimationFrame(() => {
                // Entry Animations
                entryAnimationRef.current = anime.timeline({
                    autoplay: true,
                    easing: 'easeOutQuad',
                })
                // Animate the left bar
                .add({
                    targets: leftBarRef.current,
                    opacity: [0, 1],
                    translateX: ['-400%', '0%'],
                    duration: 1000,
                    begin: function () {
                        // Animate the right bar at the beginning of left bar animation
                        anime({
                            targets: rightBarRef.current,
                            translateX: ['400%', '0%'],
                            duration: 1000,
                            easing: 'easeOutQuad',
                        });
                    },
                })
                // Animate the team title
                .add({
                    targets: teamTitleRef.current,
                    opacity: [0, 1],
                    scale: [0.1, 1],
                    duration: 1000,
                }, '-=500') // Offset the team title animation
                // Animate the team members with stagger
                .add({
                    targets: membersRef.current.map(ref => ref.current),
                    opacity: [0, 1],
                    translateY: ['50%', '0%'],
                    duration: 300,
                    delay: anime.stagger(200), // Stagger the animation of each member
                });
            });

        } else if ((currentSection !== 2 || !animationsEnabled) && animationsActive.current) {
            animationsActive.current = false;

            // Pause any ongoing entry animations
            if (entryAnimationRef.current) {
                entryAnimationRef.current.pause();
            }

            requestAnimationFrame(() => {
                // Exit Animations
                exitAnimationRef.current = anime.timeline({
                    autoplay: true,
                    easing: 'easeInOutQuad',
                })
                // Animate the team members exiting with stagger
                .add({
                    targets: membersRef.current.map(ref => ref.current),
                    opacity: [1, 0],
                    translateY: ['0%', '50%'],
                    duration: 500,
                    delay: anime.stagger(200, { from: 'last' }), // Stagger the animation in reverse order
                })
                // Animate the team title exiting
                .add({
                    targets: teamTitleRef.current,
                    opacity: [1, 0],
                    scale: [1, 0.5],
                    duration: 500,
                })
                // Animate the left bar exiting
                .add({
                    targets: leftBarRef.current,
                    opacity: [1, 0],
                    translateX: ['0%', '-200%'],
                    duration: 1000,
                    begin: function () {
                        // Animate the right bar at the beginning of left bar exit animation
                        anime({
                            targets: rightBarRef.current,
                            translateX: ['0%', '200%'],
                            duration: 1000,
                            easing: 'easeInOutExpo',
                        });
                    },
                });
            });
        }

        return () => {
            // Cleanup animations on unmount
            if (entryAnimationRef.current) {
                entryAnimationRef.current.pause();
            }
            if (exitAnimationRef.current) {
                exitAnimationRef.current.pause();
            }
            anime.remove([
                leftBarRef.current,
                rightBarRef.current,
                teamTitleRef.current,
                ...membersRef.current.map(ref => ref.current),
            ]);
        };
    }, [currentSection, animationsEnabled]);

    return (
        <div className="flex flex-col bg-white w-full h-full">
            <div className="flex flex-row gap-2 h-[10%] w-full justify-between items-center">
                <div
                    ref={leftBarRef}
                    className="bg-black h-12 w-[30%] opacity-0 translate-x-[-200%]"
                    style={{
                        transition: 'opacity 1s ease-out, transform 1s ease-out',
                    }}
                />
                <div
                    ref={teamTitleRef}
                    className="flex flex-row items-center justify-center gap-1 lg:gap-2 text-end opacity-0 scale-50"
                    style={{
                        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                    }}
                >
                    <img
                        src="/images/logos/gray-brackets-r.png"
                        alt="Gray brackets logo"
                        className="w-8 h-8 md:h-12 md:w-12 lg:w-16 lg:h-16"
                    />
                    <p className="text-transparent text-stroke-3 text-stroke-customRed tracking-extra-wide font-bold text-[32px] md:text-[40px] lg:text-[56px]">
                        TEAM
                    </p>
                </div>
                <div
                    ref={rightBarRef}
                    className="bg-white border-l-2 border-t-2 border-b-2 border-customRed h-12 w-[30%] translate-x-[200%]"
                    style={{
                        transition: 'transform 1s ease-out',
                    }}
                />
            </div>

            {/* Team Members */}
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-10">
                    {membersRef.current.map((ref, index) => (
                        <div
                            ref={ref}
                            key={index}
                            className="flex flex-col items-center gap-2 opacity-0 translate-y-[50%]"
                            style={{
                                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                            }}
                        >
                            {/* Card Image */}
                            <div className="w-36 md:w-56 h-36 md:h-56 lg:w-52 lg:h-52 2xl:w-96 2xl:h-96 rounded-xl border-2 border-black justify-center items-center flex bg-[white] shadow-2xl text-black font-bold">
                                Image
                            </div>
                            {/* Name and Position */}
                            <div className="flex flex-row gap-1 lg:gap-2 items-center justify-between w-full lg:w-4/5">
                                <div>
                                    <img
                                        src="/images/brackets/full-gray-bracket.png"
                                        alt="Solid gray bracket"
                                        className="h-6 lg:h-20 w-auto"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-1 lg:gap-2 text-shadow-black">
                                    <p className="text-[12px] lg:text-[24px] font-bold text-customRed">
                                        Name
                                    </p>
                                    <p className="text-[8px] lg:text-[16px] text-customRed">
                                        Position
                                    </p>
                                </div>
                                <div>
                                    <img
                                        src="/images/brackets/full-gray-bracket.png"
                                        alt="Solid gray bracket"
                                        className="h-6 lg:h-20 w-auto"
                                        style={{ rotate: '180deg' }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default Team;
