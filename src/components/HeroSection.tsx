import heroBg from "@/assets/hero-bg.jpg";
import { Github, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
          AI Developer & Python Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-gradient">mh5265549</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          I build intelligent AI agents, automation tools, and creative Python applications — from cold email generators to chatbot games.
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <a
            href="https://github.com/mh5265549-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </div>

        <a href="#projects" className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
