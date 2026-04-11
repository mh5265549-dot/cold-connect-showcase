import { ScrollReveal } from "./ScrollReveal";
import { Code, Brain, Wrench, Layers } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code,
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "AI / ML",
    icon: Brain,
    items: ["CrewAI", "LangChain", "LLMs", "Groq", "LiteLLM"],
  },
  {
    category: "Frameworks",
    icon: Layers,
    items: ["Streamlit", "React", "Flask", "FastAPI"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "VS Code", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-28 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-14">
            The tools and technologies I use to bring ideas to life.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 100}>
              <div className="glass rounded-xl p-6 h-full border-glow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <group.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-secondary-foreground text-sm px-3 py-2.5 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
