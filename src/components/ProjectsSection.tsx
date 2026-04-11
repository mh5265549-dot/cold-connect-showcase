import { ExternalLink, Github, Bot, Mail, Shield } from "lucide-react";

const projects = [
  {
    title: "Cold Email Generator",
    description:
      "AI-powered cold email generator built with CrewAI and Streamlit. Features multi-agent orchestration, tone selection, email templates, language support, and clipboard integration.",
    tech: ["Python", "CrewAI", "Streamlit", "Groq", "LiteLLM"],
    icon: Mail,
    github: "https://github.com/mh5265549-dot/cold-email",
  },
  {
    title: "Naruto Chat Bot Game",
    description:
      "An interactive chatbot game inspired by the Naruto universe. Built with Python, featuring conversational AI and game mechanics.",
    tech: ["Python", "AI", "Chatbot"],
    icon: Bot,
    github: "https://github.com/mh5265549-dot/naruto-chat-bot-game",
  },
  {
    title: "Sanitaizer",
    description:
      "A data sanitization utility tool built with Python for cleaning, validating, and processing data inputs securely.",
    tech: ["Python", "Data Processing"],
    icon: Shield,
    github: "https://github.com/mh5265549-dot/sanitaizer",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Portfolio</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-xl p-6 hover:glow-box transition-shadow duration-300 group"
            >
              <project.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                <Github className="w-4 h-4" />
                View Source
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
