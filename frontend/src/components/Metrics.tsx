export const Metrics = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-900/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto divide-x divide-slate-900/5">
          {/* Metric 1 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight mb-3">20+</h3>
            <p className="text-sm font-semibold tracking-wide uppercase text-slate-500">Products Built</p>
          </div>
          
          {/* Metric 2 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight mb-3">10+</h3>
            <p className="text-sm font-semibold tracking-wide uppercase text-slate-500">Launched Products</p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight mb-3">95%</h3>
            <p className="text-sm font-semibold tracking-wide uppercase text-slate-500">Client Retention</p>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight mb-3">100K+</h3>
            <p className="text-sm font-semibold tracking-wide uppercase text-slate-500">End Users Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};
