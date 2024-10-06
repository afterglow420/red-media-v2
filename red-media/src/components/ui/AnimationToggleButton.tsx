// AnimationToggleButton.tsx
import React from 'react';
import { useSectionStore } from '@store/useSectionStore';

const AnimationToggleButton: React.FC = () => {
    const { animationsEnabled, toggleAnimationsEnabled } = useSectionStore();

    return (
        <button
            onClick={toggleAnimationsEnabled}
            className="absolute top-[50%] translate-y-[-60%] right-[15%] lg:top-[12%] lg:right-[10%] z-50 p-1 bg-[#212121] rounded-full shadow-lg transition-hover duration-300 opacity-20 hover:opacity-100"
            aria-label="Toggle Animations"
        >
            {animationsEnabled ? (
                // Animated Icon when animations are enabled
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-customRed"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    {/* Icon representing animations being enabled */}
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.74-.75 3.31-1.95 4.41l1.42 1.42C19.07 16.07 20 14.11 20 12c0-4.42-3.58-8-8-8z" />
                    <path d="M6.05 7.05C4.93 8.17 4 10.13 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-1.74.75-3.31 1.95-4.41L6.05 7.05z" />
                </svg>
            ) : (
                // Static Icon when animations are disabled
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    {/* Icon representing animations being disabled */}
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.74-.75 3.31-1.95 4.41l1.42 1.42C19.07 16.07 20 14.11 20 12c0-4.42-3.58-8-8-8z" />
                    <path d="M6.05 7.05C4.93 8.17 4 10.13 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-1.74.75-3.31 1.95-4.41L6.05 7.05z" />
                    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
                </svg>
            )}
        </button>
    );
};

export default AnimationToggleButton;
