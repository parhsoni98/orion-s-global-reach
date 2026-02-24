import { Globe, Shield, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Shield, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "10K+", label: "Shipments Delivered" },
  { icon: Users, value: "500+", label: "Active Clients" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Trusted Global Trade Partner
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Orion Trading Solutions is a leading import-export firm dedicated to bridging markets worldwide.
            With deep industry expertise and a commitment to excellence, we streamline international trade
            so businesses can focus on growth.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Founded in 2009, we've built lasting relationships with suppliers, manufacturers, and distributors
            across six continents. Our team of seasoned trade professionals ensures that every shipment—whether
            a single container or a full fleet—arrives on time and within budget.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe that international trade should be accessible to businesses of all sizes. That's why
            we offer flexible, scalable solutions that grow with your needs—from first-time importers to
            multinational corporations.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl gradient-brand p-10 text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4 font-sans">Our Mission</h3>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              To empower businesses with seamless, transparent, and efficient global trade solutions—
              connecting markets, building trust, and driving sustainable growth across borders.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-xl bg-secondary/15 -z-10" />
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-primary/10 -z-10" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
