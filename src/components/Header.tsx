import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-2 glass shadow-card"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-bold font-display gradient-text">
          Yogesh Kumar.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                activeSection === item.href
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {activeSection === item.href && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
          <a
            href="/Yogesh_Kumar_Resume.pdf"
            download
            className="ml-3 px-5 py-2.5 text-sm font-semibold gradient-primary text-primary-foreground rounded-full hover:opacity-90 hover:shadow-glow transition-all duration-300 flex items-center gap-2"
          >
            <Download size={14} />
            Download CV
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors rounded-xl ${
                    activeSection === item.href
                      ? "text-foreground bg-primary/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/Yogesh_Kumar_Resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2.5 text-sm font-semibold gradient-primary text-primary-foreground rounded-full text-center"
              >
                Download CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
