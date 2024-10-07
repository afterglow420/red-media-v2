// src/pages/Home.tsx
import { useEffect } from 'react';
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
import Navigation from '@components/Navigation';

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

    return (
        <div className="text-white">
            {/* Section 1: Video Presentation with Navigation */}
            <div className="h-screen w-full flex flex-col" id="section-1">
                <Navigation /> {/* Only visible in Section 1 */}
                <VideoPresentation />
            </div>

            {/* Section 2: Creation */}
            <div className="h-screen w-full" id="section-2">
                <Creation />
            </div>

            {/* Section 3: Manifest */}
            <div className="h-screen w-full" id="section-3">
                <Manifest />
            </div>

            {/* Section 4: Values */}
            <div className="h-screen w-full" id="section-4">
                <Values />
            </div>

            {/* Section 5: Who We Are */}
            <div className="h-screen w-full" id="section-5">
                <WhoWeAre />
            </div>

            {/* Section 6: Process */}
            <div className="h-screen w-full" id="section-6">
                <Process />
            </div>

            {/* Section 7: Resources */}
            <div className="h-screen w-full" id="section-7">
                <Resources />
            </div>
        </div>
    );
};

export default Home;
