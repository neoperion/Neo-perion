import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileGate, MobileShell } from "@/components/mobile";

export default function Insights() {
  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-[auto] bg-[#02040A] text-white selection:bg-neo-blue/30">
        <Helmet><title>Insights | Neo Perion</title></Helmet>
        <Header />
        <main className="pt-32 pb-24 flex items-center justify-center min-h-[70vh]">
          <div className="text-center px-8">
             <h1 className="text-5xl lg:text-7xl font-black mb-6">Insights & Blog</h1>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">Our thoughts on AI, engineering, and product development.</p>
             <div className="p-6 border border-dashed border-white/20 rounded-2xl inline-block">
               <p className="text-neo-blue font-medium">New articles publishing soon.</p>
             </div>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pt-24 pb-12 flex flex-col items-center justify-center min-h-[60svh] px-6">
             <h1 className="text-display-lg text-white tracking-tight mb-4 text-center">Insights & Blog.</h1>
             <p className="text-base text-white/70 max-w-sm mx-auto mb-8 text-center">Our thoughts on AI, engineering, and product development.</p>
             <div className="p-5 border border-dashed border-white/[0.15] bg-white/[0.02] rounded-3xl w-full text-center backdrop-blur-glass-1">
               <p className="text-[13px] font-bold text-neo-highlight uppercase tracking-wider">New articles publishing soon.</p>
             </div>
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}
