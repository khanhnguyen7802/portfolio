import { Video } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm w-full group"
    >
      <Card className="h-full flex flex-col">
        {/* Thumbnail with play overlay */}
        <div className="relative h-48 bg-gradient-to-br from-accent/10 to-muted flex items-center justify-center border-b border-border overflow-hidden">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent/50"
            >
              <rect width="20" height="15" x="2" y="3" rx="2" />
              <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
            </svg>
            <span className="text-xs">Video Preview</span>
          </div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors line-clamp-2 flex-1">
              {video.title}
            </h3>
            <Badge variant="default" className="shrink-0">
              {video.category}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
            {video.description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
            Watch Video
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </Card>
    </a>
  );
}
