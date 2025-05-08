import React from "react";
import Hero from "./home/Hero";
import AboutSection from "./home/AboutSection";
import SkillsSection from "./home/SkillsSection";
import ProjectsSection from "./home/ProjectsSection";
import ContactSection from "./home/ContactSection";

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
