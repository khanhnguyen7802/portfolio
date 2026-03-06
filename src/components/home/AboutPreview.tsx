import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { personalInfo } from "@/data/personal";

const highlights = [
  "data engineer",
  "data pipelines",
  "cloud infrastructure",
  "cloud analytics platforms",
  "Python",
  "SQL",
  "Azure", "Google Cloud"
];

function highlightBio(text: string) {
  let result: (string | React.ReactElement)[] = [text];

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
  const lines = personalInfo.bio.split("\n");

  return (
    <section className="py-4 md:py-10">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative px-6 py-8 rounded-2xl bg-card border-2 border-border">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
              <div className="text-lg md:text-xl leading-relaxed text-muted-foreground text-left">
                {lines.map((line, i) => (
                  <span key={i}>
                    {highlightBio(line)}
                    {i < lines.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
