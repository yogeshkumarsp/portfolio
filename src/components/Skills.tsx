import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript"],
    icon: Code,
    gradient: "from-primary to-accent",
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "React.js"],
    icon: Layout,
    gradient: "from-teal-400 to-emerald-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
    icon: Server,
    gradient: "from-emerald-400 to-green-500",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
    icon: Database,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "npm"],
    icon: Wrench,
    gradient: "from-rose-400 to-pink-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 lg:py-20 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20">
              Skills
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground">
              Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-6 bg-card rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 gradient-border"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {category.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium bg-background border border-border text-foreground rounded-full hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
