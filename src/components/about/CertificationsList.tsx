"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CertificationCard from "./CertificationCard";
import { certifications } from "@/data/certifications";

const INITIAL_SHOW = 3;

export default function CertificationsList() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll
    ? certifications
    : certifications.slice(0, INITIAL_SHOW);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((cert, i) => (
          <AnimatedSection key={cert.name} delay={i * 0.08}>
            <CertificationCard certification={cert} />
          </AnimatedSection>
        ))}
      </div>

      {certifications.length > INITIAL_SHOW && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-full border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
}
