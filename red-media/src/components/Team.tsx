import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";

const Team = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

    // Refs for the bars and title
    const leftBarRef = useRef(null);
    const rightBarRef = useRef(null);
    const teamTitleRef = useRef(null);

    // Create refs dynamically for team members (6 members in this case)
    const membersRef = useRef(Array(6).fill(null).map(() => useRef(null)));

    // Effects
    useEffect(() => {
        if (currentSection !== 2) return;
        if (!animationsEnabled) return;

        const timeline = anime.timeline({ loop: false });

        timeline
            .add({
                targets: leftBarRef.current,
                opacity: [0, 1],
                translateX: ['-200%', '0%'],
                easing: 'easeOutExpo',
                duration: 1000,
                begin: function () {
                    anime({
                        targets: rightBarRef.current,
                        translateX: ['200%', '0%'],
                        easing: 'easeOutExpo',
                        duration: 1000,
                    });
                },
            })
            .add({
                targets: teamTitleRef.current,
                opacity: [0, 1],
                scale: [0.5, 1],
                easing: 'easeOutExpo',
                duration: 500,
            })
            .add({
                targets: membersRef.current.map(ref => ref.current),
                opacity: [0, 1],
                translateY: ['50%', '0%'],
                easing: 'easeOutExpo',
                duration: 500,
                delay: anime.stagger(200), // Stagger the animation of each member
            });
    }, [currentSection]);

    return (
        <div className="flex flex-col bg-white w-full h-full">
            <div className="flex flex-row gap-2 h-[10%] w-full justify-between items-center">
                <div ref={leftBarRef} className="bg-black h-12 w-[30%]" />
                <div ref={teamTitleRef} className="flex flex-row items-center justify-center gap-1 lg:gap-2 text-end">
                    <img src="/images/logos/gray-brackets-r.png" alt="Gray brackets logo" className="w-8 h-8 md:h-12 md:w-12 lg:w-16 lg:h-16" />
                    <p className="text-transparent text-stroke-3 text-stroke-customRed tracking-extra-wide font-bold text-[32px] md:text-[40px] lg:text-[56px]">TEAM</p>
                </div>
                <div ref={rightBarRef} className="bg-white border-l-2 border-t-2 border-b-2 border-customRed h-12 w-[30%]" />
            </div>

            {/* Team Members */}
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-10">
                    {membersRef.current.map((ref, index) => (
                        <div
                            ref={ref}
                            key={index}
                            className="flex flex-col items-center gap-2 opacity-0"
                        >
                            {/* Card Image */}
                            <div className="w-40 md:w-60 h-40 md:h-60 lg:w-80 lg:h-80 rounded-xl border-2 border-black justify-center items-center flex bg-[white] shadow-2xl text-black font-bold">
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
