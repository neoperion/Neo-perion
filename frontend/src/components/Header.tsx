import { useState, useRef } from "react";
import { 
  Menu, X, ChevronDown, ArrowRight,
  Building2, PenTool, Target, ShieldCheck,
  FileText, TrendingUp, MessageSquare,
  Briefcase, GraduationCap, BookOpen, Newspaper, Cpu,
  Rocket, HeartPulse, Sparkles, Bot, Box, Compass, Atom, Triangle, FileCode2, 
  Paintbrush, Server, Terminal, Zap, Database, Cloud, Network, Link, GitMerge, Settings,
  Brain, LineChart, Code2, Smartphone, Lightbulb, Cog, Blocks
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenuV2 } from "@/components/mobile/Navigation/MobileMenuV2";

const NAV_DATA = {
  Services: {
    columns: [
      {
        title: "AI & Automation",
        items: [
          { label: "AI Systems", href: "/services/ai-systems-automation", icon: Brain, description: "RAG architectures and contextual AI integration." },
          { label: "Deep AI Engineering", href: "/services/deep-ai-engineering", icon: Sparkles, description: "Custom fine-tuned models & neural networks." },
          { label: "Intelligent Operations", href: "/services/intelligent-operations-automation", icon: Cog, description: "Business workflow automation and ROI scaling." }
        ]
      },
      {
        title: "Product Engineering",
        items: [
          { label: "Enterprise Product", href: "/services/enterprise-product-engineering", icon: Blocks, description: "End-to-end scalable product development." },
          { label: "Cloud-Native Web", href: "/services/cloud-native-web-platforms", icon: Cloud, description: "High-performance, secure web applications." },
          { label: "Mobile Engineering", href: "/services/mobile-product-engineering", icon: Smartphone, description: "Native & React Native mobile experiences." }
        ]
      },
      {
        title: "Strategic Consulting",
        items: [
          { label: "Startup-to-Scale", href: "/services/startup-to-scale-engineering", icon: Rocket, description: "Fractional CTO & technical due diligence prep." },
          { label: "All Services", href: "/services", icon: Lightbulb, description: "View our complete catalog of capabilities." }
        ]
      }
    ],
    cta: {
      label: "BUILD WITH NEO PERION",
      title: "Transform your vision into a scalable digital product powered by AI.",
      buttonText: "Book Free Consultation →",
      href: "/contact",
      icon: Rocket
    }
  },

  Industries: {
    columns: [
      {
        title: "EDUCATION & EDTECH",
        icon: GraduationCap,
        description: "AI-powered learning platforms, LMS systems, student analytics and educational technology solutions.",
        href: "/industries/education",
        items: [
          { label: "LMS Platforms", href: "/industries/education" },
          { label: "Student Analytics", href: "/industries/education" },
          { label: "AI Learning Assistants", href: "/industries/education" },
          { label: "Assessment Systems", href: "/industries/education" }
        ]
      },
      {
        title: "STARTUPS & FOUNDERS",
        icon: Rocket,
        description: "MVP development, SaaS platforms, startup engineering and technical consulting.",
        href: "/industries/startups",
        items: [
          { label: "MVP Development", href: "/industries/startups" },
          { label: "SaaS Platforms", href: "/industries/startups" },
          { label: "Product Engineering", href: "/industries/startups" },
          { label: "Startup Consulting", href: "/industries/startups" }
        ]
      },
      {
        title: "SMBs & ENTERPRISE",
        icon: Building2,
        description: "Business automation, digital transformation and operational efficiency solutions.",
        href: "/industries/smbs",
        items: [
          { label: "Business Automation", href: "/industries/smbs" },
          { label: "CRM Systems", href: "/industries/smbs" },
          { label: "Analytics Dashboards", href: "/industries/smbs" },
          { label: "ERP Solutions", href: "/industries/smbs" }
        ]
      },
      {
        title: "HEALTHCARE",
        icon: HeartPulse,
        description: "Healthcare software, patient management systems and AI-powered healthcare solutions.",
        href: "/industries/healthcare",
        items: [
          { label: "Patient Platforms", href: "/industries/healthcare" },
          { label: "Telemedicine", href: "/industries/healthcare" },
          { label: "AI Diagnostics", href: "/industries/healthcare" },
          { label: "Healthcare Analytics", href: "/industries/healthcare" }
        ]
      }
    ],
    bottomCta: {
      title: "INDUSTRIES WE TRANSFORM",
      description: "Helping startups, SMBs, healthcare providers and educational institutions build AI-powered digital products.",
      buttonText: "Explore Industries →",
      href: "/industries"
    }
  },
  Company: {
    columns: [
      {
        title: "ABOUT NEO PERION",
        items: [
          { label: "About Us", href: "/about", icon: Building2 },
          { label: "Founder's Letter", href: "/company/founder-letter", icon: PenTool },
          { label: "Vision & Mission", href: "/about#vision", icon: Target },
          { label: "Security", href: "/security", icon: ShieldCheck }
        ]
      },
      {
        title: "SOCIAL PROOF",
        items: [
          { label: "Case Studies", href: "/case-studies", icon: FileText },
          { label: "Success Stories", href: "/success-stories", icon: TrendingUp },
          { label: "Testimonials", href: "/testimonials", icon: MessageSquare }
        ]
      },
      {
        title: "CAREERS",
        items: [
          { label: "Join Our Team", href: "/careers", icon: Briefcase },
          { label: "Internship Program", href: "/careers/internships", icon: GraduationCap },
          { label: "Open Positions", href: "/careers#open-roles", icon: Briefcase }
        ]
      },
      {
        title: "RESOURCES",
        items: [
          { label: "Blog", href: "/blog", icon: BookOpen },
          { label: "AI Newsletter", href: "/newsletter", icon: Newspaper },
          { label: "Technology Insights", href: "/insights", icon: Cpu }
        ]
      }
    ],
    cta: {
      label: "LET'S BUILD TOGETHER",
      buttonText: "Schedule a Call →",
      href: "/contact"
    }
  }
};

