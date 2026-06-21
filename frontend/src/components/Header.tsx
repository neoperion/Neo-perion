import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Brain,
  Cog,
  Blocks,
  Cloud,
  Smartphone,
  Rocket,
  Sparkles,
  Lightbulb,
  GraduationCap,
  Building2,
  HeartPulse,
  FileText,
  TrendingUp,
  MessageSquare,
  Briefcase,
  BookOpen,
  Newspaper,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MobileMenuV2 } from "@/components/mobile/Navigation/MobileMenuV2";

interface NavLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DropdownMenu {
  kind: "dropdown";
  label: string;
  links: NavLink[];
  cta?: { prompt: string; buttonText: string; href: string };
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
    links: [
      { label: "AI Systems", href: "/services/ai-systems-automation", icon: Brain },
      { label: "Deep AI Engineering", href: "/services/deep-ai-engineering", icon: Sparkles },
      { label: "Intelligent Operations", href: "/services/intelligent-operations-automation", icon: Cog },
      { label: "Enterprise Product", href: "/services/enterprise-product-engineering", icon: Blocks },
      { label: "Cloud-Native Web", href: "/services/cloud-native-web-platforms", icon: Cloud },
      { label: "Mobile Engineering", href: "/services/mobile-product-engineering", icon: Smartphone },
      { label: "Startup-to-Scale", href: "/services/startup-to-scale-engineering", icon: Rocket },
      { label: "All Services", href: "/services", icon: Lightbulb },
    ],
    cta: { prompt: "Not sure where to start?", buttonText: "Book a free consultation", href: "/contact" },
  },
  {
    kind: "dropdown",
    label: "Industries",
    links: [
      { label: "Education & EdTech", href: "/industries/education", icon: GraduationCap },
      { label: "Startups & Founders", href: "/industries/startups", icon: Rocket },
      { label: "SMBs & Enterprise", href: "/industries/smbs", icon: Building2 },
      { label: "Healthcare", href: "/industries/healthcare", icon: HeartPulse },
    ],
  },
  { kind: "link", label: "Work", href: "/company/case-studies" },
  { kind: "link", label: "Pricing", href: "#engagement" },
  {
    kind: "dropdown",
    label: "Company",
    links: [
      { label: "About Us", href: "/company/about", icon: Building2 },
      { label: "Case Studies", href: "/company/case-studies", icon: FileText },
      { label: "Success Stories", href: "/company/success-stories", icon: TrendingUp },
      { label: "Testimonials", href: "/company/testimonials", icon: MessageSquare },
      { label: "Careers", href: "/company/careers", icon: Briefcase },
      { label: "Blog", href: "/company/blog", icon: BookOpen },
      { label: "Newsletter", href: "/company/newsletter", icon: Newspaper },
    ],
    cta: { prompt: "Let's build together.", buttonText: "Schedule a call", href: "/contact" },
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [panelLeft, setPanelLeft] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

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

  const openDropdown = (label: string, trigger: HTMLElement) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (openTimer.current) clearTimeout(openTimer.current);
    const headerLeft = headerRef.current?.getBoundingClientRect().left ?? 0;
    const left = trigger.getBoundingClientRect().left - headerLeft;
    openTimer.current = setTimeout(() => {
      setPanelLeft(left);
      setActiveDropdown(label);
    }, 90);
  };

  const scheduleClose = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 160);
  };

  const active = NAV.find((n) => n.kind === "dropdown" && n.label === activeDropdown) as
    | DropdownMenu
    | undefined;
  const panelWide = (active?.links.length ?? 0) > 4;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || active
            ? "border-hairline bg-paper/85 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        onMouseLeave={scheduleClose}
      >
        <nav className="container mx-auto flex h-16 items-center px-6">
          {/* Logo — crisp text wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            className="mr-10 flex shrink-0 cursor-pointer items-center gap-2"
          >
            <img src="/images/np-logo.png" alt="" aria-hidden className="h-7 w-7 object-contain" />
            <span className="font-display text-[19px] font-bold tracking-tight text-ink">
              Neo Perion
            </span>
          </a>

          {/* Desktop nav — left-aligned, tight to logo */}
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV.map((item) =>
              item.kind === "dropdown" ? (
                <button
                  key={item.label}
                  onMouseEnter={(e) => openDropdown(item.label, e.currentTarget)}
                  onClick={(e) =>
                    activeDropdown === item.label
                      ? setActiveDropdown(null)
                      : openDropdown(item.label, e.currentTarget)
                  }
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-150 ${
                    activeDropdown === item.label
                      ? "text-ink"
                      : "text-muted2 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={`mt-0.5 opacity-60 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180 opacity-100" : ""
                    }`}
                  />
                </button>
              ) : (
                <button
                  key={item.label}
                  onMouseEnter={scheduleClose}
                  onClick={() => handleNavigation(item.href)}
                  className="rounded-lg px-3 py-2 text-[14px] font-medium text-muted2 transition-colors duration-150 hover:text-ink"
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <button
              onClick={() => handleNavigation("/contact")}
              className="hidden text-[14px] font-medium text-muted2 transition-colors hover:text-ink md:block"
            >
              Sign in
            </button>
            <Button
              variant="brand"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => handleNavigation("/contact")}
            >
              Book a call
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

        {/* Dropdown panel — anchored under its trigger */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-full hidden md:block"
              style={{ left: Math.max(24, panelLeft) }}
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
              }}
              onMouseLeave={scheduleClose}
            >
              <div
                className={`mt-2 overflow-hidden rounded-[14px] border border-hairline bg-paper shadow-[0_16px_50px_rgba(15,23,42,0.12)] ${
                  panelWide ? "w-[460px]" : "w-[280px]"
                }`}
              >
                <div className={`grid gap-0.5 p-2 ${panelWide ? "grid-cols-2" : "grid-cols-1"}`}>
                  {active.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.label}
                        onClick={() => handleNavigation(link.href)}
                        className="group flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-left transition-colors hover:bg-canvas"
                      >
                        <Icon className="h-[18px] w-[18px] shrink-0 text-faint transition-colors group-hover:text-brand" />
                        <span className="text-[14px] font-medium text-body transition-colors group-hover:text-ink">
                          {link.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {active.cta && (
                  <button
                    onClick={() => handleNavigation(active.cta!.href)}
                    className="group flex w-full items-center justify-between border-t border-hairline bg-canvas px-4 py-3 text-left"
                  >
                    <span className="text-[13px] text-muted2">{active.cta.prompt}</span>
                    <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand">
                      {active.cta.buttonText}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenuV2 open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
