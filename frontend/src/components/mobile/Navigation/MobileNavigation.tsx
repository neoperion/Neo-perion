import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  GraduationCap,
  Rocket,
  Building2,
  FileSpreadsheet,
  Compass,
  Sparkles,
  Home,
  Briefcase
} from 'lucide-react';

const SERVICES_NAV = [
  { label: 'All Services Overview', href: '/services', badge: 'Hub' },
  { label: 'AI Solutions', href: '/services/ai-systems-automation' },
  { label: 'Product Development', href: '/services/enterprise-product-engineering' },
  { label: 'Web Development', href: '/services/cloud-native-web-platforms' },
  { label: 'Cloud & DevOps', href: '/services/intelligent-operations-automation' },
  { label: 'Technical Consulting', href: '/services/startup-to-scale-engineering' },
];

const INDUSTRIES_SUBNAV = [
  {
    label: 'All Industries Overview',
    href: '/industries',
    desc: 'Explore sectors & capabilities',
    icon: Compass,
    badge: 'Hub'
  },
  {
    label: 'Education & EdTech',
    href: '/industries/education',
    desc: 'AI learning & LMS platforms',
    icon: GraduationCap
  },
  {
    label: 'Startups & Founders',
    href: '/industries/startups',
    desc: 'MVP & product engineering',
    icon: Rocket
  },
  {
    label: 'SMBs & Enterprise',
    href: '/industries/smbs',
    desc: 'Business automation & CRM',
    icon: Building2
  },
  {
    label: 'Accounting Automation',
    href: '/industries/accounting-automation',
    desc: 'Registrations & filing workflows',
    icon: FileSpreadsheet
  },
];

export interface MobileNavigationProps {
  theme?: "manuscript" | "dark" | "cinematic";
}

type SheetType = 'services' | 'about' | null;

