// Import necessary modules and Zustand store
import { useEffect } from "react";
import NavigationLink from "@components/ui/NavigationLink";
import mobileLogo from "/images/logos/mobile-logo.png";
import { useNavigationStore } from "@store/navigationStore";
// import AnimationToggleButton from "@components/ui/AnimationToggleButton";

const MobileNavigation = () => {
    // Use Zustand store for state management
    const isOpen = useNavigationStore((state) => state.isOpen);
    const toggleMenu = useNavigationStore((state) => state.toggleMenu);
    const closeMenu = useNavigationStore((state) => state.closeMenu);

    // Close the menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            closeMenu();
        };

        if (isOpen) {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen, closeMenu]);

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById("mobile-menu");
            const hamburger = document.getElementById("hamburger-button");

            if (
                isOpen &&
                menu &&
                !menu.contains(event.target as Node) &&
                hamburger &&
                !hamburger.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeMenu]);

    return (
        <div className="absolute top-0 left-0 w-full h-full">
            {/* Mobile Navigation (Burger Menu) */}
            <div
                className="relative lg:hidden h-16 flex flex-row px-2 items-center justify-between z-50"
                style={{
                    background: "linear-gradient(to right, white 15%, #c9111d 30%, #212121 100%)",
                }}
            >
                {/* <AnimationToggleButton /> */}
                <div>
                    <img
                        src={mobileLogo}
                        className="img-fluid rounded-top w-20"
                        alt="Mobile Logo"
                    />
                </div>
                <div>
                    {/* Burger icon with rotation effect */}
                    <button
                        id="hamburger-button"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent click from propagating to document
                            toggleMenu();
                        }}
                        className={`focus:outline-none transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                            }`}
                    >
                        <div className="space-y-2">
                            <span className="block w-8 h-1 bg-white transition-transform duration-300 rounded-xl"></span>
                            <span className="block w-8 h-1 bg-white transition-transform duration-300 rounded-xl"></span>
                            <span className="block w-8 h-1 bg-white transition-transform duration-300 rounded-xl"></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Slider */}
            <div
                id="mobile-menu"
                className={`fixed inset-x-0 top-16 z-40 bg-[#212121] bg-opacity-95 px-5 py-10 transition-transform duration-[600ms] ease-in-out transform border-b-2 border-white ${isOpen ? "translate-y-0" : "-translate-y-[150%]"
                    }`}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <div
                    className="w-full h-full flex flex-col justify-center items-center"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
                >
                    {/* Navigation Links */}
                    <div className="w-full max-w-4xl flex flex-row justify-between items-center text-white text-center text-2xl">
                        {/* Left Column */}
                        <ul className="space-y-8 flex flex-col text-start">
                            {leftNavItems.map((navItem) => (
                                <NavigationLink
                                    key={navItem.name}
                                    navItem={navItem}
                                    shouldBeInverted={false}
                                    onClick={closeMenu}
                                />
                            ))}
                        </ul>

                        {/* Right Column */}
                        <ul className="space-y-8 flex flex-col text-end">
                            {rightNavItems.map((navItem) => (
                                <NavigationLink
                                    key={navItem.name}
                                    navItem={navItem}
                                    shouldBeInverted={false}
                                    onClick={closeMenu}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;

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
