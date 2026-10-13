interface ContactHeroProps {
  badge?: string | null;
  headline?: string | null;
  subheadline?: string | null;
}

export default function ContactHero({
  badge = 'Get in Touch',
  headline = 'Contact Our Office',
  subheadline = "We welcome your questions, feedback, and partnership inquiries. Whether you're seeking theological resources, interested in our research programs, or wish to support our mission, our team is here to assist you.",
}: ContactHeroProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold tracking-widest text-tertiary uppercase">
            {badge}
          </span>
          <h1 className="text-3xl font-heading font-bold text-primary">
            {headline}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
