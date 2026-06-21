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
  cta?: { title: string; buttonText: string; href: string };
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
    cta: {
      title: "Not sure where to start?",
      buttonText: "Book a free consultation",
      href: "/contact",
    },
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
    cta: {
      title: "Let's build together.",
      buttonText: "Schedule a call",
      href: "/contact",
    },
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
    openTimer.current = setTimeout(() => setActiveDropdown(label), 100);
  };

  const scheduleClose = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  const active = NAV.find((n) => n.kind === "dropdown" && n.label === activeDropdown) as
    | DropdownMenu
    | undefined;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-hairline bg-paper/90 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        onMouseLeave={scheduleClose}
      >
        <nav className="container mx-auto flex h-[72px] items-center justify-between gap-8 px-6">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            className="flex shrink-0 cursor-pointer items-center gap-2.5"
          >
            <img src="/images/np-logo.png" alt="Neo Perion" className="h-8 w-8 object-contain" />
            <img
              src="/images/neo-perion-text.png"
              alt="Neo Perion"
              className="mt-0.5 h-4 object-contain md:h-5"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {NAV.map((item) =>
              item.kind === "dropdown" ? (
                <button
                  key={item.label}
                  onMouseEnter={() => openDropdown(item.label)}
                  onClick={() =>
                    setActiveDropdown((cur) => (cur === item.label ? null : item.label))
                  }
                  className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                    activeDropdown === item.label ? "text-brand" : "text-body hover:text-ink"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`opacity-50 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180 text-brand opacity-100" : ""
                    }`}
                  />
                </button>
              ) : (
                <button
                  key={item.label}
                  onMouseEnter={scheduleClose}
                  onClick={() => handleNavigation(item.href)}
                  className="px-4 py-2 text-[15px] font-semibold text-body transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </button>
              ),
            )}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex shrink-0 items-center gap-4">
            <Button
              variant="brand"
              size="sm"
              className="hidden rounded-full md:inline-flex"
              onClick={() => handleNavigation("/contact")}
            >
              Contact
              <ArrowRight size={16} />
            </Button>

            <button
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-canvas md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Slim dropdown panel */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 top-full hidden justify-center px-6 pb-8 pt-3 md:flex"
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
              }}
              onMouseLeave={scheduleClose}
            >
              <div className="flex w-full max-w-[640px] gap-6 rounded-[16px] border border-hairline bg-paper p-6 shadow-xl">
                <div className="grid flex-1 grid-cols-2 gap-1">
                  {active.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.label}
                        onClick={() => handleNavigation(link.href)}
                        className="group flex items-center gap-3 rounded-[12px] p-3 text-left transition-colors hover:bg-canvas"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-muted2 transition-colors group-hover:text-brand" />
                        <span className="text-[14px] font-semibold text-body transition-colors group-hover:text-ink">
                          {link.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {active.cta && (
                  <div className="flex w-56 shrink-0 flex-col justify-between rounded-[12px] bg-navy p-6 text-white">
                    <p className="text-[15px] font-bold leading-snug">{active.cta.title}</p>
                    <button
                      onClick={() => handleNavigation(active.cta!.href)}
                      className="group mt-6 inline-flex items-center justify-between rounded-[12px] bg-brand px-4 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-brand-hover"
                    >
                      {active.cta.buttonText}
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
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
