import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const missions = [
    "Installation et configuration complète des postes de travail (moniteurs, unités centrales) pour les utilisateurs",
    "Déploiement et configuration des logiciels métiers et solutions antivirus pour assurer la sécurité des systèmes",
    "Application des mises à jour et correctifs sur les matériels et systèmes d'exploitation",
    "Assistance technique aux utilisateurs (support logiciel et matériel), résolution des incidents",
    "Installation et configuration des environnements de visioconférence",
    "Contribution à l'optimisation de l'infrastructure IT et maintenance préventive",
    "Vulgarisation des concepts techniques auprès d'un public non technique",
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-foreground">Expérience</h2>
          <div className="w-16 h-1 bg-hero-gradient rounded-full mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl p-8 card-shadow"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Formation AWS Re/Start & Stage IT / Help Desk</h3>
              <p className="text-primary font-medium">Orange Digital Center</p>
              <p className="text-sm text-muted-foreground mt-1">Août 2025 – Janvier 2026 · Temps plein</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Formation intensive de 12 semaines axée sur les fondamentaux de l'informatique, Linux, le Scripting (Python et Shell) et les services cloud AWS (EC2, S3, IAM, VPC, Lambda, CloudFormation, RDS, Route 53).
          </p>

          <div className="space-y-3">
            {missions.map((mission, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">{mission}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
