import { MapPin } from "lucide-react";

const regions = [
  { name: "North America", cities: "New York, Houston, Toronto" },
  { name: "Europe", cities: "London, Rotterdam, Hamburg" },
  { name: "Asia Pacific", cities: "Shanghai, Singapore, Mumbai" },
  { name: "Middle East & Africa", cities: "Dubai, Lagos, Johannesburg" },
];

const GlobalPresence = () => (
  <section id="global" className="section-padding gradient-navy">
    <div className="container mx-auto text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-light mb-3">Our Reach</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Global Presence
      </h2>
      <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-16 text-lg">
        Strategically positioned across key trade hubs to serve you wherever business takes you.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {regions.map((r) => (
          <div
            key={r.name}
            className="p-6 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
          >
            <MapPin className="w-8 h-8 text-coral mx-auto mb-3" />
            <h3 className="text-lg font-bold text-primary-foreground mb-1 font-sans">{r.name}</h3>
            <p className="text-primary-foreground/60 text-sm">{r.cities}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalPresence;
