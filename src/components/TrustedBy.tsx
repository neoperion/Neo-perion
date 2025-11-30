export const TrustedBy = () => {
  const logos = [
    "NovaTech",
    "Skyline Labs",
    "Quantum Systems",
    "Apex Digital",
    "Fusion Co.",
    "Nexus Group",
  ];

  return (
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
          Trusted by teams that move fast
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-lg font-bold text-foreground">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
