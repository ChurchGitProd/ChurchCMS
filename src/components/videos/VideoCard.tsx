import Link from 'next/link';
import { Play } from 'lucide-react';
import { sanitizeImageUrl } from '@/lib/media';

export interface VideoCardData {
  slug: string;
  title: string;
  series: string;
  speaker: string;
  scripture: string;
  duration: string;
  description: string;
  thumbnail?: string | null;
  recordedDate?: string | null;
  videoUrl?: string | null;
}

interface VideoCardProps {
  video: VideoCardData;
}

export default function VideoCard({ video }: VideoCardProps) {
  const fallbackThumbnail =
    'https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png';

  return (
    <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
      <Link href={`/videos/${video.slug}`} className="block relative h-48 overflow-hidden bg-primary">
        <img
          src={sanitizeImageUrl(video.thumbnail || fallbackThumbnail)}
          alt={video.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-12 h-12 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 ml-0.5 fill-current" />
          </span>
        </div>
        <span className="absolute bottom-3 right-3 bg-primary/75 text-primary-foreground text-[10px] px-2 py-1 rounded font-semibold tracking-wide">
          {video.duration}
        </span>
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest block">
            {video.series}
          </span>
          <Link href={`/videos/${video.slug}`}>
            <h4 className="font-heading font-bold text-base text-primary group-hover:text-tertiary transition-colors line-clamp-1">
              {video.title}
            </h4>
          </Link>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>

        <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="font-semibold text-primary">
            {video.speaker} <span className="text-border">|</span> {video.scripture}
          </span>
          <Link
            href={`/videos/${video.slug}`}
            className="text-[10px] font-bold text-tertiary hover:underline uppercase tracking-wider"
          >
            Lecture Notes →
          </Link>
        </div>
      </div>
    </article>
  );
}
