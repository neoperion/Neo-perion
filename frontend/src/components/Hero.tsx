import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMagnetic } from "@/hooks/useMagnetic";

const TERMINAL_LINES = [
  "npm init neo-perion-app@latest",
  "✓ Workspace configured successfully.",
  "✓ Initializing RAG pipeline & vector store...",
  "✓ Provisioning SOC-2 compliant cloud infrastructure...",
  "✓ Injecting agentic business workflows...",
  "✓ Active monitoring: Uptime 99.99% | Latency 12ms",
  "✓ System ready: Build deployed to production."
];

const HeroTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) {
      setIsTyping(false);
      const timer = setTimeout(() => {
        setLines([]);
        setCurrentLineIndex(0);
        setTypedText("");
        setIsTyping(true);
      }, 6000);
      return () => clearTimeout(timer);
    }

    const currentFullText = TERMINAL_LINES[currentLineIndex];
    let charIndex = 0;
    const isCommand = currentLineIndex === 0;
    const delay = isCommand ? 60 : 25;

    const typingInterval = setInterval(() => {
      if (charIndex < currentFullText.length) {
        setTypedText((prev) => prev + currentFullText[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setLines((prev) => [...prev, currentFullText]);
          setTypedText("");
          setCurrentLineIndex((prev) => prev + 1);
        }, 400);
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [currentLineIndex]);

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 bg-slate-950 font-mono text-[13px] leading-relaxed text-slate-300 shadow-xl p-6 overflow-hidden select-none relative backdrop-blur-xl">
      {/* Window Controls */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
        </div>
        <div className="text-[11px] text-slate-500 font-sans font-semibold tracking-wide">bash — np-terminal</div>
        <div className="w-12" />
      </div>
      
      {/* Logs Content */}
      <div className="space-y-2.5 h-[230px] overflow-y-auto scrollbar-hide text-left">
        {lines.map((line, idx) => (
          <div key={idx} className={idx === 0 ? "text-sky-400 font-bold" : line.startsWith("✓") ? "text-emerald-400" : "text-slate-300"}>
            {idx === 0 && <span className="text-slate-600 mr-2">$</span>}
            {line}
          </div>
        ))}
        {isTyping && (
          <div className={currentLineIndex === 0 ? "text-sky-400 font-bold" : "text-slate-300"}>
            {currentLineIndex === 0 && <span className="text-slate-600 mr-2">$</span>}
            {typedText}
            <span className="inline-block w-1.5 h-4 bg-slate-400 ml-1 animate-pulse align-middle" />
          </div>
        )}
      </div>
    </div>
  );
};

export const Hero = () => {
  const navigate = useNavigate();
  const primaryBtnRef = useMagnetic(60);
  const secondaryBtnRef = useMagnetic(60);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-28 pb-20 md:pt-32 md:pb-24 border-b border-slate-200/50">
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Subtle blue radial highlight top-left */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-25 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(37,99,255,0.12), transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Content (55%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Quantified metric badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6">
              <Clock className="w-4 h-4 text-neo-blue" />
              <span className="text-xs font-semibold text-slate-600">
                Zero-to-production in 5 weeks for validated MVPs
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-[#09090B] font-display">
              The product engineering firm that <span className="text-neo-blue">doesn't disappear</span> after launch.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-[16px] md:text-lg text-[#71717A] leading-relaxed max-w-xl font-medium">
              AI-native platforms, SaaS infrastructure, and enterprise automation — engineered for production from day one. Built by senior engineers. Shipped in weeks, not quarters.
            </p>

            {/* Quick proof points */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neo-blue" />
                <span className="font-medium text-slate-600">Production-grade focus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neo-blue" />
                <span className="font-medium text-slate-600">Senior architects only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neo-blue" />
                <span className="font-medium text-slate-600">No offshoring, zero fluff</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                ref={primaryBtnRef}
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto h-11 px-6 bg-[#09090B] text-white rounded-md text-sm font-bold transition-all hover:bg-slate-800 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2"
              >
                Book a strategy call
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                ref={secondaryBtnRef}
                onClick={() => {
                  const element = document.querySelector("#case-studies");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto text-sm font-bold text-slate-600 hover:text-neo-blue transition-colors inline-flex items-center justify-center gap-1.5 px-4 py-3"
              >
                See our work
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Availability tag */}
            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                Currently booking projects for Q3 2026
              </span>
            </div>
          </div>

          {/* Right Column — Animated Terminal (45%) */}
          <div className="hidden lg:block lg:col-span-5 w-full">
            <HeroTerminal />
          </div>

        </div>
      </div>
    </section>
  );
};
