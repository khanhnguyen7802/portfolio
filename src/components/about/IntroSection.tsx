import AnimatedSection from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/data/personal";


const highlights = [
  personalInfo.name, "University of Twente, Netherlands", "Technical Computer Science",
  "business insights", 
  "teaching assistant", "Operating System", 
  "FAIR principles", "data mesh", "CBI-EDOC 2025 Conference",
  "enterprise", "architecture", "business processes",
  "data engineer",
  "cloud computing",
  "cloud data platforms",
  "open", "connect"
];

function parseLinks(text: string): (string | React.ReactElement)[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const result: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }
    const isExternal = match[2].startsWith("http");
    result.push(
      <a
        key={`link-${match.index}`}
        href={match[2]}
        className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80 transition-colors"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result.length > 0 ? result : [text];
}

function highlightText(parts: (string | React.ReactElement)[]): (string | React.ReactElement)[] {
  let result = parts;

  highlights.forEach((phrase) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part];
      const segments = part.split(new RegExp(`(${phrase})`, "gi"));
      return segments.map((seg, i) =>
        seg.toLowerCase() === phrase.toLowerCase() ? (
          <span key={`${phrase}-${i}`} className="text-accent font-semibold">
            {seg}
          </span>
        ) : (
          seg
        )
      );
    });
  });

  return result;
}

function renderRichBio(bio: string) {
  // Split by <br /> tags or \n
  const paragraphs = bio.split(/<br\s*\/?>|\n/).map((p) => p.trim()).filter(Boolean);

  return paragraphs.map((paragraph, i) => (
    <span key={i}>
      {i > 0 && (
        <>
          <br />
          <br />
        </>
      )}
      {highlightText(parseLinks(paragraph))}
    </span>
  ));
}


export default function IntroSection() {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
        {/* Text */}
        <div className="md:col-span-8 text-center md:text-left">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {renderRichBio(personalInfo.completeBio)}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-foreground/20 text-sm text-muted-foreground hover:border-accent hover:text-accent transition-colors"
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
