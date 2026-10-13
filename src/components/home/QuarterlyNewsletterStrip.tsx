'use client';

interface NewsletterStripData {
  title?: string | null;
  description?: string | null;
  buttonText?: string | null;
}

interface QuarterlyNewsletterStripProps {
  data?: NewsletterStripData | null;
}

export default function QuarterlyNewsletterStrip({ data }: QuarterlyNewsletterStripProps) {
  const title = data?.title || 'Subscribe to Scripture Quarterly';
  const description =
    data?.description ||
    'Get theological journals, research updates, and scripture study guides delivered quarterly.';
  const buttonText = data?.buttonText || 'Subscribe';

  return (
    <section id="newsletter" className="bg-secondary text-secondary-foreground py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-heading font-bold text-tertiary">{title}</h3>
            <p className="text-xs text-secondary-foreground/80 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto max-w-md gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 text-xs rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-tertiary border border-border"
              required
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-primary text-primary-foreground font-bold text-xs rounded hover:bg-primary/95 transition-all uppercase tracking-wider whitespace-nowrap shadow-sm"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
