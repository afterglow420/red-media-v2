import { useEffect, useRef } from 'react';
import Navigation from './Navigation';
import anime from 'animejs';
import { useSectionStore } from '@store/useSectionStore';

const AboutUs = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

    // Refs
    const greetingAreaRef = useRef(null);
    const meetingYouRef = useRef(null);
    const aboutUsTagRef = useRef(null);
    const bracketsRef = useRef(null);
    const brandNeedsTextRef = useRef(null);
    const subBrandNeedsTextRef = useRef(null);
    const rLogoRef = useRef(null);
    const rShadowRef = useRef(null);

    // Effects
    useEffect(() => {
        if (currentSection !== 1) return;
        if (!animationsEnabled) return;

        anime
            .timeline({ loop: false })
            // Animate the greeting area (background image)
            .add({
                targets: greetingAreaRef.current,
                opacity: [0, 1],
                easing: 'easeOutQuad',
                duration: 500,
            })
            // Animate "GREAT MEETING YOU" section sliding in
            .add({
                targets: meetingYouRef.current,
                opacity: [0, 1],
                translateX: ['100%', '0%'],
                easing: 'easeOutQuad',
                duration: 800,
            })
            // Animate the "R" logo dropping down
            .add({
                targets: rLogoRef.current,
                translateY: ['-100%', '0%'],
                opacity: [0, 1],
                easing: 'easeOutBounce',
                duration: 800,
            })
            // Animate the shadow growing
            .add(
                {
                    targets: rShadowRef.current,
                    scale: [0, 1],
                    opacity: [0, 0.5],
                    easing: 'easeOutQuad',
                    duration: 800,
                },
                '-=600' // Start 600ms before the previous animation ends
            )
            // Animate the "ABOUT US" tag
            .add({
                targets: aboutUsTagRef.current,
                opacity: [0, 1],
                translateX: ['100%', '0%'],
                easing: 'easeOutQuad',
                duration: 800,
            })
            // Animate the brackets and text
            .add({
                targets: bracketsRef.current,
                opacity: [0, 1],
                translateY: ['50%', '0%'],
                easing: 'easeOutQuad',
                duration: 800,
            })
            .add({
                targets: brandNeedsTextRef.current,
                opacity: [0, 1],
                translateY: ['50%', '0%'],
                easing: 'easeOutQuad',
                duration: 800,
            })
            .add({
                targets: subBrandNeedsTextRef.current,
                opacity: [0, 1],
                translateY: ['50%', '0%'],
                easing: 'easeOutQuad',
                duration: 800,
            });
    }, [currentSection]);

    return (
        <>
            <Navigation />
            <div className="w-full h-[10%] bg-white"></div>
            <div className="relative flex flex-col items-center justify-center h-[70%] bg-white w-full">
                <div
                    ref={greetingAreaRef}
                    className="relative flex flex-col items-center justify-center h-full w-full"
                    style={{
                        backgroundImage: "url('/images/bg/who-we-are-page-warehouse.jpg')",
                        backgroundSize: 'cover',
                    }}
                >
                    {/* Meeting You Section */}
                    <div className="flex flex-row items-center justify-center">
                        <div
                            ref={meetingYouRef}
                            className="absolute top-[-48px] left-0 w-3/5 lg:w-1/2 h-3/5 text-center flex flex-col justify-center items-center bg-customRed"
                            style={{
                                clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0 100%)',
                                opacity: 0,
                                transform: 'translateX(100%)',
                            }}
                        >
                            <div className="flex flex-col gap-2 leading-tight tracking-wider md:tracking-widest lg:tracking-extra-wide w-full h-full p-5 lg:pl-10 items-start justify-center text-white text-shadow-lg font-bold lg:text-[80px] md:text-[60px] text-[40px]">
                                <p>GREAT</p>
                                <p>MEETING</p>
                                <p>YOU</p>
                            </div>
                        </div>
                    </div>

                    {/* About Us Tag */}
                    <div
                        ref={aboutUsTagRef}
                        className="absolute bottom-[5%] right-0 flex flex-col justify-center h-1/5 w-full bg-transparent z-20"
                        style={{
                            opacity: 0,
                            transform: 'translateX(100%)',
                        }}
                    >
                        <div className="flex flex-col items-end justify-center px-2 lg:gap-3">
                            <div className="flex flex-row gap-2 lg:gap-3 items-center">
                                <div>
                                    <img
                                        src="/images/logos/gray-brackets-r.png"
                                        alt="Gray brackets logo"
                                        className="w-8 lg:w-14 h-8 lg:h-14"
                                    />
                                </div>
                                <div>
                                    <p className="text-customRed text-[36px] lg:text-[60px] tracking-extra-wide font-bold leading-none text-shadow-customRed-md">
                                        ABOUT US
                                    </p>
                                </div>
                            </div>
                            <div className="text-end relative z-20 text-black text-[12px] lg:text-[18px] font-bold text-shadow">
                                <p>We are your one-stop solution for brand services, offering</p>
                                <p>end-to-end support from concept creation to execution</p>
                                <p>including logistics and transport.</p>
                                <p>We envision a world where creativity knows no bounds,</p>
                                <p>where brands are not just seen but felt, and where every</p>
                                <p>interaction leaves a lasting impression.</p>
                            </div>
                        </div>
                    </div>

                    {/* Gradient Overlays */}
                    <div
                        className="absolute bottom-0 left-0 w-full h-[35%]"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-full h-[45%]"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
                        }}
                    />
                </div>
            </div>

            {/* R Logo and Shadow */}
            <div className="w-full h-[25%] bg-white">
                <div className="relative w-full h-full justify-center items-center gap-0 flex flex-col p-1">
                    {/* R Logo */}
                    <div
                        ref={rLogoRef}
                        className="w-10 h-10 lg:w-16 lg:h-16"
                        style={{ opacity: 0, transform: 'translateY(-100%)' }}
                    >
                        <img
                            src="/images/logos/gray-brackets-r.png"
                            alt="Gray brackets logo"
                            className="w-10 h-10 lg:w-16 lg:h-16"
                        />
                    </div>
                    {/* Shadow */}
                    <div
                        ref={rShadowRef}
                        className="absolute top-[20%] lg:top-[25%] w-14 h-8 lg:w-24 lg:h-14"
                        style={{
                            borderRadius: '50%',
                            background: 'black',
                            opacity: 0.5,
                            filter: 'blur(10px)',
                            transform: 'scale(1, 0.2)',
                        }}
                    />
                    {/* Brackets and Text */}
                    <div
                        ref={bracketsRef}
                        className="flex flex-row gap-2 w-3/4 h-full items-center justify-center leading-tight"
                        style={{ opacity: 0, transform: 'translateY(50%)' }}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src="/images/brackets/gray-outline-bracket.png"
                                alt="Gray bracket"
                                className="h-32 w-12 lg:w-auto lg:h-44"
                            />
                        </div>
                        <div className="relative flex flex-col gap-1 lg:gap-2 text-black">
                            <div
                                ref={brandNeedsTextRef}
                                className="flex flex-col font-bold text-[16px] lg:text-[32px] tracking-widest text-center text-shadow-black"
                                style={{ opacity: 0, transform: 'translateY(50%)' }}
                            >
                                <p>EVERYTHING</p>
                                <p>YOUR BRAND NEEDS</p>
                            </div>
                            <div
                                ref={subBrandNeedsTextRef}
                                className="font-bold text-[10px] lg:text-[16px] text-center w-4/5 m-auto"
                                style={{ opacity: 0, transform: 'translateY(50%)' }}
                            >
                                <p>
                                    The go-to partner for brands seeking comprehensive and innovative branding solutions,
                                    given the fact that we can literally provide the full package of services.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src="/images/brackets/gray-outline-bracket.png"
                                alt="Gray bracket"
                                className="h-32 w-12 lg:w-auto lg:h-44"
                                style={{ transform: 'rotate(180deg)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
