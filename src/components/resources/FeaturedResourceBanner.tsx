interface FeaturedResourceData {
  badge?: string | null;
  tag?: string | null;
  title: string;
  description: string;
  rating?: string | null;
  linkText?: string | null;
  linkUrl?: string | null;
}

interface FeaturedResourceBannerProps {
  resource?: FeaturedResourceData | null;
}

export default function FeaturedResourceBanner({
  resource,
}: FeaturedResourceBannerProps) {
  const badge = resource?.badge || 'FEATURED RESOURCE';
  const tag = resource?.tag || 'Essential Tool';
  const title = resource?.title || 'Logos Bible Software';
  const description =
    resource?.description ||
    'The premier Bible study platform with original language tools, extensive commentaries, and a vast theological library. Essential for serious biblical scholarship and exegesis.';
  const rating = resource?.rating || '4.8/5';
  const linkText = resource?.linkText || 'Visit Website';
  const linkUrl =
    resource?.linkUrl && resource.linkUrl !== '#'
      ? resource.linkUrl
      : 'https://www.logos.com';

  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-xl space-y-4 border border-primary/20 shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">
          {badge}
        </span>
        <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">
          {tag}
        </span>
      </div>
      <h2 className="text-2xl font-heading font-bold">{title}</h2>
      <p className="text-xs text-primary-foreground/90 leading-relaxed font-sans">
        {description}
      </p>
      <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75">
        <span className="flex items-center gap-1 font-medium">
          <span className="text-tertiary">⭐</span> Rating: {rating}
        </span>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary font-bold hover:underline flex items-center gap-1 transition-colors"
        >
          <span>{linkText}</span>
          <span className="text-sm">→</span>
        </a>
      </div>
    </div>
  );
}
