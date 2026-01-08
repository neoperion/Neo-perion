import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "#contact" },
];

const navLinks = navItems;

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    // Check if it's a route (starts with /) or a hash link
    if (href.startsWith('#')) {
      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // It's a route, use navigate
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Check if nav item is active
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('#')) return location.pathname === '/' && location.hash === href;
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-border" style={{ background: 'rgba(2, 4, 10, 0.85)' }}>
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo - Left */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3 cursor-pointer justify-self-start">
            <img
              src="/images/np-logo.png"
              alt="NP Logo"
              className="h-16 w-auto"
            />
            <img
              src="/images/neo-perion-text.png"
              alt="NEO PERION"
              className="h-9 w-150px"
            />
          </a>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-14 justify-self-center">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group py-2"
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block justify-self-end">
            <Button
              onClick={() => handleNavigation("#contact")}
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
                  handleNavigation(link.href);
                }}
                className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => handleNavigation("#contact")}
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold"
            >
              Contact us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
