import React, { useEffect } from 'react';
import { useCookieStore } from '@/store/cookieStore';
import { hasConsented, acceptAll, rejectAll } from './CookieManager';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const { visible, setVisible, setModalOpen } = useCookieStore();

  useEffect(() => {
    if (!hasConsented()) {
      setVisible(true);
    }
  }, [setVisible]);

  const handleAcceptAll = () => {
    acceptAll();
    setVisible(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6 bg-slate-900/95 backdrop-blur-xl border-t border-neo-blue/20 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-xl mr-2">🍪</span>
                We use cookies to deliver and improve our services, analyze site usage, 
                and if you agree, to customize your experience and market our services to you. 
                You can read our Cookie Policy <Link to="/privacy#cookies" className="text-neo-blue hover:underline">here</Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto items-stretch sm:items-center gap-3 shrink-0">
              <Button 
                variant="outline" 
                onClick={() => setModalOpen(true)}
                className="border-white/20 text-slate-300 hover:bg-white/5"
              >
                Customize
              </Button>
              <Button 
                variant="outline" 
                onClick={handleRejectAll}
                className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300"
              >
                Reject all
              </Button>
              <Button 
                onClick={handleAcceptAll}
                className="bg-neo-blue hover:bg-neo-blue text-white"
              >
                Accept all
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
