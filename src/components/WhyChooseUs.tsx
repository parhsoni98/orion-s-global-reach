import { CheckCircle2 } from "lucide-react";

const reasons = [
  { text: "Extensive global network across 50+ countries", detail: "Partnerships with verified agents in every major trade corridor" },
  { text: "End-to-end supply chain management", detail: "From factory floor to your warehouse—fully managed" },
  { text: "Dedicated compliance and customs expertise", detail: "Navigate tariffs, sanctions, and regulations with confidence" },
  { text: "Shipment Status Updates & Reporting", detail: "Regular updates at key transit milestones with clear status reports" },
  { text: "Competitive pricing with transparent costs", detail: "No hidden fees—clear quotes with detailed breakdowns" },
  { text: "Personalized service with dedicated account managers", detail: "A single point of contact who understands your business" },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Why Orion</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Choose Us
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We combine deep market knowledge with operational excellence to deliver
          unmatched trade solutions for businesses of all sizes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r) => (
          <div key={r.text} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-foreground font-semibold block mb-1">{r.text}</span>
              <span className="text-muted-foreground text-sm">{r.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
