import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-muted text-muted-foreground": variant === "default",
          "bg-accent text-accent-foreground": variant === "accent",
          "border-2 border-accent/60 text-accent": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
