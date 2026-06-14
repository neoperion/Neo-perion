import { create } from 'zustand';

interface CookieConsentState {
  version: string;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
}

interface CookieStore {
  visible: boolean;
  modalOpen: boolean;
  prefs: CookieConsentState | null;
  setVisible: (visible: boolean) => void;
  setModalOpen: (open: boolean) => void;
  setPrefs: (prefs: CookieConsentState | null) => void;
}

export const useCookieStore = create<CookieStore>((set) => ({
  visible: false,
  modalOpen: false,
  prefs: null,
  setVisible: (visible) => set({ visible }),
  setModalOpen: (modalOpen) => set({ modalOpen }),
  setPrefs: (prefs) => set({ prefs }),
}));
