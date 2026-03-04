import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground overflow-hidden",
        hover &&
          "transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/10",
        className
      )}
    >
      {children}
    </div>
  );
}
