import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation"; // Import Mobile Navigation

const Navigation = () => {
    return (
        <header aria-label="Top navigation">
            {/* Mobile Navigation */}
            <MobileNavigation /> {/* Use the extracted mobile navigation component here */}

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
                <DesktopNavigation />
            </div>
        </header>
    );
};

export default Navigation;
