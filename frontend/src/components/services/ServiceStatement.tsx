import type { ServiceData } from "@/data/servicesData";
import { NeuralNetworkBg } from "./NeuralNetworkBg";

/** Big editorial brand-statement moment that breaks the section rhythm. */
export function ServiceStatement({ service, theme = "dark" }: { service: ServiceData; theme?: "dark" | "manuscript" }) {
  if (!service.statement) return null;
  return (
    <section className={`relative overflow-hidden border-y py-28 ${theme === "manuscript" ? "bg-manuscript-parchment border-manuscript-walnut/15" : "bg-[#0A0A0B] border-manuscriptAlpha-ink-15"}`}>
      {/* Animated neural-network background */}
      {theme === "dark" && <NeuralNetworkBg />}
      {theme === "manuscript" && (
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#5A4A3A 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      )}
      {/* Center scrim keeps the headline crisp over the mesh */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-[1] ${
          theme === "manuscript" 
            ? "bg-[radial-gradient(65%_100%_at_50%_50%,rgba(244,235,215,0.85)_0%,rgba(244,235,215,0.45)_55%,transparent_85%)]"
            : "bg-[radial-gradient(65%_100%_at_50%_50%,rgba(10,10,11,0.82)_0%,rgba(10,10,11,0.45)_55%,transparent_85%)]"
        }`}
      />
      <div className="container relative z-10 mx-auto max-w-[1100px] px-6 text-center lg:px-8">
        <h2 className={`font-manuscript text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight ${theme === "manuscript" ? "text-manuscript-ink" : "text-white"}`}>
          {service.statement.text.split(" ").map((word, i, arr) =>
            // emphasize the last 2 words in orange
            i >= arr.length - 2 ? (
              <span key={i} className={theme === "manuscript" ? "text-manuscript-copper" : "text-brand"}>
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
        {service.statement.sub && (
          <p className={`mx-auto mt-6 max-w-2xl text-lg ${theme === "manuscript" ? "text-manuscript-inkSoft" : "text-white/60"}`}>{service.statement.sub}</p>
        )}
      </div>
    </section>
  );
}
