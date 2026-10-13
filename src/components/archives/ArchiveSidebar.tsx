interface AccessPolicyData {
  title?: string | null;
  description?: string | null;
}

interface ArchiveSidebarProps {
  classificationsTitle?: string | null;
  accessPolicy?: AccessPolicyData | null;
}

export default function ArchiveSidebar({
  classificationsTitle = 'Archive Classifications',
  accessPolicy,
}: ArchiveSidebarProps) {
  const classifications = [
    'Byzantine Codices',
    'Reformation Tracts',
    'Puritan Monographs',
    'Dead Sea Scrolls',
  ];

  const policyTitle = accessPolicy?.title || 'Access Policy';
  const policyDescription =
    accessPolicy?.description ||
    'All archived materials are public-domain or licensed for theological research. High-resolution downloads are free for academic citation.';

  return (
    <aside className="lg:col-span-4 space-y-8">
      {/* Archive Tags / Classifications Widget */}
      <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
        <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
          {classificationsTitle || 'Archive Classifications'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {classifications.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 bg-muted text-xs text-primary rounded border border-border/50 select-none font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Archive Access Policy Widget */}
      <div className="bg-card border border-border p-6 rounded-xl space-y-3 shadow-sm">
        <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
          {policyTitle}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {policyDescription}
        </p>
      </div>
    </aside>
  );
}
