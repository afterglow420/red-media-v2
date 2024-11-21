// src/components/Careers.tsx

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useNavigate } from 'react-router-dom';

// Define the structure of a job listing
type Job = {
    id: number;
    title: string;
    department: string;
    location: string;
    description: string;
};

// Sample job listings data
const jobsData: Job[] = [
    {
        id: 1,
        title: 'Software Engineer',
        department: 'Engineering',
        location: 'New York, NY',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
        id: 2,
        title: 'Product Manager',
        department: 'Product',
        location: 'San Francisco, CA',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
        id: 3,
        title: 'UX Designer',
        department: 'Design',
        location: 'Remote',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
    {
        id: 4,
        title: 'Marketing Specialist',
        department: 'Marketing',
        location: 'Chicago, IL',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    },
];

const Careers: React.FC = () => {
    const navigate = useNavigate();

    // Refs for animatable sections
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const benefitsRef = useRef<HTMLDivElement>(null);
    const jobsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Hero Section Animation
        if (heroRef.current) {
            anime({
                targets: heroRef.current,
                opacity: [0, 1],
                translateY: [50, 0],
                easing: 'easeOutExpo',
                duration: 1000,
            });
        }

        // About Us Section Animation
        if (aboutRef.current) {
            anime({
                targets: aboutRef.current,
                opacity: [0, 1],
                translateX: [-100, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: 300,
            });
        }

        // Benefits Section Animation
        if (benefitsRef.current) {
            anime({
                targets: '.benefit-item',
                opacity: [0, 1],
                translateY: [50, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: anime.stagger(200, { start: 500 }),
            });
        }

        // Job Listings Section Animation
        if (jobsRef.current) {
            anime({
                targets: '.job-card',
                opacity: [0, 1],
                translateY: [50, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: anime.stagger(100, { start: 800 }),
            });
        }

        // Contact Section Animation
        if (contactRef.current) {
            anime({
                targets: contactRef.current,
                opacity: [0, 1],
                translateY: [50, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: 1100,
            });
        }
    }, []);

    return (
        <div className="text-gray-900 overflow-hidden">
            {/* Back to Home Button - Top Left */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-4 left-4 bg-customRed text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
            >
                Back to Home
            </button>

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative h-screen w-full bg-white flex items-center justify-center"
            >
                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
                    <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                    <a
                        href="#jobs"
                        className="bg-customRed text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-red-700 transition-colors"
                    >
                        View Open Positions
                    </a>
                </div>
            </section>

            {/* About Us Section */}
            <section
                ref={aboutRef}
                className="py-16 bg-customRed text-white"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Us</h2>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section
                ref={benefitsRef}
                className="py-16 bg-white text-gray-900"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Why Work With Us</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Benefit Item 1 */}
                        <div className="benefit-item w-full sm:w-1/2 md:w-1/3 text-center opacity-0 transform translate-y-4">
                            <div className="mx-auto mb-4">
                                <div className="w-12 h-12 bg-customRed rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-xl text-white">1</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Competitive Salary</h3>
                            <p className="text-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                            </p>
                        </div>
                        {/* Benefit Item 2 */}
                        <div className="benefit-item w-full sm:w-1/2 md:w-1/3 text-center opacity-0 transform translate-y-4">
                            <div className="mx-auto mb-4">
                                <div className="w-12 h-12 bg-customRed rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-xl text-white">2</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                            <p className="text-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                            </p>
                        </div>
                        {/* Benefit Item 3 */}
                        <div className="benefit-item w-full sm:w-1/2 md:w-1/3 text-center opacity-0 transform translate-y-4">
                            <div className="mx-auto mb-4">
                                <div className="w-12 h-12 bg-customRed rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-xl text-white">3</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
                            <p className="text-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Listings Section */}
            <section
                ref={jobsRef}
                className="py-16 bg-customRed text-white"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Open Positions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-3 gap-8">
                        {/* Job Card */}
                        {jobsData.map((job) => (
                            <div key={job.id} className="job-card bg-white text-gray-900 p-6 rounded-lg shadow-lg opacity-0 transform translate-y-4 hover:scale-105 transition-transform">
                                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                                <p className="text-gray-600 mb-4">{job.department} | {job.location}</p>
                                <p className="text-gray-700 mb-6">
                                    {job.description}
                                </p>
                                <a
                                    href="#apply"
                                    className="bg-customRed text-white px-4 py-2 rounded-full inline-block hover:bg-red-700 transition-colors"
                                >
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                ref={contactRef}
                className="py-16 bg-white text-gray-900"
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Get in Touch</h2>
                    <p className="text-lg md:text-xl mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    </p>
                    <a
                        href="#contact"
                        className="bg-customRed text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Careers;
