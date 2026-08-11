import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { MobileNavigation } from "@/components/mobile/Navigation/MobileNavigation";

interface Row {
  label: string;
  href: string;
}

interface DropdownMenu {
  kind: "dropdown";
  label: string;
  panelTitle: string;
  description: string;
  viewAll: { label: string; href: string };
  rows: Row[];
}

interface DirectLink {
  kind: "link";
  label: string;
  href: string;
}

type NavItem = DropdownMenu | DirectLink;

const NAV: NavItem[] = [
  {
    kind: "dropdown",
    label: "What we do",
    panelTitle: "What we do",
    description:
      "We design, build, and ship production-grade software — from AI solutions to full product development. Senior engineers only, no offshoring.",
    viewAll: { label: "View all services", href: "/services" },
    rows: [
      { label: "AI Solutions", href: "/services/ai-systems-automation" },
      { label: "Product Development", href: "/services/enterprise-product-engineering" },
      { label: "Web Development", href: "/services/cloud-native-web-platforms" },
      { label: "Cloud & DevOps", href: "/services/intelligent-operations-automation" },
      { label: "Technical Consulting", href: "/services/startup-to-scale-engineering" },
    ],
  },
  {
    kind: "link",
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    kind: "dropdown",
    label: "About",
    panelTitle: "About AINCURU",
    description:
      "Who we are, the work we've shipped, and how we keep partnering with teams long after launch.",
    viewAll: { label: "About us", href: "/company/about" },
    rows: [
      { label: "Our Story", href: "/company/about" },
      { label: "Case Studies", href: "/company/case-studies" },
      { label: "Testimonials", href: "/company/testimonials" },
      { label: "Careers", href: "/company/careers" },
      { label: "International Engagements", href: "/for-us-clients" },
      { label: "Blog & Insights", href: "/company/blog" },
    ],
  },
];

