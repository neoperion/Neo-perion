import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const metrics = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Average ROI" },
  { value: "24/7", label: "Support Available" },
];

const testimonials = [
  {
    quote: "VTSHA transformed our entire workflow. What used to take days now happens automatically.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
  },
  {
    quote: "The team's expertise and responsiveness made our digital transformation seamless and stress-free.",
    author: "Michael Roberts",
    role: "Operations Director, InnovateCo",
  },
];

export const Metrics = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <div className="text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What our clients say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
