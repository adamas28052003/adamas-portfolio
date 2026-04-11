import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const formations = [
  { title: "Bachelier en Génie Logiciel", place: "Université Pédagogique Nationale (UPN)", date: "Mai 2021 – Mars 2025", type: "degree" },
  { title: "Baccalauréat Latin-Philo", place: "Collège Prince de la Paix", date: "2019 – 2020", type: "degree" },
  { title: "Formation en bureautique", place: "Centre Cencontec Gombe, Kinshasa", date: "2020", type: "degree" },
];

const certifications = [
  { title: "Notions essentielles de Linux", org: "Cisco NetAcad", date: "Octobre 2025" },
  { title: "Python Essentials 1", org: "Cisco NetAcad", date: "Octobre 2025" },
  { title: "Introduction à la cybersécurité", org: "Cisco NetAcad", date: "Octobre 2025" },
  { title: "Périphériques réseau et configuration initiale", org: "Cisco NetAcad", date: "Octobre 2025" },
  { title: "Spécialiste certifié en prévention du phishing (CPPS)", org: "Hack & Fix", date: "Décembre 2025" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-2 text-foreground">Formation & Certifications</h2>
          <div className="w-16 h-1 bg-hero-gradient rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formation */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Formation</h3>
            </div>
            <div className="space-y-6">
              {formations.map((f, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-semibold text-foreground text-sm">{f.title}</h4>
                  <p className="text-muted-foreground text-sm">{f.place}</p>
                  <p className="text-xs text-muted-foreground mt-1">{f.date}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <div key={i} className="bg-card rounded-xl p-4 card-shadow">
                  <h4 className="font-medium text-foreground text-sm">{c.title}</h4>
                  <p className="text-primary text-xs font-medium mt-1">{c.org}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
