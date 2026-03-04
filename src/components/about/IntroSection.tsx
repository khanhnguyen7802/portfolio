import AnimatedSection from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/data/personal";

export default function IntroSection() {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
        {/* Text */}
        <div className="md:col-span-8 text-center md:text-left">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {personalInfo.bio}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-accent hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Profile image placeholder */}
        <div className="md:col-span-4 flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/20 flex items-center justify-center">
            <span className="text-6xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
