import Navigation from "@components/Navigation";
import { useSectionStore } from "@store/useSectionStore";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
    // Store
    const { animationsEnabled } = useSectionStore();

    // Refs
    const leftBracketRef = useRef<HTMLParagraphElement>(null);
    const rightBracketRef = useRef<HTMLImageElement>(null);
    const businessTextRef = useRef<HTMLParagraphElement>(null);
    const contactDetailsRef = useRef<HTMLDivElement>(null);
    const mapImageRef = useRef<HTMLDivElement>(null);
    const getInTouchOuterRef = useRef<HTMLDivElement>(null); // Outer div for positioning
    const getInTouchInnerRef = useRef<HTMLDivElement>(null); // Inner div for transformations
    const tiktokRef = useRef<HTMLDivElement>(null);
    const linkedinRef = useRef<HTMLDivElement>(null);
    const instagramRef = useRef<HTMLDivElement>(null);
    const stayTunedRef = useRef<HTMLDivElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null); // Ref for the drawer
    const formRef = useRef<HTMLFormElement>(null);
    const largeFormRef = useRef<HTMLDivElement>(null);
    const sendButtonRefLarge = useRef<HTMLButtonElement>(null);

    // State for form values
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    // State for Drawer
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Hover Handlers for Social Media Icons (Optional: If you prefer Anime.js for hover effects)
    const handleMouseEnter = (element: HTMLElement | null) => {
        if (!element) return;
        anime({
            targets: element,
            scale: 1.3,
            // rotate: 15, // Uncomment if rotation is desired
            duration: 200,
            easing: 'easeInOutSine',
        });
    };

    const handleMouseLeave = (element: HTMLElement | null) => {
        if (!element) return;
        anime({
            targets: element,
            scale: 1,
            // rotate: 0, // Uncomment if rotation is desired
            duration: 200,
            easing: 'easeInOutSine',
        });
    };

    // Hover Handlers for getInTouchRef
    const handleGetInTouchMouseEnter = () => {
        anime({
            targets: getInTouchInnerRef.current,
            scale: 1.1,
            rotate: 10,
            duration: 200,
            easing: 'easeInOutSine',
        });
    };

    const handleGetInTouchMouseLeave = () => {
        anime({
            targets: getInTouchInnerRef.current,
            scale: 1,
            rotate: 0,
            duration: 200,
            easing: 'easeInOutSine',
        });
    };

    // Business Text for Typewriter Effect
    const businessText = "LET'S TALK BUSINESS";

    // Entry animations
    useEffect(() => {
        if (!animationsEnabled) return;

        requestAnimationFrame(() => {
            anime.timeline({
                loop: false,
            })
                .add({
                    targets: [leftBracketRef.current, rightBracketRef.current],
                    opacity: [0, 1],
                    easing: 'linear',
                    duration: 500,
                })
                .add({
                    targets: businessTextRef.current,
                    opacity: [0, 1],
                    easing: 'linear',
                    duration: 1000,
                    update: function (anim) {
                        const progress = Math.round((anim.progress / 100) * businessText.length);
                        if (businessTextRef.current) {
                            businessTextRef.current.innerHTML = businessText.slice(0, progress);
                        }
                    },
                })
                .add({
                    targets: contactDetailsRef.current,
                    opacity: [0, 1],
                    translateX: ["-100vw", "0"],
                    duration: 1500,
                    easing: 'easeOutExpo',
                }, "-=500")
                .add({
                    targets: mapImageRef.current,
                    opacity: [0, 1],
                    translateX: ["100vw", "0"],
                    duration: 1500,
                    easing: 'easeOutExpo',
                }, "-=1500")
                .add({
                    targets: getInTouchOuterRef.current,
                    opacity: [0, 1],
                    duration: 750,
                    easing: 'easeInOutSine',
                }, "-=500")
                .add({
                    targets: [tiktokRef.current, linkedinRef.current, instagramRef.current],
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    scale: [1, 1.2, 1],
                    duration: 400,
                    easing: 'easeInOutSine',
                    delay: anime.stagger(250),
                }, "-=750")
                .add({
                    targets: stayTunedRef.current,
                    opacity: [0, 1],
                    translateX: [-50, 0],
                    duration: 500,
                    easing: 'easeInOutSine',
                }, "-=950")
                .add({
                    targets: largeFormRef.current,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    duration: 500,
                    easing: 'easeInOutSine',
                }, "-=500");
        });

    }, [animationsEnabled, businessText]);

    // Drawer Animation
    useEffect(() => {
        if (!drawerRef.current) return;

        if (isDrawerOpen) {
            anime({
                targets: drawerRef.current,
                translateY: ['100%', '0%'],
                duration: 300,
                easing: 'easeInOutQuad',
            });
        } else {
            anime({
                targets: drawerRef.current,
                translateY: ['0%', '100%'],
                duration: 300,
                easing: 'easeInOutQuad',
            });
        }
    }, [isDrawerOpen]);

    // Send Button Animation
    const handleSend = () => {
        setFormValues({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="text-white overflow-hidden">
            <div className={`h-dvh w-full`} id="section-1">
                <div className="relative h-full w-full flex flex-col">
                    <Navigation />

                    {/* Let's talk business */}
                    <div className="bg-inherit w-full h-1/4 lg:h-2/5 flex flex-col items-center justify-center lg:mt-32">
                        <div className="flex flex-row items-center justify-center mb-6">
                            <p
                                ref={leftBracketRef}
                                style={{ opacity: animationsEnabled ? 0 : 1 }}
                            >
                                <img
                                    src="/images/brackets/red-outline-bracket.png"
                                    alt="Red Outline Bracket"
                                    className="h-20 w-auto"
                                />
                            </p>

                            <p
                                ref={businessTextRef}
                                className="text-white text-[20px] lg:text-[50px] font-bold"
                                style={{ opacity: animationsEnabled ? 0 : 1 }}
                            >
                                {animationsEnabled ? '' : businessText}
                            </p>
                            <p
                                ref={rightBracketRef}
                                style={{ opacity: animationsEnabled ? 0 : 1 }}
                            >
                                <img
                                    src="/images/brackets/red-outline-bracket.png"
                                    alt="Red Outline Bracket"
                                    className="h-20 w-auto transform -scale-x-100"
                                />
                            </p>
                        </div>
                    </div>

                    {/* Contact Details and Map */}
                    <div className="relative w-full h-full bg-white">
                        {/* Contact Details */}
                        <div
                            className="absolute top-0 left-0 w-2/3 h-1/4 lg:w-1/3 lg:h-2/5 z-10 bg-customRed flex flex-col justify-center items-center"
                            style={{ clipPath: "polygon(0 0, 81% 0, 100% 100%, 0 100%)" }}
                            ref={contactDetailsRef}
                        >
                            <div className="w-full h-full p-2 flex flex-col justify-around pl-4 lg:pl-8 font-bold text-[0.8rem] lg:text-[1.25rem] 2xl:text-[1.75rem]">
                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex items-center justify-center w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92V22a2 2 0 0 1-2.18 2 19.88 19.88 0 0 1-8.63-3.13 19.51 19.51 0 0 1-6-6A19.88 19.88 0 0 1 2 4.18 2 2 0 0 1 4 2h5.08a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .68 2.92 2 2 0 0 1-.45 2.11L9.91 10a16 16 0 0 0 6 6l1.25-1.25a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.92.68 2 2 0 0 1 1.72 2z"></path>
                                        </svg>
                                    </div>
                                    <span>+40 xxx xxxxxxx</span>
                                </div>

                                <div className="flex flex-row gap-2 items-center">
                                    <div className="flex items-center justify-center w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                                            <circle cx="12" cy="9" r="2.5"></circle>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-1 leading-none">
                                        <span>Bulevardul Metalurgiei, 78 </span>
                                        <span>Bucharest, Romania</span>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex items-center justify-center w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M16 12a4 4 0 1 1-4-4 4 4 0 0 1 4 4v2a2 2 0 1 0 4 0v-2"></path>
                                        </svg>

                                    </div>
                                    <span>office@red-group.ro</span>
                                </div>
                            </div>
                        </div>
                        {/* Map Image */}
                        <div
                            className="absolute -top-6 right-0 w-[90%] h-4/5 bg-gray-400"
                            style={{
                                clipPath: "polygon(4% 0, 100% 0, 100% 100%, 19% 100%)",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                            ref={mapImageRef}
                        />

                        {/* Get in touch small form drawer button */}
                        <div
                            className={`absolute left-1 top-[50%] -translate-y-[100%] ${animationsEnabled ? 'opacity-0' : 'opacity-1'} cursor-pointer lg:hidden`}
                            onClick={() => setIsDrawerOpen(true)}
                            onMouseEnter={handleGetInTouchMouseEnter}
                            onMouseLeave={handleGetInTouchMouseLeave}
                            ref={getInTouchOuterRef}
                        >
                            <div ref={getInTouchInnerRef} className="transform">
                                <div className="h-full flex flex-col items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="12" y="8" width="40" height="48" rx="6" ry="6" stroke="#c9111d" />
                                        <rect x="20" y="2" width="24" height="8" rx="2" ry="2" fill="#c9111d" />
                                        <line x1="20" y1="18" x2="44" y2="18" stroke="#c9111d" strokeWidth="3" />
                                        <line x1="20" y1="24" x2="44" y2="24" stroke="#c9111d" strokeWidth="3" />
                                        <line x1="20" y1="30" x2="44" y2="30" stroke="#c9111d" strokeWidth="3" />
                                        <line x1="20" y1="36" x2="44" y2="36" stroke="#c9111d" strokeWidth="3" />
                                        <line x1="20" y1="42" x2="44" y2="42" stroke="#c9111d" strokeWidth="3" />
                                        <path d="M23 50l5 5 12-12" stroke="#c9111d" strokeWidth="3" fill="none" />
                                    </svg>

                                    <p className="text-[#c9111d] text-xl font-bold text-center tracking-tighter leading-tight">
                                        GET IN<br />
                                        TOUCH!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Large Form */}
                        <div
                            className="hidden lg:absolute lg:flex lg:flex-col lg:items-center lg:gap-1 left-0 top-[45%] bottom-3 w-1/5 p-1 text-[#c9111d] font-bold"
                            ref={largeFormRef}
                        >
                            <div className="p-1 flex flex-col gap-2 items-center h-full w-full">
                                {/* Contact Form */}
                                <form
                                    className="w-full max-w-md flex flex-col gap-1"
                                    ref={formRef}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSend();
                                    }}
                                >
                                    {/* Name Input */}
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-3 py-1 border lg:border-2 border-[#c9111d] rounded-none focus:outline-none focus:border-[#c9111d]"
                                            placeholder="Your Name"
                                            required
                                            value={formValues.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-3 py-1 border lg:border-2 border-[#c9111d] rounded-none focus:outline-none focus:border-[#c9111d]"
                                            placeholder="Your Email"
                                            required
                                            value={formValues.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Message Textarea */}
                                    <div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="w-full px-3 py-1 border lg:border-2 border-[#c9111d] rounded-none focus:outline-none focus:border-[#c9111d] 2xl:hidden"
                                            placeholder="Your Message"
                                            rows={3}
                                            required
                                            value={formValues.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    {/* Message Textarea */}
                                    <div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="w-full px-3 py-1 border lg:border-2 border-[#c9111d] rounded-none focus:outline-none focus:border-[#c9111d] hidden 2xl:block"
                                            placeholder="Your Message"
                                            rows={6}
                                            required
                                            value={formValues.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    {/* Buttons */}
                                    <button
                                        type="submit"
                                        ref={sendButtonRefLarge}
                                        className="px-3 py-1 bg-red-600 text-white border border-transparent hover:bg-white hover:text-red-600 hover:border-red-600 transition-colors duration-300"
                                        onClick={() => {
                                            anime({
                                                targets: sendButtonRefLarge.current,
                                                scale: [1, 1.2, 1],
                                                duration: 300,
                                                easing: 'easeInOutSine',
                                            });
                                        }}
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="absolute bottom-0 w-full h-1/5 flex flex-col items-center justify-center">
                            <div className="flex flex-row h-full w-full">

                                <div className="h-full w-full flex flex-col items-center justify-center text-[#c9111d] gap-0">
                                    <div className="flex flex-row items-center justify-between gap-6">
                                        {/* TikTok Icon */}
                                        <div
                                            className="flex items-center justify-center w-10 h-10"
                                            ref={tiktokRef}
                                            onMouseEnter={() => handleMouseEnter(tiktokRef.current)}
                                            onMouseLeave={() => handleMouseLeave(tiktokRef.current)}
                                        >
                                            <img
                                                src="images/social/tiktok.svg"
                                                alt="tiktok"
                                                className="transition-transform"
                                            />
                                        </div>
                                        {/* LinkedIn Icon */}
                                        <div
                                            className="flex items-center justify-center w-10 h-10"
                                            ref={linkedinRef}
                                            onMouseEnter={() => handleMouseEnter(linkedinRef.current)}
                                            onMouseLeave={() => handleMouseLeave(linkedinRef.current)}
                                        >
                                            <img
                                                src="images/social/linkedin.svg"
                                                alt="linkedin"
                                                className="transition-transform"
                                            />
                                        </div>
                                        {/* Instagram Icon */}
                                        <div
                                            className="flex items-center justify-center w-10 h-10"
                                            ref={instagramRef}
                                            onMouseEnter={() => handleMouseEnter(instagramRef.current)}
                                            onMouseLeave={() => handleMouseLeave(instagramRef.current)}
                                        >
                                            <img
                                                src="images/social/instagram.svg"
                                                alt="instagram"
                                                className="transition-transform"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="text-[#212121] font-[900] tracking-wider text-[2.25rem]"
                                        ref={stayTunedRef}
                                    >
                                        STAY TUNED
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isDrawerOpen && (
                <div
                    ref={drawerRef}
                    className="text-[#c9111d] font-bold fixed bottom-0 left-0 w-full h-2/5 lg:h-1/3 bg-white border-t-4 border-red-600 shadow-lg transform translate-y-full lg:hidden"
                    style={{ zIndex: 50 }}
                >
                    <div className="p-1 flex flex-col gap-2 items-center h-full w-full">
                        {/* Contact Form */}
                        <form
                            className="w-full max-w-md flex flex-col gap-1"
                            ref={formRef}
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Handle form submission logic here
                                // For example, send data to an API or display a success message
                                // After handling, you might want to close the drawer
                                setIsDrawerOpen(false);
                                formRef.current && formRef.current.reset();
                            }}
                        >
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-1 border border-[#c9111d] rounded-none focus:outline-none focus:border-[#c9111d]"
                                    placeholder="Your Name"
                                    required
                                    value={formValues.name}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-1 border border-[#c9111d] rounded-none focus:outline-none focus:border-[#c9111d]"
                                    placeholder="Your Email"
                                    required
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full px-3 py-1 border border-[#c9111d] rounded-none focus:outline-none focus:border-[#c9111d]"
                                    placeholder="Your Message"
                                    rows={4}
                                    required
                                    value={formValues.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-row items-center justify-between">
                                {/* Send Button */}
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-red-600 text-white rounded-none hover:bg-red-700 transition-colors duration-300 font-bold tracking-wider"
                                >
                                    Send
                                </button>

                                {/* Cancel Button */}
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-red-600 text-white rounded-none hover:bg-red-700 transition-colors duration-300 font-bold tracking-wider"
                                    onClick={() => {
                                        setIsDrawerOpen(false);
                                        if (formRef.current) {
                                            formRef.current.reset();
                                        }
                                    }}
                                >
                                    Cancel
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div >
    );
};

export default Contact;