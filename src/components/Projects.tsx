import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import resumeAnalyzer from "@/assets/project-resume-analyzer.jpg";
import b2bAgent from "@/assets/project-b2b-agent.jpg";

const projects = [
  {
    image: resumeAnalyzer,
    year: "2024",
    category: "Web Application",
    title: "Smart Resume Analyzer",
    description:
      "AI-powered resume analysis web app that provides feedback, detects skill gaps, and suggests ATS optimization improvements.",
    tags: ["AI/ML", "Web App", "Python"],
    link: "https://yogesh-resume-analyzer.vercel.app/",
  },
  {
    image: b2bAgent,
    year: "2026",
    category: "AI Agent",
    title: "B2B Lead Generation & Outreach Agent",
    description:
      "Intelligent agent that automates B2B lead generation, prospect research, and personalized outreach at scale.",
    tags: ["AI Agent", "Automation", "B2B"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20">
              Projects
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work in AI applications and web development.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group cursor-pointer"
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-card group-hover:shadow-card-hover transition-shadow duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3] object-cover w-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="absolute top-4 right-4 px-3 py-1 bg-card/90 backdrop-blur-md text-foreground text-sm font-semibold rounded-full border border-border/50">
                    {project.year}
                  </span>

                  {/* Hover icon */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full gradient-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-glow"
                  >
                    <ExternalLink size={16} className="text-primary-foreground" />
                  </motion.div>
                </div>

                <div className="pt-5">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold font-display text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium bg-card border border-border text-foreground/80 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
