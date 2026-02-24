import { motion } from "framer-motion";

const experiences = [
  {
    title: "DevOps & Cloud Engineer",
    company: "Freelance",
    location: "Dublin / Remote",
    period: "Jan 2025 – Present",
    points: [
      "Architecting Production Serverless environments with AWS Lambda, EventBridge, and DynamoDB for fintech clients.",
      "Implementing IaC with Terraform for multi-service AWS environments with remote state and secure IAM provisioning.",
      "Designing 4-stage CI/CD pipelines on AWS CodePipeline with SonarCloud and Pylint integration.",
      "Optimizing DynamoDB performance with TTL and custom caching for high-frequency updates.",
      "Automating observability with CloudWatch Dashboards and SNS alerting for microservice health monitoring.",
    ],
  },
  {
    title: "Research Intern",
    company: "Tata Institute of Fundamental Research (TIFR)",
    location: "Mumbai, India",
    period: "Jun 2023 – Jul 2024",
    points: [
      "Developed ML-driven optimization algorithms for ECR ion source, enhancing system stability.",
      "Integrated Python-based ML models with LabVIEW for real-time hardware control.",
      "Engineered data preprocessing pipelines for large experimental datasets in plasma physics.",
      "Automated diagnostic workflows, reducing ion source fine-tuning time.",
    ],
  },
  {
    title: "Project Intern",
    company: "Tata Institute of Fundamental Research (TIFR)",
    location: "Mumbai, India",
    period: "Sep 2023 – Nov 2023",
    points: [
      "Built real-time SCADA-style monitoring UI for nitrogen liquefaction facility using LabVIEW and Siemens PLCs.",
      "Established OPC/DSC data exchange layer for seamless hardware-to-software communication.",
      "Developed automated alerting via SMTP and WhatsApp API for real-time incident notifications.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-2">
            <span className="opacity-60">02.</span> experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Where I've Worked
          </h3>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-lg p-6 bg-card card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {exp.title}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-secondary-foreground">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
