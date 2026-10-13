interface FeaturedArchiveData {
  badge?: string | null;
  catalogRef?: string | null;
  title: string;
  description: string;
  category?: string | null;
  linkText?: string | null;
}

interface FeaturedArchiveBlockProps {
  archive?: FeaturedArchiveData | null;
}

export default function FeaturedArchiveBlock({ archive }: FeaturedArchiveBlockProps) {
  const badge = archive?.badge || 'Featured Archival Document';
  const catalogRef = archive?.catalogRef || 'MS-8840';
  const title = archive?.title || 'The Codex Sinaiticus Restored Transcripts';
  const description =
    archive?.description ||
    'A comprehensive, digitalized, and annotated transcription of the Epistle to the Galatians as found in the Codex Sinaiticus, detailing scribal variant corrections.';
  const category = archive?.category || 'Manuscripts / Greek';
  const linkText = archive?.linkText || 'Access Document';

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
      <div className="flex justify-between items-center text-xs">
        <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">
          {badge}
        </span>
        <span className="text-muted-foreground font-mono">
          Catalog Ref: {catalogRef}
        </span>
      </div>
      <h2 className="text-xl font-heading font-bold text-primary">{title}</h2>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground border-t border-border/50">
        <span className="flex items-center gap-1.5">
          <span className="text-tertiary">📁</span> Category: {category}
        </span>
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center text-xs font-semibold text-muted-foreground/80 bg-muted px-3 py-1.5 rounded cursor-not-allowed border border-border"
            title="Digital document access is not currently available."
          >
            {linkText} (Unavailable)
          </span>
        </div>
      </div>
    </div>
  );
}
