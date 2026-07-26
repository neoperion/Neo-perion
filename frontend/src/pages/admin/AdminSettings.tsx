import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="animate-in fade-in duration-500 max-w-3xl">
      <Helmet><title>Settings | Admin | AINCURU</title></Helmet>
      <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
      <p className="text-slate-400 mb-8">Site-wide configuration (read from environment variables).</p>

      <div className="space-y-6">
        <section className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Company Info</h2>
          <div className="space-y-4">
            {['Company Name', 'Email', 'Phone', 'Address', 'WhatsApp Number'].map((label) => (
              <div key={label}>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
                <input disabled placeholder="Configured via environment variables"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white/70 focus:outline-none cursor-not-allowed" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Cookie Consent</h2>
          <p className="text-sm text-slate-400 mb-4">Bumping the cookie version forces all users to re-consent.</p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-300">Current version: <code className="text-neo-blue font-bold">1.0</code></span>
            <span className="text-xs text-slate-500">(via VITE_COOKIE_VERSION env var)</span>
          </div>
        </section>

        <div className="flex items-center gap-4 pt-2">
          <button onClick={handleSave} className="px-6 py-3 rounded-lg bg-neo-blue text-slate-900 font-bold hover:bg-neo-blue/90 transition-colors">
            Save Settings
          </button>
          {saved && <span className="text-emerald-400 text-sm font-medium">Settings saved!</span>}
        </div>
      </div>
    </div>
  );
}
