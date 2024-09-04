import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      {/* Inicio */}
      <HeroSection />

      {/* Skills */}
      <SkillsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
};

export default Home;
