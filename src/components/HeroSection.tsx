import { motion } from "framer-motion";
import { Github, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="font-mono text-primary text-sm tracking-wider">
            <span className="opacity-60">~/</span> hello world
            <span className="animate-blink ml-0.5">_</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="text-foreground">Saksham</span>
            <br />
            <span className="gradient-text">Gurbhele</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Cloud & DevOps Engineer crafting scalable infrastructure on AWS & GCP.
            Specializing in Kubernetes, CI/CD pipelines, and serverless architectures.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              Dublin, Ireland
            </span>
            <a
              href="mailto:sakshamm@duck.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              sakshamm@duck.com
            </a>
            <a
              href="https://github.com/sakshamgurbhele"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4 text-primary" />
              github.com/sakshamgurbhele
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-3 pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors font-mono text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors font-mono text-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
