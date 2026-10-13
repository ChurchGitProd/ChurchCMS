interface QuoteWidgetProps {
  quoteWidget?: {
    quote?: string | null;
    author?: string | null;
  } | null;
}

export default function QuoteWidget({ quoteWidget }: QuoteWidgetProps) {
  const quote =
    quoteWidget?.quote ||
    'The scripture is a deep water, where the lamb may wade, and the elephant may swim.';
  const author = quoteWidget?.author || 'Gregory the Great';

  return (
    <div className="bg-secondary text-secondary-foreground p-6 rounded-xl space-y-4 shadow-sm">
      <span className="text-2xl text-tertiary block">🔖</span>
      <p className="text-xs italic leading-relaxed font-sans">
        &ldquo;{quote}&rdquo;
      </p>
      <span className="block text-[10px] font-bold text-tertiary uppercase tracking-widest">
        — {author}
      </span>
    </div>
  );
}
