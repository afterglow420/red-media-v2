// src/zustand/sectionStore.ts
import { create } from 'zustand';

interface SectionStoreState {
    currentSection: number;
    totalSections: number;
    animationsEnabled: boolean;
    setCurrentSection: (section: number | ((prevSection: number) => number)) => void;
    setTotalSections: (total: number) => void;
    toggleAnimationsEnabled: () => void;
}

export const useSectionStore = create<SectionStoreState>((set) => ({
    currentSection: 1,
    totalSections: 7, // Update if you have more or fewer sections
    animationsEnabled: true,
    toggleAnimationsEnabled: () => set((state) => ({ animationsEnabled: !state.animationsEnabled })),
    setCurrentSection: (sectionOrUpdater) =>
        set((state) => ({
            currentSection:
                typeof sectionOrUpdater === 'function'
                    ? sectionOrUpdater(state.currentSection)
                    : sectionOrUpdater,
        })),
    setTotalSections: (total) => set({ totalSections: total }),
}));
