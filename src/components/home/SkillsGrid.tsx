import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import SectionHeading, { AccentText } from "@/components/ui/SectionHeading";
import SkillBadge from "./SkillBadge";
import { skills } from "@/data/skills";

export default function SkillsGrid() {
  // Group skills by category
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="py-16 md:py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading>
            Professional <AccentText>Skillset</AccentText>
          </SectionHeading>
        </AnimatedSection>

        {categories.map((category, catIndex) => (
          <AnimatedSection key={category} delay={catIndex * 0.1}>
            <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 mb-10">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
            </div>
          </AnimatedSection>
        ))}
      </Container>
    </section>
  );
}
