import { Certification } from "@/types";
import Card from "@/components/ui/Card";
import Image from "next/image";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <a
      href={certification.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="h-full">
        {/* Thumbnail placeholder */}
        {/* <div className="h-40 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border-b border-border">
          <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center text-accent">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
        </div> */}

          <div className="h-40 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border-b border-border overflow-hidden relative">
            <Image
              src={certification.thumbnail}
              alt={certification.name}
              fill
              className="object-cover"
            />
          </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-sm text-card-foreground group-hover:text-accent transition-colors line-clamp-2 mb-1">
            {certification.name}
          </h3>
          <p className="text-xs text-muted-foreground mb-1">
            {certification.organization}
          </p>
          <p className="text-xs text-muted-foreground/60">
            {certification.date}
          </p>
        </div>
      </Card>
    </a>
  );
}
