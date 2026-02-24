import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt="Global shipping port"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 gradient-navy opacity-85" />

    <div className="relative z-10 container mx-auto px-4 text-center pt-20">
      <div className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 mb-8 animate-fade-in">
        <span className="text-sm font-medium text-teal-light">Trusted by 500+ businesses worldwide</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
        Moving the World
        <span className="block text-teal-light">Forward</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/80 mb-12 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
        Orion Trading Solutions connects markets across continents with reliable import, export,
        and logistics services. We simplify global trade so your business can thrive without borders.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <a href="#services" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-secondary text-secondary-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
          Explore Services <ArrowRight size={20} />
        </a>
        <a href="#about" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
          <Play size={18} /> Learn More
        </a>
      </div>

      {/* Trust badges */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/50 text-sm animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <span className="flex items-center gap-2">✓ ISO 9001 Certified</span>
        <span className="flex items-center gap-2">✓ Licensed Customs Broker</span>
        <span className="flex items-center gap-2">✓ 50+ Countries</span>
        <span className="flex items-center gap-2">✓ 24/7 Support</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
