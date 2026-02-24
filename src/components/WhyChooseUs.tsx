import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Extensive global network across 50+ countries",
  "End-to-end supply chain management",
  "Dedicated compliance and customs expertise",
  "Real-time shipment tracking and reporting",
  "Competitive pricing with transparent costs",
  "Personalized service with dedicated account managers",
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Why Orion</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We combine deep market knowledge with operational excellence to deliver
            unmatched trade solutions for businesses of all sizes.
          </p>

          <ul className="space-y-4">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl gradient-navy flex items-center justify-center overflow-hidden">
            <div className="text-center p-10">
              <span className="text-7xl font-extrabold text-primary-foreground">15+</span>
              <p className="text-xl text-primary-foreground/80 mt-3">Years of Excellence in Global Trade</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl bg-accent/20 -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-secondary/20 -z-10" />
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
