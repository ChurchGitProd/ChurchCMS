'use client';

interface BrowseTopicsCardProps {
  title?: string | null;
  selectedTopic?: string | null;
  onSelectTopic?: (topic: string | null) => void;
}

const DEFAULT_TOPICS = [
  'Messianic Prophecy',
  'Covenants',
  'Hebrew Poetry',
  'Pauline Epistles',
  'Gospel Parallels',
  'Greek Concordance',
];

export default function BrowseTopicsCard({
  title,
  selectedTopic,
  onSelectTopic,
}: BrowseTopicsCardProps) {
  const displayTitle = title || 'Browse by Topic';

  return (
    <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <h3 className="text-base font-heading font-bold text-primary">
          {displayTitle}
        </h3>
        {selectedTopic && onSelectTopic && (
          <button
            onClick={() => onSelectTopic(null)}
            className="text-[10px] text-tertiary font-bold hover:underline"
          >
            Clear Filter
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {DEFAULT_TOPICS.map((topic) => {
          const isSelected = selectedTopic === topic;
          return (
            <button
              key={topic}
              type="button"
              onClick={() => onSelectTopic && onSelectTopic(isSelected ? null : topic)}
              className={`px-2.5 py-1 text-xs rounded transition-all text-left ${
                isSelected
                  ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                  : 'bg-muted hover:bg-tertiary/15 text-primary'
              }`}
            >
              {topic}
              {isSelected && <span className="ml-1.5 opacity-75">✕</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
