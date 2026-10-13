import Link from 'next/link';

export interface DailyLetterItemData {
  slug: string;
  title: string;
  date: string;
  scripture: string;
  author: string;
  description: string;
}

interface DailyLetterCardProps {
  letter: DailyLetterItemData;
}

export default function DailyLetterCard({ letter }: DailyLetterCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">
            {letter.date}
          </span>
          <h4 className="text-lg font-heading font-bold text-primary mt-0.5">
            <Link
              href={`/newsletter/${letter.slug}`}
              className="hover:text-tertiary transition-colors"
            >
              {letter.title}
            </Link>
          </h4>
        </div>
        <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary font-medium whitespace-nowrap">
          {letter.scripture}
        </span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {letter.description}
      </p>
      <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="text-tertiary">👤</span> {letter.author}
        </span>
        <Link
          href={`/newsletter/${letter.slug}`}
          className="text-tertiary font-bold hover:underline transition-colors flex items-center gap-0.5"
        >
          <span>Read More</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
