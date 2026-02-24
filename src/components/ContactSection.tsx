import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const initialForm: ContactForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof ContactForm;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSending(true);

    // FormSubmit.co integration – replace email below with actual company email
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@oriontradingsolutions.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: form.name,
          Company: form.company,
          Email: form.email,
          Phone: form.phone,
          "Service Type": form.service,
          Message: form.message,
          _subject: `New Inquiry from ${form.name} - ${form.company}`,
        }),
      });

      if (res.ok) {
        toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
        setForm(initialForm);
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({
        title: "Sending failed",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-colors";

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 font-sans">Orion Trading Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ready to expand your global reach? Contact us for a tailored trade solution.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-foreground">info@oriontradingsolutions.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-foreground">123 Trade Avenue, New York, NY</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card rounded-xl p-8 shadow-sm border border-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name *" className={inputClass} />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Company Name *" className={inputClass} />
                {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" className={inputClass} />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number *" className={inputClass} />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
            <div>
              <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                <option value="">Select Service Type *</option>
                <option value="Import">Import</option>
                <option value="Export">Export</option>
                <option value="Logistics">Logistics</option>
                <option value="Other">Other</option>
              </select>
              {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
            </div>
            <div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message *" rows={5} className={inputClass} />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-md bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
