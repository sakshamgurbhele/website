import { motion } from "framer-motion";
import { Github, Mail, MapPin, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-primary text-sm tracking-wider">
              ~/hello world<span className="animate-blink ml-0.5">_</span>
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
            <span className="text-foreground">Saksham</span>
            <br />
            <span className="gradient-text">Gurbhele</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Cloud & DevOps Engineer crafting scalable infrastructure on{" "}
            <span className="text-foreground font-medium">AWS</span> &{" "}
            <span className="text-foreground font-medium">GCP</span>.
            Specializing in Kubernetes, CI/CD pipelines, and serverless architectures.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Dublin, Ireland
            </span>
            <a
              href="mailto:sakshamm@duck.com"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              sakshamm@duck.com
            </a>
            <a
              href="https://github.com/sakshamgurbhele"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-primary" />
              GitHub
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-mono text-sm inline-flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-mono text-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
