import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "DevOps & Cloud Engineer",
    company: "Freelance",
    location: "Dublin / Remote",
    period: "Jan 2025 – Present",
    current: true,
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
    company: "TIFR",
    location: "Mumbai, India",
    period: "Jun 2023 – Jul 2024",
    current: false,
    points: [
      "Developed ML-driven optimization algorithms for ECR ion source, enhancing system stability.",
      "Integrated Python-based ML models with LabVIEW for real-time hardware control.",
      "Engineered data preprocessing pipelines for large experimental datasets in plasma physics.",
      "Automated diagnostic workflows, reducing ion source fine-tuning time.",
    ],
  },
  {
    title: "Project Intern",
    company: "TIFR",
    location: "Mumbai, India",
    period: "Sep 2023 – Nov 2023",
    current: false,
    points: [
      "Built real-time SCADA-style monitoring UI for nitrogen liquefaction facility using LabVIEW and Siemens PLCs.",
      "Established OPC/DSC data exchange layer for seamless hardware-to-software communication.",
      "Developed automated alerting via SMTP and WhatsApp API for real-time incident notifications.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 section-divider">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-3">
            <span className="opacity-60">02.</span> experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Where I've Worked
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-6 hidden md:flex items-center justify-center">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 ${exp.current ? 'bg-primary border-primary shadow-lg shadow-primary/30' : 'bg-card border-border'}`} />
                </div>

                <div className="border border-border rounded-xl p-6 bg-card card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0 md:hidden">
                        <Briefcase className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-medium text-sm">
                          {exp.company}
                          <span className="text-muted-foreground font-normal"> · {exp.location}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      {exp.current && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                          CURRENT
                        </span>
                      )}
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-0.5 shrink-0 text-xs">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
