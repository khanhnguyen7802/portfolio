import AnimatedSection from "@/components/ui/AnimatedSection";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function TechnologiesSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {categories.map((category, i) => (
        <AnimatedSection key={category} delay={i * 0.08}>
          <div className="p-5 rounded-xl border border-border bg-card h-full">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <div
                    key={skill.name}
                    title={skill.name}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-lg",
                      "bg-muted/50 border border-border/50",
                      "text-sm text-muted-foreground",
                      "hover:border-accent/40 hover:text-foreground transition-colors"
                    )}
                  >
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded bg-accent/10 text-accent text-xs font-bold">
                      {skill.name.charAt(0)}
                    </div>
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
