import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "KubeGreen",
    subtitle: "Federated Kubernetes Optimization (MSc Thesis)",
    description:
      "Custom scheduler for federated Kubernetes across three GCP regions to optimize multi-cluster workloads. Integrated Prometheus & Grafana for real-time monitoring of CPU utilization and carbon footprints.",
    highlight: "Reduced inter-region network latency by 22%",
    tags: ["Kubernetes", "KubeFed", "GCP", "Prometheus", "Grafana"],
    color: "142 70% 45%",
  },
  {
    title: "FoodieBay",
    subtitle: "Cloud-Native CI/CD & Infrastructure Automation",
    description:
      "Fully automated 4-stage CI/CD pipeline using AWS CodePipeline and CodeBuild. Integrated DevSecOps with automated static analysis and SonarCloud vulnerability scanning.",
    highlight: "Zero manual deployment errors via automated provisioning",
    tags: ["AWS CodePipeline", "CodeBuild", "Elastic Beanstalk", "DevSecOps"],
    color: "200 70% 50%",
  },
  {
    title: "Green Loyalty",
    subtitle: "Serverless Event-Driven Architecture",
    description:
      "Serverless ecosystem on AWS using Django and DynamoDB with a high-performance custom caching mechanism for real-time leaderboards. Published 'RealRateCalc' Python library on PyPi.",
    highlight: "Production-grade serverless with real-time processing",
    tags: ["AWS Lambda", "EventBridge", "DynamoDB", "Django", "PyPi"],
    color: "280 60% 55%",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 section-divider">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-3">
            <span className="opacity-60">03.</span> projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
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
              className="group relative border border-border rounded-xl p-6 md:p-8 bg-card card-hover overflow-hidden"
            >
              {/* Subtle accent gradient */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none"
                style={{ background: `hsl(${project.color})` }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
                  </div>
                  <Github className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary transition-colors shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-lg bg-primary/5 border border-primary/10 w-fit">
                  <span className="text-primary text-xs">⚡</span>
                  <p className="text-sm font-medium text-primary font-mono">
                    {project.highlight}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
