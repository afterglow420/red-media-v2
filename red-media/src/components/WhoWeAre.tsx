// components/WhoWeAre.tsx
import { useEffect, useRef } from "react";
import whiteBracketsLogo from "/images/logos/white-brackets-r.png";
import useWindowSize from "@hooks/useWindowSize";
import { useRepetitions } from "@hooks/useRepetitions";
import { useBeamAnimation } from "@hooks/useBeamAnimation";
import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";

const WhoWeAre = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

    // Refs
    const animatedBarRef = useRef<HTMLDivElement>(null);
    const aboutUsTag = useRef<HTMLDivElement>(null);
    const aboutUsImage = useRef<HTMLDivElement>(null);
    const sectionTitleAboutUs = useRef<HTMLDivElement>(null);
    const whoWeAreTag = useRef<HTMLDivElement>(null);
    const whoeWeAreImage = useRef<HTMLDivElement>(null);
    const sectionTitleWhoWeAre = useRef<HTMLDivElement>(null);
    const whatWeDoTag = useRef<HTMLDivElement>(null);
    const whatWeDoImage = useRef<HTMLDivElement>(null);
    const sectionTitleWhatWeDo = useRef<HTMLDivElement>(null);

    // Hooks
    const [width] = useWindowSize();
    const repetitions = useRepetitions(animatedBarRef, width);
    // useBeamAnimation(animatedBarRef, repetitions, width);

    // Effects
    useEffect(() => {
        if (currentSection !== 5) return;
        if (!animationsEnabled) return;
        
        // Set initial opacity to 0 if the element exists
        ['sectionTitleAboutUs', 'sectionTitleWhoWeAre', 'sectionTitleWhatWeDo'].forEach(ref => {
            if (eval(ref).current) {
                eval(ref).current.style.opacity = '0';
            }
        });

        const reduceTime = (time: any) => Math.floor(time * 0.45);

        anime({
            targets: aboutUsTag.current,
            translateX: ['-300%', 0],
            easing: 'easeOutQuad',
            duration: reduceTime(1500),
        });

        anime({
            targets: aboutUsImage.current,
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: reduceTime(1000),
            delay: reduceTime(1500)
        });

        anime({
            targets: whoWeAreTag.current,
            translateX: ['300%', 0],
            easing: 'easeOutQuad',
            duration: reduceTime(1500),
            delay: reduceTime(3000),
        })

        anime({
            targets: whoeWeAreImage.current,
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: reduceTime(1000),
            delay: reduceTime(4700)
        });

        anime({
            targets: whatWeDoTag.current,
            translateX: ['-300%', 0],
            easing: 'easeOutQuad',
            duration: reduceTime(1500),
            delay: reduceTime(6000),
        });

        anime({
            targets: whatWeDoImage.current,
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: reduceTime(1000),
            delay: reduceTime(7700),
        });

        // Using the flicker function with the desired number of flickers
        createFlickerEffect(sectionTitleAboutUs.current, 2, reduceTime(2200));
        createFlickerEffect(sectionTitleWhoWeAre.current, 1, reduceTime(5200));
        createFlickerEffect(sectionTitleWhatWeDo.current, 0, reduceTime(8200));
    }, [currentSection]);
    return (
        <div
            className="relative flex flex-col items-center justify-center w-full h-full"
            style={{
                backgroundImage: "url(/images/bg/who-we-are-warehouse.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="relative flex flex-row items-center justify-center h-[10%] w-full bg-[#212121]"
                ref={animatedBarRef}
            >
                {Array.from({ length: repetitions }).map((_, index) => (
                    <div key={index}>
                        <div
                            className="font-bold text-gray-500"
                            style={{ fontSize: "clamp(2rem, 2vw, 2rem)" }}
                        >
                            [R]
                        </div>
                    </div>
                ))}
            </div>

            {/* About Us */}
            <div className="relative flex flex-row items-center justify-center h-[30%] w-full bg-transparent">
                {/* Flag */}
                <div ref={aboutUsTag} className="z-10 absolute top-0 left-0 w-2/3 h-[70%] bg-white" style={{ clipPath: 'polygon(0 0, 91% 0, 100% 100%, 0 100%)' }}>
                    <div className="absolute flex flex-col justify-center items-center w-[95%] h-[70%] top-[15%] text-end gap-2 text-black">
                        <p className="pl-1 pr-3 xl:pr-9 xl:pl-12 font-bold xl:tracking-wide" style={{ fontSize: 'clamp(0.7rem, 2vw, 1.5rem)' }}>
                            We are your one-stop solution for brand services, offering
                            end-to-end support from concept creation to execution including
                            logistics and transport.
                        </p>
                        <p className="pl-1 pr-2 xl:pr-9 xl:pl-12 font-bold xl:tracking-wide" style={{ fontSize: 'clamp(0.7rem, 2vw, 1.5rem)' }}>
                            We envision a world where creativity knows no bounds
                            where brands are not just seen but felt and where every interaction
                            leaves a lasting impression.
                        </p>
                    </div>
                </div>
                {/* Bg image */}
                <div ref={aboutUsImage} className="absolute h-[70%] w-full bottom-0 left-0">
                    <div className="absolute w-1/3 h-3/5 top-0 right-0 flex flex-col items-center justify-center bg-transparent">
                        <button onClick={() => console.log('clicked')}>
                            <div
                                className="text-customRed rounded-full bg-white px-5 font-bold text-center border border-customRed transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-red-50"
                                style={{
                                    fontSize: 'clamp(1rem, 2vw, 2.5rem)',
                                    textShadow: '2px 2px 4px rgba(150, 0, 0, 0.5)',
                                    transition: 'text-shadow 0.3s ease-in-out',
                                }}
                            >
                                MORE
                            </div>
                        </button>
                    </div>
                </div>
                <div ref={sectionTitleAboutUs} className="absolute flex flex-row justify-center gap-2 xl:gap-5 items-center top-0 right-0 h-[30%] w-2/5 bg-[#212121]">
                    <img src={whiteBracketsLogo} alt="White brackets logo" className="w-7 md:w-12 lg:w-14 xl:w-16" />
                    <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[20px] md:text-[36px] lg:text-[44px] xl:text-[56px] text-shadow-md">ABOUT US</p>
                </div>
            </div>
            {/* Who we are */}
            <div className="relative flex flex-row items-center justify-center h-[30%] w-full bg-transparent">
                <div ref={whoWeAreTag} className="z-10 absolute top-0 right-0 w-2/3 h-[70%] bg-white" style={{ clipPath: 'polygon(100% 0, 9% 0, 0 100%, 100% 100%)' }}>
                    <div className="flex flex-col justify-center items-center absolute w-[95%] h-[70%] top-[15%] right-0 bg-transparent gap-2 text-start text-black">
                        <p className="pl-1 pr-2 xl:pl-7 xl:pr-12 font-bold tracking-wide" style={{ fontSize: 'clamp(0.7rem, 2vw, 1.5rem)' }}>
                            The go-to partner for brands seeking comprehensive
                            and innovative branding solutions, giving the fact that we
                            can literally provide the full package of services.
                        </p>
                    </div>
                </div>
                <div ref={whoeWeAreImage} className="absolute h-[70%] w-full bottom-0 left-0 bg-transparent">
                    <div className="absolute w-1/3 h-3/5 top-0 left-0 flex flex-col items-center justify-center bg-transparent">
                        <button onClick={() => console.log('clicked')}>
                            <div
                                className="text-customRed rounded-full bg-white px-5 font-bold text-center border border-customRed transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-red-50"
                                style={{
                                    fontSize: 'clamp(1rem, 2vw, 2.5rem)',
                                    textShadow: '2px 2px 4px rgba(150, 0, 0, 0.5)',
                                    transition: 'text-shadow 0.3s ease-in-out',
                                }}
                            >
                                MORE
                            </div>
                        </button>
                    </div>
                </div>
                <div ref={sectionTitleWhoWeAre} className="absolute flex flex-row justify-center items-center gap-2 top-0 left-0 h-[30%] w-2/5 bg-[#212121]">
                    <img src={whiteBracketsLogo} alt="White brackets logo" className="w-7 md:w-12 lg:w-14 xl:w-16" />
                    <p className="hidden md:block text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[20px] md:text-[36px] lg:text-[44px] xl:text-[56px] text-shadow-md">WHO WE ARE</p>
                    <div className="flex md:hidden flex-col gap-1 leading-none">
                        <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[20px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-start">WHO</p>
                        <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[20px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-center">WE</p>
                        <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[20px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-end">ARE</p>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-row items-center justify-center h-[30%] w-full bg-transparent">
                {/* Flag */}
                <div ref={whatWeDoTag} className="z-10 absolute top-0 left-0 w-2/3 h-[70%] bg-white" style={{ clipPath: 'polygon(0 0, 91% 0, 100% 100%, 0 100%)' }}>
                    <div className="absolute flex flex-col justify-center items-center w-[95%] h-[70%] top-[15%] text-end gap-2 text-black">
                        <p className="pl-1 pr-2 xl:pr-9 xl:pl-12 font-bold tracking-wide" style={{ fontSize: 'clamp(0.7rem, 2vw, 1.5rem)' }}>
                            We ensure your vision comes to life with precision and
                            impact. We have the resources to prioritise your process,
                            ensure completion on deadline and overcome any obstacles
                            that come along.
                        </p>
                    </div>
                </div>
                {/* Bg image */}
                <div ref={whatWeDoImage} className="absolute h-[70%] w-full bottom-0 left-0">
                    <div className="absolute w-1/3 h-3/5 top-0 right-0 flex flex-col items-center justify-center bg-transparent">
                        <button onClick={() => console.log('clicked')}>
                            <div
                                className="text-customRed rounded-full bg-white px-5 font-bold text-center border border-customRed transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-red-50"
                                style={{
                                    fontSize: 'clamp(1rem, 2vw, 2.5rem)',
                                    textShadow: '2px 2px 4px rgba(150, 0, 0, 0.5)',
                                    transition: 'text-shadow 0.3s ease-in-out',
                                }}
                            >
                                MORE
                            </div>
                        </button>
                    </div>
                </div>
                <div ref={sectionTitleWhatWeDo} className="absolute flex flex-row justify-center gap-2 items-center top-0 right-0 h-[30%] w-2/5 bg-[#212121]">
                    <img src={whiteBracketsLogo} alt="White brackets logo" className="w-7 md:w-12 lg:w-14 xl:w-16" />
                    <p className="hidden md:block text-stroke-1 md:text-stroke-2 text-stroke-customRed text-transparent max-md:text-customRed font-bold text-[20px] md:text-[36px] lg:text-[44px] xl:text-[56px] text-shadow-md">WHAT WE DO</p>
                    <div className="flex md:hidden flex-col gap-1 leading-none">
                        <div className="flex md:hidden flex-col gap-1 leading-none">
                            <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[20px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-start">WHAT</p>
                            <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[20px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-center">WE</p>
                            <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-bold text-[20px] md:text-[40px] lg:text-[44px] xl:text-[56px] text-shadow-md text-end">DO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhoWeAre;

function createFlickerEffect(targets: any, numFlickers: number, initialDelay: number) {
    const flickerTimeline = anime.timeline({
        targets: targets,
        easing: 'easeInOutSine',
        loop: false,
    });

    // Starting the flicker with an initial delay
    flickerTimeline.add({
        opacity: [0, 0], // Maintaining initial state
        duration: 50,
        delay: initialDelay, // Delay before the first flicker starts
    });

    // Loop to add flicker effects based on the numFlickers parameter
    for (let i = 0; i < numFlickers; i++) {
        flickerTimeline.add({
            opacity: [0, 1],
            duration: 50,
        }).add({
            opacity: [1, 0],
            duration: 50,
            endDelay: 100, // Delay to hold the flicker effect
        });
    }

    // Ensure to end with opacity 1 to make the element visible after flickering
    flickerTimeline.add({
        opacity: [0, 1],
        duration: 50,
    });

    return flickerTimeline;
}