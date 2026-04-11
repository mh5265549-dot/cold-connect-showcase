import { ExternalLink, Github, Bot, Mail, Shield, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    title: "Cold Email Generator",
    description:
      "AI-powered cold email generator with multi-agent orchestration using CrewAI. Features tone selection, email templates, multi-language support, and clipboard integration.",
    tech: ["Python", "CrewAI", "Streamlit", "Groq", "LiteLLM"],
    icon: Mail,
    github: "https://github.com/mh5265549-dot/cold-email",
    featured: true,
  },
  {
    title: "Naruto Chat Bot Game",
    description:
      "Interactive chatbot game set in the Naruto universe. Features conversational AI with character personalities and dynamic game mechanics.",
    tech: ["Python", "AI", "Chatbot", "NLP"],
    icon: Bot,
    github: "https://github.com/mh5265549-dot/naruto-chat-bot-game",
    featured: false,
  },
  {
    title: "Sanitaizer",
    description:
      "Data sanitization utility for cleaning, validating, and processing data inputs securely. Built for reliability and performance.",
    tech: ["Python", "Data Processing", "Security"],
    icon: Shield,
    github: "https://github.com/mh5265549-dot/sanitaizer",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-14">
            A collection of AI-powered tools and creative applications I've built.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 150}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full glass rounded-xl p-6 hover-lift border-glow shine-effect group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
