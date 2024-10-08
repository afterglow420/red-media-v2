// src/components/DesktopNavigation.tsx
import NavigationLink from "@components/ui/NavigationLink";
import rmgDropdownLogo from "/images/logos/navigation-dropdown-logo.png";
// import AnimationToggleButton from "@components/ui/AnimationToggleButton";
import { useSectionStore } from "@store/useSectionStore";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { useNavigationStore } from "@store/navigationStore";
import { useLocation } from "react-router-dom";

const DesktopNavigation = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const shouldBeInverted = useNavigationStore((state) => state.shouldBeInverted);

    // Hooks
    const location = useLocation();

    // Refs
    const logoRef = useRef(null);

    // Effects
    useEffect(() => {
        if (currentSection === 1 && location.pathname === "/") {
            anime({
                targets: logoRef.current,
                translateY: ['-200%', 0],
                translateX: ['-50%', '-50%'],
                opacity: [0, 1],
                duration: 2000,
                delay: 250,
                easing: 'easeOutExpo'
            });
        } else {
            anime({
                targets: logoRef.current,
                opacity: [0, 1],
                duration: 0,
                delay: 0,
                easing: 'easeOutExpo'
            })
        }
    }, [currentSection]);

    useEffect(() => {
        if (location.pathname === "/who-we-are" || location.pathname === "/what-we-do") {
            useNavigationStore.setState({ shouldBeInverted: true });
        } else {
            useNavigationStore.setState({ shouldBeInverted: false });
        }
    }, []);

    return (
        <div className={`absolute top-0 left-0 border-t-[1rem] border-x-[1rem] ${shouldBeInverted ? 'border-[#2a2726]' : 'border-white'}  text-white p-2 ${shouldBeInverted ? 'bg-white' : 'bg-[#2a2726]'} h-32 w-full z-50`}>
            <div className="flex items-center justify-between h-full">
                {/* Left Navigation Links */}
                <div className="flex items-center justify-between w-full">
                    {leftNavItems.map((navItem) => (
                        <NavigationLink
                            key={navItem.name}
                            navItem={navItem}
                            shouldBeInverted={shouldBeInverted}
                        />
                    ))}
                </div>

                {/* Logo placeholder */}
                <div className="flex flex-col items-center justify-center bg-white min-w-60">
                    {/* <img src={rmgDropdownLogo} alt="Main Logo" width={200} /> */}
                </div>

                {/* Center Logo */}
                <div ref={logoRef} className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center bg-white w-56 h-[150%] opacity-100 z-[40] rounded-b-[5px]">
                    {/* <AnimationToggleButton /> */}
                    <img
                        src={rmgDropdownLogo} // Correct absolute path
                        alt="Main Logo"
                        className="h-28 w-auto z-50"
                    />
                </div>

                {/* Right Navigation Links */}
                <div className="flex items-center justify-between w-full">
                    {rightNavItems.map((navItem) => (
                        <NavigationLink
                            key={navItem.name}
                            navItem={navItem}
                            shouldBeInverted={shouldBeInverted}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesktopNavigation;

const leftNavItems = [
    { name: "HOME", path: "/" },
    { name: "WHO WE ARE", path: "/who-we-are" },
    { name: "WHAT WE DO", path: "/what-we-do" },
];

const rightNavItems = [
    { name: "PROJECTS", path: "/projects" },
    { name: "CAREERS", path: "/careers" },
    { name: "CONTACT", path: "/contact" },
];
