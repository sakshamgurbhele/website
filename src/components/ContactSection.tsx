import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="font-mono text-primary text-sm tracking-wider">
            <span className="opacity-60">07.</span> contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed text-lg">
            I'm currently open to new opportunities in Cloud & DevOps engineering.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:sakshamm@duck.com"
              className="group flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-mono text-sm"
            >
              <Mail className="w-4 h-4" />
              Say Hello
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/sakshamgurbhele"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-3.5 border border-border text-foreground font-semibold rounded-xl hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-mono text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
