"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading, { AccentText } from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const INITIAL_SHOW = 3;

export default function ProjectsPage() {
  const [displayCount, setDisplayCount] = useState(INITIAL_SHOW);
  const displayedProjects = projects.slice(0, displayCount);

  const handleShowMore = () => {
    setDisplayCount(prev => Math.min(prev + 3, projects.length));
  };

  const handleShowLess = () => {
    setDisplayCount(INITIAL_SHOW);
  };

  return (
    <section className="py-16 md:py-20">
      <Container>
        <AnimatedSection>
          <SectionHeading>
            My Recent <AccentText>Works</AccentText>
          </SectionHeading>
          <p className="text-center text-muted-foreground -mt-6 mb-10 max-w-2xl mx-auto">
            Here are a few projects I have worked on recently.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {(displayCount < projects.length || displayCount > INITIAL_SHOW) && (
          <div className="flex justify-center mt-10">
            <button
              onClick={displayCount < projects.length ? handleShowMore : handleShowLess}
              className="px-6 py-2.5 rounded-full border-2 border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              {displayCount < projects.length ? "Show More" : "Show Less"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
