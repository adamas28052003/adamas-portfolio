import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-foreground">À propos</h2>
          <div className="w-16 h-1 bg-hero-gradient rounded-full mb-8" />
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Ingénieur logiciel de formation, je suis passionné par la résolution de problèmes. Mon parcours technique m'a apporté une méthode de travail rigoureuse et une grande rapidité d'apprentissage, des atouts adaptables à tout secteur professionnel.
            </p>
            <p>
              Polyvalent, je sais simplifier les sujets complexes pour les rendre clairs. Je m'intègre facilement à des domaines variés comme la microfinance ou la communication. Curieux et proactif, j'apprends vite de nouveaux outils pour apporter des solutions concrètes et innovantes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
