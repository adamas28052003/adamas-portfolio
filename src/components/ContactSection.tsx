import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      if (error) throw error;
      setIsSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast({ title: "Message envoyé !", description: "Merci, je vous répondrai rapidement." });
    } catch {
      toast({ title: "Erreur", description: "Impossible d'envoyer le message. Réessayez.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "leroinkwebe@gmail.com", href: "mailto:leroinkwebe@gmail.com" },
    { icon: Phone, label: "+243 901 455 363", href: "tel:+243901455363" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/Adamas" },
    { icon: MapPin, label: "Kinshasa, RD Congo", href: undefined },
  ];

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Me contacter</h2>
          <div className="w-16 h-1 bg-hero-gradient rounded-full mb-6 mx-auto" />
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            Ouvert aux opportunités professionnelles et collaborations. N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow text-sm text-foreground"
              >
                <item.icon className="w-5 h-5 text-primary shrink-0" />
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center rounded-2xl bg-card card-shadow">
                <CheckCircle className="w-14 h-14 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Message envoyé !</h3>
                <p className="text-muted-foreground mb-6">Merci pour votre message, je vous répondrai rapidement.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-primary hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-8 rounded-2xl bg-card card-shadow">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nom</label>
                    <input
                      id="name" name="name" required value={form.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Sujet</label>
                  <input
                    id="subject" name="subject" required value={form.subject} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition disabled:opacity-60"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
