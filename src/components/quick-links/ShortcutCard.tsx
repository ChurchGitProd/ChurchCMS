import Link from 'next/link';

export interface ShortcutCardData {
  slug: string;
  title: string;
  subtitle: string;
  targetUrl: string;
  icon: string;
  description?: string | null;
}

interface ShortcutCardProps {
  item: ShortcutCardData;
}

export default function ShortcutCard({ item }: ShortcutCardProps) {
  return (
    <div className="group bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center flex flex-col justify-between relative hover:border-tertiary/60">
      <Link
        href={`/quick-links/${item.slug}`}
        className="block space-y-1.5 focus:outline-none flex-1"
      >
        <span className="text-3xl text-tertiary mx-auto mb-2 block transform group-hover:scale-110 transition-transform">
          {item.icon}
        </span>
        <p className="text-xs font-bold text-primary group-hover:text-tertiary transition-colors">
          {item.title}
        </p>
        <p className="text-[10px] text-muted-foreground">{item.subtitle}</p>
      </Link>

      <div className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between text-[10px]">
        <Link
          href={`/quick-links/${item.slug}`}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          Profile
        </Link>
        <Link
          href={item.targetUrl}
          className="text-primary hover:text-tertiary font-semibold flex items-center gap-0.5"
          title={`Direct jump to ${item.targetUrl}`}
        >
          <span>Open</span>
          <span>↗</span>
        </Link>
      </div>
    </div>
  );
}
