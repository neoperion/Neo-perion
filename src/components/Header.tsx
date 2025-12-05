import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GooeyNav from "@/components/GooeyNav";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const navLinks = navItems;

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      // Scroll to top for Home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to specific section
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Add scroll handlers to nav items
  const navItemsWithScroll = navItems.map((item) => ({
    ...item,
    onClick: () => scrollToSection(item.href),
  }));

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-border" style={{ background: 'rgba(2, 4, 10, 0.85)' }}>
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3">
            <img 
              src="/images/np-logo.png" 
              alt="NP Logo" 
              className="h-9 w-auto"
            />
            <img 
              src="/images/neo-perion-text.png" 
              alt="NEO PERION" 
              className="h-7 w-150px"
            />
          </a>

          {/* Desktop Navigation with Gooey Effect */}
          <div className="hidden md:flex items-center gap-4">
            <GooeyNav
              items={navItemsWithScroll}
              initialActiveIndex={0}
            />
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-glow transition-all duration-300"
            >
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold"
            >
              Book a Free Call
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
