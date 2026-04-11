import { ScrollReveal } from "./ScrollReveal";
import { Terminal, Users, Rocket } from "lucide-react";

const stats = [
  { icon: Rocket, value: "3+", label: "Projects Built" },
  { icon: Terminal, value: "100%", label: "Python" },
  { icon: Users, value: "AI", label: "Focused" },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="glass rounded-2xl p-8 md:p-12 border-glow">
            <div className="grid grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-black text-gradient">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;
