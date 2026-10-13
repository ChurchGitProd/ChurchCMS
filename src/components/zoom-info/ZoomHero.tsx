interface ZoomHeroProps {
  badge?: string | null;
  headline?: string | null;
  subheadline?: string | null;
}

export default function ZoomHero({
  badge,
  headline,
  subheadline,
}: ZoomHeroProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-tertiary uppercase">
            {badge || 'Live Online Sessions'}
          </span>
          <h1 className="text-3xl font-heading font-bold text-primary">
            {headline || 'Zoom Seminar Schedule'}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {subheadline ||
              'Join our live theological seminars, Bible study sessions, and scholarly discussions via Zoom. Connect with our faculty and fellow believers from around the world in real-time interactive sessions.'}
          </p>
        </div>
      </div>
    </section>
  );
}
