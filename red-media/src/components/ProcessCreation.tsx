import anime from "animejs";
import { useState, useRef, useEffect, createRef } from "react";
import Navigation from "./Navigation";

const ProcessCreation = () => {
    // State
    const [currentIndex, setCurrentIndex] = useState(1);

    // Refs
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    // Initialize membersRef as an array of refs
    const membersRef = useRef<Array<React.RefObject<HTMLDivElement>>>([]);

    useEffect(() => {
        // Initialize refs if not already done
        if (membersRef.current.length !== 6) {
            membersRef.current = Array(6)
                .fill(null)
                .map(() => createRef<HTMLDivElement>());
        }
    }, []);

    // Content Animation
    useEffect(() => {
        if (contentRef.current) {
            anime({
                targets: contentRef.current,
                opacity: [0, 1],
                translateY: [-20, 0],
                easing: "easeOutQuad",
                duration: 500,
            });
        }
    }, [currentIndex]);

    // Buttons Animation on Mount
    useEffect(() => {
        if (buttonsRef.current) {
            anime({
                targets: buttonsRef.current.children,
                opacity: [0, 1],
                translateY: [20, 0],
                easing: "easeOutQuad",
                duration: 500,
                delay: anime.stagger(100),
            });
        }
    }, []);

    // Handlers
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 1 ? 5 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === 5 ? 1 : prev + 1));
    };

    const handleSelect = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <div className="relative h-full w-full flex flex-col">
            <Navigation />
            <div className="flex flex-col items-center justify-center h-[15%] bg-white text-black">
                <div className="flex flex-row items-center gap-5 lg:gap-5">
                    <img
                        src="/images/logos/gray-brackets-r.png"
                        alt="Gray brackets logo"
                        className="w-12 h-12 lg:w-20 lg:h-20"
                    />
                    <div className="flex flex-col items-center justify-center leading-none">
                        <p className="text-transparent text-stroke-3 text-stroke-customRed text-[28px] lg:text-[72px] font-bold">
                            PROCESS &
                        </p>
                        <p className="text-transparent text-stroke-3 text-stroke-customRed text-[28px] lg:text-[72px] font-bold">
                            SERVICES
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-row items-center justify-center h-4/5 bg-white text-black">
                {/* Numbered Bracket */}
                <div className="w-1/5 h-3/5 flex flex-col items-center justify-start">
                    <img
                        src={numberedBrackets[currentIndex]}
                        alt={`Gray brackets logo ${currentIndex}`}
                        className="w-14 h-14 lg:w-24 lg:h-24 mt-5"
                    />
                </div>

                {/* Content */}
                <div
                    ref={contentRef}
                    className={`relative w-4/5 h-3/5 flex-col flex justify-center items-center shadow-2xl text-shadow bg-white`}
                    style={{
                        opacity: 0, // Initial opacity for animation
                    }}
                >
                    <video
                        src={assets[currentIndex]}
                        controls
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover filter brightness-65"
                    >
                        Your browser does not support the video tag.
                    </video>

                    {/* Text */}
                    <div className={`flex flex-col tracking-widest items-start justify-center absolute translate-y-[100%] -bottom-0 left-0 h-auto w-full px-1 lg:px-10 bg-transparent text-center`}>
                        <p className="text-black text-[12px] lg:text-[24px]">
                            {detailedInfo[currentIndex]}
                        </p>
                    </div>
                </div>

                {/* Title Tag */}
                <div className={`flex flex-col items-center justify-center absolute top-[50%] translate-y-[-50%] h-auto py-1 px-3 left-0 bg-black text-center ${currentIndex === 1 ? 'w-1/3' : ''}`}>
                    <p className="text-white font-bold text-md lg:text-[32px] tracking-wider">
                        {textTags[currentIndex]}
                    </p>
                </div>

                {/* Section Navigation */}
                <div
                    ref={buttonsRef}
                    className="absolute flex flex-row justify-center items-center gap-2 top-5 left-[50%] translate-x-[-50%] h-10 w-full z-10"
                >
                    <button
                        onClick={handlePrev}
                        aria-label="Previous"
                        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black cursor-pointer hover:bg-customRed hover:text-white transition-colors duration-300"
                    >
                        &lt;
                    </button>
                    <div className="flex space-x-2">
                        {Array.from({ length: 5 }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect(index + 1)}
                                aria-label={`Select ${index + 1}`}
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer ${currentIndex === index + 1
                                    ? "bg-customRed text-white"
                                    : "bg-gray-200 text-black hover:bg-customRed hover:text-white"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        aria-label="Next"
                        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-black cursor-pointer hover:bg-customRed hover:text-white transition-colors duration-300"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProcessCreation;

const numberedBrackets: string[] = [
    "",
    "/images/brackets/1_brackets.png",
    "/images/brackets/2_brackets.png",
    "/images/brackets/3_brackets.png",
    "/images/brackets/4_brackets.png",
    "/images/brackets/5_brackets.png",
];

const textTags: string[] = [
    "",
    "CREATION",
    "ADVERTISING PRODUCTION",
    "DEDICATED TRANSPORT",
    "STORAGE/LOGISTICS HANDLING",
    "MAINTENANCE/EVENTS SETUP",
];

const assets: string[] = [
    "",
    "/videos/process-creation-1.mp4",
    "/videos/complete-advertising-2.mp4",
    "/videos/storage-3.mp4",
    "/videos/dedicated-transport-4.mp4",
    "/videos/maintenance-events-setup-5.mp4",
];

const detailedInfo: string[] = [
    "",
    "Our collaborative creation process brings together diverse talents and perspectives to craft innovative solutions that elevate your brand and drive results.",
    "From concept to development to final execution, we create compelling and visually stunning advertising campaigns that resonate with your target audience.",
    "Our dedicated transport services ensure your materials arrive safely and on time, every time.",
    "With our state-of-the-art storage facilities and logistics expertise, we ensure seamless management and distribution of your materials, keeping your operations running smoothly.",
    "We provide full-time maintenance for each and every project, as well as the complete assembly and disassembly of the elements, to close the process successfully, so that the campaign achieves its goal.",
];