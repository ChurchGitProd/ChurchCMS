import Link from 'next/link';

interface RelatedScriptureProps {
  relatedScripture?: {
    title?: string | null;
    description?: string | null;
    scripture1Title?: string | null;
    scripture1Subtitle?: string | null;
    scripture2Title?: string | null;
    scripture2Subtitle?: string | null;
    scripture3Title?: string | null;
    scripture3Subtitle?: string | null;
  } | null;
}

export default function RelatedScriptureSection({
  relatedScripture,
}: RelatedScriptureProps) {
  const title = relatedScripture?.title || 'Related Scripture Study';
  const description =
    relatedScripture?.description ||
    'Prepare for upcoming sessions by studying these foundational passages. Each lesson provides historical context, theological insights, and practical application.';

  const s1Title = relatedScripture?.scripture1Title || 'Genesis 1-2';
  const s1Sub = relatedScripture?.scripture1Subtitle || 'Creation Narrative';

  const s2Title = relatedScripture?.scripture2Title || 'John 1:1-18';
  const s2Sub = relatedScripture?.scripture2Subtitle || 'The Word Made Flesh';

  const s3Title = relatedScripture?.scripture3Title || 'Acts 2';
  const s3Sub = relatedScripture?.scripture3Subtitle || 'Pentecost';

  return (
    <div className="bg-secondary text-secondary-foreground p-8 rounded-xl space-y-6 border border-secondary/20 shadow-md">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-tertiary">
          {title}
        </h3>
        <p className="text-sm text-secondary-foreground/90 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <Link
            href="/lessons"
            className="bg-background/10 hover:bg-background/20 transition-all p-4 rounded-lg text-center group"
          >
            <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-tertiary transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <p className="text-xs font-bold">{s1Title}</p>
            <p className="text-[10px] text-secondary-foreground/70">{s1Sub}</p>
          </Link>

          <Link
            href="/lessons"
            className="bg-background/10 hover:bg-background/20 transition-all p-4 rounded-lg text-center group"
          >
            <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-tertiary transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <p className="text-xs font-bold">{s2Title}</p>
            <p className="text-[10px] text-secondary-foreground/70">{s2Sub}</p>
          </Link>

          <Link
            href="/lessons"
            className="bg-background/10 hover:bg-background/20 transition-all p-4 rounded-lg text-center group"
          >
            <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-tertiary transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <p className="text-xs font-bold">{s3Title}</p>
            <p className="text-[10px] text-secondary-foreground/70">{s3Sub}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
