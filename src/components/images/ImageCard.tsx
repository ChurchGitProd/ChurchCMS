import Link from 'next/link';
import { sanitizeImageUrl } from '@/lib/media';

export interface ImageCardData {
  slug: string;
  title: string;
  category: string;
  scripture: string;
  description: string;
  image: string;
  date?: string | null;
  citation?: string | null;
}

interface ImageCardProps {
  image: ImageCardData;
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
      <Link href={`/images/${image.slug}`} className="h-56 overflow-hidden relative block bg-muted">
        <img
          src={sanitizeImageUrl(image.image)}
          alt={image.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded shadow-sm">
          {image.category}
        </span>
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <Link href={`/images/${image.slug}`}>
            <h4 className="font-heading font-bold text-base text-primary group-hover:text-tertiary transition-colors">
              {image.title}
            </h4>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {image.description}
          </p>
        </div>

        <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
          <span className="font-semibold text-tertiary">{image.scripture}</span>
          <Link
            href={`/images/${image.slug}`}
            className="hover:text-primary hover:underline font-medium transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
