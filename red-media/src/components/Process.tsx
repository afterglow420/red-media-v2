import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";

const Process = () => {
    // Store
    const currentSection = useSectionStore(state => state.currentSection);
    const animationsEnabled = useSectionStore(state => state.animationsEnabled);

    // Refs
    const creation = useRef<HTMLDivElement>(null);
    const production = useRef<HTMLDivElement>(null);
    const transport = useRef<HTMLDivElement>(null);
    const storage = useRef<HTMLDivElement>(null);
    const maintenance = useRef<HTMLDivElement>(null);

    // Hooks


    // Effects
    useEffect(() => {
        if (currentSection !== 6) return;
        if (!animationsEnabled) return;

        const elements = [
            { ref: creation, from: '-100%' },
            { ref: production, from: '100%' },
            { ref: transport, from: '-100%' },
            { ref: storage, from: '100%' },
            { ref: maintenance, from: '-100%' },
        ];

        elements.forEach((element, index) => {
            anime({
                targets: element.ref.current,
                translateX: [element.from, '0%'],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1700,
                delay: index !== 0 ? index * 300 : 200,
            });
        });
    }, [currentSection]);

    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full py-5 lg:py-8">
            <div className="absolute z-10 top-0 left-[50%] translate-x-[-50%] bg-[#212121] h-10 flex items-center justify-center px-5 translate-y-[5%] lg:translate-y-[25%] w-3/4">
                <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[24px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-start lg:tracking-extra-wider">
                    Process & Services
                </p>
            </div>
            <div className="absolute z-10 top-0 right-[10%] translate-x-[50%] translate-y-[25%]">
                <button
                    className="bg-white rounded-2xl text-customRed border text-sm lg:text-lg lg:rounded-3xl px-2 py-1 lg:px-4 lg:py-2 text-center cursor-pointer hover:bg-customRed hover:text-white transition-colors duration-300"
                    onClick={() => console.log('FIND OUT HOW button clicked')} // Replace with your desired action
                >
                    <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold tracking-extra-wide">MORE</p>
                </button>
            </div>
            <div className="relative border-4 border-white w-full h-full flex flex-col items-center justify-center bg-transparent p-5 gap-3 pt-7 lg:pt-10">
                <div ref={creation} className="relative flex flex-row justify-center items-center w-full h-1/5 bg-transparent">
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start">
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">[</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-customRed">1</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">]</p>
                    </div>
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    <div className="absolute top-[50%] translate-y-[-50%] w-[40%] h-auto left-0 bg-white text-center justify-center items-center font-bold text-customRed text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-shadow-lg">CREATION</div>
                </div>
                <div ref={production} className="relative flex flex-row items-center justify-center w-full h-1/5 bg-transparent">
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start">
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">[</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-customRed">2</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">]</p>
                    </div>
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] min-w-auto h-auto right-0 bg-white text-center justify-center items-center text-customRed font-bold text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-shadow-lg">COMPLETE ADVERTISING PRODUCTION</div>
                </div>
                <div ref={transport} className="relative flex flex-row justify-center items-center w-full h-1/5 bg-transparent">
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start">
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">[</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-customRed">3</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">]</p>
                    </div>
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] w-auto h-1/5 left-0 bg-white text-center flex justify-center items-center font-bold text-customRed text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-shadow-lg">DEDICATED TRANSPORT</div>
                </div>
                <div ref={storage} className="relative flex flex-row items-center justify-center w-full h-1/5 bg-transparent">
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start">
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">[</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-customRed">4</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">]</p>
                    </div>
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] w-auto h-auto right-0 bg-white text-center justify-center items-center text-customRed font-bold text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-shadow-lg">STORAGE / LOGISTICS HANDLING</div>
                </div>
                <div ref={maintenance} className="relative flex flex-row justify-center items-center w-full h-1/5 bg-transparent">
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start">
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">[</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-customRed">5</p>
                        <p className="text-[28px] lg:text-[44px] md:text-[36px] xl:text-[60px] font-bold text-white">]</p>
                    </div>
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] w-auto h-1/5 left-0 bg-white text-center flex justify-center items-center font-bold text-customRed text-[16px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-shadow-lg">MAINTENANCE EVENTS SETUP</div>
                </div>
            </div>
        </div>
    );
};

export default Process;