import logo from "@/assets/logo.png";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy py-14 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Orion Trading Solutions" className="h-14 mb-4 brightness-100 " />
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
            Bridging markets worldwide with reliable trade and logistics solutions since 2026.
            Orion Trading Solutions is committed to empowering businesses with seamless international
            commerce services they can trust.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-primary-foreground/60 text-sm">
            {["About", "Services", "Why Us", "Global", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-primary-foreground transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3 mb-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-secondary transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <h4 className="text-primary-foreground font-semibold mb-2">Contact</h4>
          <div className="space-y-2 text-sm">
            <p className="text-primary-foreground/60">
              <a href="mailto:oriontradingsolutionsco@gmail.com" className="hover:text-primary-foreground transition-colors">
                oriontradingsolutionsco@gmail.com
              </a>
            </p>
            <p className="text-primary-foreground/60">
              <a 
                href="https://www.google.com/maps/place/A%2F209,+Pushpak+corner,+Naroda,+Ahmedabad,+Gujarat+382330,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                A/209, Pushpak corner, Naroda, Ahmedabad, Gujarat, India 382330
              </a>
            </p>
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
