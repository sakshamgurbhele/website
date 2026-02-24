import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="font-mono text-primary text-sm tracking-wider">
            <span className="opacity-60">07.</span> contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In Touch
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I'm currently open to new opportunities in Cloud & DevOps engineering.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:sakshamm@duck.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors font-mono text-sm"
            >
              <Mail className="w-4 h-4" />
              Say Hello
            </a>
            <a
              href="https://github.com/sakshamgurbhele"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary/50 hover:text-primary transition-colors font-mono text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
