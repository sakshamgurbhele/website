import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (Lambda, S3, DynamoDB, EC2, IAM, EventBridge, SNS, SQS)",
      "GCP (GKE, Compute Engine)",
      "Kubernetes (KubeFed, Helm)",
      "Docker",
      "Terraform",
      "CI/CD (GitHub Actions, AWS CodePipeline, Jenkins)",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      "Linux/Bash Scripting",
      "Microservices Architecture",
      "RESTful APIs",
      "Git",
      "Serverless Framework",
      "SonarCloud",
    ],
  },
  {
    category: "Languages & Frameworks",
    skills: ["Python", "Node.js", "Java", "SQL", "Django"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "DynamoDB (NoSQL)", "MySQL"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-2">
            <span className="opacity-60">04.</span> skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
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
              className="border border-border rounded-lg p-6 bg-card"
            >
              <h4 className="font-mono text-primary text-sm font-semibold mb-4">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-md bg-secondary text-secondary-foreground border border-border font-mono"
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
