import Link from 'next/link';
import { sanitizeImageUrl } from '@/lib/media';

export interface ResourceItemData {
  slug: string;
  title: string;
  category: string;
  pricingType: string;
  rating: string;
  description: string;
  thumbnail?: string | null;
  externalUrl?: string | null;
  actionLabel?: string | null;
}

interface ResourceCardProps {
  item: ResourceItemData;
}

export default function ResourceCard({ item }: ResourceCardProps) {
  const isPaid = item.pricingType?.toLowerCase() === 'paid';

  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden flex-shrink-0">
            {item.thumbnail ? (
              <img
                src={sanitizeImageUrl(item.thumbnail)}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-primary text-sm font-bold">
                📖
              </div>
            )}
          </div>
          <span
            className={`px-2 py-0.5 rounded text-[10px] font-medium ${
              isPaid
                ? 'bg-amber-100 text-amber-900 border border-amber-200'
                : 'bg-muted text-primary'
            }`}
          >
            {item.pricingType || 'Free'}
          </span>
        </div>
        <div>
          <h3 className="text-sm font-heading font-bold text-primary">
            <Link
              href={`/resources/${item.slug}`}
              className="hover:text-tertiary transition-colors"
            >
              {item.title}
            </Link>
          </h3>
          <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
      <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1 font-medium">
          <span className="text-tertiary text-[10px]">⭐</span> {item.rating}
        </span>
        <Link
          href={`/resources/${item.slug}`}
          className="text-primary hover:text-tertiary transition-colors font-medium flex items-center gap-0.5"
        >
          <span>{item.actionLabel || 'Visit'}</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
