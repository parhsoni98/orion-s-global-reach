import { Globe, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Shield, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "10K+", label: "Shipments Delivered" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Your Trusted Global Trade Partner
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Orion Trading Solutions is a leading import-export firm dedicated to bridging markets worldwide.
          With deep industry expertise and a commitment to excellence, we streamline international trade
          so businesses can focus on growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-4">
              <s.icon className="w-7 h-7 text-secondary" />
            </div>
            <span className="text-4xl font-bold text-primary">{s.value}</span>
            <span className="text-muted-foreground mt-1">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
