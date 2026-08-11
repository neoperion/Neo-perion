import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES_NAV = [
  { label: 'AI Solutions', href: '/services/ai-systems-automation' },
  { label: 'Product Development', href: '/services/enterprise-product-engineering' },
  { label: 'Web Development', href: '/services/cloud-native-web-platforms' },
  { label: 'Cloud & DevOps', href: '/services/intelligent-operations-automation' },
  { label: 'Technical Consulting', href: '/services/startup-to-scale-engineering' },
];

const ABOUT_NAV = [
  { label: 'Our Story', href: '/company/about' },
  { label: 'Case Studies', href: '/company/case-studies' },
  { label: 'Testimonials', href: '/company/testimonials' },
  { label: 'Careers', href: '/company/careers' },
  { label: 'International Engagements', href: '/for-us-clients' },
  { label: 'Blog & Insights', href: '/company/blog' },
];

export interface MobileNavigationProps {
  theme?: "manuscript" | "dark" | "cinematic";
}

type SheetType = 'services' | 'about' | null;

export function MobileNavigation({ theme = "manuscript" }: MobileNavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSheet, setActiveSheet] = useState<SheetType>(null);

  // Lock body scroll when any sheet is open
  useEffect(() => {
    if (!activeSheet) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveSheet(null); };
    document.addEventListener('keydown', onKey);
    return () => { 
      document.removeEventListener('keydown', onKey); 
      document.body.style.overflow = prev; 
    };
  }, [activeSheet]);

  // Close sheet on route change
  useEffect(() => {
    if (activeSheet) setActiveSheet(null);
  }, [location.pathname]);

  const go = (href: string) => {
    setActiveSheet(null);
    // Allow slight delay for sheet closing animation
    setTimeout(() => {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const toggleSheet = (sheet: SheetType) => {
    setActiveSheet(prev => (prev === sheet ? null : sheet));
  };

  const isDarkTheme = theme === "dark" || theme === "cinematic";
  
  // AINCURU Visual language colors
  const navBg = isDarkTheme ? "bg-[rgba(16,16,16,0.95)]" : "bg-[rgba(248,243,232,0.95)]";
  const navBorder = isDarkTheme ? "border-[rgba(255,255,255,0.08)]" : "border-[rgba(80,55,30,0.15)]";
  
  // Determine active states based on current route or active sheet
  const isHomeActive = location.pathname === '/';
  const isServicesActive = location.pathname.startsWith('/services') || activeSheet === 'services';
  const isWorkActive = location.pathname.startsWith('/portfolio');
  const isAboutActive = location.pathname.startsWith('/company') || location.pathname.startsWith('/for-us-clients') || activeSheet === 'about';

  const getNavTextClass = (isActive: boolean) => {
    if (isActive) {
      return isDarkTheme ? "text-manuscript-copper font-bold" : "text-manuscript-copper font-bold";
    }
    return isDarkTheme ? "text-[#F4EBDD]/70 font-semibold" : "text-manuscript-ink font-semibold";
  };

  const currentSheetNav = activeSheet === 'services' ? SERVICES_NAV : ABOUT_NAV;
  const sheetTitle = activeSheet === 'services' ? 'SERVICES' : 'ABOUT AINCURU';

  return (
    <>
      {/* Expanded Bottom Sheet */}
      <AnimatePresence>
        {activeSheet && (
          <div className="fixed inset-0 z-[60] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#14120E]/20 backdrop-blur-[4px]"
              onClick={() => setActiveSheet(null)}
            />

            {/* Sheet */}
            <motion.div
              key={activeSheet} // Ensures animation plays nicely if we wanted to switch directly, though we just replace content
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 300, mass: 0.8 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.05}
              onDragEnd={(_, info) => {
                if (info.offset.y > 50 || info.velocity.y > 200) {
                  setActiveSheet(null);
                }
              }}
              className={`absolute left-4 right-4 bottom-[calc(88px+env(safe-area-inset-bottom))] flex flex-col rounded-3xl border overflow-hidden shadow-2xl ${navBg} ${navBorder}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5 dark:border-white/5 border-manuscriptAlpha-ink-10">
                <span className={`font-manuscriptBody text-[13px] tracking-[0.12em] uppercase font-bold ${
                  isDarkTheme ? 'text-manuscript-copper' : 'text-manuscript-copper'
                }`}>
                  {sheetTitle}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveSheet(null)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                    isDarkTheme ? 'text-[#F4EBDD]/60 hover:bg-white/5' : 'text-manuscript-ink/60 hover:bg-black/5'
                  }`}
                  aria-label="Close"
                >
                  <span className="text-[20px] leading-none mb-0.5">−</span>
                </button>
              </div>

              {/* List */}
              <nav className="flex flex-col py-2 max-h-[60vh] overflow-y-auto">
                {currentSheetNav.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href)}
                    className={`text-left px-6 py-[18px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${
                      location.pathname === item.href
                        ? (isDarkTheme ? 'text-manuscript-copper font-semibold' : 'text-manuscript-copper font-semibold')
                        : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                    }`}
                  >
                    {item.label}
                    {location.pathname === item.href && (
                       <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                    )}
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Nav */}
      <div 
        className={`fixed left-4 right-4 z-[70] md:hidden pb-[env(safe-area-inset-bottom)] bottom-3`}
      >
        <nav 
          className={`h-[78px] rounded-[24px] border shadow-[0_12px_24px_rgba(0,0,0,0.08)] flex items-center justify-around px-1 backdrop-blur-md ${navBg} ${navBorder}`}
        >
          <button
            type="button"
            onClick={() => go('/')}
            className={`flex-1 h-full flex flex-col items-center justify-center gap-[4px] font-manuscriptBody text-[10px] tracking-[0.08em] uppercase transition-all active:scale-95 ${getNavTextClass(isHomeActive)}`}
          >
            <img 
              src="/images/header icons/icons8-home-100.png" 
              alt="" 
              aria-hidden="true" 
              className={`w-[28px] h-[28px] object-contain transition-all duration-300 ${isHomeActive ? 'opacity-100 scale-105' : 'opacity-60 saturate-50'}`} 
            />
            <span>HOME</span>
          </button>
          
          <button
            type="button"
            onClick={() => toggleSheet('services')}
            className={`flex-1 h-full flex flex-col items-center justify-center gap-[4px] font-manuscriptBody text-[10px] tracking-[0.08em] uppercase transition-all active:scale-95 ${getNavTextClass(isServicesActive)}`}
          >
            <img 
              src="/images/header icons/icons8-service-100.png" 
              alt="" 
              aria-hidden="true" 
              className={`w-[28px] h-[28px] object-contain transition-all duration-300 ${isServicesActive ? 'opacity-100 scale-105' : 'opacity-60 saturate-50'}`} 
            />
            <span>SERVICES</span>
          </button>
          
          <button
            type="button"
            onClick={() => go('/portfolio')}
            className={`flex-1 h-full flex flex-col items-center justify-center gap-[4px] font-manuscriptBody text-[10px] tracking-[0.08em] uppercase transition-all active:scale-95 ${getNavTextClass(isWorkActive)}`}
          >
            <img 
              src="/images/header icons/icons8-work-48.png" 
              alt="" 
              aria-hidden="true" 
              className={`w-[28px] h-[28px] object-contain transition-all duration-300 ${isWorkActive ? 'opacity-100 scale-105' : 'opacity-60 saturate-50'}`} 
            />
            <span>WORK</span>
          </button>
          
          <button
            type="button"
            onClick={() => toggleSheet('about')}
            className={`flex-1 h-full flex flex-col items-center justify-center gap-[4px] font-manuscriptBody text-[10px] tracking-[0.08em] uppercase transition-all active:scale-95 ${getNavTextClass(isAboutActive)}`}
          >
            <img 
              src="/images/header icons/icons8-about-100.png" 
              alt="" 
              aria-hidden="true" 
              className={`w-[28px] h-[28px] object-contain transition-all duration-300 ${isAboutActive ? 'opacity-100 scale-105' : 'opacity-60 saturate-50'}`} 
            />
            <span>ABOUT</span>
          </button>
        </nav>
      </div>
    </>
  );
}