export function MobileNavigation({ theme = "manuscript" }: MobileNavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSheet, setActiveSheet] = useState<SheetType>(null);
  const [industriesExpanded, setIndustriesExpanded] = useState<boolean>(() =>
    location.pathname.startsWith('/industries')
  );

  // Auto-expand industries when visiting an industries route
  useEffect(() => {
    if (location.pathname.startsWith('/industries')) {
      setIndustriesExpanded(true);
    }
  }, [location.pathname]);

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
  const isAboutActive =
    location.pathname.startsWith('/company') ||
    location.pathname.startsWith('/for-us-clients') ||
    location.pathname.startsWith('/industries') ||
    activeSheet === 'about';

  const isIndustriesRoute = location.pathname.startsWith('/industries');

  const getNavTextClass = (isActive: boolean) => {
    if (isActive) {
      return isDarkTheme ? "text-manuscript-copper font-bold" : "text-manuscript-copper font-bold";
    }
    return isDarkTheme ? "text-[#F4EBDD]/70 font-semibold" : "text-manuscript-ink font-semibold";
  };

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
              key={activeSheet}
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
              className={`absolute left-4 right-4 bottom-[calc(72px+env(safe-area-inset-bottom))] flex flex-col rounded-3xl border overflow-hidden shadow-2xl max-w-[calc(100vw-32px)] mx-auto box-border ${navBg} ${navBorder}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/5 dark:border-white/5 border-manuscriptAlpha-ink-10 w-full box-border">
                <span className={`font-manuscriptBody text-[13px] tracking-[0.12em] uppercase font-bold ${isDarkTheme ? 'text-manuscript-copper' : 'text-manuscript-copper'
                  }`}>
                  {activeSheet === 'services' ? 'SERVICES' : 'ABOUT AINCURU'}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveSheet(null)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isDarkTheme ? 'text-[#F4EBDD]/60 hover:bg-white/5' : 'text-manuscript-ink/60 hover:bg-black/5'
                    }`}
                  aria-label="Close"
                >
                  <span className="text-[20px] leading-none mb-0.5">−</span>
                </button>
              </div>

              {/* List */}
              <nav className="flex flex-col py-2 max-h-[62vh] overflow-y-auto">
                {activeSheet === 'services' ? (
                  // SERVICES LIST
                  SERVICES_NAV.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => go(item.href)}
                      className={`text-left px-6 py-[16px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${location.pathname === item.href
                          ? (isDarkTheme ? 'text-manuscript-copper font-semibold' : 'text-manuscript-copper font-semibold')
                          : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-manuscript-copper/10 text-manuscript-copper font-bold border border-manuscript-copper/20">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {location.pathname === item.href && (
                        <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                      )}
                    </button>
                  ))
                ) : (
                  // ABOUT LIST (with Industries Sub-Section)
                  <>
                    {/* 01 Our Story */}
                    <button
                      type="button"
                      onClick={() => go('/company/about')}
                      className={`text-left px-6 py-[15px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${location.pathname === '/company/about'
                          ? (isDarkTheme ? 'text-manuscript-copper font-semibold' : 'text-manuscript-copper font-semibold')
                          : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                        }`}
                    >
                      <span>Our Story</span>
                      {location.pathname === '/company/about' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                      )}
                    </button>

                    {/* 02 Industries Navigation Menu Sub-Section */}
                    <div className="border-y border-manuscriptAlpha-ink-10/40 my-1 py-1">
                      <button
                        type="button"
                        onClick={() => setIndustriesExpanded(prev => !prev)}
                        className={`w-full text-left px-6 py-[14px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${isIndustriesRoute
                            ? 'text-manuscript-copper font-semibold'
                            : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                          }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span>Industries</span>
                          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-manuscript-copper/10 text-manuscript-copper font-bold border border-manuscript-copper/20">
                            4 Sectors
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          {isIndustriesRoute && (
                            <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                          )}
                          <ChevronDown
                            size={16}
                            className={`text-manuscript-copper transition-transform duration-200 ${industriesExpanded ? 'rotate-180' : ''
                              }`}
                          />
                        </div>
                      </button>

                      {/* Industries Collapsible / Expandable Submenu */}
                      <AnimatePresence>
                        {industriesExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-4 pb-2 space-y-1"
                          >
                            <div className={`rounded-2xl p-2 border ${isDarkTheme ? 'bg-white/[0.03] border-white/[0.08]' : 'bg-[#FAF6EE] border-[rgba(80,55,30,0.12)]'
                              }`}>
                              {INDUSTRIES_SUBNAV.map((sub) => {
                                const isSubActive = location.pathname === sub.href;
                                const Icon = sub.icon;
                                return (
                                  <button
                                    key={sub.href}
                                    type="button"
                                    onClick={() => go(sub.href)}
                                    className={`w-full text-left px-3 py-2.5 rounded-xl text-[14px] font-manuscriptBody transition-all flex items-center justify-between ${isSubActive
                                        ? (isDarkTheme ? 'bg-white/[0.08] text-manuscript-copper font-bold' : 'bg-white text-manuscript-copper font-bold shadow-sm')
                                        : (isDarkTheme ? 'text-[#F4EBDD]/80 hover:bg-white/[0.04]' : 'text-manuscript-ink hover:bg-white/60')
                                      }`}
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isSubActive
                                          ? 'bg-manuscript-copper text-white'
                                          : (isDarkTheme ? 'bg-white/[0.06] text-manuscript-copper' : 'bg-white text-manuscript-copper border border-[rgba(80,55,30,0.1)]')
                                        }`}>
                                        <Icon size={14} />
                                      </span>
                                      <div className="flex flex-col min-w-0">
                                        <div className="flex items-center gap-1.5">
                                          <span className="truncate leading-tight font-medium">{sub.label}</span>
                                          {sub.badge && (
                                            <span className="font-mono text-[8px] uppercase px-1.5 py-0.2 rounded bg-manuscript-copper/10 text-manuscript-copper font-bold">
                                              {sub.badge}
                                            </span>
                                          )}
                                        </div>
                                        <span className="text-[11px] font-manuscriptBody text-manuscript-inkMuted truncate leading-none mt-0.5">
                                          {sub.desc}
                                        </span>
                                      </div>
                                    </div>
                                    {isSubActive && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper shrink-0 ml-2" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 03 Case Studies */}
                    <button
                      type="button"
                      onClick={() => go('/company/case-studies')}
                      className={`text-left px-6 py-[15px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${location.pathname === '/company/case-studies'
                          ? (isDarkTheme ? 'text-manuscript-copper font-semibold' : 'text-manuscript-copper font-semibold')
                          : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                        }`}
                    >
                      <span>Case Studies</span>
                      {location.pathname === '/company/case-studies' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                      )}
                    </button>

                    {/* 04 Testimonials */}
                    <button
                      type="button"
                      onClick={() => go('/company/testimonials')}
                      className={`text-left px-6 py-[15px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${location.pathname === '/company/testimonials'
                          ? (isDarkTheme ? 'text-manuscript-copper font-semibold' : 'text-manuscript-copper font-semibold')
                          : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                        }`}
                    >
                      <span>Testimonials</span>
                      {location.pathname === '/company/testimonials' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                      )}
                    </button>

                    {/* 05 Careers */}
                    <button
                      type="button"
                      onClick={() => go('/company/careers')}
                      className={`text-left px-6 py-[15px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${location.pathname === '/company/careers'
                          ? (isDarkTheme ? 'text-manuscript-copper font-semibold' : 'text-manuscript-copper font-semibold')
                          : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                        }`}
                    >
                      <span>Careers</span>
                      {location.pathname === '/company/careers' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                      )}
                    </button>

                    {/* 06 International Engagements */}
                    <button
                      type="button"
                      onClick={() => go('/for-us-clients')}
                      className={`text-left px-6 py-[15px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${location.pathname === '/for-us-clients'
                          ? (isDarkTheme ? 'text-manuscript-copper font-semibold' : 'text-manuscript-copper font-semibold')
                          : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                        }`}
                    >
                      <span>International Engagements</span>
                      {location.pathname === '/for-us-clients' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                      )}
                    </button>

                    {/* 07 Blog & Insights */}
                    <button
                      type="button"
                      onClick={() => go('/company/blog')}
                      className={`text-left px-6 py-[15px] font-manuscriptBody text-[16px] transition-colors flex items-center justify-between relative ${location.pathname === '/company/blog'
                          ? (isDarkTheme ? 'text-manuscript-copper font-semibold' : 'text-manuscript-copper font-semibold')
                          : (isDarkTheme ? 'text-[#F4EBDD] font-medium' : 'text-manuscript-ink font-medium')
                        }`}
                    >
                      <span>Blog & Insights</span>
                      {location.pathname === '/company/blog' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper" />
                      )}
                    </button>
                  </>
                )}
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Bottom Nav — Telegram / Minimal Island Style */}
      <div
        className="fixed left-0 right-0 z-[70] md:hidden pb-[env(safe-area-inset-bottom)] bottom-2.5 px-3 flex justify-center pointer-events-none"
      >
        <nav
          className={`h-[56px] w-full max-w-[330px] rounded-full border shadow-[0_8px_24px_-4px_rgba(40,25,10,0.1),0_2px_6px_rgba(0,0,0,0.04)] flex items-center justify-between px-1 backdrop-blur-xl box-border pointer-events-auto transition-all ${isDarkTheme
              ? 'bg-[#121214]/92 border-white/10'
              : 'bg-[#FFFDF9]/92 border-[rgba(80,55,30,0.14)]'
            }`}
          role="navigation"
          aria-label="Mobile Bottom Navigation"
        >
          {/* 01 HOME */}
          <motion.button
            type="button"
            onClick={() => go('/')}
            whileTap={{ scale: 0.92 }}
            className="flex-1 h-full flex flex-col items-center justify-center relative py-1 select-none"
            aria-label="Home"
            aria-current={isHomeActive ? 'page' : undefined}
          >
            <div className="relative w-[24px] h-[24px] flex items-center justify-center">
              {isHomeActive && (
                <motion.div
                  layoutId="telegram-nav-pill"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className={`absolute inset-0 rounded-full ${isDarkTheme ? 'bg-manuscript-copper/25' : 'bg-manuscript-copper/15'
                    }`}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${isHomeActive
                  ? 'text-manuscript-copper'
                  : isDarkTheme ? 'text-[#F4EBDD]/60' : 'text-manuscript-inkMuted'
                }`}>
                <Home size={16} strokeWidth={isHomeActive ? 2.3 : 1.9} />
              </span>
            </div>
            <span className={`text-[9.5px] font-manuscriptBody leading-tight transition-colors duration-200 mt-0.5 ${isHomeActive
                ? 'font-bold text-manuscript-copper'
                : isDarkTheme ? 'font-medium text-[#F4EBDD]/70' : 'font-medium text-manuscript-inkMuted'
              }`}>
              Home
            </span>
          </motion.button>

          {/* 02 SERVICES */}
          <motion.button
            type="button"
            onClick={() => toggleSheet('services')}
            whileTap={{ scale: 0.92 }}
            className="flex-1 h-full flex flex-col items-center justify-center relative py-1 select-none"
            aria-label="Services Menu"
            aria-expanded={activeSheet === 'services'}
          >
            <div className="relative w-[24px] h-[24px] flex items-center justify-center">
              {isServicesActive && (
                <motion.div
                  layoutId="telegram-nav-pill"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className={`absolute inset-0 rounded-full ${isDarkTheme ? 'bg-manuscript-copper/25' : 'bg-manuscript-copper/15'
                    }`}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${isServicesActive
                  ? 'text-manuscript-copper'
                  : isDarkTheme ? 'text-[#F4EBDD]/60' : 'text-manuscript-inkMuted'
                }`}>
                <Sparkles size={16} strokeWidth={isServicesActive ? 2.3 : 1.9} />
              </span>
            </div>
            <span className={`text-[9.5px] font-manuscriptBody leading-tight transition-colors duration-200 mt-0.5 ${isServicesActive
                ? 'font-bold text-manuscript-copper'
                : isDarkTheme ? 'font-medium text-[#F4EBDD]/70' : 'font-medium text-manuscript-inkMuted'
              }`}>
              Services
            </span>
          </motion.button>

          {/* 03 WORK */}
          <motion.button
            type="button"
            onClick={() => go('/portfolio')}
            whileTap={{ scale: 0.92 }}
            className="flex-1 h-full flex flex-col items-center justify-center relative py-1 select-none"
            aria-label="Portfolio Work"
            aria-current={isWorkActive ? 'page' : undefined}
          >
            <div className="relative w-[24px] h-[24px] flex items-center justify-center">
              {isWorkActive && (
                <motion.div
                  layoutId="telegram-nav-pill"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className={`absolute inset-0 rounded-full ${isDarkTheme ? 'bg-manuscript-copper/25' : 'bg-manuscript-copper/15'
                    }`}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${isWorkActive
                  ? 'text-manuscript-copper'
                  : isDarkTheme ? 'text-[#F4EBDD]/60' : 'text-manuscript-inkMuted'
                }`}>
                <Briefcase size={16} strokeWidth={isWorkActive ? 2.3 : 1.9} />
              </span>
            </div>
            <span className={`text-[9.5px] font-manuscriptBody leading-tight transition-colors duration-200 mt-0.5 ${isWorkActive
                ? 'font-bold text-manuscript-copper'
                : isDarkTheme ? 'font-medium text-[#F4EBDD]/70' : 'font-medium text-manuscript-inkMuted'
              }`}>
              Work
            </span>
          </motion.button>

          {/* 04 ABOUT */}
          <motion.button
            type="button"
            onClick={() => toggleSheet('about')}
            whileTap={{ scale: 0.92 }}
            className="flex-1 h-full flex flex-col items-center justify-center relative py-1 select-none"
            aria-label="About & Industries Menu"
            aria-expanded={activeSheet === 'about'}
          >
            <div className="relative w-[24px] h-[24px] flex items-center justify-center">
              {isAboutActive && (
                <motion.div
                  layoutId="telegram-nav-pill"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  className={`absolute inset-0 rounded-full ${isDarkTheme ? 'bg-manuscript-copper/25' : 'bg-manuscript-copper/15'
                    }`}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${isAboutActive
                  ? 'text-manuscript-copper'
                  : isDarkTheme ? 'text-[#F4EBDD]/60' : 'text-manuscript-inkMuted'
                }`}>
                <Compass size={16} strokeWidth={isAboutActive ? 2.3 : 1.9} />
              </span>
            </div>
            <span className={`text-[9.5px] font-manuscriptBody leading-tight transition-colors duration-200 mt-0.5 ${isAboutActive
                ? 'font-bold text-manuscript-copper'
                : isDarkTheme ? 'font-medium text-[#F4EBDD]/70' : 'font-medium text-manuscript-inkMuted'
              }`}>
              About
            </span>
          </motion.button>
        </nav>
      </div>
    </>
  );
}
