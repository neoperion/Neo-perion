import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Linkedin, Twitter, Instagram, Github, Youtube } from 'lucide-react';
import { useCookieStore } from '@/store/cookieStore';

export const Footer: React.FC = () => {
  const { setVisible } = useCookieStore();

  return (
    <footer className="bg-[#050816] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-neo-blue to-neo-highlight">
                Neo Perion
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Transforming ideas into enterprise-grade AI and scalable digital products.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-neo-blue transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-neo-blue transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-neo-blue transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-neo-blue transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-neo-blue transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/enterprise-product-engineering" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Product Engineering</Link></li>
              <li><Link to="/services/cloud-native-web-platforms" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Web Platforms</Link></li>
              <li><Link to="/services/mobile-product-engineering" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Mobile Engineering</Link></li>
              <li><Link to="/services/ai-systems-automation" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">AI Systems</Link></li>
              <li><Link to="/services/intelligent-operations-automation" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Business Automation</Link></li>
            </ul>
          </div>

          {/* Industries Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Industries</h4>
            <ul className="space-y-4">
              <li><Link to="/industries#education" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Education & EdTech</Link></li>
              <li><Link to="/industries#startups" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Startups & Founders</Link></li>
              <li><Link to="/industries#smbs" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">SMBs & Enterprise</Link></li>
              <li><Link to="/industries#healthcare" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Healthcare</Link></li>
            </ul>
          </div>

          {/* Resources Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/company/blog" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Blog</Link></li>
              <li><Link to="/company/case-studies" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Case Studies</Link></li>
              <li><Link to="/company/careers" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-400 text-sm">Chennai, Tamil Nadu, India</li>
              <li><a href="mailto:hello@www.neoperion.com" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">hello@www.neoperion.com</a></li>
              <li><a href="tel:+919876543210" className="text-slate-400 hover:text-neo-blue text-sm transition-colors">+91 98765 43210</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-10 pb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-2">Subscribe to our newsletter</h4>
            <p className="text-slate-400 text-sm">Get the latest insights on AI and product engineering.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-900 border-white/10 text-white min-w-[250px] focus:border-neo-blue/50"
            />
            <Button type="submit" className="bg-neo-blue hover:bg-neo-blue text-white">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Neo Perion Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <button onClick={() => setVisible(true)} className="hover:text-neo-blue transition-colors">
              Cookie Settings
            </button>
            <span>MIT License (Internal)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
