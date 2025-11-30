import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    ideal: "Perfect for small teams testing the waters",
    features: [
      "One-time project delivery",
      "Up to 3 integrations",
      "Basic automation setup",
      "30-day support included",
      "Documentation & training",
    ],
  },
  {
    name: "Growth",
    ideal: "For teams needing ongoing support",
    features: [
      "Monthly retainer model",
      "Unlimited integrations",
      "Advanced automation",
      "Priority support",
      "Regular optimization reviews",
      "Dedicated account manager",
    ],
    popular: true,
  },
  {
    name: "Custom",
    ideal: "Enterprise-grade solutions",
    features: [
      "Fully customized engagement",
      "White-glove service",
      "Complex system integrations",
      "24/7 premium support",
      "Strategic consulting included",
      "Custom SLA agreements",
    ],
  },
];

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Flexible, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the engagement model that fits your needs. We offer one-off projects 
            and ongoing retainers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 relative ${
                plan.popular ? "border-primary border-2 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.ideal}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToContact}
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-glow text-primary-foreground"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Talk to us
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground">
          We'll send a clear, no-surprise quote after a quick call to understand your needs
        </p>
      </div>
    </section>
  );
};
