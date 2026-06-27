import type { ServiceData } from "@/data/servicesData";

/** Case-study card: Challenge → Approach → Result. Renders nothing without `caseStudy`. */
export function ServiceProof({ service }: { service: ServiceData }) {
  const cs = service.caseStudy;
  if (!cs) return null;
  const blocks = [
    { label: "Challenge", body: cs.problem, accent: false },
    { label: "Approach", body: cs.solution, accent: false },
    { label: "Result", body: cs.result, accent: true },
  ];
  return (
    <section className="bg-[#0A0A0B] py-16">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.25em] text-brand">Proof</p>
        <div className="rounded-xl border border-white/[0.08] bg-[#121113] p-8 md:p-8">
          {cs.client && (
            <p className="mb-8 text-sm font-semibold uppercase tracking-wide text-neutral-500">
              {cs.client}
            </p>
          )}
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {blocks.map((b) => (
              <div key={b.label}>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  {b.label}
                </p>
                <p
                  className={`leading-relaxed ${
                    b.accent ? "text-lg font-semibold text-brand" : "text-neutral-300"
                  }`}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
