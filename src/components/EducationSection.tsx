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
    degree: "Honor Degree — AI & ML",
    school: "University of Mumbai",
    period: "Jul 2022 – Jul 2024",
    grade: "CGPA: 9.1/10",
    courses: "Mathematics for AI/ML, Game Theory using AI/ML, AI/ML in Healthcare, Web & Social Media Analytics",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 section-divider">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-primary text-sm tracking-wider mb-3">
            <span className="opacity-60">05.</span> education
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Academic Background
          </h3>
        </motion.div>

        <div className="grid gap-5">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border rounded-xl p-6 bg-card card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">{edu.period}</span>
                  </div>
                  <p className="text-primary text-sm font-medium">{edu.school}</p>
                  <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="text-xs font-mono text-primary font-medium">{edu.grade}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {edu.courses}
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
