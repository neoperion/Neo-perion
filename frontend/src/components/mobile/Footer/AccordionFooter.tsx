import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'AI Solutions',         href: '/services/ai-systems-automation' },
      { label: 'Product Development',  href: '/services/enterprise-product-engineering' },
      { label: 'Web Development',      href: '/services/cloud-native-web-platforms' },
      { label: 'Cloud & DevOps',       href: '/services/intelligent-operations-automation' },
      { label: 'Technical Consulting', href: '/services/startup-to-scale-engineering' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',      href: '/company/about' },
      { label: 'Portfolio',     href: '/portfolio' },
      { label: 'Case Studies',  href: '/company/case-studies' },
      { label: 'Blog',          href: '/company/blog' },
      { label: 'Careers',       href: '/company/careers' },
      { label: 'Contact',       href: '/contact' },
    ],
  },
  {
    title: 'Profiles',
    links: [
      { label: 'LinkedIn',    href: 'https://www.linkedin.com/company/aincuru/',           external: true },
      { label: 'Instagram',   href: 'https://www.instagram.com/_aincuru',                  external: true },
      { label: 'X (Twitter)', href: 'https://x.com/aincuru',                               external: true },
      { label: 'Facebook',    href: 'https://www.facebook.com/share/1FCuj6vXfz/',         external: true },
      { label: 'Clutch',      href: 'https://www.clutch.co/profile/neoperion-solutions',  external: true },
    ],
  },
];

const SOCIALS = [
  { href: 'https://www.instagram.com/_aincuru',              Icon: Instagram,     label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/aincuru/',       Icon: Linkedin,      label: 'LinkedIn'  },
  { href: 'https://www.facebook.com/share/1FCuj6vXfz/',     Icon: Facebook,      label: 'Facebook'  },
  { href: 'https://wa.me/917810005472',                      Icon: MessageCircle, label: 'WhatsApp'  },
];

export function AccordionFooter() {
  return (
    <footer className="md:hidden bg-[#0A0A0B] border-t border-white/[0.07] px-6 pt-10 pb-safe-or-8">

      {/* Brand */}
      <div className="mb-8">
        <div className="flex items-center gap-2.5 mb-3">
          <img src="/images/np-logo.png" alt="AINCURU" className="h-7 w-auto object-contain" />
        </div>
        <p className="text-[13px] text-white/45 leading-relaxed max-w-[260px]">
          Stable, scalable SaaS platforms and AI systems for teams that need to ship.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-2.5 mt-5">
          {SOCIALS.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="h-9 w-9 rounded-full border border-white/[0.10] flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      {/* Link columns — 2 up */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
              {col.title}
            </p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-medium text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-[13px] font-medium text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legal row */}
      <div className="flex flex-wrap gap-4 mb-5">
        {[
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Service', href: '/terms' },
        ].map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-[11px] text-white/25">
        © {new Date().getFullYear()} AINCURU · Chennai, Tamil Nadu, India
      </p>
    </footer>
  );
}

// Keep the export alias so existing imports don't break
export type { AccordionFooter as FooterSection };
