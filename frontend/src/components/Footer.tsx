import { Linkedin, Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/5 bg-[#02040A] text-slate-400 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neo-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-8 relative z-10">
        {/* Large CTA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-20 mb-20 border-b border-white/5 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Ready to build the <span className="text-neo-gradient neo-glow-text">future</span>?
            </h2>
            <p className="text-lg text-slate-400">
              Let's discuss how our enterprise engineering and AI solutions can scale your business.
            </p>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-neo-gradient hover:bg-neo-gradient-hover text-white rounded-xl font-bold transition-all duration-300 w-full md:w-auto shrink-0 neo-glow-box border-0"
          >
            Start your project <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/np-logo.png"
                alt="NP Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-display font-bold text-white tracking-widest">NEO PERION</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500">
              Building stable, scalable SaaS solutions and AI pipelines for visionary teams.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/neoperion" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/neo-perion-643228393" },
                { icon: Facebook, href: "https://www.facebook.com/neoperion" },
                { icon: MessageCircle, href: "https://wa.me/917339125472" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center hover:bg-neo-blue/10 hover:text-neo-blue hover:border-neo-blue/30 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/company/about" className="hover:text-neo-blue transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-neo-blue transition-colors">Services</a></li>
              <li><a href="/company/careers" className="hover:text-neo-blue transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-neo-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-bold mb-6">Capabilities</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/services/ai-systems-automation" className="hover:text-neo-blue transition-colors">AI & LLMs</a></li>
              <li><a href="/services/intelligent-operations-automation" className="hover:text-neo-blue transition-colors">Automation</a></li>
              <li><a href="/services/enterprise-product-engineering" className="hover:text-neo-blue transition-colors">Product Engineering</a></li>
              <li><a href="/services/cloud-native-web-platforms" className="hover:text-neo-blue transition-colors">Web Platforms</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/company/case-studies" className="hover:text-neo-blue transition-colors">Case Studies</a></li>
              <li><a href="/company/blog" className="hover:text-neo-blue transition-colors">Blog</a></li>
              <li><a href="/technologies" className="hover:text-neo-blue transition-colors">Technologies</a></li>
            </ul>
          </div>

          {/* Links Column 4 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-display font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/security" className="hover:text-neo-blue transition-colors">Security</a></li>
              <li><a href="/security" className="hover:text-neo-blue transition-colors">Privacy Policy</a></li>
              <li><a href="/security" className="hover:text-neo-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 font-medium">
          <p>© {currentYear} NEO PERION. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <button 
              onClick={(e) => {
                e.preventDefault();
                import("@/shared/CookieManager").then(m => m.resetConsent());
              }}
              className="hover:text-neo-blue transition-colors cursor-pointer"
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
