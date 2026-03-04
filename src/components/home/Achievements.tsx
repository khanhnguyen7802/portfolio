import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import SectionHeading, { AccentText } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";

const iconMap: Record<string, string> = {
  rocket: "🚀",
  certificate: "🏆",
  briefcase: "💼",
  code: "⚡",
};

export default function Achievements() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <Container>
        <AnimatedSection>
          <SectionHeading>
            Key <AccentText>Achievements</AccentText>
          </SectionHeading>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                <span className="text-4xl mb-3">
                  {iconMap[item.icon] || "📊"}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {item.value}
                </span>
                <span className="text-sm font-semibold text-foreground mb-1">
                  {item.label}
                </span>
                {item.description && (
                  <span className="text-xs text-muted-foreground">
                    {item.description}
                  </span>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
