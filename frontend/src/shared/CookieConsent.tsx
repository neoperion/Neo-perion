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
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 36, mass: 0.9 }}
            className="fixed bottom-0 left-0 right-0 z-[9999]"
            role="dialog"
            aria-label="Cookie consent"
          >
            {/* Orange top border */}
            <div className="h-[2px] bg-[#F77E0D]" />

            <div className="bg-[#1C1C1F] shadow-[0_-8px_40px_rgba(0,0,0,0.6)]">
              <div className="max-w-screen-xl mx-auto px-6 py-5 sm:px-10 lg:px-16">

                {/* Desktop: single row | Mobile: stacked */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">

                  {/* Left — text */}
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    {/* Cookie icon */}
                    <div className="w-10 h-10 rounded-xl bg-[#F77E0D]/10 border border-[#F77E0D]/20 flex items-center justify-center shrink-0">
                      <img
                        src="/images/security.png"
                        alt=""
                        aria-hidden
                        className="w-6 h-6 object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[14px] font-bold text-white mb-1 leading-none">
                        We value your privacy
                      </p>
                      <p className="text-[12.5px] text-white/60 leading-relaxed">
                        We use cookies to enhance your browsing experience, serve personalised content,
                        and analyse our traffic.{' '}
                        <Link
                          to="/security"
                          className="text-[#F77E0D] hover:text-white transition-colors"
                        >
                          Read our Cookie Policy →
                        </Link>
                      </p>
                    </div>
                  </div>

                  {/* Right — actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 lg:shrink-0">
                    {/* Reject */}
                    <button
                      onClick={reject}
                      className="order-3 sm:order-1 px-6 h-11 rounded-xl text-[13px] font-semibold text-white/55 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] transition-all duration-150 whitespace-nowrap"
                    >
                      Reject all
                    </button>

                    {/* Manage */}
                    <button
                      onClick={() => setModalOpen(true)}
                      className="order-2 px-6 h-11 rounded-xl text-[13px] font-semibold text-white/55 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] transition-all duration-150 whitespace-nowrap"
                    >
                      Manage preferences
                    </button>

                    {/* Accept — primary */}
                    <button
                      onClick={accept}
                      className="order-1 sm:order-3 px-8 h-11 rounded-xl text-[13px] font-bold text-[#0A0A0B] bg-[#F77E0D] hover:bg-[#ff8f20] active:scale-[0.97] transition-all duration-150 shadow-[0_4px_24px_rgba(247,126,13,0.35)] whitespace-nowrap"
                    >
                      Accept all cookies
                    </button>
                  </div>

                </div>
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
