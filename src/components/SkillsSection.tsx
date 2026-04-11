import { motion } from "framer-motion";
import { Monitor, Palette, Terminal, Code, Globe, Languages } from "lucide-react";

const skillCategories = [
  {
    icon: Monitor,
    title: "Microsoft Office",
    skills: ["Excel (Pro)", "Word (Pro)", "PowerPoint (Pro)"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
  {
    icon: Terminal,
    title: "Systèmes d'exploitation",
    skills: ["MS Windows", "Amazon Linux 2", "Ubuntu 22"],
  },
  {
    icon: Code,
    title: "Programmation & Scripting",
    skills: ["JavaScript", "Python", "Shell Scripting"],
  },
  {
    icon: Globe,
    title: "CMS & Cloud",
    skills: ["WordPress", "AWS (EC2, S3, IAM, VPC, Lambda, RDS)"],
  },
  {
    icon: Languages,
    title: "Langues",
    skills: ["Français", "Anglais", "Lingala"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-2 text-foreground">Compétences</h2>
          <div className="w-16 h-1 bg-hero-gradient rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-shadow group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-hero-gradient group-hover:text-primary-foreground transition-colors">
                <cat.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="space-y-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="inline-block mr-2 mb-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
