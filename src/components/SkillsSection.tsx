const skills = [
  { category: "Languages", items: ["Python", "JavaScript"] },
  { category: "AI / ML", items: ["CrewAI", "LangChain", "LLMs", "Groq", "LiteLLM"] },
  { category: "Frameworks", items: ["Streamlit", "React", "Flask"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "VS Code"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Technologies</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-secondary-foreground text-sm px-3 py-2 rounded-lg bg-card border border-border/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
