import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  icon: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 px-4 py-4 rounded-2xl",
        "border border-accent/30 bg-card",
        "shadow-sm shadow-accent/10",
        "transition-all duration-300",
        "hover:scale-105 hover:border-accent/60 hover:shadow-md hover:shadow-accent/20",
        "cursor-default"
      )}
    >
      {/* Icon placeholder - shows first letter if no SVG exists */}
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-lg">
        {name.charAt(0)}
      </div>
      <span className="text-xs font-medium text-center text-card-foreground">
        {name}
      </span>
    </div>
  );
}
