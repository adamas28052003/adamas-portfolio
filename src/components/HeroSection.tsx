import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-[0.03]" />
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Ouvert à toute collaboration
            </motion.span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
              <span className="text-foreground">NKWEBE</span>
              <br />
              <span className="text-foreground">MELEKA</span>
              <br />
              <span className="text-gradient">Adamas</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 max-w-lg leading-relaxed">
              Ingénieur Logiciel · IT Support · Certifié AWS Re/Start
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="mailto:leroinkwebe@gmail.com" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow text-sm text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                leroinkwebe@gmail.com
              </a>
              <a href="tel:+243901455363" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow text-sm text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +243 901 455 363
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <a href="https://www.linkedin.com/in/adamas-nkwebe-2a9180364" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card card-shadow hover:card-shadow-hover transition-shadow text-sm text-foreground">
                <Linkedin className="w-4 h-4 text-primary" />
                LinkedIn
              </a>
              <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card card-shadow text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Kinshasa, RD Congo
              </span>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-hero-gradient rounded-3xl opacity-20 blur-2xl" />
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden card-shadow-hover">
                <img
                  src={profileImg}
                  alt="Adamas NKWEBE MELEKA"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
