const technologies = [
  { name: "MongoDB", category: "Database" },
  { name: "Express.js", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Runtime" },
  { name: "Python", category: "Data Science" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "AWS", category: "Cloud" },
  { name: "Power BI", category: "Analytics" },
];

export const TechStack = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech we work with
          </h2>
          <p className="text-lg text-muted-foreground">
            We leverage industry-leading technologies and platforms to deliver robust solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-6 bg-background rounded-lg border border-border hover-lift text-center"
            >
              <div className="font-bold text-lg mb-1">{tech.name}</div>
              <div className="text-sm text-muted-foreground">{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
