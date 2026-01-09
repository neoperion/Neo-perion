import { Linkedin, Instagram, Facebook, MessageCircle, Twitter, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#02040A] text-gray-400">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/np-logo.png"
                alt="NP Logo"
                className="h-10 w-auto"
              />
              <img
                src="/images/neo-perion-text.png"
                alt="NEO PERION"
                className="h-6 w-auto opacity-90"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-500">
              Building stable, scalable SaaS solutions for visionary teams. We partner with you to turn complexity into clarity.
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
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00d4ff] hover:text-black hover:border-[#00d4ff] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#00d4ff] transition-colors">Services</a></li>
              <li><a href="#careers" className="hover:text-[#00d4ff] transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-[#00d4ff] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Links Column 4 */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition-colors">Changelog</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© {currentYear} NEO PERION. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Designed for scale.</span>
            <span>Built for performance.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
