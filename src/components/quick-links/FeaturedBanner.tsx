import Link from 'next/link';

interface FeaturedBannerProps {
  banner?: {
    badge?: string | null;
    tag?: string | null;
    title?: string | null;
    description?: string | null;
    button1Text?: string | null;
    button1Link?: string | null;
    button2Text?: string | null;
    button2Link?: string | null;
    button3Text?: string | null;
    button3Link?: string | null;
  } | null;
}

export default function FeaturedBanner({ banner }: FeaturedBannerProps) {
  const badge = banner?.badge || 'FEATURED ACCESS';
  const tag = banner?.tag || 'Most Popular';
  const title = banner?.title || 'Start Your Study Journey';
  const description =
    banner?.description ||
    'Begin with our most accessed resources: daily devotionals, featured lessons, and live seminar recordings. These curated starting points are designed for both new students and seasoned scholars.';
  const b1Text = banner?.button1Text || 'Daily Devotional';
  const b1Link = banner?.button1Link || '/newsletter';
  const b2Text = banner?.button2Text || 'Featured Lessons';
  const b2Link = banner?.button2Link || '/lessons';
  const b3Text = banner?.button3Text || 'Live Seminars';
  const b3Link = banner?.button3Link || '/zoom-info';

  return (
    <div className="bg-primary text-primary-foreground p-8 rounded-xl space-y-6 border border-primary/20 shadow-md">
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">
          {badge}
        </span>
        <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">
          {tag}
        </span>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-heading font-bold">{title}</h2>
        <p className="text-sm text-primary-foreground/90 leading-relaxed font-sans">
          {description}
        </p>
      </div>
      <div className="pt-2 flex flex-wrap gap-4">
        <Link
          href={b1Link}
          className="px-6 py-2.5 bg-tertiary text-primary font-bold text-xs rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider"
        >
          {b1Text}
        </Link>
        <Link
          href={b2Link}
          className="px-6 py-2.5 bg-background text-primary font-bold text-xs rounded hover:bg-background/90 transition-all uppercase tracking-wider"
        >
          {b2Text}
        </Link>
        <Link
          href={b3Link}
          className="px-6 py-2.5 bg-background text-primary font-bold text-xs rounded hover:bg-background/90 transition-all uppercase tracking-wider"
        >
          {b3Text}
        </Link>
      </div>
    </div>
  );
}
