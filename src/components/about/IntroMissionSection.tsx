interface IntroMissionSectionProps {
  introTitle?: string | null;
  introParagraph1?: string | null;
  introParagraph2?: string | null;
  mission?: {
    title?: string | null;
    description?: string | null;
  } | null;
  vision?: {
    title?: string | null;
    description?: string | null;
  } | null;
}

export default function IntroMissionSection({
  introTitle = 'Introduction',
  introParagraph1,
  introParagraph2,
  mission,
  vision,
}: IntroMissionSectionProps) {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
          <span className="w-1.5 h-6 bg-tertiary rounded"></span>
          <span>{introTitle}</span>
        </h2>
        {introParagraph1 && (
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
            {introParagraph1}
          </p>
        )}
        {introParagraph2 && (
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
            {introParagraph2}
          </p>
        )}
      </section>

      {/* Mission & Vision Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border p-6 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center text-tertiary">
            <span className="text-xl">🛡️</span>
          </div>
          <h3 className="text-lg font-heading font-bold text-primary">
            {mission?.title || 'Our Mission'}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {mission?.description ||
              'To preserve, annotate, and teach the biblical scriptures with absolute academic integrity, providing resources that deepen theological knowledge and nourish genuine spiritual contemplation.'}
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl space-y-3">
          <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center text-tertiary">
            <span className="text-xl">👁️</span>
          </div>
          <h3 className="text-lg font-heading font-bold text-primary">
            {vision?.title || 'Our Vision'}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {vision?.description ||
              "To be the premier digital destination for serious scripture study, bridging the gap between high-level academic biblical scholarship and the daily reader's quest for truth."}
          </p>
        </div>
      </section>
    </div>
  );
}
