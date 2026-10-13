import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

interface FeaturedReferenceData {
  badge?: string | null;
  tag?: string | null;
  title?: string | null;
  description?: string | null;
  crossReferences?: string | null;
  linkText?: string | null;
}

interface FeaturedReferenceSpotlightProps {
  data?: FeaturedReferenceData | null;
}

export default function FeaturedReferenceSpotlight({ data }: FeaturedReferenceSpotlightProps) {
  const badge = data?.badge || 'FEATURED SCHOLARLY REFERENCE';
  const tag = data?.tag || 'Pentateuch Study';
  const title = data?.title || 'Genesis 15:1-6 — The Covenant of Faith';
  const description =
    data?.description ||
    '"And he believed the Lord, and he counted it to him as righteousness." This foundational text establishes the doctrine of justification by faith, serving as the central anchor for Paul\'s arguments in Romans and Galatians.';
  const crossReferences = data?.crossReferences || 'Cross-References: Romans 4, Galatians 3, Hebrews 11';
  const linkText = data?.linkText || 'Read Full Commentary';

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

      <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75 border-t border-primary-foreground/10">
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
          <span>{crossReferences}</span>
        </span>
        <Link
          href="/lessons"
          className="text-tertiary font-bold hover:underline flex items-center gap-1 group"
        >
          <span>{linkText}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
