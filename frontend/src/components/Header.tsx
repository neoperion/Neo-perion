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

const NAV_DATA = {
  Services: {
    columns: [
      {
        title: "AI & Intelligence",
        items: [
          { label: "Artificial Intelligence", href: "/services/artificial-intelligence", icon: Brain, description: "AI-powered business solutions, automation and predictive analytics." },
          { label: "Advanced AI", href: "/services/advanced-ai", icon: Sparkles, description: "Next-generation reasoning models and deep learning." },
          { label: "AI Agents", href: "/services/ai-agents", icon: Bot, description: "Autonomous workflows and intelligent agent networks." },
          { label: "RAG Systems", href: "/services/rag-systems", icon: Database, description: "Knowledge retrieval and contextual AI search." },
          { label: "Machine Learning", href: "/services/machine-learning", icon: LineChart, description: "Custom predictive models and data forecasting." }
        ]
      },
      {
        title: "Development",
        items: [
          { label: "Product Development", href: "/services/product-development", icon: Blocks, description: "End-to-end digital product engineering." },
          { label: "Web Development", href: "/services/web-development", icon: Code2, description: "High-performance web applications and portals." },
          { label: "Mobile Development", href: "/services/mobile-development", icon: Smartphone, description: "Native and cross-platform mobile experiences." },
          { label: "SaaS Development", href: "/services/saas-development", icon: Cloud, description: "Scalable B2B and B2C software architectures." }
        ]
      },
      {
        title: "Business Solutions",
        items: [
          { label: "Business Automation", href: "/services/business-automation", icon: Cog, description: "Streamlined operations and intelligent workflows." },
          { label: "Startup Support", href: "/services/startup-support", icon: Rocket, description: "MVP engineering and technical foundation." },
          { label: "Technical Consulting", href: "/services/technical-consulting", icon: Lightbulb, description: "Strategic architecture and digital transformation." }
        ]
      }
    ],
    cta: {
      label: "BUILD WITH NEO PERION",
      title: "Transform your vision into a scalable digital product powered by AI.",
      buttonText: "Book Free Consultation →",
      href: "#contact",
      icon: Rocket
    }
  },
  Technologies: {
    columns: [
      {
        title: "AI PLATFORMS",
        items: [
          { label: "Google Gemini", href: "/technologies/gemini", icon: Sparkles, description: "Multimodal AI solutions and intelligent assistants" },
          { label: "OpenAI", href: "/technologies/openai", icon: Bot, description: "GPT-powered applications and automation" },
          { label: "Claude", href: "/technologies/claude", icon: MessageSquare, description: "Advanced reasoning and enterprise AI" },
          { label: "Llama", href: "/technologies/llama", icon: Box, description: "Open-source large language models" },
          { label: "DeepSeek", href: "/technologies/deepseek", icon: Compass, description: "Efficient AI development and deployment" }
        ]
      },
      {
        title: "FRONTEND",
        items: [
          { label: "React", href: "/technologies/react", icon: Atom, description: "Modern component-based web applications" },
          { label: "Next.js", href: "/technologies/nextjs", icon: Triangle, description: "SEO-friendly high-performance applications" },
          { label: "TypeScript", href: "/technologies/typescript", icon: FileCode2, description: "Type-safe scalable development" },
          { label: "Tailwind CSS", href: "/technologies/tailwind", icon: Paintbrush, description: "Utility-first UI development" }
        ]
      },
      {
        title: "BACKEND",
        items: [
          { label: "Node.js", href: "/technologies/nodejs", icon: Server, description: "Scalable server-side applications" },
          { label: "Python", href: "/technologies/python", icon: Terminal, description: "AI and automation development" },
          { label: "FastAPI", href: "/technologies/fastapi", icon: Zap, description: "High-performance API architecture" },
          { label: "PostgreSQL", href: "/technologies/postgresql", icon: Database, description: "Enterprise-grade databases" }
        ]
      },
      {
        title: "CLOUD & DEVOPS",
        items: [
          { label: "AWS", href: "/technologies/aws", icon: Cloud, description: "Scalable cloud infrastructure" },
          { label: "Azure", href: "/technologies/azure", icon: Cloud, description: "Enterprise cloud solutions" },
          { label: "Google Cloud", href: "/technologies/gcp", icon: Cloud, description: "Cloud-native application deployment" },
          { label: "Docker", href: "/technologies/docker", icon: Box, description: "Containerized environments" },
          { label: "Kubernetes", href: "/technologies/kubernetes", icon: Network, description: "Container orchestration at scale" }
        ]
      },
      {
        title: "DATA & AI",
        items: [
          { label: "Vector Databases", href: "/technologies/vector-db", icon: Database, description: "AI memory and retrieval systems" },
          { label: "LangChain", href: "/technologies/langchain", icon: Link, description: "LLM orchestration framework" },
          { label: "RAG Pipelines", href: "/technologies/rag-pipelines", icon: GitMerge, description: "Retrieval augmented generation systems" },
          { label: "AI Agents", href: "/technologies/ai-agents", icon: Bot, description: "Autonomous AI workflows" },
          { label: "MLOps", href: "/technologies/mlops", icon: Settings, description: "Machine learning deployment pipelines" }
        ]
      }
    ],
    bottomCta: {
      title: "TECHNOLOGY ECOSYSTEM",
      description: "Explore our complete AI, Cloud, Data and Engineering capabilities.",
      buttonText: "Explore Technologies →",
      href: "/technologies"
    }
  },
  Industries: {
    columns: [
      {
        title: "EDUCATION & EDTECH",
        icon: GraduationCap,
        description: "AI-powered learning platforms, LMS systems, student analytics and educational technology solutions.",
        href: "/industries#education",
        items: [
          { label: "LMS Platforms", href: "/industries#education" },
          { label: "Student Analytics", href: "/industries#education" },
          { label: "AI Learning Assistants", href: "/industries#education" },
          { label: "Assessment Systems", href: "/industries#education" }
        ]
      },
      {
        title: "STARTUPS & FOUNDERS",
        icon: Rocket,
        description: "MVP development, SaaS platforms, startup engineering and technical consulting.",
        href: "/industries#startups",
        items: [
          { label: "MVP Development", href: "/industries#startups" },
          { label: "SaaS Platforms", href: "/industries#startups" },
          { label: "Product Engineering", href: "/industries#startups" },
          { label: "Startup Consulting", href: "/industries#startups" }
        ]
      },
      {
        title: "SMBs & ENTERPRISE",
        icon: Building2,
        description: "Business automation, digital transformation and operational efficiency solutions.",
        href: "/industries#smb",
        items: [
          { label: "Business Automation", href: "/industries#smb" },
          { label: "CRM Systems", href: "/industries#smb" },
          { label: "Analytics Dashboards", href: "/industries#smb" },
          { label: "ERP Solutions", href: "/industries#smb" }
        ]
      },
      {
        title: "HEALTHCARE",
        icon: HeartPulse,
        description: "Healthcare software, patient management systems and AI-powered healthcare solutions.",
        href: "/industries#healthcare",
        items: [
          { label: "Patient Platforms", href: "/industries#healthcare" },
          { label: "Telemedicine", href: "/industries#healthcare" },
          { label: "AI Diagnostics", href: "/industries#healthcare" },
          { label: "Healthcare Analytics", href: "/industries#healthcare" }
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
      href: "#contact"
    }
  }
};

type NavKey = keyof typeof NAV_DATA;
const NAV_KEYS: NavKey[] = ["Services", "Technologies", "Industries", "Company"];

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
    <header
      className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl"
      style={{ background: "rgba(2, 4, 10, 0.92)" }}
      onMouseLeave={() => scheduleClose()}
    >
      {/* ── MAIN NAV ROW ── */}
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handleNavigation("/"); }}
          className="flex items-center gap-2.5 shrink-0 cursor-pointer"
        >
          <img src="/images/np-logo.png" alt="NP Logo" className="h-10 w-auto" />
          <img src="/images/neo-perion-text.png" alt="NEO PERION" className="h-8 w-auto hidden sm:block" />
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
                activeDropdown === key ? "text-cyan-400" : "text-slate-300 hover:text-white"
              }`}
            >
              {key}
              <ChevronDown
                size={14}
                className={`opacity-50 transition-transform duration-200 ${
                  activeDropdown === key ? "rotate-180 opacity-100 text-cyan-400" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {/* Desktop CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavigation("#contact")}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            CONTACT <ArrowRight size={16} strokeWidth={3} />
          </button>
          
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-white/5 rounded-lg transition-colors"
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
              <div className="bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-8 border border-slate-200/50">
                <div className="flex flex-col">
                  <div className={`flex gap-6 ${activeDropdown === 'Industries' || activeDropdown === 'Technologies' || activeDropdown === 'Services' ? 'divide-x divide-slate-100' : ''}`}>
                    {/* Columns */}
                    {NAV_DATA[activeDropdown].columns.map((col: any, idx) => (
                      <div key={idx} className={`flex-1 ${activeDropdown === 'Industries' || activeDropdown === 'Technologies' || activeDropdown === 'Services' ? 'pl-6 first:pl-0' : ''}`}>
                        {col.href ? (
                          <button onClick={() => handleNavigation(col.href)} className="block text-left mb-6 group w-full">
                            {col.icon && (
                              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                                <col.icon size={24} />
                              </div>
                            )}
                            <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-slate-900 group-hover:text-cyan-600 transition-colors">
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
                              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                                <col.icon size={24} />
                              </div>
                            )}
                            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
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
                                className="group/item flex items-start justify-between gap-4 p-3 rounded-xl hover:bg-slate-50 hover:shadow-[inset_0_0_0_1px_rgba(6,182,212,0.2)] transition-all duration-300 w-full text-left"
                              >
                                <div className="flex items-start gap-3">
                                  {Icon && (
                                    <div className="mt-0.5 text-slate-400 group-hover/item:text-cyan-600 transition-colors shrink-0">
                                      <Icon size={20} strokeWidth={2} />
                                    </div>
                                  )}
                                  <div>
                                    <span className="block text-[15px] font-bold text-slate-800 group-hover/item:text-cyan-700 group-hover/item:scale-[1.02] transition-transform origin-left duration-300">
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
                                  <ArrowRight size={18} className="text-cyan-600" />
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
                        <div className="bg-gradient-to-br from-[#0A0F24] via-blue-900 to-cyan-800 rounded-2xl p-8 text-white shadow-2xl h-full flex flex-col justify-between relative overflow-hidden group">
                          {/* Decorative subtle background elements */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400 opacity-20 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 opacity-20 blur-2xl rounded-full transform -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                          
                          <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 backdrop-blur-md shadow-lg">
                              {(() => {
                                const CtaIcon = (NAV_DATA[activeDropdown] as any).cta.icon;
                                return CtaIcon ? <CtaIcon size={24} className="text-cyan-300" /> : <Rocket size={24} className="text-cyan-300" />;
                              })()}
                            </div>
                            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                              {(NAV_DATA[activeDropdown] as any).cta.label}
                            </p>
                            <h4 className="text-[22px] font-bold mb-4 leading-snug">
                              {(NAV_DATA[activeDropdown] as any).cta.title || "Discuss your project with our team"}
                            </h4>
                          </div>
                          
                          <button
                            onClick={() => handleNavigation((NAV_DATA[activeDropdown] as any).cta.href)}
                            className="relative z-10 flex items-center justify-between w-full bg-white text-blue-900 px-5 py-3.5 rounded-xl font-bold text-[14px] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all duration-300 mt-8 group/btn"
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
                      className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between group cursor-pointer bg-white" 
                      onClick={() => handleNavigation((NAV_DATA[activeDropdown] as any).bottomCta.href)}
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-slate-900">
                          {(NAV_DATA[activeDropdown] as any).bottomCta.title}
                        </span>
                        <span className="text-[14px] text-slate-500 font-medium">
                          {(NAV_DATA[activeDropdown] as any).bottomCta.description}
                        </span>
                      </div>
                      <button className="flex items-center gap-1.5 text-cyan-600 font-bold text-[14px] group-hover:text-cyan-700 transition-colors">
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

      {/* ── MOBILE ACCORDION MENU ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#050816] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {NAV_KEYS.map((key) => (
                <div key={key} className="border-b border-white/5 pb-2">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                    className="w-full flex items-center justify-between py-3 px-2 text-white font-semibold"
                  >
                    {key}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileExpanded === key ? "rotate-180 text-cyan-400" : "opacity-50"
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileExpanded === key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pr-2 py-2 space-y-6">
                          {NAV_DATA[key].columns.map((col, idx) => (
                            <div key={idx}>
                              <p className="text-[10px] font-bold tracking-widest uppercase text-cyan-500 mb-3 pl-2">
                                {col.title}
                              </p>
                              <div className="space-y-1">
                                {col.items.map((item) => (
                                  <button
                                    key={item.label}
                                    onClick={() => handleNavigation(item.href)}
                                    className="w-full text-left px-2 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-3"
                                  >
                                    {item.icon && <item.icon size={16} className="opacity-50" />}
                                    {item.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-6 pb-4 px-2">
                <button
                  onClick={() => handleNavigation("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-bold text-sm bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg"
                >
                  CONTACT <ArrowRight size={16} strokeWidth={3} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
