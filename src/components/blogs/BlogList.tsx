"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BlogCard from "./BlogCard";
import { blogs } from "@/data/blogs";

const INITIAL_SHOW = 3;

export default function BlogList() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? blogs : blogs.slice(0, INITIAL_SHOW);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {displayed.map((blog, i) => (
          <AnimatedSection key={blog.title} delay={i * 0.08}>
            <BlogCard blog={blog} />
          </AnimatedSection>
        ))}
      </div>

      {blogs.length > INITIAL_SHOW && (
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
