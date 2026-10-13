interface ScriptureQuoteData {
  quote?: string | null;
  reference?: string | null;
}

interface ScriptureQuoteBlockProps {
  data?: ScriptureQuoteData | null;
}

export default function ScriptureQuoteBlock({ data }: ScriptureQuoteBlockProps) {
  const quote = data?.quote || 'Your word is a lamp to my feet and a light to my path.';
  const reference = data?.reference || 'Psalm 119:105 (ESV)';

  return (
    <div className="bg-card border border-border p-8 rounded-xl text-center space-y-4">
      <span className="text-4xl text-tertiary mx-auto block leading-none font-serif select-none">
        “
      </span>
      <blockquote className="text-xl font-heading font-bold text-primary leading-relaxed max-w-3xl mx-auto">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite className="text-sm text-muted-foreground not-italic block">
        — {reference}
      </cite>
    </div>
  );
}
