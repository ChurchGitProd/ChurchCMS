import ShortcutCard, { ShortcutCardData } from './ShortcutCard';

interface ShortcutCardGridProps {
  shortcuts: ShortcutCardData[];
  searchQuery?: string;
  selectedKeyword?: string;
  title?: string;
}

export default function ShortcutCardGrid({
  shortcuts,
  searchQuery = '',
  selectedKeyword = '',
  title = 'Resource Shortcuts',
}: ShortcutCardGridProps) {
  const normQuery = searchQuery.trim().toLowerCase();
  const normKeyword = selectedKeyword.trim().toLowerCase();

  const filtered = shortcuts.filter((item) => {
    if (!normQuery && !normKeyword) return true;

    const matchesKeyword = normKeyword
      ? item.title.toLowerCase().includes(normKeyword) ||
        item.subtitle.toLowerCase().includes(normKeyword) ||
        (item.description && item.description.toLowerCase().includes(normKeyword)) ||
        item.targetUrl.toLowerCase().includes(normKeyword)
      : true;

    const matchesQuery = normQuery
      ? item.title.toLowerCase().includes(normQuery) ||
        item.subtitle.toLowerCase().includes(normQuery) ||
        (item.description && item.description.toLowerCase().includes(normQuery)) ||
        item.targetUrl.toLowerCase().includes(normQuery)
      : true;

    return matchesKeyword && matchesQuery;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-bold text-primary">{title}</h3>
        {(normQuery || normKeyword) && (
          <span className="text-xs text-muted-foreground">
            Showing {filtered.length} of {shortcuts.length} shortcuts
          </span>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-8 text-center space-y-2">
          <span className="text-2xl block text-muted-foreground">🔗</span>
          <p className="text-sm font-semibold text-primary">No shortcuts match your filter</p>
          <p className="text-xs text-muted-foreground">
            Try adjusting your search terms or clearing selected tags.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <ShortcutCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
