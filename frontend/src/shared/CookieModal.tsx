import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CookieConsentState, defaultConsent } from './CookieManager';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (prefs: Partial<CookieConsentState>) => void;
  onRejectAll: () => void;
  currentPrefs: CookieConsentState | null;
}

/* ── Toggle ────────────────────────────────────────────────────────────────── */
function Toggle({ on, onChange, locked }: { on: boolean; onChange?: () => void; locked?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={locked ? undefined : onChange}
      className={`relative inline-flex h-[26px] w-[46px] shrink-0 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F77E0D] ${
        locked ? 'cursor-default opacity-60' : 'cursor-pointer'
      } ${on ? 'bg-[#F77E0D]' : 'bg-white/[0.12]'}`}
    >
      <span
        className={`my-auto inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow transition-transform duration-200 ${
          on ? 'translate-x-[23px]' : 'translate-x-[3px]'
        }`}
      />
    </button>
  );
}

/* ── Category rows ─────────────────────────────────────────────────────────── */
const ROWS = [
  {
    key: 'necessary' as const,
    emoji: '🔒',
    label: 'Strictly necessary',
    detail: 'Authentication, security, and consent storage. Always active.',
    locked: true,
  },
  {
    key: 'analytics' as const,
    emoji: '📊',
    label: 'Analytics',
    detail: 'Page views and interaction data via GA4 and Microsoft Clarity. All data is anonymised.',
    locked: false,
  },
  {
    key: 'marketing' as const,
    emoji: '🎯',
    label: 'Marketing',
    detail: 'Personalised ads and remarketing across third-party platforms.',
    locked: false,
  },
  {
    key: 'preferences' as const,
    emoji: '⚙️',
    label: 'Preferences',
    detail: 'Saves your UI settings (theme, language) between visits.',
    locked: false,
  },
];

/* ── Modal ─────────────────────────────────────────────────────────────────── */
export const CookieModal: React.FC<CookieModalProps> = ({
  isOpen, onClose, onSave, onRejectAll, currentPrefs,
}) => {
  const [prefs, setPrefs] = useState<CookieConsentState>(currentPrefs || defaultConsent);

  useEffect(() => {
    if (isOpen) setPrefs(currentPrefs || defaultConsent);
  }, [isOpen, currentPrefs]);

  const toggle = (key: keyof CookieConsentState) => {
    if (key === 'necessary' || key === 'version' || key === 'timestamp') return;
    setPrefs(p => ({ ...p, [key]: !(p as any)[key] }));
  };

  const handleAcceptAll = () => {
    const all = { ...prefs, analytics: true, marketing: true, preferences: true };
    setPrefs(all);
    onSave(all);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 z-[10000] bg-black/65 backdrop-blur-[3px]"
          />

          {/* Sheet */}
          <motion.div
            key="sheet"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.7 }}
            className="fixed inset-0 z-[10001] flex items-end sm:items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-[440px] rounded-2xl bg-[#141416] shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden flex flex-col max-h-[92vh]">

              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F77E0D]/10 border border-[#F77E0D]/20 flex items-center justify-center shrink-0">
                    <img
                      src="/images/security.png"
                      alt=""
                      aria-hidden
                      className="w-5 h-5 object-contain"
                      style={{ filter: 'brightness(0) saturate(1) invert(55%) sepia(90%) saturate(600%) hue-rotate(5deg) brightness(105%)' }}
                    />
                  </div>
                  <div>
                    <h2 className="text-[15px] font-bold text-white tracking-tight">Cookie preferences</h2>
                    <p className="text-[11px] text-white/35 mt-0.5">Choose which cookies to allow</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.10] flex items-center justify-center text-white/50 hover:text-white transition-all"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mx-5" />

              {/* Rows */}
              <div className="overflow-y-auto flex-1 px-5 py-4 space-y-1">
                {ROWS.map(({ key, emoji, label, detail, locked }) => {
                  const isOn = key === 'necessary' ? true : !!(prefs as any)[key];
                  return (
                    <div
                      key={key}
                      className="flex items-start gap-3.5 py-4 border-b border-white/[0.05] last:border-0"
                    >
                      {/* Emoji icon */}
                      <div className="w-9 h-9 rounded-xl bg-white/[0.04] flex items-center justify-center text-[17px] shrink-0">
                        {emoji}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[13px] font-semibold text-white">{label}</span>
                          {locked && (
                            <span className="text-[10px] font-bold uppercase tracking-wide text-[#F77E0D]/70 bg-[#F77E0D]/10 px-2 py-0.5 rounded-full">
                              Always on
                            </span>
                          )}
                        </div>
                        <p className="text-[11.5px] text-white/35 leading-[1.55]">{detail}</p>
                      </div>

                      {/* Toggle */}
                      <div className="shrink-0 mt-1">
                        <Toggle on={isOn} onChange={() => toggle(key)} locked={locked} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-5 pb-5 pt-3 space-y-2">
                <button
                  onClick={handleAcceptAll}
                  className="w-full h-11 rounded-xl bg-[#F77E0D] text-[#0A0A0B] text-[13px] font-bold hover:bg-[#ff8f20] active:scale-[0.98] transition-all duration-150"
                >
                  Accept all
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => onSave(prefs)}
                    className="flex-1 h-10 rounded-xl text-[12px] font-semibold text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-150"
                  >
                    Save choices
                  </button>
                  <button
                    onClick={onRejectAll}
                    className="flex-1 h-10 rounded-xl text-[12px] font-semibold text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-150"
                  >
                    Reject all
                  </button>
                </div>
                <p className="text-center text-[10.5px] text-white/20 pt-0.5">
                  You can update these any time in the footer.
                </p>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
