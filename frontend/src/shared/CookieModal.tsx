import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CookieConsentState, defaultConsent } from './CookieManager';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (prefs: Partial<CookieConsentState>) => void;
  onRejectAll: () => void;
  currentPrefs: CookieConsentState | null;
}

export const CookieModal: React.FC<CookieModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  onRejectAll,
  currentPrefs 
}) => {
  const [localPrefs, setLocalPrefs] = useState<CookieConsentState>(
    currentPrefs || defaultConsent
  );

  useEffect(() => {
    if (isOpen) {
      setLocalPrefs(currentPrefs || defaultConsent);
    }
  }, [isOpen, currentPrefs]);

  const togglePreference = (key: keyof CookieConsentState) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setLocalPrefs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    onSave(localPrefs);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10001] w-[95%] max-w-xl bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Cookie Settings</h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Necessary Cookies</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
                <div className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full whitespace-nowrap mt-1">
                  Always ON
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 pt-6 border-t border-white/5">
                <div>
                  <h3 className="text-white font-medium mb-1">Analytics Cookies</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Help us understand how visitors interact with our site (GA4, Microsoft Clarity).
                  </p>
                </div>
                <button
                  onClick={() => togglePreference('analytics')}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-neo-blue focus:ring-offset-2 focus:ring-offset-gray-900 mt-1 ${localPrefs.analytics ? 'bg-neo-blue' : 'bg-gray-700'}`}
                  role="switch"
                  aria-checked={localPrefs.analytics}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-neutral-900 shadow ring-0 transition duration-200 ease-in-out ${localPrefs.analytics ? 'translate-x-5' : 'translate-x-0'}`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 pt-6 border-t border-white/5">
                <div>
                  <h3 className="text-white font-medium mb-1">Marketing Cookies</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Used for personalized advertising and remarketing.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference('marketing')}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-neo-blue focus:ring-offset-2 focus:ring-offset-gray-900 mt-1 ${localPrefs.marketing ? 'bg-neo-blue' : 'bg-gray-700'}`}
                  role="switch"
                  aria-checked={localPrefs.marketing}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-neutral-900 shadow ring-0 transition duration-200 ease-in-out ${localPrefs.marketing ? 'translate-x-5' : 'translate-x-0'}`}
                  />
                </button>
              </div>

              {/* Preferences */}
              <div className="flex items-start justify-between gap-4 pt-6 border-t border-white/5">
                <div>
                  <h3 className="text-white font-medium mb-1">Preference Cookies</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Remember your UI settings and preferences.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference('preferences')}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-neo-blue focus:ring-offset-2 focus:ring-offset-gray-900 mt-1 ${localPrefs.preferences ? 'bg-neo-blue' : 'bg-gray-700'}`}
                  role="switch"
                  aria-checked={localPrefs.preferences}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-neutral-900 shadow ring-0 transition duration-200 ease-in-out ${localPrefs.preferences ? 'translate-x-5' : 'translate-x-0'}`}
                  />
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-end bg-gray-900/50">
              <button
                onClick={onRejectAll}
                className="px-5 py-2.5 rounded-lg font-medium text-white hover:bg-white/5 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2.5 rounded-lg font-medium text-white bg-neo-blue hover:bg-neo-blue-bright transition-colors shadow-[0_0_20px_rgba(247,126,13,0.3)]"
              >
                Save My Preferences
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
