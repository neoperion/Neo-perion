import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fritadoConfig } from "@/data/fritadoConfig";
import { trackEvent } from "@/shared/analytics";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Product Experience" },
  { id: "intelligence", label: "Intelligence" },
  { id: "highlights", label: "Highlights" },
];

export const FritadoStickyNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("overview");
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const navContainerRef = React.useRef<HTMLElement | null>(null);
  const activeItemRefs = React.useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const navEl = document.getElementById("fritado-product-nav");
      if (navEl) {
        const rect = navEl.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }

      const scrollPosition = window.scrollY + 160;
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothly center the active tab in the horizontal scroll container on mobile (container-only scroll, NEVER touches window scroll)
  useEffect(() => {
    const activeEl = activeItemRefs.current[activeId];
    const container = navContainerRef.current;
    if (activeEl && container) {
      const targetScroll = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 130;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveId(id);
    }
  };

  const handleCtaClick = () => {
    trackEvent("fritado_sticky_nav_cta_click", {
      product: "fritado",
      source_section: "sticky_nav",
      destination: fritadoConfig.primaryUrl,
    });
    window.open(fritadoConfig.primaryUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="fritado-product-nav" className="sticky top-[72px] md:top-[74px] z-40 w-full transition-all duration-200 font-sans">
      <div className={`w-full transition-all duration-300 ${
        isSticky 
          ? "bg-manuscript-parchment/95 backdrop-blur-xl border-y border-manuscriptAlpha-ink-15 shadow-[0_8px_24px_rgba(80,55,30,0.06)]" 
          : "bg-manuscript-parchment/80 backdrop-blur-md border-y border-manuscriptAlpha-ink-10"
      }`}>
        <div className="max-w-[1240px] mx-auto px-3 sm:px-6 flex items-center justify-between h-12 md:h-14 gap-2">
          {/* Scrollable nav items list with mobile edge fade cues */}
          <div className="relative flex-1 min-w-0 overflow-hidden">
            {/* Subtle fade edges for mobile swipe discoverability */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-manuscript-parchment to-transparent z-10 sm:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-manuscript-parchment to-transparent z-10 sm:hidden" />

            <nav 
              ref={navContainerRef}
              className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1 px-1"
              role="tablist"
              aria-label="Fritado Product Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    ref={(el) => (activeItemRefs.current[item.id] = el)}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(item.id, e)}
                    role="tab"
                    aria-selected={isActive}
                    className={`group whitespace-nowrap px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-150 relative shrink-0 ${
                      isActive 
                        ? "text-manuscript-copper font-bold bg-manuscript-copper/10 border border-manuscript-copper/20" 
                        : "text-manuscript-inkMuted hover:text-manuscript-ink hover:bg-manuscript-parchmentLight border border-transparent"
                    }`}
                  >
                    {item.label}
                    {/* Animated Underline for non-active links on hover */}
                    {!isActive && (
                      <span className="hidden sm:block absolute bottom-1 left-3 right-3 h-[1.5px] bg-manuscript-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-manuscript-copper rounded-full sm:hidden" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Desktop/Tablet CTA Button with physical press & arrow translation */}
          <div className="hidden sm:block shrink-0 pl-3">
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs font-semibold bg-manuscript-copper text-white hover:bg-manuscript-copperDeep transition-colors shadow-sm font-sans"
            >
              <span>START TRIAL</span>
              <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
