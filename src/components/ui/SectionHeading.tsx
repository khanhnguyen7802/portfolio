import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold text-center mb-10",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function AccentText({ children }: { children: React.ReactNode }) {
  return <span className="text-accent">{children}</span>;
}
