import { Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";

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

  return (    <footer className="border-t bg-background text-foreground" style={{ backgroundColor: '#020308', borderTopColor: 'rgba(148, 163, 184, 0.2)' }}>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/np-logo.png" 
                alt="NP Logo" 
                className="h-10 w-auto"
              />
              <img 
                src="/images/neo-perion-text.png" 
                alt="NEO PERION" 
                className="h-7 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Smart, reliable SaaS services for growing teams
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/neoperion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/neo-perion-643228393"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/neoperion"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://wa.me/917339125472?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 text-muted-foreground"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center" style={{ borderTopColor: 'rgba(148, 163, 184, 0.15)' }}>
          <p className="text-sm text-muted-foreground">
            © {currentYear} NEO PERION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
