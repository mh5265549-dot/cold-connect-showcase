import { Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Interested in AI automation, multi-agent systems, or Python development? I'd love to hear from you.
        </p>
        <a
          href="https://github.com/mh5265549-dot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-lg"
        >
          <Github className="w-5 h-5" />
          Visit My GitHub
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
