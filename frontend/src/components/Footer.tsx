
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SOCIALS = [
  { img: "/images/instagram.png", href: "https://www.instagram.com/_aincuru",              label: "Instagram" },
  { img: "/images/linkedin.png",  href: "https://www.linkedin.com/company/aincuru/",       label: "LinkedIn"  },
  { img: "/images/facebook.png",  href: "https://www.facebook.com/share/1FCuj6vXfz/",     label: "Facebook"  },
  { img: null,                    href: "https://wa.me/917810005472",                       label: "WhatsApp"  },
];

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/company/about" },
      { label: "Services", to: "/services" },
      { label: "Careers", to: "/company/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Capabilities",
    links: [
      { label: "AI & LLMs", to: "/services/ai-systems-automation" },
      { label: "Automation", to: "/services/intelligent-operations-automation" },
      { label: "Product Engineering", to: "/services/enterprise-product-engineering" },
      { label: "Web Platforms", to: "/services/cloud-native-web-platforms" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Case Studies", to: "/company/case-studies" },
      { label: "Blog", to: "/company/blog" },
      { label: "Technologies", to: "/technologies" },
    ],
  },
  {
    heading: "Profiles",
    links: [
      { label: "LinkedIn",   to: "https://www.linkedin.com/company/aincuru/",                        external: true },
      { label: "Instagram",  to: "https://www.instagram.com/_aincuru",                               external: true },
      { label: "X (Twitter)", to: "https://x.com/aincuru",                                           external: true },
      { label: "Facebook",   to: "https://www.facebook.com/share/1FCuj6vXfz/",                       external: true },
      { label: "Clutch",     to: "https://www.clutch.co/profile/neoperion-solutions",                external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Security", to: "/security" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Refund & Cancellation", to: "/refund" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();



  return (
    <footer className="parchment-surface relative overflow-x-clip w-full border-t border-manuscriptAlpha-ink-15">
      <div className="container relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 pb-4 pt-16 lg:px-8 w-full box-border">
        
        {/* Slim CTA strip */}
        <div className="mb-16 flex flex-col items-start justify-between gap-4 border-b border-manuscriptAlpha-ink-15 pb-12 sm:flex-row sm:items-center">
          <p className="font-manuscriptBody text-[16px] sm:text-[17px] font-medium text-manuscript-ink">
            Have a product in mind? Let's scope it together.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-2 font-manuscriptBody text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-manuscript-rustDeep transition-colors hover:text-manuscript-copper"
          >
            Start your project
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Giant faded brand wordmark */}
        <div aria-hidden className="pointer-events-none mb-14 select-none overflow-hidden w-full max-w-full">
          <div className="whitespace-nowrap text-center font-manuscript text-[clamp(40px,10vw,120px)] leading-none font-bold tracking-tight">
            <span className="text-manuscript-copper/10">AI</span><span className="text-manuscript-ink/5">NCURU</span>
          </div>
        </div>

        {/* Links */}
        <div className="mb-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          <div className="col-span-2 space-y-6 md:col-span-3 lg:col-span-2">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="font-manuscriptBody text-xl font-bold tracking-widest text-manuscript-ink">AINCURU</span>
            </div>

            <p className="max-w-xs font-manuscriptBody text-sm leading-relaxed text-manuscript-inkSoft">
              Stable, scalable SaaS platforms and AI systems for teams that need to ship.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-manuscriptAlpha-ink-15 bg-manuscript-parchmentLight transition-all duration-200 hover:border-manuscript-copper hover:text-manuscript-copper text-manuscript-inkSoft"
                >
                  {social.img ? (
                    <img
                      src={social.img}
                      alt={social.label}
                      className="h-5 w-5 object-contain opacity-70 transition-opacity hover:opacity-100"
                      style={{ filter: 'brightness(0) sepia(1) hue-rotate(10deg) saturate(0.5)' }}
                    />
                  ) : (
                    <MessageCircle size={18} />
                  )}
                </a>
              ))}
            </div>

          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading} className="col-span-1">
              <h4 className="mb-4 sm:mb-5 font-manuscriptBody text-[11px] font-semibold uppercase tracking-[0.2em] text-manuscript-walnutDeep">
                {column.heading}
              </h4>
              <ul className="space-y-3 font-manuscriptBody text-[13px] sm:text-[14px] text-manuscript-inkSoft">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-manuscript-rustDeep"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="transition-colors hover:text-manuscript-rustDeep"
                        onClick={() => window.scrollTo(0, 0)}
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

        <div className="flex flex-col items-start justify-between gap-4 border-t border-manuscriptAlpha-ink-15 pt-8 font-manuscriptBody text-[13px] text-manuscript-inkMuted md:flex-row md:items-center">
          <p>© {currentYear} AINCURU · Chennai, Tamil Nadu, India</p>
          <div className="flex items-center gap-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                import("@/shared/CookieManager").then((m) => m.resetConsent());
              }}
              className="cursor-pointer transition-colors hover:text-manuscript-rustDeep"
            >
              Cookie Settings
            </button>
            <span className="italic">Designed for scale.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
