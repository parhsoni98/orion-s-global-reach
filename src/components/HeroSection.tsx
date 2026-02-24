import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt="Global shipping port"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 gradient-navy opacity-80" />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
        Moving the World
        <span className="block text-teal-light">Forward</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/80 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        Orion Trading Solutions connects markets across continents with reliable import, export, and logistics services you can trust.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <a href="#services" className="px-8 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity">
          Our Services
        </a>
        <a href="#contact" className="px-8 py-3 rounded-md border-2 border-primary-foreground/50 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
