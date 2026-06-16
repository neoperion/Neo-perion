export const Philosophy = () => {
  return (
    <section className="py-32 bg-slate-900 border-b border-slate-900/5 relative overflow-hidden">
      {/* Dark premium background with subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_800px_at_50%_50%,rgba(37,99,235,0.08),transparent)]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12">
            <span className="text-blue-500 text-6xl font-editorial opacity-50 block leading-none">"</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-editorial font-normal text-white leading-tight mb-12">
            We treat your product as our own. <br className="hidden md:block" />
            If an architecture won't scale to a million users, we won't recommend it. <br className="hidden md:block" />
            If a feature adds complexity without value, we'll push back.
          </h2>

          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 mb-2">
               <img src="/images/founder.jpg" alt="Vasantharaj S" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div>
              <p className="text-white font-display font-bold text-lg">Vasantharaj S</p>
              <p className="text-slate-400 text-sm font-medium tracking-wide uppercase mt-1">CEO & Founder</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
