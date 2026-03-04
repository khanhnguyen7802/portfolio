"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading, { AccentText } from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

const INITIAL_SHOW = 6;

export default function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_SHOW);

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

        {projects.length > INITIAL_SHOW && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-full border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
