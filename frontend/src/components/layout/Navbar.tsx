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
            <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Neo Perion
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-slate-900 border border-white/10 rounded-xl p-6 shadow-2xl w-[600px] grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Link to="/services/product-development" className="block text-sm text-slate-300 hover:text-cyan-400">Product Development</Link>
                    <Link to="/services/web-development" className="block text-sm text-slate-300 hover:text-cyan-400">Web Development</Link>
                    <Link to="/services/mobile-development" className="block text-sm text-slate-300 hover:text-cyan-400">Mobile Development</Link>
                    <Link to="/services/artificial-intelligence" className="block text-sm text-slate-300 hover:text-cyan-400">Artificial Intelligence</Link>
                  </div>
                  <div className="space-y-4">
                    <Link to="/services/business-automation" className="block text-sm text-slate-300 hover:text-cyan-400">Business Automation</Link>
                    <Link to="/services/startup-support" className="block text-sm text-slate-300 hover:text-cyan-400">Startup Support</Link>
                    <Link to="/services/advanced-ai" className="block text-sm text-slate-300 hover:text-cyan-400">Advanced AI</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/industries" className={cn("text-sm font-medium transition-colors hover:text-cyan-400", location.pathname === '/industries' ? 'text-cyan-400' : 'text-slate-300')}>Industries</Link>
            <Link to="/case-studies" className={cn("text-sm font-medium transition-colors hover:text-cyan-400", location.pathname === '/case-studies' ? 'text-cyan-400' : 'text-slate-300')}>Case Studies</Link>
            <Link to="/about" className={cn("text-sm font-medium transition-colors hover:text-cyan-400", location.pathname === '/about' ? 'text-cyan-400' : 'text-slate-300')}>About</Link>
            <Link to="/blog" className={cn("text-sm font-medium transition-colors hover:text-cyan-400", location.pathname === '/blog' ? 'text-cyan-400' : 'text-slate-300')}>Blog</Link>
            <Link to="/careers" className={cn("text-sm font-medium transition-colors hover:text-cyan-400", location.pathname === '/careers' ? 'text-cyan-400' : 'text-slate-300')}>Careers</Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-medium rounded-full px-6">
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
