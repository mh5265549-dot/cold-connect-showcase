import { Github, ArrowUpRight, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-mono text-primary text-xs tracking-widest uppercase">
              Available for Projects
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
            Interested in AI automation, multi-agent systems, or Python development?
            Let's collaborate and create something extraordinary together.
          </p>
          <a
            href="https://github.com/mh5265549-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-[0_0_50px_-10px_hsl(185_80%_50%_/_0.5)] transition-all duration-300 hover:scale-105 text-lg"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Visit My GitHub
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
