import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-2 text-foreground">Me contacter</h2>
          <div className="w-16 h-1 bg-hero-gradient rounded-full mb-6 mx-auto" />
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Ouvert aux opportunités professionnelles et collaborations. N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          {[
            { icon: Mail, label: "leroinkwebe@gmail.com", href: "mailto:leroinkwebe@gmail.com" },
            { icon: Phone, label: "+243 901 455 363", href: "tel:+243901455363" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/Adamas" },
            { icon: MapPin, label: "Kinshasa, RD Congo", href: undefined },
          ].map((item, i) => (
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
      </div>
    </section>
  );
};

export default ContactSection;
