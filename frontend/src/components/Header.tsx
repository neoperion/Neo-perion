import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { MobileMenuV2 } from "@/components/mobile/Navigation/MobileMenuV2";

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

export const Header = ({ heroDark = false }: { heroDark?: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
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

  // Light (white) treatment when sitting transparently over a dark hero.
  const light = heroDark && !scrolled && !active;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || active
            ? "border-manuscriptAlpha-ink-20 bg-manuscript-parchmentLight/95 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        onMouseLeave={scheduleClose}
      >
        <nav className="relative mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6 lg:px-8">
          {/* Logo — wax-seal monogram + wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            className="flex shrink-0 cursor-pointer items-center gap-3"
          >
            <span className="wax-seal" aria-hidden="true">A</span>
            <span className="flex flex-col leading-none">
              <span className="font-manuscript text-[19px] font-semibold tracking-tight text-manuscript-ink">
                AINCURU
              </span>
              <span className="chapter-eyebrow mt-0.5">Solutions</span>
            </span>
          </a>

          {/* Centered nav */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex">
            {NAV.map((item) =>
              item.kind === "dropdown" ? (
                <button
                  key={item.label}
                  onMouseEnter={() => openDropdown(item.label)}
                  onClick={() =>
                    activeDropdown === item.label
                      ? setActiveDropdown(null)
                      : openDropdown(item.label)
                  }
                  className={`relative flex items-center gap-1 px-4 py-2 font-manuscriptBody text-[15px] font-medium transition-colors duration-150 ${
                    activeDropdown === item.label
                      ? "text-manuscript-ink"
                      : light
                        ? "text-manuscript-parchmentLight/80 hover:text-manuscript-parchmentLight"
                        : "text-manuscript-inkMuted hover:text-manuscript-ink"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`mt-0.5 opacity-60 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180 opacity-100" : ""
                    }`}
                  />
                  {/* active underline indicator — gold hairline */}
                  <span
                    className={`absolute -bottom-[27px] left-3 right-3 h-px rounded-full bg-manuscript-gold transition-opacity duration-200 ${
                      activeDropdown === item.label ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              ) : (
                <button
                  key={item.label}
                  onMouseEnter={scheduleClose}
                  onClick={() => handleNavigation(item.href)}
                  className={`px-4 py-2 font-manuscriptBody text-[15px] font-medium transition-colors duration-150 ${
                    light
                      ? "text-manuscript-parchmentLight/80 hover:text-manuscript-parchmentLight"
                      : "text-manuscript-inkMuted hover:text-manuscript-ink"
                  }`}
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavigation("/contact")}
              className="btn-manuscript-primary hidden md:inline-flex"
            >
              Get in touch
            </button>
            <button
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-manuscript-ink transition-colors hover:bg-manuscriptAlpha-ink-10 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Full-width editorial dropdown — parchment panel */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-0 right-0 top-full hidden border-b border-manuscriptAlpha-ink-20 bg-manuscript-parchmentLight shadow-[0_24px_48px_rgba(31,26,20,0.12)] md:block"
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
              }}
              onMouseLeave={scheduleClose}
            >
              <div className="container mx-auto grid max-w-[1200px] grid-cols-12 items-center gap-x-14 px-6 py-8">
                {/* Left — title + description + view all */}
                <div className="col-span-12 flex flex-col lg:col-span-4">
                  <p className="chapter-eyebrow">Section</p>
                  <h3 className="mt-2 font-manuscript text-[26px] font-semibold leading-tight tracking-tight text-manuscript-ink">
                    {active.panelTitle}
                  </h3>
                  <p className="mt-3 max-w-sm font-manuscriptBody text-[14px] leading-relaxed text-manuscript-inkMuted">
                    {active.description}
                  </p>
                  <button
                    onClick={() => handleNavigation(active.viewAll.href)}
                    className="mt-6 inline-flex w-fit items-center rounded-full border border-manuscript-gold px-5 py-2.5 font-manuscriptBody text-[13px] font-semibold text-manuscript-goldDeep transition-colors duration-200 hover:bg-manuscript-gold hover:text-manuscript-parchmentLight"
                  >
                    {active.viewAll.label}
                  </button>
                </div>

                {/* Right — compact two-column rows */}
                <div className="col-span-12 mt-6 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:col-span-8 lg:mt-0">
                  {active.rows.map((row, idx) => (
                    <button
                      key={row.href + idx}
                      onClick={() => handleNavigation(row.href)}
                      className="group flex w-full items-center justify-between gap-4 rounded-[4px] border border-transparent px-4 py-3 text-left transition-colors hover:border-manuscriptAlpha-ink-20 hover:bg-manuscript-parchment"
                    >
                      <span className="font-manuscriptBody text-[15px] font-semibold text-manuscript-ink transition-colors group-hover:text-manuscript-rustDeep">
                        {row.label}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-manuscriptAlpha-ink-20 bg-manuscript-parchmentLight text-manuscript-inkMuted transition-all duration-200 group-hover:border-manuscript-gold group-hover:bg-manuscript-gold group-hover:text-manuscript-parchmentLight">
                        <ChevronRight size={15} />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenuV2 open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
