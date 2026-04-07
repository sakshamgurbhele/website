import { motion } from "framer-motion";
import { Cloud, Wrench, Code, Database } from "lucide-react";

const skillGroups = [
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS Lambda", "S3", "DynamoDB", "EC2", "IAM", "EventBridge", "SNS", "SQS",
      "GCP (GKE)", "Kubernetes", "KubeFed", "Helm",
      "Docker", "Terraform", "GitHub Actions", "AWS CodePipeline", "Jenkins",
      "Prometheus", "Grafana",
    ],
  },
  {
    category: "Infrastructure & Tools",
    icon: Wrench,
    skills: [
      "Linux/Bash", "Microservices", "RESTful APIs", "Git",
      "Serverless Framework", "SonarCloud",
    ],
  },
  {
    category: "Languages & Frameworks",
    icon: Code,
    skills: ["Python", "Node.js", "Java", "SQL", "Django"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MongoDB", "DynamoDB", "MySQL"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 section-divider">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-3">
            <span className="opacity-60">04.</span> skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Tech Stack
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-xl p-6 bg-card card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10">
                  <group.icon className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-mono text-sm font-semibold text-foreground">
                  {group.category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-lg bg-secondary text-muted-foreground border border-border font-mono hover:border-primary/30 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
