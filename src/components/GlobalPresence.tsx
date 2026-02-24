import { MapPin } from "lucide-react";

const regions = [
  { name: "North America", cities: "New York, Houston, Toronto", desc: "Key gateway for US-Canada-Mexico trade corridors" },
  { name: "Europe", cities: "London, Rotterdam, Hamburg", desc: "Direct access to the EU single market and major ports" },
  { name: "Asia Pacific", cities: "Shanghai, Singapore, Mumbai", desc: "Deep sourcing network in the world's manufacturing hub" },
  { name: "Middle East & Africa", cities: "Dubai, Lagos, Johannesburg", desc: "Emerging markets with high-growth trade opportunities" },
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
        Our local teams understand regional regulations, customs, and business practices.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {regions.map((r) => (
          <div
            key={r.name}
            className="p-6 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors text-left"
          >
            <MapPin className="w-8 h-8 text-secondary mb-3" />
            <h3 className="text-lg font-bold text-primary-foreground mb-1 font-sans">{r.name}</h3>
            <p className="text-teal-light text-sm font-medium mb-2">{r.cities}</p>
            <p className="text-primary-foreground/50 text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalPresence;
