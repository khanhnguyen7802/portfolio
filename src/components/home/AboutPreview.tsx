import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { personalInfo } from "@/data/personal";

const highlights = [
  "Data Engineer",
  "scalable data pipelines",
  "cloud infrastructure",
  "analytics platforms",
  "data-driven decision making",
];

function highlightBio(bio: string) {
  let result: (string | React.ReactElement)[] = [bio];

  highlights.forEach((phrase) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const segments = part.split(new RegExp(`(${phrase})`, "gi"));
      return segments.map((seg, i) =>
        seg.toLowerCase() === phrase.toLowerCase() ? (
          <span key={`${phrase}-${i}`} className="text-accent font-semibold">
            {seg}
          </span>
        ) : (
          seg
        )
      );
    });
  });

  return result;
}

export default function AboutPreview() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative px-6 py-8 rounded-2xl bg-card border border-border/60">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                {highlightBio(personalInfo.bio)}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
