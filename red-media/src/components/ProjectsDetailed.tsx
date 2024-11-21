// ProjectsDetailed.jsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useSectionStore } from '@store/useSectionStore';

const ProjectsDetailed = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);
    const animationsEnabled = useSectionStore((state) => state.animationsEnabled);

    // Create refs for each header element
    const redOutlineRef = useRef(null);
    const projectsTextRef = useRef(null);
    const logoRef = useRef(null);
    const whiteDivRef = useRef(null);

    useEffect(() => {
        if (currentSection !== 2) return;
        // Initialize Anime.js timeline
        anime.timeline()
            // Animate Red Outline Div first
            .add({
                targets: redOutlineRef.current,
                translateX: [-100, 0], // Slide from left
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 800,
                delay: 500, // Start 500ms after the previous animation ends
            })
            // Animate "PROJECTS" Paragraph next
            .add({
                targets: projectsTextRef.current,
                translateX: [-100, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 800,
            }, '-=600') // Start 200ms before the previous animation ends
            // Animate Logo Image
            .add({
                targets: logoRef.current,
                translateX: [-100, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 800,
            }, '-=600') // Start 200ms before the previous animation ends
            // Animate Solid White Div last
            .add({
                targets: whiteDivRef.current,
                translateX: [-100, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 800,
            }, '-=600'); // Start 200ms before the previous animation ends
    }, [currentSection, animationsEnabled]);

    return (
        <div className="flex flex-col items-center justify-start w-full h-full bg-[#212121] pt-1">
            {/* Header Section */}
            <div className="flex flex-row items-center gap-2 justify-center h-[15%] w-full">
                <div
                    ref={whiteDivRef}
                    className="h-12 w-32 bg-white transform translate-x-[-100px] opacity-0"
                >
                    {/* Replace with your logo or other elements if needed */}
                </div>
                <img
                    ref={logoRef}
                    src="/images/logos/white-brackets-r.png"
                    alt="White brackets logo"
                    className="w-10 h-10 transform translate-x-[-100px] opacity-0"
                />
                <p
                    ref={projectsTextRef}
                    className="text-transparent text-stroke-2 text-stroke-customRed text-[2rem] font-bold transform translate-x-[-100px] opacity-0"
                >
                    PROJECTS
                </p>
                <div
                    ref={redOutlineRef}
                    className="h-12 w-full border-4 border-customRed transform translate-x-[-100px] opacity-0"
                >
                    {/* Decorative element or separator */}
                </div>
            </div>

            {/* Brackets and Grid */}
            <div className="flex flex-col items-center justify-start w-full h-full gap-4 p-4">
                {/* Optional Top Bracket */}
                <div className="hidden">
                    <img
                        src="/images/brackets/solid-red-bracket.png"
                        alt="Solid red bracket"
                        className="h-10 w-auto"
                    />
                </div>

                {/* Project Items */}
                {/* Updated to use grid layout with responsive columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-3 gap-5 w-full p-2">
                    {/* Map through projectsData */}
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center justify-center w-full bg-gray-800 border-2 border-customRed rounded-lg shadow-md p-4 transition-transform transform-gpu hover:scale-105 hover:shadow-xl hover:z-10"
                        >
                            {project.videoUrl ? (
                                <video
                                    src={project.videoUrl}
                                    controls
                                    className="w-full h-auto object-cover rounded-md"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-700 flex items-center justify-center rounded-md">
                                    <span className="text-gray-400">Video Coming Soon</span>
                                </div>
                            )}
                            <p className="text-lg font-semibold text-center text-customRed mt-2">
                                {project.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Optional Bottom Bracket */}
                <div className="hidden">
                    <img
                        src="/images/brackets/solid-white-bracket.png"
                        alt="Solid white bracket"
                        className="h-10 w-auto rotate-180"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetailed;


// projectsData.js
type Project = {
    name: string;
    videoUrl?: string; // Optional property
};

const projectsData: Project[] = [
    { name: "Aperol" },
    { name: "Cappy" },
    { name: "Coca Cola" },
    { name: "Kit Kat" },
    { name: "Maybelline" },
    { name: "Samsung #1" },
    { name: "Samsung #2" },
    { name: "Vodafone" },
];