type NavKey = keyof typeof NAV_DATA;
const NAV_KEYS: NavKey[] = ["Services", "Industries", "Company"];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<NavKey | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileExpanded(null);
    if (href.includes("#") && !href.startsWith("#")) {
      const [path, hash] = href.split("#");
      if (location.pathname === path) {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(path);
        setTimeout(() => document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" }), 300);
      }
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openDropdown = (key: NavKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl"
        onMouseLeave={() => scheduleClose()}
      >
      {/* ── MAIN NAV ROW ── */}
      <nav className="container mx-auto px-6 h-[72px] flex items-center justify-between gap-8">
        
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handleNavigation("/"); }}
          className="flex items-center gap-2.5 shrink-0 cursor-pointer"
        >
          <img src="/images/np-logo.png" alt="Neo Perion Logo" className="w-8 h-8 object-contain" />
          <img src="/images/neo-perion-text.png" alt="Neo Perion" className="h-4 md:h-5 object-contain mt-0.5" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onMouseEnter={() => openDropdown(key)}
              onClick={() => {
                if (activeDropdown === key) setActiveDropdown(null);
                else openDropdown(key);
              }}
              className={`relative flex items-center gap-1.5 px-4 py-2 text-[15px] font-semibold transition-colors duration-200 group ${
                activeDropdown === key ? "text-neo-blue" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {key}
              <ChevronDown
                size={14}
                className={`opacity-50 transition-transform duration-200 ${
                  activeDropdown === key ? "rotate-180 opacity-100 text-neo-blue" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {/* Desktop CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavigation("/contact")}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-sm bg-neo-blue hover:bg-neo-highlight transition-all duration-300"
          >
            CONTACT <ArrowRight size={16} strokeWidth={3} />
          </button>
          
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </nav>

      {/* ── DESKTOP MEGA MENU ── */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-full left-0 right-0 pt-4 pb-8"
            onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
            onMouseLeave={() => scheduleClose()}
          >
            <div className="container mx-auto px-6">
              <div className="bg-white rounded-[24px] shadow-2xl p-8 border border-slate-200">
                <div className="flex flex-col">
                  <div className={`flex gap-6 ${activeDropdown === 'Industries' || activeDropdown === 'Services' ? 'divide-x divide-slate-100' : ''}`}>
                    {/* Columns */}
                    {NAV_DATA[activeDropdown].columns.map((col: any, idx) => (
                      <div key={idx} className={`flex-1 ${activeDropdown === 'Industries' || activeDropdown === 'Services' ? 'pl-6 first:pl-0' : ''}`}>
                        {col.href ? (
                          <button onClick={() => handleNavigation(col.href)} className="block text-left mb-6 group w-full">
                            {col.icon && (
                              <div className="w-12 h-12 rounded-xl bg-neo-blue/10 text-neo-blue flex items-center justify-center mb-4 group-hover:bg-neo-blue/20 transition-colors">
                                <col.icon size={24} />
                              </div>
                            )}
                            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-slate-900 group-hover:text-neo-blue transition-colors font-display">
                              {col.title}
                            </h4>
                            {col.description && (
                              <p className="text-[13px] text-slate-500 mt-2 leading-relaxed font-normal">
                                {col.description}
                              </p>
                            )}
                          </button>
                        ) : (
                          <div className="mb-6">
                            {col.icon && (
                              <div className="w-12 h-12 rounded-xl bg-neo-blue/10 text-neo-blue flex items-center justify-center mb-4">
                                <col.icon size={24} />
                              </div>
                            )}
                            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 font-display">
                              {col.title}
                            </h4>
                            {col.description && (
                              <p className="text-[13px] text-slate-500 mt-2 leading-relaxed">
                                {col.description}
                              </p>
                            )}
                          </div>
                        )}
                        <div className="flex flex-col gap-1.5">
                          {col.items.map((item: any) => {
                            const Icon = item.icon;
                            return (
                              <button
                                key={item.label}
                                onClick={() => handleNavigation(item.href)}
                                className="group/item flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 w-full text-left"
                              >
                                <div className="flex items-start gap-3">
                                  {Icon && (
                                    <div className="mt-0.5 text-slate-400 group-hover/item:text-neo-blue transition-colors shrink-0">
                                      <Icon size={20} strokeWidth={2} />
                                    </div>
                                  )}
                                  <div>
                                    <span className="block text-[15px] font-bold text-slate-700 group-hover/item:text-neo-blue transition-colors duration-300">
                                      {item.label}
                                    </span>
                                    {item.description && (
                                      <span className="block text-[13px] text-slate-500 mt-1 leading-relaxed font-normal group-hover/item:text-slate-600">
                                        {item.description}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <div className="shrink-0 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 mt-0.5">
                                  <ArrowRight size={18} className="text-neo-blue" />
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    {/* CTA Banner Column (if exists) */}
                    {(NAV_DATA[activeDropdown] as any).cta && (
                      <div className="w-80 shrink-0 border-l border-slate-100 pl-8 flex flex-col justify-stretch">
                        <div className="bg-slate-900 rounded-2xl p-8 text-white h-full flex flex-col justify-between relative overflow-hidden group">
                          
                          <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                              {(() => {
                                const CtaIcon = (NAV_DATA[activeDropdown] as any).cta.icon;
                                return CtaIcon ? <CtaIcon size={24} className="text-neo-highlight" /> : <Rocket size={24} className="text-neo-highlight" />;
                              })()}
                            </div>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neo-highlight mb-3">
                              {(NAV_DATA[activeDropdown] as any).cta.label}
                            </p>
                            <h4 className="text-[22px] font-bold mb-4 leading-snug">
                              {(NAV_DATA[activeDropdown] as any).cta.title || "Discuss your project with our team"}
                            </h4>
                          </div>
                          
                          <button
                            onClick={() => handleNavigation((NAV_DATA[activeDropdown] as any).cta.href)}
                            className="relative z-10 flex items-center justify-between w-full bg-neo-blue text-white px-5 py-3.5 rounded-xl font-bold text-[14px] hover:bg-neo-highlight transition-all duration-300 mt-8 group/btn"
                          >
                            {(NAV_DATA[activeDropdown] as any).cta.buttonText.replace(' →', '')}
                            <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* BOTTOM CTA BANNER */}
                  {(NAV_DATA[activeDropdown] as any).bottomCta && (
                    <div 
                      className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between group cursor-pointer bg-transparent" 
                      onClick={() => handleNavigation((NAV_DATA[activeDropdown] as any).bottomCta.href)}
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-slate-900 font-display">
                          {(NAV_DATA[activeDropdown] as any).bottomCta.title}
                        </span>
                        <span className="text-[14px] text-slate-500 font-medium">
                          {(NAV_DATA[activeDropdown] as any).bottomCta.description}
                        </span>
                      </div>
                      <button className="flex items-center gap-1.5 text-neo-blue font-bold text-[14px] group-hover:text-neo-highlight transition-colors">
                        <span className="group-hover:scale-[1.02] transition-transform origin-right">{(NAV_DATA[activeDropdown] as any).bottomCta.buttonText.replace(' →', '')}</span>
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>

      {/* ── MOBILE MENU OVERLAY (FUTURISTIC) ── */}
      <MobileMenuV2 open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
