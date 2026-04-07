import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import AccomplishmentsSection from "@/components/AccomplishmentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 via-[hsl(180,60%,50%)]/10 to-transparent blur-[100px] dark:from-primary/10 dark:via-[hsl(180,60%,50%)]/5 animate-float-1" />
        <div className="absolute top-[60%] -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[hsl(260,50%,60%)]/10 via-primary/10 to-transparent blur-[120px] dark:from-[hsl(260,50%,60%)]/5 dark:via-primary/4 animate-float-2" />
        <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[hsl(142,60%,50%)]/5 blur-[100px] dark:bg-[hsl(142,60%,50%)]/3 animate-float-3" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <AccomplishmentsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
