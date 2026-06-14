import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, Server } from 'lucide-react';

export default function Security() {
  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet><title>Security | Neo Perion</title></Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <section className="text-center px-8 mb-20 max-w-4xl mx-auto">
           <ShieldCheck className="mx-auto text-cyan-400 mb-8" size={64} />
           <h1 className="text-5xl lg:text-7xl font-black mb-6">Enterprise Security</h1>
           <p className="text-xl text-slate-400">Security is not a feature. It is the foundation of everything we build.</p>
        </section>
        
        <section className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-8">
           <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]">
             <Lock className="text-cyan-400 mb-4" size={32} />
             <h3 className="text-2xl font-bold mb-4">Data Protection</h3>
             <p className="text-slate-400 leading-relaxed">All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement strict Row Level Security (RLS) policies to ensure tenant isolation.</p>
           </div>
           <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]">
             <Server className="text-cyan-400 mb-4" size={32} />
             <h3 className="text-2xl font-bold mb-4">Infrastructure Security</h3>
             <p className="text-slate-400 leading-relaxed">We utilize secure VPCs, regular vulnerability scanning, automated dependency updates, and strict IAM roles following the principle of least privilege.</p>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}