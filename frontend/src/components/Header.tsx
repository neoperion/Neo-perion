import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
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
    label: "Services",
    panelTitle: "What we do",
    description:
      "We design, build, and ship production-grade AI platforms, SaaS products, and automation — from first architecture to long-term scale. Senior engineers only, no offshoring.",
    viewAll: { label: "View all services", href: "/services" },
    rows: [
      { label: "AI Systems", href: "/services/ai-systems-automation" },
      { label: "Deep AI Engineering", href: "/services/deep-ai-engineering" },
      { label: "Intelligent Operations", href: "/services/intelligent-operations-automation" },
      { label: "Enterprise Product", href: "/services/enterprise-product-engineering" },
      { label: "Cloud-Native Web", href: "/services/cloud-native-web-platforms" },
      { label: "Mobile Engineering", href: "/services/mobile-product-engineering" },
      { label: "Startup-to-Scale", href: "/services/startup-to-scale-engineering" },
    ],
  },
  { kind: "link", label: "Work", href: "/company/case-studies" },
  { kind: "link", label: "Pricing", href: "#engagement" },
  {
    kind: "dropdown",
    label: "Industries",
    panelTitle: "Industries we serve",
    description:
      "We partner with teams across regulated and high-growth sectors, building scalable, secure products tuned to each domain's constraints.",
    viewAll: { label: "Explore industries", href: "/industries" },
    rows: [
      { label: "Education & EdTech", href: "/industries/education" },
      { label: "Startups & Founders", href: "/industries/startups" },
      { label: "SMBs & Enterprise", href: "/industries/smbs" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
  },
  {
    kind: "dropdown",
    label: "About",
    panelTitle: "About Neo Perion",
    description:
      "Who we are, the work we've shipped, and how we keep partnering with teams long after launch.",
    viewAll: { label: "About us", href: "/company/about" },
    rows: [
      { label: "Our Story", href: "/company/about" },
      { label: "Testimonials", href: "/company/testimonials" },
      { label: "Careers", href: "/company/careers" },
      { label: "Blog & Insights", href: "/company/blog" },
    ],
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-xl"
        onMouseLeave={scheduleClose}
      >
        <nav className="container relative mx-auto flex h-[76px] items-center justify-between px-6">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            className="flex shrink-0 cursor-pointer items-center gap-3"
          >
            <img src="/images/np-logo.png" alt="" aria-hidden className="h-11 w-11 object-contain" />
            <span className="font-logo text-[28px] font-bold leading-none tracking-[0.01em]">
              <span className="text-ink">NEO</span> <span className="text-brand">PERION</span>
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
                  className={`relative flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-150 ${
                    activeDropdown === item.label ? "text-ink" : "text-muted2 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`mt-0.5 opacity-60 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180 opacity-100" : ""
                    }`}
                  />
                  {/* active underline indicator */}
                  <span
                    className={`absolute -bottom-[27px] left-3 right-3 h-0.5 rounded-full bg-brand transition-opacity duration-200 ${
                      activeDropdown === item.label ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              ) : (
                <button
                  key={item.label}
                  onMouseEnter={scheduleClose}
                  onClick={() => handleNavigation(item.href)}
                  className="px-4 py-2 text-[15px] font-medium text-muted2 transition-colors duration-150 hover:text-ink"
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <Button
              variant="brand"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => handleNavigation("/contact")}
            >
              Get in touch
            </Button>
            <button
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-canvas md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Full-width editorial dropdown (KnacForge-style) */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-0 right-0 top-full hidden border-b border-hairline bg-paper shadow-[0_24px_48px_rgba(15,23,42,0.08)] md:block"
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
              }}
              onMouseLeave={scheduleClose}
            >
              <div className="container mx-auto grid max-w-[1200px] grid-cols-12 items-center gap-x-14 px-6 py-8">
                {/* Left — title + description + view all */}
                <div className="col-span-12 flex flex-col lg:col-span-4">
                  <h3 className="font-display text-[22px] font-bold leading-tight tracking-tight text-ink">
                    {active.panelTitle}
                  </h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-body">
                    {active.description}
                  </p>
                  <button
                    onClick={() => handleNavigation(active.viewAll.href)}
                    className="mt-6 inline-flex w-fit items-center rounded-full border border-brand px-5 py-2.5 text-[13px] font-semibold text-brand transition-colors duration-200 hover:bg-brand hover:text-white"
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
                      className="group flex w-full items-center justify-between gap-4 rounded-[12px] px-4 py-3 text-left transition-colors hover:bg-canvas"
                    >
                      <span className="text-[15px] font-semibold text-ink transition-colors group-hover:text-brand">
                        {row.label}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper text-faint transition-all duration-200 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
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
