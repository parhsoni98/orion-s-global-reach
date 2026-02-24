import { Ship, PackageCheck, Globe2, Truck } from "lucide-react";

const services = [
  {
    icon: PackageCheck,
    title: "Import Services",
    desc: "Seamless procurement and customs clearance for goods from international markets with full regulatory compliance.",
    features: ["Customs brokerage & documentation", "Duty & tax optimization", "Regulatory compliance management"],
  },
  {
    icon: Ship,
    title: "Export Services",
    desc: "End-to-end export management including documentation, shipping coordination, and destination delivery.",
    features: ["Export licensing & permits", "Freight booking & coordination", "Insurance & risk management"],
  },
  {
    icon: Globe2,
    title: "Global Sourcing",
    desc: "Strategic supplier identification and vetting across continents to ensure quality and competitive pricing.",
    features: ["Supplier audits & qualification", "Price negotiation support", "Quality control & inspection"],
  },
  {
    icon: Truck,
    title: "Logistics & Freight",
    desc: "Integrated freight forwarding, warehousing, and last-mile delivery solutions tailored to your supply chain.",
    features: ["Air, sea & land freight", "Warehousing & distribution", "Real-time tracking & reporting"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted">
    <div className="container mx-auto">
      <div className="text-center mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
      </div>
      <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-16">
        From sourcing and procurement to final delivery, we provide comprehensive trade services
        designed to simplify your global operations and reduce costs.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-8 rounded-xl bg-card border border-border hover:border-secondary/50 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-lg gradient-navy flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 font-sans">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <ul className="space-y-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
