import { StarBackground } from "@/Components/StarBackground";
import { ThemeToggle } from "@/Components/ThemeToggle";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";

import { AboutSection } from "../Components/AboutSection";
import { SkillSection } from "../Components/SkillSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { FooterSection } from "../Components/FooterSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
      <ThemeToggle />
      <StarBackground />
      <Navbar/>
      {/*Main content*/}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillSection/>
        <ProjectsSection/>
        <ContactSection/>
        <FooterSection/>
      </main>
      {/*footer*/}
    </div>
  );
};
