import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useCookieStore } from '@/store/cookieStore';
import { setConsent, rejectAll, CookieConsentState, getConsent } from './CookieManager';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieModal: React.FC = () => {
  const { modalOpen, setModalOpen, setVisible } = useCookieStore();
  
  const currentConsent = getConsent();
  const [analytics, setAnalytics] = useState(currentConsent?.analytics ?? false);
  const [marketing, setMarketing] = useState(currentConsent?.marketing ?? false);
  const [preferences, setPreferences] = useState(currentConsent?.preferences ?? false);

  const handleSave = () => {
    setConsent({ analytics, marketing, preferences });
    setModalOpen(false);
    setVisible(false);
  };

  const handleRejectAll = () => {
    rejectAll();
    setModalOpen(false);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white">Cookie Settings</h2>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Necessary Cookies</h3>
                  <p className="text-sm text-slate-400">Required for the website to function. Cannot be disabled.</p>
                </div>
                <div className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  Always ON
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Analytics Cookies</h3>
                  <p className="text-sm text-slate-400">Help us understand how visitors interact with our site (GA4, Microsoft Clarity).</p>
                </div>
                <Switch checked={analytics} onCheckedChange={setAnalytics} />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Marketing Cookies</h3>
                  <p className="text-sm text-slate-400">Used to track visitors across websites for personalized advertising.</p>
                </div>
                <Switch checked={marketing} onCheckedChange={setMarketing} />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Preference Cookies</h3>
                  <p className="text-sm text-slate-400">Remember your UI settings and preferences.</p>
                </div>
                <Switch checked={preferences} onCheckedChange={setPreferences} />
              </div>
            </div>

            <div className="p-6 border-t border-white/10 flex items-center justify-between gap-4 bg-slate-900/50">
              <Button variant="ghost" onClick={handleRejectAll} className="text-red-400 hover:text-red-300 hover:bg-red-400/10">
                Reject All
              </Button>
              <Button onClick={handleSave} className="bg-neo-blue hover:bg-neo-blue text-slate-900">
                Save Preferences
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
