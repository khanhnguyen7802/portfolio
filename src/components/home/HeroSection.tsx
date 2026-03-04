import AnimatedSection from "@/components/ui/AnimatedSection";
import Typewriter from "./Typewriter";
import { personalInfo } from "@/data/personal";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left column - Text */}
          <AnimatedSection className="md:col-span-7 text-center md:text-left">
            <h2 className="text-lg md:text-xl text-muted-foreground mb-2">
              Hi There!{" "}
              <span className="inline-block animate-bounce">👋</span>
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              I&apos;m{" "}
              <span className="text-accent">{personalInfo.name}</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium min-h-[2.5rem]">
              <Typewriter strings={personalInfo.titles} />
            </div>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto md:mx-0">
              Building scalable data solutions and transforming raw data into actionable insights.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/25"
                  aria-label={link.label}
                >
                  <HeroSocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Right column - Illustration */}
          <AnimatedSection className="md:col-span-5 flex justify-center" delay={0.2}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent/10 to-transparent" />
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full relative z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Data/Code illustration */}
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Monitor */}
                <rect x="40" y="30" width="120" height="85" rx="8" fill="url(#heroGrad)" opacity="0.15" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                <rect x="50" y="40" width="100" height="65" rx="4" fill="hsl(var(--accent))" opacity="0.08" />
                {/* Code lines */}
                <rect x="58" y="50" width="35" height="4" rx="2" fill="hsl(var(--accent))" opacity="0.6" />
                <rect x="58" y="60" width="55" height="4" rx="2" fill="hsl(var(--accent))" opacity="0.4" />
                <rect x="58" y="70" width="25" height="4" rx="2" fill="hsl(var(--accent))" opacity="0.5" />
                <rect x="58" y="80" width="45" height="4" rx="2" fill="hsl(var(--accent))" opacity="0.3" />
                <rect x="58" y="90" width="30" height="4" rx="2" fill="hsl(var(--accent))" opacity="0.6" />
                {/* Stand */}
                <rect x="85" y="115" width="30" height="8" rx="2" fill="hsl(var(--accent))" opacity="0.2" />
                <rect x="75" y="123" width="50" height="5" rx="2.5" fill="hsl(var(--accent))" opacity="0.15" />
                {/* Data nodes */}
                <circle cx="155" y="55" r="6" fill="hsl(var(--accent))" opacity="0.5" cy="55" />
                <circle cx="165" cy="80" r="4" fill="hsl(var(--accent))" opacity="0.3" />
                <circle cx="35" cy="65" r="5" fill="hsl(var(--accent))" opacity="0.4" />
                <circle cx="30" cy="90" r="3" fill="hsl(var(--accent))" opacity="0.3" />
                {/* Connection lines */}
                <line x1="150" y1="55" x2="165" y2="80" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.3" />
                <line x1="40" y1="65" x2="35" y2="90" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.3" />
                {/* Database icon */}
                <ellipse cx="100" cy="150" rx="25" ry="8" fill="hsl(var(--accent))" opacity="0.2" />
                <rect x="75" y="150" width="50" height="20" fill="hsl(var(--accent))" opacity="0.1" />
                <ellipse cx="100" cy="170" rx="25" ry="8" fill="hsl(var(--accent))" opacity="0.15" />
                <ellipse cx="100" cy="160" rx="25" ry="8" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.3" />
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function HeroSocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "github":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "email":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
}
