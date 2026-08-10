import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronDown, ArrowUpRight } from 'lucide-react';

// ── Nav structure mirrors the desktop header exactly ──────────────────────────
const NAV = [
  {
    label: 'What We Do',
    href: '/services',
    children: [
      { label: 'AI Solutions',         href: '/services/ai-systems-automation' },
      { label: 'Product Development',  href: '/services/enterprise-product-engineering' },
      { label: 'Web Development',      href: '/services/cloud-native-web-platforms' },
      { label: 'Cloud & DevOps',       href: '/services/intelligent-operations-automation' },
      { label: 'Technical Consulting', href: '/services/startup-to-scale-engineering' },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'About',
    href: '/company/about',
    children: [
      { label: 'Our Story',       href: '/company/about' },
      { label: 'Case Studies',    href: '/company/case-studies' },
      { label: 'Testimonials',    href: '/company/testimonials' },
      { label: 'Careers',         href: '/company/careers' },
      { label: 'International Engagements', href: '/for-us-clients' },
      { label: 'Blog & Insights', href: '/company/blog' },
    ],
  },
] as const;

export interface MobileMenuV2Props {
  open: boolean;
  onClose: () => void;
  theme?: "manuscript" | "dark" | "cinematic";
  focusSection?: string | null;
  onFocusConsumed?: () => void;
}

export function MobileMenuV2({ open, onClose, theme = "manuscript" }: MobileMenuV2Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock body scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);

  // Close on route change
  useEffect(() => { if (open) onClose(); }, [location.pathname]);

  const go = (href: string) => {
    onClose();
    setExpanded(null);
    setTimeout(() => {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 60);
  };

  const toggle = (label: string) =>
    setExpanded(prev => (prev === label ? null : label));

    const isDarkTheme = theme === "dark" || theme === "cinematic";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-mobile-overlay md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className={`absolute inset-0 backdrop-blur-sm ${
              isDarkTheme ? 'bg-black/60' : 'parchment-surface--deep/50'
            }`}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 32, mass: 0.85 }}
            className={`absolute inset-y-0 right-0 w-[85%] max-w-sm flex flex-col border-l ${
              isDarkTheme 
                ? 'bg-[#101010] border-[rgba(255,255,255,0.08)] text-[#F4EBDD]' 
                : 'bg-manuscript-parchmentLight border-[rgba(80,55,30,0.15)] text-manuscript-ink'
            }`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-6 pt-safe-or-5 pb-5 border-b ${
              isDarkTheme ? 'border-[rgba(255,255,255,0.08)]' : 'border-[rgba(80,55,30,0.1)]'
            }`}>
              <button type="button" onClick={() => go('/')} className="flex items-center">
                <img
                  src="/images/aincuru-logo.png"
                  alt="AINCURU — Context Creates Intelligence"
                  className="h-[90px] w-auto object-contain"
                />
              </button>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className={`h-9 w-9 rounded-full border flex items-center justify-center transition-colors ${
                  isDarkTheme 
                    ? 'border-[rgba(255,255,255,0.15)] text-[#F4EBDD]/60 hover:text-[#F4EBDD]' 
                    : 'border-manuscriptAlpha-ink-20 text-manuscript-inkMuted hover:text-manuscript-ink'
                }`}
              >
                <X size={17} />
              </button>
            </div>

            {/* Nav list */}
            <nav className="flex-1 overflow-y-auto px-6 py-6 scrollbar-hide">
              {/* Home */}
              <button
                type="button"
                onClick={() => go('/')}
                className={`w-full text-left py-4 font-manuscriptBody text-[18px] tracking-wide uppercase font-semibold transition-colors border-b ${
                  isDarkTheme ? 'border-[rgba(255,255,255,0.08)]' : 'border-manuscriptAlpha-ink-10'
                } ${
                  location.pathname === '/' 
                    ? 'text-manuscript-copper' 
                    : isDarkTheme ? 'text-[#F4EBDD] hover:text-manuscript-copper' : 'text-manuscript-ink hover:text-manuscript-copper'
                }`}
              >
                Home
              </button>

              {NAV.map((item) => {
                // Items without children are direct links (e.g. Portfolio)
                if (!('children' in item)) {
                  const active = location.pathname.startsWith(item.href);
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => go(item.href)}
                      className={`w-full text-left py-4 font-manuscriptBody text-[18px] tracking-wide uppercase font-semibold transition-colors border-b ${
                        isDarkTheme ? 'border-[rgba(255,255,255,0.08)]' : 'border-manuscriptAlpha-ink-10'
                      } ${
                        active 
                          ? 'text-manuscript-copper' 
                          : isDarkTheme ? 'text-[#F4EBDD] hover:text-manuscript-copper' : 'text-manuscript-ink hover:text-manuscript-copper'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                }

                // Expandable — What We Do / About
                // Label tap → navigate to overview page; chevron tap → toggle sub-list
                const isOpen = expanded === item.label;
                const sectionActive = location.pathname.startsWith(item.href);
                return (
                  <div key={item.label} className={`border-b ${isDarkTheme ? 'border-[rgba(255,255,255,0.08)]' : 'border-manuscriptAlpha-ink-10'}`}>
                    <div className="flex items-center justify-between py-4">
                      <button
                        type="button"
                        onClick={() => go(item.href)}
                        className={`flex-1 text-left font-manuscriptBody text-[18px] tracking-wide uppercase font-semibold transition-colors ${
                          sectionActive 
                            ? 'text-manuscript-copper' 
                            : isDarkTheme ? 'text-[#F4EBDD] hover:text-manuscript-copper' : 'text-manuscript-ink hover:text-manuscript-copper'
                        }`}
                      >
                        {item.label}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggle(item.label)}
                        aria-label={isOpen ? 'Collapse' : 'Expand'}
                        className={`ml-3 h-8 w-8 flex items-center justify-center rounded-full transition-colors ${
                          isDarkTheme ? 'hover:bg-[rgba(255,255,255,0.1)]' : 'hover:bg-manuscriptAlpha-ink-10'
                        }`}
                      >
                        <span className={`text-[18px] font-medium leading-none mb-1 ${
                          isDarkTheme ? 'text-[#F4EBDD]/60' : 'text-manuscript-inkMuted'
                        }`}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 space-y-1">
                            {item.children.map((child) => (
                              <button
                                key={child.href}
                                type="button"
                                onClick={() => go(child.href)}
                                className={`w-full text-left px-3 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                                  location.pathname === child.href
                                    ? isDarkTheme ? 'text-manuscript-copper bg-[rgba(255,255,255,0.05)]' : 'text-manuscript-copper bg-[rgba(80,55,30,0.05)]'
                                    : isDarkTheme ? 'text-[#F4EBDD]/70 hover:text-[#F4EBDD] hover:bg-[rgba(255,255,255,0.02)]' : 'text-manuscript-inkMuted hover:text-manuscript-ink hover:bg-[rgba(80,55,30,0.03)]'
                                }`}
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Footer CTA */}
            <div className={`px-6 pb-safe-or-8 pt-5 border-t ${
              isDarkTheme ? 'border-[rgba(255,255,255,0.08)]' : 'border-manuscriptAlpha-ink-20'
            }`}>
              <button
                type="button"
                onClick={() => go('/contact')}
                className={`w-full flex items-center justify-center gap-2 rounded-full py-3.5 font-bold text-[14px] tracking-wide transition-colors ${
                  isDarkTheme 
                    ? "bg-manuscript-copper text-[#F4EBDD] hover:bg-manuscript-copperDeep" 
                    : "bg-manuscript-copper text-white hover:bg-manuscript-copperDeep"
                }`}
              >
                CONTACT &rarr;
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
