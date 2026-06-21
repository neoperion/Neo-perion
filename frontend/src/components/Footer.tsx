import { Linkedin, Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/neoperion", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/neo-perion-643228393", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/neoperion", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/917339125472", label: "WhatsApp" },
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
    heading: "Legal",
    links: [
      { label: "Security", to: "/security" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-canvas text-muted2">
      <div className="container relative z-10 mx-auto max-w-[1200px] px-6 pb-4 pt-16 lg:px-8">
        {/* Slim CTA strip */}
        <div className="mb-16 flex flex-col items-start justify-between gap-4 border-b border-hairline pb-12 sm:flex-row sm:items-center">
          <p className="text-base font-medium text-ink">
            Have a product in mind? Let&apos;s scope it together.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            Start your project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Giant faded brand wordmark — top of footer */}
        <div aria-hidden className="pointer-events-none mb-14 select-none overflow-hidden">
          <div className="whitespace-nowrap text-center font-logo text-[clamp(20px,7vw,80px)] leading-none">
            <span className="text-brand/[0.12]">NEO</span>{" "}
            <span className="text-ink/[0.05]">PERION</span>
          </div>
        </div>

        {/* Links */}
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/images/np-logo.png" alt="Neo Perion" className="h-8 w-auto" />
              <span className="font-logo text-[13px] leading-none">
                <span className="text-ink">NEO</span> <span className="text-brand">PERION</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted2">
              Stable, scalable SaaS platforms and AI systems for teams that need to ship.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-paper text-muted2 transition-colors duration-200 hover:border-brand/30 hover:text-brand"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading} className="lg:col-span-1">
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-wide text-muted2">
                {column.heading}
              </h4>
              <ul className="space-y-3 text-sm font-medium text-body">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 text-sm text-muted2 md:flex-row">
          <p>© {currentYear} Neo Perion · Chennai, Tamil Nadu, India</p>
          <div className="flex items-center gap-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                import("@/shared/CookieManager").then((m) => m.resetConsent());
              }}
              className="cursor-pointer transition-colors hover:text-brand"
            >
              Cookie Settings
            </button>
            <span>Designed for scale.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
