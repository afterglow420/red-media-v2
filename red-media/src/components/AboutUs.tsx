import { useEffect, useRef } from 'react';
import Navigation from './Navigation';
import anime, { AnimeTimelineInstance } from 'animejs';
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
    const entryAnimationRef = useRef<AnimeTimelineInstance | null>(null);
    const exitAnimationRef = useRef<AnimeTimelineInstance | null>(null);
    const animationsActive = useRef(false);

    // Effects
    useEffect(() => {
        if (currentSection === 1 && animationsEnabled && !animationsActive.current) {
            animationsActive.current = true;

            requestAnimationFrame(() => {
                // Entry Animations
                entryAnimationRef.current = anime.timeline({
                    autoplay: true,
                    easing: 'easeOutQuad',
                })
                    // Animate the greeting area (background image)
                    .add({
                        targets: greetingAreaRef.current,
                        opacity: [0, 1],
                        duration: 500,
                    })
                    // Animate "GREAT MEETING YOU" section sliding in
                    .add({
                        targets: meetingYouRef.current,
                        opacity: [0, 1],
                        translateX: ['100%', '0%'],
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
                    .add({
                        targets: rShadowRef.current,
                        scale: [0, 1],
                        opacity: [0, 0.5],
                        duration: 800,
                    }, '-=600') // Start 600ms before the previous animation ends
                    // Animate the "ABOUT US" tag
                    .add({
                        targets: aboutUsTagRef.current,
                        opacity: [0, 1],
                        translateX: ['100%', '0%'],
                        duration: 800,
                    })
                    // Animate the brackets and text
                    .add({
                        targets: bracketsRef.current,
                        opacity: [0, 1],
                        translateY: ['50%', '0%'],
                        duration: 400,
                    })
                    .add({
                        targets: brandNeedsTextRef.current,
                        opacity: [0, 1],
                        translateY: ['50%', '0%'],
                        duration: 400,
                    })
                    .add({
                        targets: subBrandNeedsTextRef.current,
                        opacity: [0, 1],
                        translateY: ['50%', '0%'],
                        duration: 400,
                    });
            });

        } else if ((currentSection !== 1 || !animationsEnabled) && animationsActive.current) {
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
                    // Animate the sub-brand needs text exiting
                    .add({
                        targets: subBrandNeedsTextRef.current,
                        opacity: [1, 0],
                        translateY: ['0%', '50%'],
                        duration: 200,
                    })
                    // Animate the brand needs text exiting
                    .add({
                        targets: brandNeedsTextRef.current,
                        opacity: [1, 0],
                        translateY: ['0%', '50%'],
                        duration: 200,
                    })
                    // Animate the brackets exiting
                    .add({
                        targets: bracketsRef.current,
                        opacity: [1, 0],
                        translateY: ['0%', '50%'],
                        duration: 200,
                    })
                    // Animate the "ABOUT US" tag exiting
                    .add({
                        targets: aboutUsTagRef.current,
                        opacity: [1, 0],
                        translateX: ['0%', '100%'],
                        duration: 200,
                    })
                    // Animate the shadow shrinking
                    .add({
                        targets: rShadowRef.current,
                        scale: [1, 0],
                        opacity: [0.5, 0],
                        duration: 200,
                    })
                    // Animate the "R" logo exiting
                    .add({
                        targets: rLogoRef.current,
                        translateY: ['0%', '-100%'],
                        opacity: [1, 0],
                        duration: 200,
                    })
                    // Animate "GREAT MEETING YOU" section exiting
                    .add({
                        targets: meetingYouRef.current,
                        opacity: [1, 0],
                        translateX: ['0%', '100%'],
                        duration: 200,
                    })
                    // Animate the greeting area (background image) exiting
                    .add({
                        targets: greetingAreaRef.current,
                        opacity: [1, 0],
                        duration: 100,
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
                greetingAreaRef.current,
                meetingYouRef.current,
                aboutUsTagRef.current,
                bracketsRef.current,
                brandNeedsTextRef.current,
                subBrandNeedsTextRef.current,
                rLogoRef.current,
                rShadowRef.current,
            ]);
        };
    }, [currentSection, animationsEnabled]);

    return (
        <div className="relative h-full w-full flex flex-col">
            <Navigation />
            <div className="w-full h-[10%] bg-white hidden lg:block"></div>
            <div className="relative flex flex-col items-center justify-center h-full bg-white w-full">
                <div
                    ref={greetingAreaRef}
                    className="relative flex flex-col items-center h-full w-full opacity-0"
                    style={{
                        backgroundImage: "url('/images/bg/who-we-are-page-warehouse.jpg')",
                        backgroundSize: 'cover',
                    }}
                >
                    {/* Meeting You Section */}
                    <div className="flex flex-col w-full h-full">
                        <div
                            ref={meetingYouRef}
                            className="relative w-4/5 lg:w-1/2 h-2/5 text-center flex flex-col justify-center items-center bg-customRed opacity-0 translate-x-full"
                            style={{
                                clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0 100%)',
                            }}
                        >
                            <div className="flex flex-col gap-2 leading-tight tracking-widest md:tracking-widest lg:tracking-extra-wide w-full h-full p-5 lg:pl-10 items-start justify-center text-white font-[900] lg:text-[80px] md:text-[60px] text-[32px]">
                                <p>GREAT</p>
                                <p>MEETING</p>
                                <p>YOU!</p>
                            </div>
                        </div>
                    </div>

                    {/* About Us Tag */}
                    <div
                        ref={aboutUsTagRef}
                        className="absolute bottom-[15%] right-0 flex flex-col justify-center h-1/5 w-full bg-transparent z-20 opacity-0 translate-x-full"
                    >
                        <div className="flex flex-col items-end justify-center px-2 lg:gap-3">
                            <div className="flex flex-row gap-2 lg:gap-3 items-center">
                                <div>
                                    <img
                                        src="/images/logos/gray-brackets-r.png"
                                        alt="Gray brackets logo"
                                        className="w-10 lg:w-14 h-10 lg:h-14"
                                    />
                                </div>
                                <div>
                                    <p className="text-stroke-1 md:text-stroke-2 text-stroke-customRed max-md:text-customRed text-transparent font-[900] tracking-wider text-[30px] md:text-[36px] lg:text-[44px] xl:text-[56px] text-shadow-md">
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
            <div className="w-full h-[50%] bg-white relative">
                <div className="relative w-full h-full justify-center items-center gap-0 flex flex-col p-1">
                    {/* R Logo */}
                    <div
                        ref={rLogoRef}
                        className="w-10 h-10 lg:w-16 lg:h-16 opacity-0 translate-y-full"
                        style={{
                            transform: 'translateY(-100%)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }}
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
                        className="absolute top-[20%] lg:top-[25%] w-14 h-8 lg:w-24 lg:h-14 opacity-0 scale-y-0"
                        style={{
                            borderRadius: '50%',
                            background: 'black',
                            filter: 'blur(10px)',
                            transformOrigin: 'center',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }}
                    />
                    {/* Brackets and Text */}
                    <div
                        ref={bracketsRef}
                        className="flex flex-row gap-1 w-3/4 h-full items-center justify-center leading-tight opacity-0 translate-y-full mt-20"
                        style={{
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }}
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
                                className="flex flex-col font-bold text-[16px] lg:text-[32px] tracking-widest text-center text-shadow-black opacity-0 translate-y-1/2"
                            >
                                <p>EVERYTHING</p>
                                <p>YOUR BRAND NEEDS</p>
                            </div>
                            <div
                                ref={subBrandNeedsTextRef}
                                className="font-bold text-[10px] lg:text-[16px] text-center w-4/5 m-auto opacity-0 translate-y-1/2"
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
        </div>
    );
};

export default AboutUs;
