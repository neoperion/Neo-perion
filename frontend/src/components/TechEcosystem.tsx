import { Cloud, Bot, Database, Server, Smartphone, MonitorSmartphone, Code2, Network, Cog, Zap } from "lucide-react";

export const TechEcosystem = () => {
  return (
    <section className="py-20 md:py-32 bg-[#02040A] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">Ecosystem</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-foreground">
            Enterprise Technology Stack
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We build scalable systems using industry-standard platforms, ensuring security, longevity, and high performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Ecosystem Column 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <Bot className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-display font-bold mb-4 text-white">AI Models & Platforms</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> OpenAI (GPT-4o)</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> Anthropic (Claude 3.5)</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> Google Gemini</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div> Llama 3 / Mistral</li>
            </ul>
          </div>

          {/* Ecosystem Column 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <Cloud className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-display font-bold mb-4 text-white">Cloud & DevOps</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></div> AWS</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></div> Microsoft Azure</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></div> Google Cloud Platform</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400/50"></div> Docker & Kubernetes</li>
            </ul>
          </div>

          {/* Ecosystem Column 3 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <Code2 className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-display font-bold mb-4 text-white">Engineering & Scale</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></div> React & Next.js</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></div> Node.js & Python</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></div> TypeScript</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-400/50"></div> Supabase & PostgreSQL</li>
            </ul>
          </div>

          {/* Ecosystem Column 4 */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
            <Cog className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-display font-bold mb-4 text-white">Industries We Serve</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50"></div> Fast-Growing Startups</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50"></div> EdTech & Education</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50"></div> Healthcare & MedTech</li>
              <li className="text-sm text-slate-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50"></div> SMBs & Enterprise</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
