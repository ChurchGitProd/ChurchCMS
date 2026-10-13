interface StatementOfFaithSectionProps {
  statementOfFaith?: {
    badge?: string | null;
    title?: string | null;
    point1Title?: string | null;
    point1Text?: string | null;
    point2Title?: string | null;
    point2Text?: string | null;
    point3Title?: string | null;
    point3Text?: string | null;
  } | null;
}

export default function StatementOfFaithSection({
  statementOfFaith,
}: StatementOfFaithSectionProps) {
  const badge = statementOfFaith?.badge || 'In Veritate Veritas';
  const title = statementOfFaith?.title || 'Statement of Faith & Doctrine';
  const p1Title =
    statementOfFaith?.point1Title || '1. The Inspiration of Scripture';
  const p1Text =
    statementOfFaith?.point1Text ||
    'We hold that the sixty-six books of the Old and New Testaments are the uniquely inspired, infallible, and inerrant word of God—the supreme and final authority for faith and life.';
  const p2Title = statementOfFaith?.point2Title || '2. The Triune God';
  const p2Text =
    statementOfFaith?.point2Text ||
    'We believe in one God, eternally existing in three co-equal persons: Father, Son, and Holy Spirit, infinite in power, wisdom, holiness, and love.';
  const p3Title = statementOfFaith?.point3Title || '3. Redemption & Grace';
  const p3Text =
    statementOfFaith?.point3Text ||
    'We confess that salvation is by grace alone, through faith alone, in Christ alone, whose substitutionary death and bodily resurrection reconcile us to God.';

  return (
    <section className="bg-muted/40 border border-border p-8 rounded-xl space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold tracking-widest text-tertiary uppercase">
          {badge}
        </span>
        <h2 className="text-2xl font-heading font-bold text-primary">{title}</h2>
      </div>

      <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
        <div className="border-l-2 border-tertiary pl-4">
          <h4 className="font-bold text-primary mb-1">{p1Title}</h4>
          <p>{p1Text}</p>
        </div>
        <div className="border-l-2 border-tertiary pl-4">
          <h4 className="font-bold text-primary mb-1">{p2Title}</h4>
          <p>{p2Text}</p>
        </div>
        <div className="border-l-2 border-tertiary pl-4">
          <h4 className="font-bold text-primary mb-1">{p3Title}</h4>
          <p>{p3Text}</p>
        </div>
      </div>
    </section>
  );
}
