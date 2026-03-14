import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "Expected 2026",
    degree: "Master of Computer Applications",
    institution: "Adhiyamaan College of Engineering",
    current: true,
  },
  {
    year: "2023",
    degree: "Bachelor of Computer Applications",
    institution: "Arignar Anna College (Arts & Science)",
  },
  {
    year: "2020",
    degree: "Higher Secondary",
    institution: "Vijaya Pre University College, Bangalore",
  },
  {
    year: "2018",
    degree: "Secondary School",
    institution: "SM English High School",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20">
              Education
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground">
              Academic <span className="gradient-text">Journey</span>
            </h2>
          </div>

          <div className="mt-12 max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex gap-5 items-start group"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      item.current
                        ? "gradient-primary shadow-glow"
                        : "bg-primary/10 group-hover:bg-primary/20"
                    }`}>
                      <GraduationCap size={20} className={item.current ? "text-primary-foreground" : "text-primary"} />
                    </div>
                    {item.current && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-card animate-pulse" />
                    )}
                  </div>

                  <div className={`flex-1 p-6 bg-background rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 gradient-border ${
                    item.current ? "shadow-card" : ""
                  }`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {item.year}
                      </span>
                      {item.current && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-600">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-bold font-display text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
