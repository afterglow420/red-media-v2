import { useEffect } from "react";
import useAnimateScroll from "@hooks/useAnimateScroll";
import useScrollControl from "@hooks/useScrollControl";
import { useSectionStore } from "@store/useSectionStore";
import ProcessCreation from "@components/ProcessCreation";
import DetailedResources from "@components/DetailedResources";
import AvailableLogistics from "@components/AvailableLogistics";

const WhatWeDoPage = () => {
    // Store
    const setTotalSections = useSectionStore((state) => state.setTotalSections);

    // Hooks
    useAnimateScroll();
    useScrollControl();

    // Effects
    useEffect(() => {
        setTotalSections(3);
    }, [setTotalSections]);

    return (
        <div className="text-black">
            <div className="h-screen flex flex-col" id="section-1">
                <ProcessCreation />
            </div>

            <div className="h-screen flex flex-col" id="section-2">
                <DetailedResources />
            </div>

            <div className="h-screen flex flex-col" id="section-3">
                <AvailableLogistics />
            </div>
        </div>
    );
};

export default WhatWeDoPage;

// Define constants as arrays with index 1-5


