// src/pages/Home.tsx
import { useRef, useEffect } from 'react';
import Creation from '@components/Creation';
import Manifest from '@components/Manifest';
import Values from '@components/Values';
import WhoWeAre from '@components/WhoWeAre';
import Process from '@components/Process';
import Resources from '@components/Resources';
import useAnimateScroll from '@hooks/useAnimateScroll';
import useScrollControl from '@hooks/useScrollControl';
import { useSectionStore } from '@store/useSectionStore';
import VideoPresentation from '@components/VideoPresentation';

const Home = () => {
    // Hooks
    useAnimateScroll();
    useScrollControl();

    const setTotalSections = useSectionStore((state) => state.setTotalSections);

    // Effects
    useEffect(() => {
        // Update the total number of sections
        setTotalSections(7); // Adjust if you add or remove sections
    }, [setTotalSections]);

    // Optional: Refs for each section
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    return (
        <div className="text-white">
            <div className="h-screen flex flex-col" id="section-1" ref={(el) => (sectionsRef.current[0] = el)}>
                <VideoPresentation />
            </div>
            <div className="h-screen w-full" id="section-2" ref={(el) => (sectionsRef.current[1] = el)}>
                <Creation />
            </div>
            <div className="h-screen w-full" id="section-3" ref={(el) => (sectionsRef.current[2] = el)}>
                <Manifest />
            </div>
            <div className="h-screen w-full" id="section-4" ref={(el) => (sectionsRef.current[3] = el)}>
                <Values />
            </div>
            <div className="h-screen w-full" id="section-5" ref={(el) => (sectionsRef.current[4] = el)}>
                <WhoWeAre />
            </div>
            <div className="h-screen w-full" id="section-6" ref={(el) => (sectionsRef.current[5] = el)}>
                <Process />
            </div>
            <div className="h-screen w-full" id="section-7" ref={(el) => (sectionsRef.current[6] = el)}>
                <Resources />
            </div>
        </div>
    );
};

export default Home;
