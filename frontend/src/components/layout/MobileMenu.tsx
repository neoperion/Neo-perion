import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[60] bg-[#050816] flex flex-col"
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Neo Perion
            </span>
            <button onClick={onClose} className="text-slate-300 p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-6 overflow-y-auto">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Services</h3>
              <div className="flex flex-col space-y-3 pl-4 border-l border-white/10">
                <Link to="/services/product-development" onClick={onClose} className="text-slate-300 hover:text-cyan-400">Product Development</Link>
                <Link to="/services/web-development" onClick={onClose} className="text-slate-300 hover:text-cyan-400">Web Development</Link>
                <Link to="/services/mobile-development" onClick={onClose} className="text-slate-300 hover:text-cyan-400">Mobile Development</Link>
                <Link to="/services/artificial-intelligence" onClick={onClose} className="text-slate-300 hover:text-cyan-400">Artificial Intelligence</Link>
                <Link to="/services/business-automation" onClick={onClose} className="text-slate-300 hover:text-cyan-400">Business Automation</Link>
                <Link to="/services/startup-support" onClick={onClose} className="text-slate-300 hover:text-cyan-400">Startup Support</Link>
                <Link to="/services/advanced-ai" onClick={onClose} className="text-slate-300 hover:text-cyan-400">Advanced AI</Link>
              </div>
            </div>

            <Link to="/industries" onClick={onClose} className="text-lg font-medium text-slate-200 hover:text-cyan-400">Industries</Link>
            <Link to="/case-studies" onClick={onClose} className="text-lg font-medium text-slate-200 hover:text-cyan-400">Case Studies</Link>
            <Link to="/about" onClick={onClose} className="text-lg font-medium text-slate-200 hover:text-cyan-400">About</Link>
            <Link to="/blog" onClick={onClose} className="text-lg font-medium text-slate-200 hover:text-cyan-400">Blog</Link>
            <Link to="/careers" onClick={onClose} className="text-lg font-medium text-slate-200 hover:text-cyan-400">Careers</Link>
            
            <div className="pt-6">
              <Link to="/contact" onClick={onClose}>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-medium rounded-full py-6">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
