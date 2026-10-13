import Link from 'next/link';

interface ResourceSidebarProps {
  popularTitle?: string | null;
  recentTitle?: string | null;
  categoryTitle?: string | null;
  onSelectCategory?: (category: string) => void;
  selectedCategory?: string;
}

export default function ResourceSidebar({
  popularTitle,
  recentTitle,
  categoryTitle,
  onSelectCategory,
  selectedCategory,
}: ResourceSidebarProps) {
  const popularResources = [
    {
      rank: 1,
      title: 'Logos Bible Software',
      visits: '12.5K visits/month',
      href: 'https://www.logos.com',
      isExternal: true,
    },
    {
      rank: 2,
      title: 'Blue Letter Bible',
      visits: '9.8K visits/month',
      href: '/resources/blue-letter-bible',
      isExternal: false,
    },
    {
      rank: 3,
      title: 'Bible Gateway',
      visits: '8.2K visits/month',
      href: '/resources/bible-gateway',
      isExternal: false,
    },
    {
      rank: 4,
      title: 'Accordance',
      visits: '6.4K visits/month',
      href: '/resources/accordance-bible-software',
      isExternal: false,
    },
    {
      rank: 5,
      title: 'Bible Hub',
      visits: '5.9K visits/month',
      href: '/resources/bible-hub',
      isExternal: false,
    },
  ];

  const recentAdditions = [
    {
      title: 'SBL Greek New Testament',
      added: 'Added 2 days ago',
      category: 'Original Languages',
    },
    {
      title: 'Theological Journals Database',
      added: 'Added 5 days ago',
      category: 'Academic Journals',
    },
    {
      title: 'Early Church Fathers Collection',
      added: 'Added 1 week ago',
      category: 'Church History',
    },
    {
      title: 'Hebrew Lexicon Tools',
      added: 'Added 2 weeks ago',
      category: 'Lexicons & Dictionaries',
    },
  ];

  const categoryTags = [
    'Bible Software',
    'Commentaries',
    'Lexicons',
    'Dictionaries',
    'Academic',
    'Church History',
    'Original Languages',
    'Theology',
  ];

  return (
    <div className="space-y-6">
      {/* Popular Resources Widget */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-heading font-bold text-primary flex items-center gap-2">
          <span className="text-tertiary">🔥</span>
          {popularTitle || 'Popular Resources'}
        </h3>
        <ul className="space-y-3">
          {popularResources.map((item) => (
            <li key={item.rank} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-tertiary/20 text-tertiary text-[10px] font-bold flex items-center justify-center mt-0.5 flex-shrink-0">
                {item.rank}
              </span>
              <div>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:text-tertiary transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-xs font-semibold text-primary hover:text-tertiary transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
                <p className="text-[10px] text-muted-foreground">{item.visits}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Additions Widget */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-heading font-bold text-primary flex items-center gap-2">
          <span className="text-tertiary">🕐</span>
          {recentTitle || 'Recent Additions'}
        </h3>
        <ul className="space-y-3">
          {recentAdditions.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="text-tertiary text-sm mt-0.5 flex-shrink-0">➕</span>
              <div>
                {onSelectCategory ? (
                  <button
                    onClick={() => onSelectCategory(item.category)}
                    className="text-xs font-semibold text-primary hover:text-tertiary transition-colors text-left"
                  >
                    {item.title}
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-primary">
                    {item.title}
                  </span>
                )}
                <p className="text-[10px] text-muted-foreground">{item.added}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Category Tags Widget */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-heading font-bold text-primary flex items-center gap-2">
          <span className="text-tertiary">🏷️</span>
          {categoryTitle || 'Browse by Category'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {categoryTags.map((tag) => {
            const isSelected = selectedCategory === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectCategory && onSelectCategory(tag)}
                className={`px-2 py-1 rounded text-[10px] cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-tertiary/10 hover:text-primary'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
