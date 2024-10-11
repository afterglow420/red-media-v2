// src/zustand/sectionStore.ts
import { create } from 'zustand';

interface SectionStoreState {
    currentSection: number;
    totalSections: number;
    animationsEnabled: boolean;
    isScrolling: boolean;
    setCurrentSection: (section: number | ((prevSection: number) => number)) => void;
    setTotalSections: (total: number) => void;
    toggleAnimationsEnabled: () => void;
    setIsScrolling: (isScrolling: boolean) => void;
}

export const useSectionStore = create<SectionStoreState>((set) => ({
    currentSection: 1,
    totalSections: 7,
    animationsEnabled: true,
    isScrolling: false,
    toggleAnimationsEnabled: () => set((state) => ({ animationsEnabled: !state.animationsEnabled })),
    setCurrentSection: (sectionOrUpdater) =>
        set((state) => ({
            currentSection:
                typeof sectionOrUpdater === 'function'
                    ? sectionOrUpdater(state.currentSection)
                    : sectionOrUpdater,
        })),
    setTotalSections: (total) => set({ totalSections: total }),
    setIsScrolling: (isScrolling) => set({ isScrolling }),
}));
