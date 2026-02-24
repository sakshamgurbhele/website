import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "KubeGreen",
    subtitle: "Federated Kubernetes Optimization (MSc Thesis)",
    description:
      "Custom scheduler for federated Kubernetes across three GCP regions to optimize multi-cluster workloads. Integrated Prometheus & Grafana for real-time monitoring of CPU utilization and carbon footprints.",
    highlight: "Reduced inter-region network latency by 22%",
    tags: ["Kubernetes", "KubeFed", "GCP", "Prometheus", "Grafana"],
  },
  {
    title: "FoodieBay",
    subtitle: "Cloud-Native CI/CD & Infrastructure Automation",
    description:
      "Fully automated 4-stage CI/CD pipeline using AWS CodePipeline and CodeBuild. Integrated DevSecOps with automated static analysis and SonarCloud vulnerability scanning.",
    highlight: "Zero manual deployment errors via automated provisioning",
    tags: ["AWS CodePipeline", "CodeBuild", "Elastic Beanstalk", "DevSecOps"],
  },
  {
    title: "Green Loyalty",
    subtitle: "Serverless Event-Driven Architecture",
    description:
      "Serverless ecosystem on AWS using Django and DynamoDB with a high-performance custom caching mechanism for real-time leaderboards. Published 'RealRateCalc' Python library on PyPi.",
    highlight: "Production-grade serverless with real-time processing",
    tags: ["AWS Lambda", "EventBridge", "DynamoDB", "Django", "PyPi"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-2">
            <span className="opacity-60">03.</span> projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Things I've Built
          </h3>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-lg p-6 bg-card card-hover group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-secondary-foreground mb-3 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm font-medium text-primary mb-4 font-mono">
                ↳ {project.highlight}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary text-primary border border-border"
                  >
                    {tag}
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

export default ProjectsSection;
