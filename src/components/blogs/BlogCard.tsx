import { BlogPost } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm w-full group"
    >
      <Card className="h-full flex flex-col">
        {/* Thumbnail */}
        {/* <div className="h-48 bg-gradient-to-br from-accent/10 to-muted flex items-center justify-center border-b border-border overflow-hidden">
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
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8" />
              <path d="M15 18h-5" />
              <path d="M10 6h8v4h-8V6Z" />
            </svg>
            <span className="text-xs">Blog Preview</span>
          </div>
        </div> */}

          {/* Thumbnail */}
          <div className="h-40 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center border-b border-border overflow-hidden relative">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        


        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors line-clamp-2 flex-1">
              {blog.title}
            </h3>
            <Badge variant="default" className="shrink-0">
              {blog.type}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
            {blog.description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
            Read Blog
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
