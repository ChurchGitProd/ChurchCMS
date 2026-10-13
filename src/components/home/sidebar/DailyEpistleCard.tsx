'use client';

import { Mail } from 'lucide-react';

interface NewsletterData {
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
}

interface DailyEpistleCardProps {
  data?: NewsletterData | null;
}

export default function DailyEpistleCard({ data }: DailyEpistleCardProps) {
  const title = data?.title || 'The Daily Epistle';
  const description =
    data?.description ||
    'Receive a scholarly, editorial commentary, cross-references, and historical background directly to your inbox every morning. Free from fluff, focused entirely on the scripture text.';
  const buttonText = data?.buttonText || 'Subscribe to Epistle';

  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-xl space-y-4 shadow-lg border border-primary/20">
      <div className="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary">
        <Mail className="w-5 h-5" />
      </div>
      <h3 className="text-xl font-heading font-bold">{title}</h3>
      <p className="text-xs text-primary-foreground/80 leading-relaxed">
        {description}
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-2 pt-2">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-3 py-2.5 text-xs rounded bg-white text-[#1f2937] placeholder:text-[#6b7280] border border-border/20 focus:outline-none focus:ring-1 focus:ring-tertiary"
          required
        />
        <button
          type="submit"
          className="w-full py-2.5 bg-tertiary text-primary font-bold text-xs rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
