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
    <section id="about" className="py-20 md:py-32" style={{ backgroundColor: '#02040A' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">About</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">About <span className="text-primary">NEO</span> <span style={{ color: '#E5E7EB' }}>PERION</span></h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-primary">NEO</span> <span style={{ color: '#E5E7EB' }}>PERION</span> was founded to help teams leverage SaaS and automation without 
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
            <div className="p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
              <p className="font-semibold text-lg mb-2 text-foreground">Our mission</p>
              <p className="text-muted-foreground leading-relaxed">
                Run the business daily like we mean it, deliver every project clean, grow our client circle, launch our product, and turn trust into our biggest flex — 6 months of nonstop execution until success is just our default setting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 bg-background rounded-lg border border-border hover-lift transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
