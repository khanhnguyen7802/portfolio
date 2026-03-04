import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading, { AccentText } from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BlogCard from "@/components/blogs/BlogCard";
import VideoCard from "@/components/blogs/VideoCard";
import { blogs } from "@/data/blogs";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read my blog posts and watch my conference talks and workshops.",
};

export default function BlogsPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        {/* Blog posts */}
        <AnimatedSection>
          <SectionHeading>
            My <AccentText>Blogs</AccentText>
          </SectionHeading>
          <p className="text-center text-muted-foreground -mt-6 mb-10 max-w-2xl mx-auto">
            I write about data engineering, cloud architecture, and lessons learned building data platforms.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {blogs.map((blog, i) => (
            <AnimatedSection key={blog.title} delay={i * 0.08}>
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>

        {/* Videos */}
        <AnimatedSection>
          <SectionHeading>
            Talks &amp; <AccentText>Videos</AccentText>
          </SectionHeading>
          <p className="text-center text-muted-foreground -mt-6 mb-10 max-w-2xl mx-auto">
            Conference talks, workshops, and video content I have presented.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6">
          {videos.map((video, i) => (
            <AnimatedSection key={video.title} delay={i * 0.08}>
              <VideoCard video={video} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
