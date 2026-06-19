import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Linkedin, Twitter, Github, Instagram, ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FooterSection { title: string; links: { label: string; href: string }[] }

const DEFAULT_SECTIONS: FooterSection[] = [
  { title: 'Services', links: [
    { label: 'AI Systems', href: '/services/ai-systems-automation' }, { label: 'Deep AI', href: '/services/deep-ai-engineering' },
    { label: 'Enterprise Product', href: '/services/enterprise-product-engineering' }, { label: 'Cloud-Native Web', href: '/services/cloud-native-web-platforms' },
    { label: 'Mobile Engineering', href: '/services/mobile-product-engineering' }, { label: 'Business Automation', href: '/services/intelligent-operations-automation' },
    { label: 'Startup Support', href: '/services/startup-to-scale-engineering' },
  ]},
  { title: 'Industries', links: [
    { label: 'Education & EdTech', href: '/industries/education' }, { label: 'Startups & Founders', href: '/industries/startups' },
    { label: 'SMBs & Enterprise', href: '/industries/smbs' }, { label: 'Healthcare', href: '/industries/healthcare' },
  ]},
  { title: 'Company', links: [
    { label: 'About Us', href: '/about' }, { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' }, { label: 'Careers', href: '/careers' }, { label: 'Contact', href: '/contact' },
  ]},
  { title: 'Resources', links: [
    { label: 'AI Newsletter', href: '/newsletter' }, { label: 'Technology Insights', href: '/insights' },
    { label: 'Testimonials', href: '/testimonials' }, { label: 'Privacy Policy', href: '/privacy' },
  ]},
];

export interface AccordionFooterProps { sections?: FooterSection[]; newsletterCta?: boolean }

export function AccordionFooter({ sections = DEFAULT_SECTIONS, newsletterCta = true }: AccordionFooterProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  return (
    <footer role="contentinfo" className="md:hidden relative w-full bg-gradient-to-b from-[#020617] to-[#030B1D] border-t border-white/[0.08] pt-mobile-xl pb-safe">
      <div className="px-mobile-base pb-6 mb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 mb-3"><img src="/images/np-logo.png" alt="Neo Perion" className="h-8 w-8 object-contain" /><span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neo-light">Neo Perion</span></div>
        <p className="text-[13px] text-white/65 leading-relaxed max-w-xs">Transforming ideas into enterprise-grade AI and scalable digital products.</p>
        <div className="flex items-center gap-3 mt-4">
          <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" />
          <SocialLink href="https://github.com" icon={Github} label="GitHub" />
          <SocialLink href="https://instagram.com" icon={Instagram} label="Instagram" />
        </div>
      </div>
      <div className="px-mobile-base space-y-1">
        {sections.map((section) => {
          const open = openSection === section.title;
          return (
            <div key={section.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <button type="button" onClick={() => setOpenSection(open ? null : section.title)} aria-expanded={open} aria-controls={`footer-${section.title}`}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left">
                <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-white/80">{section.title}</span>
                <ChevronDown size={16} className={cn('text-white/50 transition-transform', open && 'rotate-180')} />
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div id={`footer-${section.title}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                    <div className="px-4 pb-4 space-y-0.5">
                      {section.links.map((link) => (<Link key={link.label} to={link.href} className="block px-3 py-2.5 text-sm text-white/65 hover:text-neo-highlight hover:bg-white/[0.04] rounded-xl transition-colors font-medium">{link.label}</Link>))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      {newsletterCta && (
        <div className="px-mobile-base mt-5">
          <div className="relative rounded-3xl border border-white/[0.12] bg-gradient-to-br from-[rgba(15,23,42,0.65)] to-[rgba(2,4,10,0.65)] backdrop-blur-glass-1 p-4 overflow-hidden">
            <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />
            <h4 className="text-sm font-bold text-white mb-1">AI insights, monthly.</h4>
            <p className="text-[11px] text-white/55 mb-3">No spam. Just signal.</p>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); }}>
              <input type="email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="your@email.com"
                className="flex-1 h-10 px-3 rounded-xl bg-white/[0.05] border border-white/[0.10] text-white text-[12px] placeholder:text-white/40 focus:outline-none focus:border-neo-highlight/50" />
              <button type="submit" className="h-10 px-4 rounded-xl bg-gradient-to-br from-neo-blue to-neo-highlight text-white text-[11px] font-bold flex items-center gap-1">Subscribe <ArrowRight size={12} /></button>
            </form>
          </div>
        </div>
      )}
      <div className="px-mobile-base mt-6 pt-4 border-t border-white/[0.06] text-center">
        <p className="text-[11px] text-white/50">&copy; {new Date().getFullYear()} Neo Perion Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (<a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-9 w-9 rounded-full bg-white/[0.05] border border-white/[0.10] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.10] transition-colors"><Icon size={14} /></a>);
}
