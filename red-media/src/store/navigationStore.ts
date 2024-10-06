// src/zustand/navigationStore.ts
import { create } from 'zustand';

interface NavigationStoreState {
    shouldBeInverted: boolean;
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
    setInverted: (shouldBeInverted: boolean) => void;
}

export const useNavigationStore = create<NavigationStoreState>((set) => ({
    shouldBeInverted: false,
    isOpen: false,
    setInverted: (shouldBeInverted) => set({ shouldBeInverted }),
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    closeMenu: () => set({ isOpen: false }),
}));
