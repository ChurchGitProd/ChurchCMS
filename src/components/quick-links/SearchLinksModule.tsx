'use client';

interface SearchLinksModuleProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedKeyword: string;
  onKeywordSelect: (keyword: string) => void;
  title?: string;
  placeholder?: string;
}

const KEYWORDS = [
  'Genesis',
  'Trinity',
  'Eschatology',
  'Christology',
  'Church History',
  'Hermeneutics',
];

export default function SearchLinksModule({
  searchQuery,
  onSearchChange,
  selectedKeyword,
  onKeywordSelect,
  title = 'Search Links',
  placeholder = 'Search for links by keyword, topic, or scripture...',
}: SearchLinksModuleProps) {
  const isFiltered = Boolean(searchQuery.trim() || selectedKeyword);

  return (
    <div className="bg-muted border border-border rounded-xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <h3 className="text-xl font-heading font-bold text-primary">{title}</h3>
        {isFiltered && (
          <button
            onClick={() => {
              onSearchChange('');
              onKeywordSelect('');
            }}
            className="text-xs text-tertiary hover:underline flex items-center gap-1 self-start sm:self-auto font-medium"
          >
            <span>✕ Clear active search / filters</span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-3 text-sm rounded-lg bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
          />
          <span className="absolute left-3 top-3.5 text-muted-foreground text-lg">
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground text-sm"
              aria-label="Clear search input"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground mr-1">Suggested topics:</span>
          {KEYWORDS.map((kw) => {
            const isSelected = selectedKeyword.toLowerCase() === kw.toLowerCase();
            return (
              <button
                key={kw}
                type="button"
                onClick={() => onKeywordSelect(isSelected ? '' : kw)}
                className={`px-3 py-1 rounded text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
                    : 'bg-background text-muted-foreground hover:bg-tertiary/10 hover:text-primary'
                }`}
              >
                {kw}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
