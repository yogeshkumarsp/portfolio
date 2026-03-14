import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";


const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20"
            >
              About Me
            </motion.span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground text-balance">
              Passionate about building
              <span className="gradient-text"> digital experiences</span>
            </h2>
          </div>

          <div className="mt-10 max-w-3xl mx-auto space-y-5 text-muted-foreground leading-relaxed text-lg">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              I'm a passionate software developer with a strong interest in full-stack
              web development and backend engineering. I enjoy building applications
              that are not only functional but also clean, scalable, and user-friendly.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              My primary tech stack revolves around React for the frontend and
              Node.js/Express for backend services, with Python as my go-to language
              for scripting and automation. I'm deeply interested in RESTful API
              design, database optimization, and emerging AI technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              I believe in continuous learning and constantly push myself to explore
              new frameworks, tools, and best practices. My goal is to contribute to
              innovative solutions that make a real-world impact.
            </motion.p>
          </div>


          {/* Current Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 p-6 bg-card rounded-2xl shadow-card border border-border max-w-3xl mx-auto flex items-center gap-4 gradient-border hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow">
              <Briefcase size={20} className="text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                Currently
              </div>
              <div className="text-foreground font-bold font-display">
                Software Developer Intern at Knewton Tech
              </div>
              <div className="text-sm text-muted-foreground mt-0.5">
                Jan 2026 — Present
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
