import { Target, MessageSquare, Clock, Handshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Stability over hype",
    description: "We build lasting solutions, not trendy experiments",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description: "No jargon, just honest conversations",
  },
  {
    icon: Clock,
    title: "Respect for deadlines",
    description: "We commit to timelines and deliver on them",
  },
  {
    icon: Handshake,
    title: "Long-term partnerships",
    description: "Your success is our success",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70">About</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              About <span className="text-primary">AI</span><span style={{ color: '#E5E7EB' }}>NCURU</span>
            </h2>
            <div className="space-y-4 text-[15px] text-muted-foreground/70 leading-relaxed">
              <p>
                <span className="text-primary">AI</span><span style={{ color: '#E5E7EB' }}>NCURU</span> was founded to help teams leverage SaaS and automation without
                the confusion that often comes with rapid tech adoption.
              </p>
              <p>
                We've seen too many businesses struggle with fragmented tools,
                unclear processes, and vendors who disappear after launch. That's
                not how we work.
              </p>
              <p>
                Our focus is simple: deliver stable, long-term solutions that
                actually solve problems. We believe in partnerships over transactions,
                clarity over complexity, and results over hype.
              </p>
            </div>
            <div className="p-6 bg-primary/5 border-l-2 border-primary/50 rounded-r-xl">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-2">Our mission</p>
              <p className="text-muted-foreground/70 text-[14px] leading-relaxed">
                Run the business daily like we mean it, deliver every project clean, grow our client circle, launch our product, and turn trust into our biggest flex — 6 months of nonstop execution until success is just our default setting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 bg-card rounded-xl border border-border/60 hover-lift transition-all duration-300 group"
                >
                  <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-black tracking-tight text-[14px] mb-1.5 text-foreground">{value.title}</h3>
                  <p className="text-[12.5px] text-muted-foreground/60 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