export const Header = ({ theme = "manuscript" }: { theme?: "manuscript" | "dark" | "cinematic" }) => {

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setActiveDropdown(null);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 150);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
    openTimer.current = setTimeout(() => setActiveDropdown(label), 90);
  };

  const scheduleClose = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 160);
  };

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (openTimer.current) clearTimeout(openTimer.current);
    },
    [],
  );

  const active = NAV.find((n) => n.kind === "dropdown" && n.label === activeDropdown) as
    | DropdownMenu
    | undefined;

  // Determine actual theme states based on scroll and active state
  const isDarkTheme = theme === "dark" || (theme === "cinematic" && scrolled);
  const isTransparent = theme === "cinematic" && !scrolled && !active;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none md:top-[18px] md:left-[24px] md:right-[24px] lg:left-[48px] lg:right-[48px]"
        onMouseLeave={scheduleClose}
      >
        <nav className="relative mx-auto flex h-[72px] md:h-[64px] max-w-[1200px] items-center justify-between px-4 md:px-0">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            className="flex shrink-0 cursor-pointer items-center pointer-events-auto"
          >
              <img
                src="/images/aincuru-logo.png"
                alt="AINCURU — Context Creates Intelligence"
                className="w-[125px] md:w-[145px] object-contain"
              />
          </a>

          {/* Centered nav */}
          <div 
            className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-[4px] md:flex rounded-full pointer-events-auto transition-colors duration-300 ${
              isTransparent
                ? "bg-transparent border-transparent"
                : isDarkTheme
                  ? "bg-[rgba(8,8,8,0.78)] backdrop-blur-[18px] border border-[rgba(255,255,255,0.10)]"
                  : "bg-[rgba(245,236,216,0.78)] backdrop-blur-[16px] border border-[rgba(80,55,30,0.12)]"
            } p-[6px] px-[8px]`}
          >
            {NAV.map((item) => {
              const isLinkActive = item.kind === "link" && 
                (location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href)));
                
              const isDropdownActive = item.kind === "dropdown" &&
                (location.pathname === item.viewAll.href || location.pathname.startsWith(item.viewAll.href) || item.rows.some(r => location.pathname === r.href || location.pathname.startsWith(r.href)));
                
              const isActive = activeDropdown === item.label || isLinkActive || isDropdownActive;
              const textClass = isTransparent
                ? "text-white/80 hover:text-white"
                : isDarkTheme
                  ? "text-[#F4EBDD]/90 hover:text-manuscript-copper"
                  : "text-manuscript-ink hover:text-manuscript-copper";
                  
              const activeTextClass = isDarkTheme ? "text-manuscript-copper" : "text-manuscript-copper";
              const hoverBgClass = isDarkTheme ? "hover:bg-[rgba(255,255,255,0.05)]" : "hover:bg-[rgba(80,55,30,0.02)]";
              const activeBgClass = isDarkTheme ? "bg-[rgba(255,255,255,0.08)]" : "bg-[rgba(80,55,30,0.04)]";

              if (item.kind === "dropdown") {
                return (
                  <button
                    key={item.label}
                    onMouseEnter={() => openDropdown(item.label)}
                    onClick={() =>
                      activeDropdown === item.label
                        ? setActiveDropdown(null)
                        : openDropdown(item.label)
                    }
                    className={`relative flex items-center gap-1 rounded-full px-[14px] py-[10px] font-manuscriptBody text-[14px] font-medium transition-colors duration-150 ${
                      isActive ? activeTextClass : textClass
                    } ${activeDropdown === item.label ? activeBgClass : hoverBgClass}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`mt-0.5 opacity-60 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180 opacity-100" : ""
                      }`}
                    />
                    {/* Active underline indicator */}
                    <span
                      className={`absolute -bottom-[2px] left-4 right-4 h-px rounded-full bg-manuscript-copper transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                );
              } else {
                return (
                  <button
                    key={item.label}
                    onMouseEnter={scheduleClose}
                    onClick={() => handleNavigation(item.href)}
                    className={`relative px-[14px] py-[10px] rounded-full font-manuscriptBody text-[14px] font-medium transition-colors duration-150 ${
                      isActive ? activeTextClass : textClass
                    } ${hoverBgClass}`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-[2px] left-4 right-4 h-px rounded-full bg-manuscript-copper transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                );
              }
            })}
          </div>

          {/* CTA */}
          <div className="ml-auto flex shrink-0 items-center pointer-events-auto">
            <button
              type="button"
              onClick={() => handleNavigation("/contact")}
              className={`inline-flex items-center justify-center rounded-full px-[18px] h-[36px] md:px-[24px] md:h-[44px] font-bold text-[11px] md:text-[13px] tracking-wide transition-colors ${
                isDarkTheme || isTransparent 
                  ? "bg-manuscript-copper text-[#F4EBDD] hover:bg-manuscript-copperDeep" 
                  : "bg-manuscript-copper text-white hover:bg-manuscript-copperDeep"
              }`}
            >
              CONTACT &rarr;
            </button>
          </div>
        </nav>

        {/* Dropdown panel */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -8, x: "-50%", scale: 0.98 }}
              animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
              exit={{ opacity: 0, y: -4, x: "-50%", scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                width: "clamp(720px, 65vw, 1000px)",
                maxWidth: "calc(100vw - 32px)"
              }}
              className={`absolute left-1/2 top-[calc(100%+16px)] hidden rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.12)] md:block pointer-events-auto border overflow-hidden ${
                isDarkTheme
                  ? "bg-[rgba(16,16,16,0.95)] backdrop-blur-2xl border-[rgba(255,255,255,0.08)]"
                  : "bg-[rgba(248,243,232,0.98)] backdrop-blur-2xl border-[rgba(80,55,30,0.15)]"
              }`}
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
              }}
              onMouseLeave={scheduleClose}
            >
              <div className="grid grid-cols-12 items-center gap-x-6 lg:gap-x-10 p-6 lg:p-10">
                {/* Left — title + description + view all */}
                <div className="col-span-12 flex flex-col md:col-span-5 lg:col-span-4">
                  <p className={`chapter-eyebrow ${isDarkTheme ? 'text-manuscript-copper' : ''}`}>Section</p>
                  <h3 className={`mt-2 font-manuscript text-[22px] lg:text-[26px] font-semibold leading-tight tracking-tight ${
                    isDarkTheme ? 'text-[#F4EBDD]' : 'text-manuscript-ink'
                  }`}>
                    {active.panelTitle}
                  </h3>
                  <p className={`mt-3 max-w-sm font-manuscriptBody text-[13px] lg:text-[14px] leading-relaxed ${
                    isDarkTheme ? 'text-[#F4EBDD]/70' : 'text-manuscript-inkMuted'
                  }`}>
                    {active.description}
                  </p>
                  <button
                    onClick={() => handleNavigation(active.viewAll.href)}
                    className={`mt-5 lg:mt-6 inline-flex w-fit items-center rounded-full border px-4 py-2 lg:px-5 lg:py-2.5 font-manuscriptBody text-[12px] lg:text-[13px] font-semibold transition-colors duration-200 ${
                      isDarkTheme
                        ? 'border-[rgba(255,255,255,0.2)] text-[#F4EBDD] hover:bg-white hover:text-black'
                        : 'border-manuscript-gold text-manuscript-goldDeep hover:bg-manuscript-gold hover:text-manuscript-parchmentLight'
                    }`}
                  >
                    {active.viewAll.label}
                  </button>
                </div>

                {/* Right — compact two-column rows */}
                <div className={`col-span-12 mt-6 grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2 md:col-span-7 lg:col-span-8 md:mt-0 border-t md:border-t-0 md:border-l pt-6 md:pt-0 pl-0 md:pl-6 lg:pl-10 ${
                  isDarkTheme ? 'border-[rgba(255,255,255,0.1)]' : 'border-[rgba(80,55,30,0.1)]'
                }`}>
                  {active.rows.map((row, idx) => (
                    <button
                      key={row.href + idx}
                      onClick={() => handleNavigation(row.href)}
                      className={`group flex w-full items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2.5 lg:px-4 lg:py-3 text-left transition-colors ${
                        isDarkTheme
                          ? 'hover:bg-[rgba(255,255,255,0.04)]'
                          : 'hover:bg-white/50'
                      }`}
                    >
                      <span className={`font-manuscriptBody text-[14px] lg:text-[15px] font-semibold leading-snug transition-colors ${
                        isDarkTheme
                          ? 'text-[#F4EBDD]/90 group-hover:text-manuscript-copper'
                          : 'text-manuscript-ink group-hover:text-manuscript-rustDeep'
                      }`}>
                        {row.label}
                      </span>
                      <span className={`flex h-6 w-6 lg:h-7 lg:w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                        isDarkTheme
                          ? 'border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-[#F4EBDD]/50 group-hover:border-manuscript-copper group-hover:bg-manuscript-copper group-hover:text-black'
                          : 'border-manuscriptAlpha-ink-20 bg-manuscript-parchmentLight text-manuscript-inkMuted group-hover:border-manuscript-gold group-hover:bg-manuscript-gold group-hover:text-manuscript-parchmentLight'
                      }`}>
                        <ChevronRight size={14} className="lg:w-[15px] lg:h-[15px]" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileNavigation theme={theme} />
    </>
  );
};
