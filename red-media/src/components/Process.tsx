import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import whiteBracketsLogo from "/images/logos/white-brackets-r.png";

const Process = () => {
    // Navigation
    const navigate = useNavigate();

    // Store
    const { currentSection, animationsEnabled, isScrolling, setCurrentSection } = useSectionStore();

    // Refs for each process step
    const creationRef = useRef<HTMLDivElement>(null);
    const productionRef = useRef<HTMLDivElement>(null);
    const transportRef = useRef<HTMLDivElement>(null);
    const storageRef = useRef<HTMLDivElement>(null);
    const maintenanceRef = useRef<HTMLDivElement>(null);

    // Ref to track if animations are active
    const animationsActive = useRef(false);

    // Array of elements to animate
    const elements = [
        { ref: creationRef, from: '-100%' },
        { ref: productionRef, from: '100%' },
        { ref: transportRef, from: '-100%' },
        { ref: storageRef, from: '100%' },
        { ref: maintenanceRef, from: '-100%' },
    ];

    const handleMoreButton = () => {
        setCurrentSection(1);
        navigate('/what-we-do');
    };

    useEffect(() => {
        if (currentSection === 6 && animationsEnabled && !isScrolling) {
            if (!animationsActive.current) {
                animationsActive.current = true;

                requestAnimationFrame(() => {
                    // Entry animations
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
                });
            }
        } else if (animationsActive.current) {
            // Exit animations
            animationsActive.current = false;

            requestAnimationFrame(() => {
                // Reverse animations
                elements.forEach((element, index) => {
                    const exitFrom = '0%';
                    const exitTo = element.from;

                    anime({
                        targets: element.ref.current,
                        translateX: [exitFrom, exitTo],
                        opacity: [1, 0],
                        easing: 'easeInOutSine',
                        duration: 250,
                        delay: index * 50,
                        complete: () => {
                            if (element.ref.current) {
                                element.ref.current.style.opacity = "0";
                                element.ref.current.style.transform = `translateX(${exitTo})`;
                            }
                        },
                    });
                });
            });
        }

        return () => {
            // Cleanup any running animations
            anime.remove(elements.map(element => element.ref.current));
        };
    }, [currentSection, animationsEnabled, isScrolling, elements]);

    return (
        <div className="relative flex flex-col justify-center items-center h-full w-full py-5 lg:py-8">
            {/* Section Title */}
            <div className="absolute z-10 top-0 left-[50%] translate-x-[-50%] bg-[#212121] h-10 flex flex-row items-center justify-center gap-1 lg:gap-5 px-5 translate-y-[5%] lg:translate-y-[25%] w-3/4 lg:w-3/5">
                <img src={whiteBracketsLogo} alt="White brackets logo" className="h-6 md:h-12 lg:h-12 w-auto" />
                <p className="text-stroke-1 md:text-stroke-3 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[1.25rem] md:text-[40px] lg:text-[44px] xl:text-[56px] text-start lg:tracking-wider">
                    Process / Services
                </p>
            </div>

            {/* MORE Button */}
            <div className="absolute z-10 top-0 right-[10%] lg:right-[17%] translate-x-[50%] translate-y-[25%]">
                <button
                    className="bg-white rounded-2xl text-customRed border text-sm lg:text-lg lg:rounded-3xl px-1 py-1 lg:px-4 lg:py-2 text-center cursor-pointer hover:bg-customRed hover:text-white transition-colors duration-300"
                    onClick={handleMoreButton}
                >
                    <p className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold tracking-extra-wide">MORE</p>
                </button>
            </div>

            {/* Process Steps Container */}
            <div className="relative border-4 border-white w-full h-full flex flex-col items-center justify-center bg-transparent p-5 gap-3 pt-7 lg:pt-10">
                {/* Creation */}
                <div
                    ref={creationRef}
                    className="relative flex flex-row justify-center items-center w-full h-1/5 bg-transparent max-md:pr-3 opacity-0"
                >
                    {/* Numbered Brackets */}
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start leading-none tracking-tighter">
                        <img src="/images/brackets/brackets_1.png" alt="Brackets 1" className="h-6 lg:h-8 2xl:h-14 w-auto max-md:mr-2" />
                    </div>
                    {/* Gray Bar */}
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    {/* Centered Text */}
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] min-w-auto h-auto -left-5 bg-white text-center flex justify-center items-center text-customRed font-[900] text-[0.75rem] md:text-[1.25rem] lg:text-[1.5rem] 2xl:text-[2rem] xl:px-5">
                        CREATION
                    </div>
                </div>

                {/* Production */}
                <div
                    ref={productionRef}
                    className="relative flex flex-row items-center justify-center w-full h-1/5 bg-transparent max-md:pl-3 opacity-0"
                >
                    {/* Gray Bar */}
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    {/* Numbered Brackets */}
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start leading-none tracking-tighter">
                        <img src="/images/brackets/brackets_2.png" alt="Brackets 2" className="h-6 lg:h-8 2xl:h-14 w-auto max-md:ml-2" />
                    </div>
                    {/* Centered Text */}
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] min-w-auto h-auto -right-5 bg-white text-center justify-center items-center text-customRed font-[900] text-[0.75rem] md:text-[1.25rem] lg:text-[1.5rem] 2xl:text-[2rem]">
                        COMPLETE ADVERTISING PRODUCTION
                    </div>
                </div>

                {/* Transport */}
                <div
                    ref={transportRef}
                    className="relative flex flex-row justify-center items-center w-full h-1/5 bg-transparent max-md:pr-3 opacity-0"
                >
                    {/* Numbered Brackets */}
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start leading-none tracking-tighter">
                        <img src="/images/brackets/brackets_3.png" alt="Brackets 3" className="h-6 lg:h-8 2xl:h-14 w-auto max-md:mr-2" />
                    </div>
                    {/* Gray Bar */}
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    {/* Centered Text */}
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] min-w-auto h-auto -left-5 bg-white text-center flex justify-center items-center text-customRed font-[900] text-[0.75rem] md:text-[1.25rem] lg:text-[1.5rem] 2xl:text-[2rem]">
                        DEDICATED TRANSPORT
                    </div>
                </div>

                {/* Storage */}
                <div
                    ref={storageRef}
                    className="relative flex flex-row items-center justify-center w-full h-1/5 bg-transparent max-md:pl-3 opacity-0"
                >
                    {/* Gray Bar */}
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    {/* Numbered Brackets */}
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start leading-none tracking-tighter">
                        <img src="/images/brackets/brackets_4.png" alt="Brackets 4" className="h-6 lg:h-8 2xl:h-14 w-auto max-md:ml-2" />
                    </div>
                    {/* Centered Text */}
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] w-auto h-auto -right-5 bg-white text-center flex justify-center items-center text-customRed font-[900] text-[0.75rem] md:text-[1.25rem] lg:text-[1.5rem] 2xl:text-[2rem]">
                        STORAGE / LOGISTICS HANDLING
                    </div>
                </div>

                {/* Maintenance */}
                <div
                    ref={maintenanceRef}
                    className="relative flex flex-row justify-center items-center w-full h-1/5 bg-transparent max-md:pr-3 opacity-0"
                >
                    {/* Numbered Brackets */}
                    <div className="w-[10%] text-left h-full flex flex-row justify-center items-start leading-none tracking-tighter">
                        <img src="/images/brackets/brackets_5.png" alt="Brackets 5" className="h-6 lg:h-8 2xl:h-14 w-auto max-md:mr-2" />
                    </div>
                    {/* Gray Bar */}
                    <div className="relative flex justify-center items-center w-full h-full bg-[gray] border-2 border-white"></div>
                    {/* Centered Text */}
                    <div className="px-2 absolute top-[50%] translate-y-[-50%] min-w-auto h-auto -left-5 bg-white text-center flex justify-center items-center text-customRed font-[900] text-[0.75rem] md:text-[1.25rem] lg:text-[1.5rem] 2xl:text-[2rem]">
                        MAINTENANCE EVENTS SETUP
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
