import { useEffect } from "react";
import useAnimateScroll from "@hooks/useAnimateScroll";
import useScrollControl from "@hooks/useScrollControl";
import { useSectionStore } from "@store/useSectionStore";
import ProjectsPresentation from "@components/ProjectsPresentation";
import ProjectsDetailed from "@components/ProjectsDetailed";

const Projects = () => {
    // Store
    const { setTotalSections } = useSectionStore();

    // Hooks
    useAnimateScroll();
    useScrollControl();

    // Effects
    useEffect(() => {
        setTotalSections(2);
    }, [setTotalSections]);

    return (
        <div className="text-white">
            <div className={`h-dvh w-full`} id="section-1">
                <ProjectsPresentation />
            </div>
            <div className={`h-dvh w-full`} id="section-2">
                <ProjectsDetailed />
            </div>
        </div>
    );
};

export default Projects;
