import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import FloatingParticles from "@/components/FloatingParticles";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <footer className="relative z-10 py-10 text-center border-t border-border">
        <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
          © 2026 mh5265549 — Built with <Heart className="w-3.5 h-3.5 text-primary" /> and AI
        </p>
      </footer>
    </div>
  );
};

export default Index;
