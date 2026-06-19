import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, Server } from 'lucide-react';
import { MobileGate, MobileShell } from "@/components/mobile";

export default function Security() {
  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-screen bg-[#02040A] text-white selection:bg-neo-blue/30">
        <Helmet><title>Security | Neo Perion</title></Helmet>
        <Header />
        <main className="pt-32 pb-24">
          <section className="text-center px-8 mb-20 max-w-4xl mx-auto">
             <ShieldCheck className="mx-auto text-neo-blue mb-8" size={64} />
             <h1 className="text-5xl lg:text-7xl font-black mb-6">Enterprise Security</h1>
             <p className="text-xl text-slate-400">Security is not a feature. It is the foundation of everything we build.</p>
          </section>
          
          <section className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-8">
             <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]">
               <Lock className="text-neo-blue mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4">Data Protection</h3>
               <p className="text-slate-400 leading-relaxed">All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement strict Row Level Security (RLS) policies to ensure tenant isolation.</p>
             </div>
             <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]">
               <Server className="text-neo-blue mb-4" size={32} />
               <h3 className="text-2xl font-bold mb-4">Infrastructure Security</h3>
               <p className="text-slate-400 leading-relaxed">We utilize secure VPCs, regular vulnerability scanning, automated dependency updates, and strict IAM roles following the principle of least privilege.</p>
             </div>
          </section>
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pt-8 pb-12">
            <section className="text-center px-6 mb-12">
               <ShieldCheck className="mx-auto text-neo-highlight mb-6" size={48} />
               <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Security</p>
               <h1 className="text-display-lg text-white tracking-tight mb-4">Enterprise Grade.</h1>
               <p className="text-base text-white/70">Security is not a feature. It is the foundation of everything we build.</p>
            </section>
            
            <section className="px-6 space-y-4">
               <div className="p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                 <Lock className="text-neo-highlight mb-4" size={24} />
                 <h3 className="text-[17px] font-bold text-white mb-2">Data Protection</h3>
                 <p className="text-sm text-white/60 leading-relaxed">All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement strict Row Level Security (RLS) policies to ensure tenant isolation.</p>
               </div>
               <div className="p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                 <Server className="text-neo-highlight mb-4" size={24} />
                 <h3 className="text-[17px] font-bold text-white mb-2">Infrastructure Security</h3>
                 <p className="text-sm text-white/60 leading-relaxed">We utilize secure VPCs, regular vulnerability scanning, automated dependency updates, and strict IAM roles following the principle of least privilege.</p>
               </div>
            </section>
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}