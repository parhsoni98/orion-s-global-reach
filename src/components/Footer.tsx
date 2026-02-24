import logo from "@/assets/logo.png";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy py-12 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={logo} alt="Orion Trading Solutions" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Bridging markets worldwide with reliable trade and logistics solutions since 2009.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-primary-foreground/60 text-sm">
            {["About", "Services", "Why Us", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-primary-foreground transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 pt-6 text-center text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} Orion Trading Solutions. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
