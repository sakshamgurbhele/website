import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.Sc. Cloud Computing",
    school: "National College of Ireland",
    period: "Sep 2024 – Oct 2025",
    grade: "Grade: 2.1",
    courses: "Cloud Architectures, Cloud DevOpsSec, Fog & Edge Computing, Cloud ML & Data Governance",
  },
  {
    degree: "B.E. Information Technology",
    school: "University of Mumbai",
    period: "Jul 2020 – Jul 2024",
    grade: "CGPA: 9.2/10",
    courses: "Advanced DSA, Software Engineering, DBMS, Operating Systems, AI & Data Science, DevOps",
  },
  {
    degree: "Honor Degree — AI & Machine Learning",
    school: "University of Mumbai",
    period: "Jul 2022 – Jul 2024",
    grade: "CGPA: 9.1/10",
    courses: "Mathematics for AI/ML, Game Theory using AI/ML, AI/ML in Healthcare, Web & Social Media Analytics",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-2">
            <span className="opacity-60">05.</span> education
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Academic Background
          </h3>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-lg p-6 bg-card card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <span className="font-mono text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-primary text-sm font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.grade}</p>
                  <p className="text-sm text-secondary-foreground mt-2 leading-relaxed">
                    <span className="text-muted-foreground">Relevant:</span> {edu.courses}
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

export default EducationSection;
