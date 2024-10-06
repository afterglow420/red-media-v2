import { useSectionStore } from "@store/useSectionStore";
import whiteOutlineBracket from "/images/brackets/white-outline-bracket.png";
import { useEffect, useRef } from "react";
import anime from "animejs";

const Creation = () => {
    // Store
    const { currentSection, animationsEnabled } = useSectionStore();

    // Refs
    const redElement = useRef<HTMLDivElement>(null);
    const imageElement = useRef<HTMLDivElement>(null);
    const pillsContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentSection === 2) {
            if (!animationsEnabled) return;
            anime({
                targets: imageElement.current,
                translateX: ['150%', 0],
                duration: 2500,
                delay: 300,
                easing: 'spring(1, 80, 10, 0)'
            });

            anime({
                targets: redElement.current,
                translateX: ['-150%', 0],
                duration: 2500,
                delay: 300,
                easing: 'spring(1, 80, 10, 0)'
            });

            anime({
                targets: pillsContainer.current,
                opacity: [0, 1],
                duration: 2500,
                delay: 1400,
                easing: 'easeOutExpo'
            })
        }
    }, [currentSection]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="relative flex flex-row h-[70%] w-full">
                <div
                    ref={redElement}
                    className="z-10 absolute top-0 left-0 bg-customRed w-[50%] h-[70%]"
                    style={{ clipPath: 'polygon(0 0, 89% 0, 100% 100%, 0 100%)' }}
                >
                    <div className="relative w-[95%] h-full flex flex-row justify-between py-1 md:py-2 lg:py-4 xl:py-5 px-1 md:px-2 lg:px-4 xl:px-5">
                        <img src={whiteOutlineBracket} alt="White bracket" />
                        <div className="absolute right-0 top-[50%] translate-y-[-50%] flex flex-col items-end justify-center gap-5">
                            <p className="text-[24px] md:text-[60px] lg:text-[60px] xl:text-[80px] font-bold mr-3 lg:mr-8 tracking-extra-wide md:tracking-extra-wider text-outline xl:tracking-extra-widest text-shadow">WHERE</p>
                            <p className="text-[24px] md:text-[60px] lg:text-[60px] xl:text-[80px] font-bold mr-1 lg:mr-1 tracking-extra-wide md:tracking-extra-wider text-outline xl:tracking-extra-widest text-shadow">MEETS</p>
                        </div>

                    </div>
                </div>
                <div
                    ref={imageElement}
                    className="z-5 absolute top-0 right-0 w-[75%] h-full"
                    style={{
                        clipPath: 'polygon(4% 0, 100% 0, 100% 100%, 14% 100%)',
                        backgroundImage: 'url(/images/bg/creation-meets-reality.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}

                >
                    <div className="relative w-[70%] h-[70%] flex flex-row justify-end gap-2 py-1 md:py-2 lg:py-4 xl:py-5 px-1 md:px-2 lg:px-4 xl:px-5 ml-auto">
                        <div className="absolute left-0 top-[50%] translate-y-[-50%] flex flex-col items-start justify-center gap-5">
                            <p className="text-[24px] md:text-[60px] lg:text-[60px] xl:text-[80px] font-bold lg:tracking-extra-wider text-outline-md tracking-extra-wide xl:tracking-extra-widest text-shadow-lg">CREATION</p>
                            <p className="text-[24px] md:text-[60px] lg:text-[60px] xl:text-[80px] font-bold ml-2 lg:ml-7 lg:tracking-extra-wider xl:tracking-extra-widest text-outline-md tracking-extra-wide text-shadow-lg">REALITY</p>
                        </div>
                        <img
                            src={whiteOutlineBracket}
                            alt="White bracket"
                            className="transform -scale-x-100"
                        />

                    </div>
                </div>
                <div
                    ref={pillsContainer}
                    className="absolute bottom-[15%] left-[50%] translate-x-[-50%] w-full h-20 flex justify-around items-center"
                >
                    <div className="flex-1 flex justify-center">
                        <button
                            className="bg-white rounded-2xl text-customRed border-customRed border text-sm lg:text-lg lg:rounded-3xl p-1 px-4 py-2 text-center cursor-pointer hover:bg-customRed hover:text-white transition-colors duration-300"
                            onClick={() => console.log('FIND OUT HOW button clicked')} // Replace with your desired action
                        >
                            FIND OUT HOW
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <button
                            className="bg-customRed rounded-2xl text-white border-white border text-sm lg:text-lg lg:rounded-3xl p-1 px-4 py-2 text-center cursor-pointer hover:bg-white hover:text-customRed transition-colors duration-300"
                            onClick={() => console.log('CONTACT US button clicked')} // Replace with your desired action
                        >
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Creation;