import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading, { AccentText } from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IntroSection from "@/components/about/IntroSection";
import TechnologiesSection from "@/components/about/TechnologiesSection";
import CertificationsList from "@/components/about/CertificationsList";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me, my background, and my certifications.",
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading>
            Know Who <AccentText>I Am</AccentText>
          </SectionHeading>
        </AnimatedSection>

        <IntroSection />

        <AnimatedSection>
          <SectionHeading>
            Technologies <AccentText>I Use</AccentText>
          </SectionHeading>
        </AnimatedSection>

        <TechnologiesSection />

        <div className="mt-16">
          <AnimatedSection>
            <SectionHeading>
              My <AccentText>Certifications</AccentText>
            </SectionHeading>
          </AnimatedSection>

          <CertificationsList />
        </div>
      </Container>
    </section>
  );
}
