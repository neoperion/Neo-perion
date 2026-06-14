import { create } from 'zustand';

interface UiStore {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useUiStore = create<UiStore>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (isOpen) => set({ mobileMenuOpen: isOpen }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));
