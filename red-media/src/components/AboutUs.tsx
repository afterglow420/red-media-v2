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
    const bracketsRefMobile = useRef(null);
    const brandNeedsTextRefMobile = useRef(null);
    const subBrandNeedsTextRefMobile = useRef(null);

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
                    // Animate the "ABOUT US" tag
                    .add({
                        targets: aboutUsTagRef.current,
                        opacity: [0, 1],
                        translateX: ['100%', '0%'],
                        duration: 800,
                    }, '-=600') // Start 600ms before the previous animation ends
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
                    })
                    .add({
                        targets: bracketsRefMobile.current,
                        opacity: [0, 1],
                        translateY: ['50%', '0%'],
                        duration: 400,
                    }, '-=1200')
                    .add({
                        targets: brandNeedsTextRefMobile.current,
                        opacity: [0, 1],
                        translateY: ['50%', '0%'],
                        duration: 400,
                    })
                    .add({
                        targets: subBrandNeedsTextRefMobile.current,
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
            <div className="w-full h-[10%] bg-white hidden lg:block lg:mt-32"></div>
            <div className="relative flex flex-col items-center justify-center h-full bg-white w-full">
                <div
                    ref={greetingAreaRef}
                    className="relative flex flex-col items-center h-full w-full opacity-0"
                    style={{
                        backgroundImage: "url('/images/bg/who-we-are-page-warehouse.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Meeting You Section */}
                    <div className="flex flex-col w-full h-full">
                        <div
                            ref={meetingYouRef}
                            className="absolute lg:-top-5 w-3/5 lg:w-2/5 h-2/5 text-center flex flex-col justify-center items-center bg-customRed opacity-0 translate-x-full"
                            style={{
                                clipPath: 'polygon(0 0, 88% 0, 100% 100%, 0 100%)',
                            }}
                        >
                            <div className="flex flex-col gap-2 leading-tight tracking-widest md:tracking-widest lg:tracking-extra-wide w-full h-full p-5 lg:pl-10 items-start justify-center text-white font-[900] lg:text-[3rem] text-[2rem] 2xl:text-[3.5rem]">
                                <p>GREAT</p>
                                <p>MEETING</p>
                                <p>YOU!</p>
                            </div>
                        </div>
                    </div>

                    {/* About Us Tag */}
                    <div
                        ref={aboutUsTagRef}
                        className="absolute bottom-[35%] 2xl:bottom-[25%] right-0 flex flex-col justify-center h-1/5 w-full bg-transparent z-20 opacity-0 translate-x-full"
                    >
                        <div className="flex flex-col items-end justify-center px-2 lg:gap-3">
                            <div className="flex flex-row gap-2 lg:gap-3 items-center">
                                <div>
                                    <img
                                        src="/images/logos/gray-brackets-r.png"
                                        alt="Gray brackets logo"
                                        className="w-10 lg:w-12 h-10 lg:h-12 lg:hidden"
                                    />
                                </div>
                                <div>
                                    <p className="text-stroke-1 md:text-stroke-3 text-stroke-customRed max-md:text-customRed text-transparent font-[900] tracking-wider text-[30px] md:text-[36px] lg:text-[44px] xl:text-[56px]">
                                        ABOUT US
                                    </p>
                                </div>
                            </div>
                            <div className="text-end relative z-20 text-black text-[12px] lg:text-[16px] font-bold leading-4">
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
                        className="absolute bottom-0 left-0 w-full h-[55%]"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-full h-[75%]"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
                        }}
                    />
                </div>

                {/* Logo Area */}
                <div className="hidden absolute bottom-0 w-2/5 h-[45%] 2xl:h-[35%] lg:flex flex-col items-center gap-4">
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
                            className="w-10 h-10 lg:w-12 2xl:w-16 lg:h-12 2xl:h-16"
                        />
                    </div>
                    <div
                        ref={rShadowRef}
                        className="absolute top-[20%] lg:top-[25%] w-14 h-8 lg:w-24 lg:h-8 opacity-0 scale-y-0 max-2xl:mr-3"
                        style={{
                            borderRadius: '50%',
                            background: 'black',
                            filter: 'blur(10px)',
                            transformOrigin: 'center',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }}
                    />
                    <div
                        ref={bracketsRef}
                        className="flex flex-row gap-1 w-full h-full items-center justify-center leading-tight opacity-0 translate-y-full"
                        style={{
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src="/images/brackets/gray-outline-bracket.png"
                                alt="Gray bracket"
                                className="h-28 w-auto lg:h-32 2xl:h-48 lg:w-14 2xl:w-16"
                            />
                        </div>
                        <div className="relative flex flex-col gap-1 lg:gap-1 text-black">
                            <div
                                ref={brandNeedsTextRef}
                                className="flex flex-col text-[1rem] lg:text-[1.25rem] 2xl:text-[2rem] tracking-wider text-center opacity-0 translate-y-1/2 font-[900]"
                            >
                                <p>EVERYTHING</p>
                                <p>YOUR BRAND NEEDS</p>
                            </div>
                            <div
                                ref={subBrandNeedsTextRef}
                                className="font-[500] text-[0.5rem] lg:text-[0.75rem] 2xl:text-[1rem] text-center w-4/5 m-auto opacity-0 translate-y-1/2"
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
                                className="h-28 w-auto lg:h-32 2xl:h-48 lg:w-14 2xl:w-16"
                                style={{ transform: 'rotate(180deg)' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Logo Area (Mobile) */}
                <div className="absolute bottom-0 w-4/5 h-[35%] flex flex-col items-center gap-2 lg:hidden">
                    <div
                        ref={bracketsRefMobile}
                        className="flex flex-row gap-1 w-full h-full items-center justify-center leading-tight opacity-0 translate-y-full"
                        style={{
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <img
                                src="/images/brackets/gray-outline-bracket.png"
                                alt="Gray bracket"
                                className="h-28 w-12"
                            />
                        </div>
                        <div className="relative flex flex-col gap-1 lg:gap-1 text-black">
                            <div
                                ref={brandNeedsTextRefMobile}
                                className="flex flex-col text-[1rem] lg:text-[1.25rem] tracking-wider text-center opacity-0 translate-y-1/2 font-[900]"
                            >
                                <p>EVERYTHING</p>
                                <p>YOUR BRAND NEEDS</p>
                            </div>
                            <div
                                ref={subBrandNeedsTextRefMobile}
                                className="font-[500] text-[0.5rem] lg:text-[0.75rem] text-center w-4/5 m-auto opacity-0 translate-y-1/2 max:lg-hidden"
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
                                className="h-28 w-12"
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
