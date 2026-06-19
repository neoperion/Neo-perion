import { useState, useEffect } from 'react';
import { 
  hasConsented, 
  acceptAll, 
  rejectAll, 
  setConsent, 
  getConsent, 
  CookieConsentState 
} from './CookieManager';
import { initAnalytics } from './analytics';

export const useCookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookieConsentState | null>(null);

  useEffect(() => {
    // Check initial state
    if (!hasConsented()) {
      setVisible(true);
    } else {
      setPrefs(getConsent());
      initAnalytics(); // Initialize if already consented
    }

    // Listen for custom event when consent changes
    const handleConsentUpdate = () => {
      const consented = hasConsented();
      setVisible(!consented);
      setPrefs(getConsent());
      if (consented) {
        initAnalytics();
      }
    };

    window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
    };
  }, []);

  const accept = () => {
    acceptAll();
    setVisible(false);
    initAnalytics();
  };

  const reject = () => {
    rejectAll();
    setVisible(false);
  };

  const save = (p: Partial<CookieConsentState>) => {
    setConsent(p);
    setModalOpen(false);
    setVisible(false);
    initAnalytics();
  };

  return { visible, modalOpen, setModalOpen, accept, reject, save, prefs };
};
