import { motion } from "framer-motion";
import { Award, Users, GitBranch, Trophy } from "lucide-react";

const accomplishments = [
  {
    icon: Users,
    title: "Mentor at Project EduAccess",
    description: "Mentoring marginalized students to navigate higher education opportunities abroad since October 2023.",
  },
  {
    icon: GitBranch,
    title: "GitHub Campus Expert",
    description: "Selected among the top 39 global applicants (2024) for leadership in technical community building.",
  },
  {
    icon: Award,
    title: "Open Source Mentor",
    description: "Guided 80+ contributors in mastering version control and Git workflows for large-scale projects.",
  },
  {
    icon: Trophy,
    title: "Smart India Hackathon",
    description: "Secured 3rd position nationally (2023) for developing scalable software solutions.",
  },
];

const AccomplishmentsSection = () => {
  return (
    <section id="accomplishments" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-2">
            <span className="opacity-60">06.</span> accomplishments
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Leadership & Impact
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {accomplishments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-lg p-6 bg-card card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-secondary-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
