import heroBg from "@/assets/hero-bg.jpg";
import { Github, Mail, ArrowDown, Sparkles } from "lucide-react";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-mono text-primary text-xs tracking-widest uppercase">
            Open to Collaborations
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          Hi, I'm{" "}
          <span className="text-gradient">mh5265549</span>
        </h1>

        <div className="text-2xl md:text-3xl font-semibold mb-6 h-10 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <TypewriterText />
        </div>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          Crafting intelligent AI agents, automation pipelines, and creative Python applications that push the boundaries of what's possible.
        </p>

        <div className="flex gap-4 justify-center mb-20 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
          <a
            href="https://github.com/mh5265549-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_-5px_hsl(185_80%_50%_/_0.5)] transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View GitHub
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-primary/30 text-primary font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            Get in Touch
          </a>
        </div>

        <a href="#projects" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
