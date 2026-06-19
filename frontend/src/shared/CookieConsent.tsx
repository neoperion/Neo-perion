import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCookieConsent } from './useCookieConsent';
import { CookieModal } from './CookieModal';

export const CookieConsent: React.FC = () => {
  const { visible, modalOpen, setModalOpen, accept, reject, save, prefs } = useCookieConsent();

  return (
    <>
      <AnimatePresence>
        {visible && !modalOpen && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0F172A]/95 backdrop-blur-md border-t border-neo-blue/20 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1 pr-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-xl mr-2" role="img" aria-label="cookie">🍪</span>
                  We use cookies to deliver and improve our services, analyze site usage, and if you agree, to customize your experience and market our services to you. You can read our Cookie Policy <Link to="/security" className="text-neo-blue hover:text-neo-blue-bright underline underline-offset-2 transition-colors">here</Link>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-white/20 hover:bg-white/5 transition-colors whitespace-nowrap"
                >
                  Customize settings
                </button>
                <button
                  onClick={reject}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium text-white border border-red-500/50 hover:bg-red-500/10 hover:border-red-500 transition-colors whitespace-nowrap"
                >
                  Reject all
                </button>
                <button
                  onClick={accept}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-neo-blue hover:bg-neo-blue-bright transition-colors shadow-[0_0_15px_rgba(37,99,255,0.3)] whitespace-nowrap"
                >
                  Accept all
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookieModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSave={save}
        onRejectAll={reject}
        currentPrefs={prefs}
      />
    </>
  );
};
