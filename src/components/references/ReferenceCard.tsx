import Link from 'next/link';
import { User, ArrowRight } from 'lucide-react';

export interface ReferenceCardData {
  slug: string;
  title: string;
  scripture: string;
  category: string;
  description: string;
  author: string;
  testament?: string | null;
  genre?: string | null;
  tags?: (string | null)[] | null;
}

interface ReferenceCardProps {
  reference: ReferenceCardData;
}

export default function ReferenceCard({ reference }: ReferenceCardProps) {
  return (
    <article className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3 group">
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider block">
            {reference.scripture}
          </span>
          <Link href={`/references/${reference.slug}`}>
            <h3 className="text-lg font-heading font-bold text-primary group-hover:text-tertiary transition-colors">
              {reference.title}
            </h3>
          </Link>
        </div>
        <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary whitespace-nowrap font-medium">
          {reference.category}
        </span>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        {reference.description}
      </p>

      <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
        <span className="flex items-center gap-1.5 font-medium">
          <User className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
          <span>{reference.author.startsWith('By ') ? reference.author : `By ${reference.author}`}</span>
        </span>

        <div className="flex items-center gap-2">
          {reference.tags && reference.tags.filter(Boolean).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-muted rounded text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          <Link
            href={`/references/${reference.slug}`}
            className="text-[11px] font-bold text-primary hover:text-tertiary transition-colors flex items-center gap-0.5 ml-1"
          >
            <span>Read</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}
