import { useSectionStore } from "@store/useSectionStore";
import redOutlineBracket from "/images/brackets/red-outline-bracket.png";
import whiteOutlineBracket from "/images/brackets/white-outline-bracket.png";
import { useEffect, useRef } from "react";
import anime from "animejs";

const Values = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

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
    const hiddenValuesText = useRef<HTMLDivElement>(null);
    const hiddenR = useRef<HTMLDivElement>(null);

    // Effects
    useEffect(() => {
        if (currentSection !== 4) return;
        if (!animationsEnabled) return;
        
        const t1 = anime.timeline({
            easing: 'easeOutQuart',
        });

        t1
            .add({
                targets: redBracket.current,
                translateX: ['-1500%', 0],
                opacity: [0, 1],
                duration: 1000,
                delay: 400,
            })
            .add({
                targets: topText.current,
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 1000,
                delay: 200,
            }, '-=750')
            .add({
                targets: whiteBracket.current,
                translateX: ['1500%', 0],
                opacity: [0, 1],
                duration: 1000,
            }, '-=900')
            .add({
                targets: ambitionSlider.current,
                translateX: [0, '100%'],
                duration: 500,
                opacity: [0, 1],
            }, '-=250')
            .add({
                targets: ambitionText.current,
                opacity: [0, 1],
                translateX: ['-50%', 0],
                duration: 500,
            }, '-=300')
            .add({
                targets: empowermentSlider.current,
                translateX: [0, '100%'],
                duration: 500,
                opacity: [0, 1],
            }, '-=250')
            .add({
                targets: empowermentText.current,
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 500,
            }, '-=300')
            .add({
                targets: trustworthinessSlider.current,
                translateX: [0, '100%'],
                duration: 500,
                opacity: [0, 1],
            }, '-=250')
            .add({
                targets: trustworthinessText.current,
                opacity: [0, 1],
                translateX: [-60, 0],
                duration: 500,
            }, '-=300')
            .add({
                targets: hiddenValuesText.current,
                opacity: [0, 1],
                translateX: ['50%', 0],
                duration: 1000,
            }, '-=500')
            .add({
                targets: hiddenR.current,
                opacity: [0, 1],
                translateX: ['50%', 0],
                duration: 1000,
            }, '-=1000');
    }, [currentSection]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="relative flex flex-row h-[100%] w-full">
                <div className="z-10 absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full flex flex-row justify-between py-1 md:py-2 lg:py-4 xl:py-5 px-4 md:px-6 lg:px-8 xl:px-10">
                        <div
                            ref={topText}
                            className="flex flex-col justify-center gap-5 text-center"
                        >
                            <p className="text-[12px] md:text-[24px] lg:text-[32px] xl:text-[40px] md:tracking-extra-wider xl:tracking-extra-widest text-stroke-1 text-stroke-white text-transparent">
                                AFTER 10 YEARS OF
                            </p>
                            <p className="text-[12px] md:text-[24px] lg:text-[32px] xl:text-[40px] md:tracking-extra-wider xl:tracking-extra-widest text-stroke-1 text-stroke-white text-transparent">
                                GROWING ONLY BY RECOMMENDATION
                            </p>
                            <p className="text-[12px] md:text-[24px] lg:text-[32px] xl:text-[40px] md:tracking-extra-wider xl:tracking-extra-widest text-stroke-1 text-stroke-white text-transparent">
                                WE CHOOSE TO BE DISCOVERED
                            </p>
                        </div>
                        <div
                            ref={redBracket}
                        >
                            <img
                                src={redOutlineBracket}
                                alt="White bracket"
                                className="transform -scale-x-100 h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-row h-full w-full">
                <div className="z-10 absolute top-0 left-0 w-full h-full">
                    <div className="relative w-full h-full flex flex-row justify-between lg:gap-10 py-1 md:py-2 lg:py-4 xl:py-5 px-4 md:px-6 lg:px-8 xl:px-10">
                        <div ref={whiteBracket}>
                            <img
                                src={whiteOutlineBracket}
                                alt="White bracket"
                                className="h-full"
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-10 text-start">
                            <div className="flex flex-row items-center gap-1">
                                <p ref={ambitionText} className="text-[20px] md:text-[36px] lg:text-[48px] xl:text-[60px] 2xl:text-[80px] md:tracking-extra-wider xl:tracking-extra-widest font-bold tracking-extra-wide mt-1 lg:mt-3">
                                    AMBITION
                                </p>
                                <p ref={ambitionSlider} className="text-[36px] md:text-[48px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] font-bold text-stroke-1 text-stroke-white text-transparent">
                                    ]
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <p ref={empowermentText} className="text-[20px] md:text-[36px] lg:text-[48px] xl:text-[60px] 2xl:text-[80px] tracking-extra-wide md:tracking-extra-wider xl:tracking-extra-widest font-bold mt-1 lg:mt-3">
                                    EMPOWERMENT
                                </p>
                                <p ref={empowermentSlider} className="text-[36px] md:text-[48px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] font-bold text-stroke-1 text-stroke-white text-transparent">
                                    ]
                                </p>
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <p ref={trustworthinessText} className="text-[20px] md:text-[36px] lg:text-[48px] xl:text-[60px] 2xl:text-[80px] tracking-extra-wide md:tracking-extra-wider xl:tracking-extra-widest font-bold mt-1 lg:mt-3">
                                    TRUSTWORTHINESS
                                </p>
                                <p ref={trustworthinessSlider} className="text-[36px] md:text-[48px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] font-bold text-stroke-1 text-stroke-white text-transparent">
                                    ]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;