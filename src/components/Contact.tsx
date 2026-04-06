import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_gf5pjxi";
const TEMPLATE_ID = "template_dwwu3je";
const PUBLIC_KEY = "9_tl0L36Z1NUbllHG";

const contactInfo = [
  { icon: Mail, label: "Email", value: "yogeshkumarsp03@gmail.com", href: "mailto:yogeshkumarsp03@gmail.com" },
  { icon: Phone, label: "Phone", value: "8778111920" },
  { icon: MapPin, label: "Location", value: "Krishnagiri, Tamil Nadu" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, PUBLIC_KEY);
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputClasses = "w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200";

  return (
    <section id="contact" className="py-16 lg:py-20 scroll-mt-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20">
              Contact
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground">
              Let's Create Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold font-display text-foreground">Get in Touch</h3>
              <div className="mt-6 space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:shadow-card hover:border-primary/20 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow">
                        <Icon size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</div>
                        <span className="text-foreground font-medium">{item.value}</span>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/yogesh-sanjeevi/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/yogeshkumarsp", label: "GitHub" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center border border-border rounded-xl text-foreground hover:gradient-primary hover:text-primary-foreground hover:border-transparent hover:shadow-glow transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold font-display text-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses} />
                  <input type="email" placeholder="Email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses} />
                </div>
                <input type="text" placeholder="Subject" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClasses} />
                <textarea placeholder="Tell me about your project..." rows={5} required value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClasses} resize-none`} />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 gradient-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 hover:shadow-glow transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    <><CheckCircle2 size={18} /> Message Sent!</>
                  ) : status === "error" ? (
                    <><AlertCircle size={18} /> Failed. Try again.</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
