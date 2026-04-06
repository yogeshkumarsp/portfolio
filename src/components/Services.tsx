import { motion } from "framer-motion";
import { Globe, Plug, Monitor, DatabaseZap, GitPullRequest } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Development",
    description: "Building end-to-end web applications with React, Node.js, Express, and MongoDB/MySQL.",
    tags: ["React & Next.js", "Node.js & Express", "MongoDB & MySQL", "REST & GraphQL"],
    gradient: "from-primary to-accent",
  },
  {
    icon: Plug,
    title: "REST API Development",
    description: "Designing secure, scalable, and well-documented RESTful APIs.",
    tags: ["API Design", "Authentication", "Documentation", "Rate Limiting"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Monitor,
    title: "Frontend UI Implementation",
    description: "Crafting responsive, pixel-perfect React interfaces with modern design.",
    tags: ["Responsive Design", "Tailwind CSS", "Component Libraries", "Animations"],
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: DatabaseZap,
    title: "Database Integration",
    description: "Schema design, query optimization, and seamless database connectivity.",
    tags: ["Schema Design", "Query Optimization", "Data Modeling", "Migrations"],
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: GitPullRequest,
    title: "Version Control & Workflow",
    description: "Git-based collaboration, branching strategies, and CI/CD workflows.",
    tags: ["Git & GitHub", "CI/CD Pipelines", "Code Reviews", "Branch Strategy"],
    gradient: "from-rose-400 to-pink-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-0 lg:pt-0 pb-16 lg:pb-20 scroll-mt-16 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20">
              Services
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group p-8 bg-background rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 gradient-border"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.tags.map((tag) => (
                      <li key={tag} className="text-sm text-foreground/70 flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`} />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
