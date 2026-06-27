import { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight, Mail, Linkedin, Twitter, Github, Instagram, X,
  Brain, Sparkles, Cog, Blocks, Cloud, Smartphone, Rocket, Lightbulb,
  GraduationCap, HeartPulse, Building2, Briefcase, BookOpen, Newspaper, Cpu,
  FileText, TrendingUp, MessageSquare, PenTool, Target, ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

interface Item { label: string; href: string; description?: string; icon?: LucideIcon }
interface Column { title: string; items: Item[]; icon?: LucideIcon; description?: string; href?: string }
interface Section { key: string; label: string; columns: Column[]; cta?: { label: string; title?: string; buttonText: string; href: string }; bottomCta?: { title: string; description: string; buttonText: string; href: string } }

const SECTIONS: Section[] = [
  {
    key: 'services', label: 'Services',
    columns: [
      { title: 'AI & Automation', items: [
        { label: 'AI Systems', href: '/services/ai-systems-automation', icon: Brain, description: 'RAG architectures and contextual AI integration.' },
        { label: 'Deep AI Engineering', href: '/services/deep-ai-engineering', icon: Sparkles, description: 'Custom fine-tuned models & neural networks.' },
        { label: 'Intelligent Operations', href: '/services/intelligent-operations-automation', icon: Cog, description: 'Business workflow automation and ROI scaling.' },
      ]},
      { title: 'Product Engineering', items: [
        { label: 'Enterprise Product', href: '/services/enterprise-product-engineering', icon: Blocks, description: 'End-to-end scalable product development.' },
        { label: 'Cloud-Native Web', href: '/services/cloud-native-web-platforms', icon: Cloud, description: 'High-performance, secure web applications.' },
        { label: 'Mobile Engineering', href: '/services/mobile-product-engineering', icon: Smartphone, description: 'Native & React Native mobile experiences.' },
      ]},
      { title: 'Strategic Consulting', items: [
        { label: 'Startup-to-Scale', href: '/services/startup-to-scale-engineering', icon: Rocket, description: 'Fractional CTO & technical due diligence prep.' },
        { label: 'All Services', href: '/services', icon: Lightbulb, description: 'View our complete catalog of capabilities.' },
      ]},
    ],
    cta: { label: 'BUILD WITH NEO PERION', title: 'Transform your vision into a scalable digital product powered by AI.', buttonText: 'Book Free Consultation', href: '/contact' },
  },
  {
    key: 'industries', label: 'Industries',
    columns: [
      { title: 'EDUCATION & EDTECH', icon: GraduationCap, href: '/industries/education', description: 'AI-powered learning platforms, LMS systems, student analytics and educational technology solutions.', items: [
        { label: 'LMS Platforms', href: '/industries/education' }, { label: 'Student Analytics', href: '/industries/education' }, { label: 'AI Learning Assistants', href: '/industries/education' }, { label: 'Assessment Systems', href: '/industries/education' },
      ]},
      { title: 'STARTUPS & FOUNDERS', icon: Rocket, href: '/industries/startups', description: 'MVP development, SaaS platforms, startup engineering and technical consulting.', items: [
        { label: 'MVP Development', href: '/industries/startups' }, { label: 'SaaS Platforms', href: '/industries/startups' }, { label: 'Product Engineering', href: '/industries/startups' }, { label: 'Startup Consulting', href: '/industries/startups' },
      ]},
      { title: 'SMBs & ENTERPRISE', icon: Building2, href: '/industries/smbs', description: 'Business automation, digital transformation and operational efficiency solutions.', items: [
        { label: 'Business Automation', href: '/industries/smbs' }, { label: 'CRM Systems', href: '/industries/smbs' }, { label: 'Analytics Dashboards', href: '/industries/smbs' }, { label: 'ERP Solutions', href: '/industries/smbs' },
      ]},
      { title: 'HEALTHCARE', icon: HeartPulse, href: '/industries/healthcare', description: 'Healthcare software, patient management systems and AI-powered healthcare solutions.', items: [
        { label: 'Patient Platforms', href: '/industries/healthcare' }, { label: 'Telemedicine', href: '/industries/healthcare' }, { label: 'AI Diagnostics', href: '/industries/healthcare' }, { label: 'Healthcare Analytics', href: '/industries/healthcare' },
      ]},
    ],
    bottomCta: { title: 'INDUSTRIES WE TRANSFORM', description: 'Helping startups, SMBs, healthcare providers and educational institutions build AI-powered digital products.', buttonText: 'Explore Industries', href: '/industries' },
  },
  {
    key: 'portfolio', label: 'Portfolio',
    columns: [
      { title: 'CATEGORIES', items: [
        { label: 'All Projects', href: '/portfolio', icon: Blocks, description: 'View our entire collection of work.' },
        { label: 'AI Products', href: '/portfolio?category=ai-products', icon: Brain, description: 'Products built with LLMs and ML.' },
        { label: 'SaaS Platforms', href: '/portfolio?category=saas-platforms', icon: Cloud, description: 'Scalable cloud software.' },
        { label: 'E-Commerce', href: '/portfolio?category=e-commerce', icon: Smartphone, description: 'Digital storefronts and marketplaces.' },
      ]},
    ],
    cta: { label: 'VIEW OUR WORK', title: 'Explore our award-winning portfolio.', buttonText: 'Explore Portfolio', href: '/portfolio' },
  },
  {
    key: 'company', label: 'Company',
    columns: [
      { title: 'ABOUT NEO PERION', items: [
        { label: 'About Us', href: '/company/about', icon: Building2 }, { label: "Founder's Letter", href: '/company/founder-letter', icon: PenTool },
        { label: 'Vision & Mission', href: '/company/about#vision', icon: Target }, { label: 'Security', href: '/security', icon: ShieldCheck },
      ]},
      { title: 'SOCIAL PROOF', items: [
        { label: 'Case Studies', href: '/company/case-studies', icon: FileText }, { label: 'Success Stories', href: '/company/success-stories', icon: TrendingUp }, { label: 'Testimonials', href: '/company/testimonials', icon: MessageSquare },
      ]},
      { title: 'CAREERS', items: [
        { label: 'Join Our Team', href: '/company/careers', icon: Briefcase }, { label: 'Internship Program', href: '/company/careers', icon: GraduationCap }, { label: 'Open Positions', href: '/company/careers', icon: Briefcase },
      ]},
      { title: 'RESOURCES', items: [
        { label: 'Blog', href: '/company/blog', icon: BookOpen }, { label: 'AI Newsletter', href: '/company/newsletter', icon: Newspaper }, { label: 'Technology Insights', href: '/company/insights', icon: Cpu },
      ]},
    ],
    cta: { label: "LET'S BUILD TOGETHER", buttonText: 'Schedule a Call', href: '/contact' },
  },
];

export interface MobileMenuV2Props {
  open: boolean;
  onClose: () => void;
  focusSection?: string | null;
  onFocusConsumed?: () => void;
}

export function MobileMenuV2({ open, onClose, focusSection, onFocusConsumed }: MobileMenuV2Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const hk = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', hk);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', hk); document.body.style.overflow = prev; };
  }, [open, onClose]);

  useEffect(() => { if (open) onClose(); }, [location.pathname]);

  const visibleSections = focusSection
    ? SECTIONS.filter((s) => s.key === focusSection)
    : SECTIONS;

  const h = (href: string) => { onClose(); setTimeout(() => navigate(href), 80); };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-mobile-overlay md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Primary navigation"
        >
          <button type="button" aria-label="Close menu" onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-glass-3" />
          <motion.div
            initial={{ y: '100%', opacity: 0.7 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '30%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32, mass: 0.8 }}
            className="absolute inset-x-0 top-0 bottom-0 flex flex-col bg-[#030B1D]"
          >
            <div aria-hidden="true" className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(180deg, rgba(247,126,13,0.08) 0%, rgba(139,92,246,0.06) 40%, rgba(2,4,10,1) 100%)' }} />
            <div className="relative flex items-center justify-between px-mobile-lg pt-safe-or-4 pb-3 border-b border-white/[0.08]">
              <Link to="/" onClick={() => h('/')} className="flex items-center gap-2.5">
                <img src="/images/np-logo.png" alt="Neo Perion" className="h-7 w-7 object-contain" />
                <span className="text-base font-bold text-white tracking-tight">Neo Perion</span>
              </Link>
              <button type="button" onClick={onClose} className="h-10 w-10 rounded-full bg-white/[0.06] border border-white/[0.10] flex items-center justify-center text-white" aria-label="Close menu"><X size={20} /></button>
            </div>

            <nav ref={navRef} className="relative flex-1 overflow-y-auto px-mobile-base pb-mobile-4xl scrollbar-hide">
              {focusSection && (
                <button type="button" onClick={onFocusConsumed}
                  className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-white/60 hover:text-white font-semibold uppercase tracking-[0.12em]"
                >
                  ← All sections
                </button>
              )}
              {!focusSection && <HomeItem onSelect={h} active={location.pathname === '/'} />}

              {visibleSections.map((section) => (
                <div key={section.key} data-section={section.key} className="mt-5">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 px-2 mb-2">{section.label}</p>

                  <div className="space-y-2">
                    {section.columns.map((col) => (
                      <div key={col.title} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                        {col.icon && section.key === 'industries' ? (
                          <div className="px-4 pt-3 pb-1 flex items-start gap-3">
                            <span className="shrink-0 h-10 w-10 rounded-xl bg-neo-blue/15 text-neo-blue flex items-center justify-center">
                              <col.icon size={22} />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white">{col.title}</p>
                              {col.description && <p className="text-[11px] text-white/55 mt-1 leading-relaxed">{col.description}</p>}
                            </div>
                          </div>
                        ) : (
                          <p className="px-4 pt-3 pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">{col.title}</p>
                        )}
                        <div className="px-2 pb-2">
                          {col.items.map((item) => (
                            <button
                              key={item.label}
                              type="button"
                              onClick={() => h(item.href)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-white/[0.06] min-h-touch-md transition-colors"
                            >
                              {item.icon && (
                                <span className="shrink-0 h-8 w-8 rounded-lg bg-white/[0.06] text-white/70 flex items-center justify-center">
                                  <item.icon size={15} />
                                </span>
                              )}
                              <span className="flex-1 min-w-0">
                                <span className="block text-[14px] font-semibold text-white truncate">{item.label}</span>
                                {item.description && (
                                  <span className="block text-[11px] text-white/50 mt-0.5 leading-relaxed">{item.description}</span>
                                )}
                              </span>
                              <ArrowRight size={14} className="shrink-0 text-white/30" />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {section.cta && (
                    <div className="mt-3 rounded-2xl border border-white/[0.12] bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight p-4 relative overflow-hidden">
                      <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/70 mb-1">{section.cta.label}</p>
                      {section.cta.title && <p className="text-[13px] text-white/95 leading-relaxed font-semibold mb-3">{section.cta.title}</p>}
                      <button
                        type="button"
                        onClick={() => h(section.cta!.href)}
                        className="inline-flex items-center gap-1.5 h-10 px-4 rounded-xl bg-neutral-900 text-white text-[12px] font-bold active:scale-[0.97] transition-transform"
                      >
                        {section.cta.buttonText} <ArrowRight size={14} />
                      </button>
                    </div>
                  )}

                  {section.bottomCta && (
                    <button
                      type="button"
                      onClick={() => h(section.bottomCta!.href)}
                      className="mt-3 w-full flex items-center justify-between px-4 py-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-left"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">{section.bottomCta.title}</p>
                        <p className="text-[11px] text-white/50 mt-0.5">{section.bottomCta.description}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[12px] text-neo-highlight font-bold shrink-0">{section.bottomCta.buttonText} <ArrowRight size={12} /></span>
                    </button>
                  )}
                </div>
              ))}

              <div className="mt-8 space-y-3">
                <button type="button" onClick={() => h('/contact')} className="w-full h-14 rounded-3xl bg-gradient-to-br from-neo-deep via-neo-blue to-neo-highlight text-white font-bold text-base flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(247,126,13,0.5)] border border-white/20 active:scale-[0.98] transition-transform">
                  Book Free Consultation <ArrowRight size={18} strokeWidth={2.5} />
                </button>
                <a href="https://wa.me/917339125472?text=Hello" target="_blank" rel="noopener noreferrer" className="w-full h-12 rounded-2xl bg-white/[0.06] border border-white/[0.12] backdrop-blur-glass-1 text-white font-semibold text-sm flex items-center justify-center gap-2">
                  <Mail size={16} /> Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8 flex justify-center gap-5 pb-safe">
                <S href="https://linkedin.com" Icon={Linkedin} label="LinkedIn" />
                <S href="https://twitter.com" Icon={Twitter} label="Twitter" />
                <S href="https://github.com" Icon={Github} label="GitHub" />
                <S href="https://instagram.com" Icon={Instagram} label="Instagram" />
              </div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HomeItem({ onSelect, active }: { onSelect: (h: string) => void; active: boolean }) {
  return (
    <button type="button" onClick={() => onSelect('/')}
      className={`mt-3 w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-left transition-colors ${active ? 'bg-gradient-to-br from-neo-blue/20 to-neo-highlight/10 border border-neo-highlight/30' : 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05]'}`}
    >
      <span className="h-9 w-9 rounded-xl flex items-center justify-center text-[14px] font-bold border border-white/[0.10] text-white">NP</span>
      <span className="flex-1">
        <span className={`block text-[16px] font-bold tracking-tight ${active ? 'text-neo-highlight' : 'text-white'}`}>Home</span>
        <span className="block text-xs text-white/55 mt-0.5">Build with Neo Perion.</span>
      </span>
      <ArrowRight size={16} className={active ? 'text-neo-highlight' : 'text-white/40'} />
    </button>
  );
}

function S({ href, Icon, label }: { href: string; Icon: LucideIcon; label: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-10 w-10 rounded-full bg-white/[0.05] border border-white/[0.10] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.10] transition-colors"><Icon size={16} /></a>;
}
