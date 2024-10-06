// src/pages/Home.tsx
import Creation from '@components/Creation';
import Manifest from '@components/Manifest';
import Values from '@components/Values';
import WhoWeAre from '@components/WhoWeAre';
import Process from '@components/Process';
import Resources from '@components/Resources';
import useAnimateScroll from '@hooks/useAnimateScroll';
import useScrollControl from '@hooks/useScrollControl';
import { useEffect } from 'react';
import { useSectionStore } from '@store/useSectionStore';
import VideoPresentation from '@components/VideoPresentation';

const Home = () => {
    // Hooks
    useAnimateScroll();
    useScrollControl();

    const setTotalSections = useSectionStore((state) => state.setTotalSections);

    useEffect(() => {
        // Update the total number of sections
        setTotalSections(7); // Adjust if you add or remove sections
    }, [setTotalSections]);

    return (
        <div className="text-white">
            <div className="h-screen flex flex-col" id="section-1">
                <VideoPresentation />
            </div>
            <div className="h-screen w-full" id="section-2">
                <Creation />
            </div>
            <div className="h-screen w-full" id="section-3">
                <Manifest />
            </div>
            <div className="h-screen w-full" id="section-4">
                <Values />
            </div>
            <div className="h-screen w-full" id="section-5">
                <WhoWeAre />
            </div>
            <div className="h-screen w-full" id="section-6">
                <Process />
            </div>
            <div className="h-screen w-full" id="section-7">
                <Resources />
            </div>
        </div>
    );
};

export default Home;
