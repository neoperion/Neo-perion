import { Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (    <footer className="border-t border-border bg-sky-300 text-white
  ">

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary">VT-</span>
                <span className="text-white">SHA</span>
              </span>
            </div>
            <p className="text-sm text-white-500">
              Smart, reliable SaaS services for growing teams
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white-500">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-white-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-white-500">Connect</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 bg-sky-300 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-sky-300 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-white"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-700 text-center">
          <p className="text-sm text-white-500">
            © {currentYear} VTSHA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
