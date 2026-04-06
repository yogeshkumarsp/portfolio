import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Trophy, Sparkles, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { useEffect, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Projects" },
  { value: 3, suffix: "+", label: "Technologies" },
  { value: 1, suffix: "+", label: "Yrs Experience" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [value]);
  return <>{count}{suffix}</>;
};

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary-foreground/10"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 animate-grain opacity-30" />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={6} />
      <FloatingParticle delay={1} x="80%" y="15%" size={4} />
      <FloatingParticle delay={2} x="70%" y="70%" size={8} />
      <FloatingParticle delay={0.5} x="20%" y="80%" size={5} />
      <FloatingParticle delay={1.5} x="90%" y="50%" size={6} />
      <FloatingParticle delay={3} x="50%" y="10%" size={4} />
      <FloatingParticle delay={2.5} x="30%" y="60%" size={7} />

      {/* Decorative blurred orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-foreground/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-48 h-48 rounded-full bg-glow-secondary/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Profile Image - LEFT side */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center order-2 lg:order-1"
            style={{ perspective: 1000 }}
          >
            <motion.div className="relative" style={{ rotateX, rotateY }}>
              {/* Glow ring behind photo */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-glow-secondary/30 blur-xl animate-pulse-glow" />
              
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary-foreground/20 shadow-glow-lg">
                <img
                  src={profilePhoto}
                  alt="Yogesh Kumar"
                  className="w-full h-full object-cover"
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
              </div>

              {/* Floating badge - Experience */}
              <motion.div
                className="absolute -right-4 top-8 glass rounded-2xl px-4 py-3 shadow-card-hover flex items-center gap-2.5"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Trophy size={16} className="text-amber-500" />
                </div>
                <div>
                  <div className="text-lg font-bold font-display text-foreground">1+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </motion.div>

              {/* Floating badge - Role */}
              <motion.div
                className="absolute -left-4 bottom-12 rounded-full px-5 py-3 shadow-card-hover flex items-center gap-2.5 bg-amber-500"
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Sparkles size={16} className="text-white" />
                <div className="text-sm font-semibold text-white">Software Dev</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text Content - RIGHT side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-primary-foreground">
                  Available for freelance work
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black font-display text-primary-foreground leading-[1.1] tracking-tight drop-shadow-md"
            >
              Hi, I'm Yogesh,
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black font-display mt-1 leading-[1.1] tracking-tight italic"
            >
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                Software Developer
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-6 text-lg text-primary-foreground/80 max-w-lg leading-relaxed drop-shadow-sm"
            >
              Transforming ideas into seamless, efficient web and backend systems
              that solve real-world problems and enhance user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-card text-foreground font-semibold rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-foreground/10 text-primary-foreground font-semibold rounded-full border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-12 flex gap-10"
            >
              {stats.map((stat, i) => (
              <div key={stat.label} className="relative">
                  <div className="text-4xl font-extrabold font-display text-amber-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-semibold text-white drop-shadow-sm">
                    {stat.label}
                  </div>
                  {i < stats.length - 1 && (
                    <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-px h-8 bg-primary-foreground/15" />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} className="text-primary-foreground/40" />
      </motion.div>
    </section>
  );
};

export default Hero;
