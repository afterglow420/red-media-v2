import AboutUs from "@components/AboutUs";
import Clients from "@components/Clients";
import Team from "@components/Team";
import useAnimateScroll from "@hooks/useAnimateScroll";
import useScrollControl from "@hooks/useScrollControl";
import { useSectionStore } from "@store/useSectionStore";
import { useEffect } from "react";

const WhoWeArePage = () => {
    // Store
    const setTotalSections = useSectionStore((state) => state.setTotalSections);

    // Hooks 
    useAnimateScroll();
    useScrollControl();

    // Effects
    useEffect(() => {
        // Update the total number of sections
        setTotalSections(3); // Adjust if you add or remove sections
    }, [setTotalSections]);

    return (
        <div className="text-white">
            <div className="h-screen flex flex-col" id="section-1">
                <AboutUs />
            </div>
            <div className="h-screen flex flex-col" id="section-2">
                <Team />
            </div>
            <div className="h-screen flex flex-col" id="section-3">
                <Clients />
            </div>
        </div>
    );
};

export default WhoWeArePage;