import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading, { AccentText } from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BlogList from "@/components/blogs/BlogList";
import VideoList from "@/components/blogs/VideoList";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read my blog posts and watch my DE tutorial videos.",
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
            I write tutorial guides about tools in data engineering, cloud architecture, and lessons learned building data platforms.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <BlogList />
        </div>

        {/* Videos */}
        <AnimatedSection>
          <SectionHeading>
            Self-learned <AccentText>Videos</AccentText>
          </SectionHeading>
          <p className="text-center text-muted-foreground -mt-6 mb-10 max-w-2xl mx-auto">
            Tutorial videos I recorded to make learning Data Engineering easier.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6">
          <VideoList />
        </div>
      </Container>
    </section>
  );
}
