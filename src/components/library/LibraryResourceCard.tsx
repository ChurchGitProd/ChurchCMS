import React from 'react';
import Link from 'next/link';

export interface LibraryResourceData {
  slug: string;
  title: string;
  category: string;
  era: string;
  badge: string;
  description: string;
  author?: string | null;
  primaryDetail?: string | null;
  detailIcon?: string | null;
  tags?: (string | null)[] | null;
}

interface LibraryResourceCardProps {
  resource: LibraryResourceData;
}

function getDetailIcon(iconType?: string | null): string {
  switch (iconType) {
    case 'calendar':
      return '📅';
    case 'languages':
      return '🌐';
    case 'user':
      return '👤';
    case 'scroll':
      return '📜';
    case 'graduation-cap':
      return '🎓';
    default:
      return '📄';
  }
}

export default function LibraryResourceCard({ resource }: LibraryResourceCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3 group">
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider block">
            {resource.category}
          </span>
          <h3 className="text-lg font-heading font-bold text-primary mt-0.5">
            <Link
              href={`/library/${resource.slug}`}
              className="hover:text-tertiary transition-colors"
            >
              {resource.title}
            </Link>
          </h3>
        </div>
        <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary font-medium flex-shrink-0">
          {resource.badge}
        </span>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        {resource.description}
      </p>

      <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
        {resource.primaryDetail && (
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="text-tertiary">{getDetailIcon(resource.detailIcon)}</span>
            <span>{resource.primaryDetail}</span>
          </span>
        )}

        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {resource.tags.map((tag, idx) => tag && (
              <span
                key={idx}
                className="px-2 py-0.5 bg-muted rounded text-[10px] text-foreground/80 font-normal"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
