"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import VideoCard from "./VideoCard";
import { videos } from "@/data/videos";

const INITIAL_SHOW = 3;

export default function VideoList() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? videos : videos.slice(0, INITIAL_SHOW);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {displayed.map((video, i) => (
          <AnimatedSection key={video.title} delay={i * 0.08}>
            <VideoCard video={video} />
          </AnimatedSection>
        ))}
      </div>

      {videos.length > INITIAL_SHOW && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-full border-2 border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
}
