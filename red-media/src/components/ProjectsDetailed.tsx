// ProjectsDetailed.jsx
import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useSectionStore } from '@store/useSectionStore';

const ProjectsDetailed = () => {
    // Store
    const currentSection = useSectionStore((state) => state.currentSection);

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
    }, [currentSection]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-[#212121] p-6">
            {/* Header Section */}
            <div
                className="flex flex-row items-center gap-5 justify-center h-[10%] w-full mb-8"
            >
                <div
                    ref={whiteDivRef}
                    className="h-14 w-32 bg-white transform translate-x-[-100px] opacity-0"
                >
                    {/* Replace with your logo or other elements if needed */}
                </div>
                <img
                    ref={logoRef}
                    src="/images/logos/white-brackets-r.png"
                    alt="White brackets logo"
                    className="w-14 h-14 transform translate-x-[-100px] opacity-0"
                />
                <p
                    ref={projectsTextRef}
                    className="text-transparent text-stroke-2 text-stroke-customRed text-[3rem] font-bold transform translate-x-[-100px] opacity-0"
                >
                    PROJECTS
                </p>
                <div
                    ref={redOutlineRef}
                    className="h-14 w-full border-4 border-customRed transform translate-x-[-100px] opacity-0"
                >
                    {/* Decorative element or separator */}
                </div>
            </div>

            {/* Brackets and Grid */}
            <div className="flex flex-row items-center justify-center w-full h-full gap-6 p-4">
                {/* Right Bracket */}
                <div className="hidden lg:block">
                    <img
                        src="/images/brackets/solid-red-bracket.png"
                        alt="Solid red bracket"
                        className="h-60 w-auto"
                    />
                </div>
                {/* 3x3 Flexbox Grid for Project Videos */}
                <div className="flex flex-wrap justify-center items-center gap-6 w-full lg:w-auto max-h-[80vh] sm:max-h-none overflow-y-auto">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center justify-center w-full sm:w-2/5 lg:w-1/4 bg-gray-800 border-2 border-customRed rounded-lg shadow-md p-4 transition-transform transform-gpu hover:scale-105 hover:shadow-xl hover:z-10"
                        >
                            {/* Video Element */}
                            {project.videoUrl ? (
                                <video
                                    src={project.videoUrl}
                                    controls
                                    className="w-full h-auto object-cover rounded-md mb-4"
                                />
                            ) : (
                                /* Placeholder for Videos Not Yet Available */
                                <div className="w-full h-48 bg-gray-700 flex items-center justify-center rounded-md mb-4">
                                    <span className="text-gray-400">Video Coming Soon</span>
                                </div>
                            )}
                            {/* Project Name */}
                            <p className="text-lg font-semibold text-center text-customRed">{project.name}</p>
                        </div>
                    ))}
                </div>
                {/* Left Bracket */}
                <div className="hidden lg:block">
                    <img
                        src="/images/brackets/solid-white-bracket.png"
                        alt="Solid white bracket"
                        className="h-60 w-auto rotate-180"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetailed;


// projectsData.js
const projectsData = [
    { name: "Project Alpha", videoUrl: "path/to/video1.mp4" },
    { name: "Project Beta", videoUrl: "path/to/video2.mp4" },
    { name: "Project Gamma", videoUrl: "path/to/video3.mp4" },
    { name: "Project Delta", videoUrl: "path/to/video4.mp4" },
    { name: "Project Epsilon", videoUrl: "path/to/video5.mp4" },
    { name: "Project Zeta", videoUrl: "path/to/video6.mp4" },
    { name: "Project Eta", videoUrl: "path/to/video7.mp4" },
    { name: "Project Theta", videoUrl: "path/to/video8.mp4" },
    { name: "Project Iota", videoUrl: "path/to/video9.mp4" },
];
