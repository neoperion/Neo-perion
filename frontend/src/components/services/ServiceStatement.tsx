import type { ServiceData } from "@/data/servicesData";
import { NeuralNetworkBg } from "./NeuralNetworkBg";

/** Big editorial brand-statement moment that breaks the section rhythm. */
export function ServiceStatement({ service }: { service: ServiceData }) {
  if (!service.statement) return null;
  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#0A0A0B] py-28">
      {/* Animated neural-network background */}
      <NeuralNetworkBg />
      {/* Center scrim keeps the headline crisp over the mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(65%_100%_at_50%_50%,rgba(10,10,11,0.82)_0%,rgba(10,10,11,0.45)_55%,transparent_85%)]"
      />
      <div className="container relative z-10 mx-auto max-w-[1100px] px-6 text-center lg:px-8">
        <h2 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
          {service.statement.text.split(" ").map((word, i, arr) =>
            // emphasize the last 2 words in orange
            i >= arr.length - 2 ? (
              <span key={i} className="text-brand">
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h2>
        {service.statement.sub && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">{service.statement.sub}</p>
        )}
      </div>
    </section>
  );
}
