import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Section } from "@/components/marketing/Section";

export default function Refund() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SEO />
      <Header />
      <main>
        <Section bg="paper" rhythm="hero" divider>
          <div className="mx-auto max-w-[720px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-muted2">
              Last updated 21 June 2026
            </p>
            <h1 className="mt-4 font-display text-[clamp(32px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.02em] text-ink">
              Refund & Cancellation Policy
            </h1>
            <div className="mt-10 space-y-8 text-body leading-relaxed">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Milestone-Based Cancellations</h2>
                <p>
                  As a service-based engineering firm, Neo Perion bills for time, labor, and expertise rather than physical goods. Our projects are structured around defined milestones (e.g., Discovery, Design, Development). If a client chooses to cancel a project mid-development, they will only be billed for the work completed up to the date of cancellation. No refunds are issued for previously approved and completed milestones.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Non-Refundable Deposits</h2>
                <p>
                  To commence work on any custom software or AI integration project, an upfront deposit may be required to secure engineering resources and schedule the project. This initial deposit is strictly non-refundable once work has officially begun.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Subscriptions & Retainers</h2>
                <p>
                  For ongoing services such as monthly maintenance, cloud infrastructure management, or AI API retainers, clients may cancel their subscription with a 30-day written notice. We do not offer pro-rated refunds for partial months of service after a billing cycle has commenced.
                </p>
              </section>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-ink">Contact Us</h2>
                <p>
                  If you have questions about your billing, invoices, or our cancellation terms, please contact our billing department at{" "}
                  <a href="mailto:hello@neoperion.com" className="font-semibold text-brand">
                    hello@neoperion.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
