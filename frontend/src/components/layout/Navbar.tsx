import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#050816]/95 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Replace with actual logo */}
            <span className="text-2xl font-display font-bold text-neo-navy hover:text-neo-blue transition-colors duration-300">
              Neo Perion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-neo-blue transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-slate-900 border border-white/10 rounded-xl p-6 shadow-2xl w-[600px] grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Link to="/services/enterprise-product-engineering" className="block text-sm text-slate-300 hover:text-neo-blue">Product Engineering</Link>
                    <Link to="/services/cloud-native-web-platforms" className="block text-sm text-slate-300 hover:text-neo-blue">Web Platforms</Link>
                    <Link to="/services/mobile-product-engineering" className="block text-sm text-slate-300 hover:text-neo-blue">Mobile Engineering</Link>
                    <Link to="/services/ai-systems-automation" className="block text-sm text-slate-300 hover:text-neo-blue">AI Systems</Link>
                  </div>
                  <div className="space-y-4">
                    <Link to="/services/intelligent-operations-automation" className="block text-sm text-slate-300 hover:text-neo-blue">Business Automation</Link>
                    <Link to="/services/startup-to-scale-engineering" className="block text-sm text-slate-300 hover:text-neo-blue">Startup Support</Link>
                    <Link to="/services/deep-ai-engineering" className="block text-sm text-slate-300 hover:text-neo-blue">Deep AI</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/industries" className={cn("text-sm font-medium transition-colors hover:text-neo-blue", location.pathname === '/industries' ? 'text-neo-blue' : 'text-slate-300')}>Industries</Link>
            <Link to="/case-studies" className={cn("text-sm font-medium transition-colors hover:text-neo-blue", location.pathname === '/case-studies' ? 'text-neo-blue' : 'text-slate-300')}>Case Studies</Link>
            <Link to="/about" className={cn("text-sm font-medium transition-colors hover:text-neo-blue", location.pathname === '/about' ? 'text-neo-blue' : 'text-slate-300')}>About</Link>
            <Link to="/blog" className={cn("text-sm font-medium transition-colors hover:text-neo-blue", location.pathname === '/blog' ? 'text-neo-blue' : 'text-slate-300')}>Blog</Link>
            <Link to="/careers" className={cn("text-sm font-medium transition-colors hover:text-neo-blue", location.pathname === '/careers' ? 'text-neo-blue' : 'text-slate-300')}>Careers</Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <Button className="bg-neo-gradient hover:bg-neo-gradient-hover text-white font-medium rounded-full px-6 neo-glow-box border-0 transition-all duration-300">
                Book Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
