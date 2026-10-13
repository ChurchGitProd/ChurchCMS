import Link from 'next/link';

export interface CategoryLinkItem {
  label: string;
  href?: string;
  disabled?: boolean;
  statusNote?: string;
  keywords?: string[];
}

export interface QuickLinkCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  links: CategoryLinkItem[];
  keywords: string[];
}

export const CATEGORIES_DATA: QuickLinkCategory[] = [
  {
    id: 'study-resources',
    title: 'Study Resources',
    icon: '📖',
    description: 'Bible lessons, references, and study guides',
    keywords: [
      'study',
      'lessons',
      'references',
      'library',
      'genesis',
      'trinity',
      'eschatology',
      'christology',
      'hermeneutics',
      'bible',
    ],
    links: [
      {
        label: 'Bible Lessons',
        href: '/lessons',
        keywords: ['genesis', 'trinity', 'eschatology', 'christology', 'lessons', 'exegesis'],
      },
      {
        label: 'Cross-References',
        href: '/references',
        keywords: ['references', 'hermeneutics', 'cross-references', 'scripture', 'concordance'],
      },
      {
        label: 'Digital Library',
        href: '/library',
        keywords: ['library', 'systematic theology', 'commentary', 'lexicon', 'patristics'],
      },
    ],
  },
  {
    id: 'media-visuals',
    title: 'Media & Visuals',
    icon: '▶️',
    description: 'Videos, images, and multimedia content',
    keywords: [
      'media',
      'visuals',
      'videos',
      'images',
      'magazines',
      'archaeology',
      'manuscripts',
      'christology',
    ],
    links: [
      {
        label: 'Bible Videos',
        href: '/videos',
        keywords: ['videos', 'lectures', 'christology', 'creation', 'media'],
      },
      {
        label: 'Biblical Imagery',
        href: '/images',
        keywords: ['images', 'archaeology', 'manuscripts', 'codex', 'visuals'],
      },
      {
        label: 'Magazines',
        href: '/magazines',
        keywords: ['magazines', 'quarterly', 'journals', 'theology today'],
      },
    ],
  },
  {
    id: 'publications',
    title: 'Publications',
    icon: '📋',
    description: 'Books, archives, and scholarly works',
    keywords: [
      'publications',
      'books',
      'archives',
      'newsletter',
      'church history',
      'reformation',
      'doctrine',
    ],
    links: [
      {
        label: 'Theological Books',
        href: '/books',
        keywords: ['books', 'theology', 'puritan', 'reformation', 'calvin', 'augustine'],
      },
      {
        label: 'Historical Archives',
        href: '/archives',
        keywords: ['archives', 'church history', 'manuscripts', 'patristic', 'creeds'],
      },
      {
        label: 'Daily Newsletter',
        href: '/newsletter',
        keywords: ['newsletter', 'daily devotional', 'epistle', 'morning reading'],
      },
    ],
  },
  {
    id: 'community',
    title: 'Community',
    icon: '👥',
    description: 'Live sessions, events, and connections',
    keywords: [
      'community',
      'seminars',
      'zoom',
      'contact',
      'about',
      'fellowship',
      'office',
    ],
    links: [
      {
        label: 'Zoom Seminars',
        href: '/zoom-info',
        keywords: ['zoom', 'seminars', 'live sessions', 'webinar', 'q&a'],
      },
      {
        label: 'Contact Office',
        href: '/contact',
        keywords: ['contact', 'office', 'inquiries', 'feedback', 'email'],
      },
      {
        label: 'About Us',
        href: '/about',
        keywords: ['about', 'faith statement', 'faculty', 'mission', 'history'],
      },
    ],
  },
  {
    id: 'tools-utilities',
    title: 'Tools & Utilities',
    icon: '⚙️',
    description: 'Search, filters, and platform features',
    keywords: [
      'tools',
      'utilities',
      'search',
      'bookmark',
      'planner',
      'workstation',
    ],
    links: [
      {
        label: 'Advanced Search',
        href: '/library',
        keywords: ['search', 'advanced search', 'catalog', 'filter'],
      },
      {
        label: 'Bookmark Manager',
        disabled: true,
        statusNote: 'Feature in preparation for the upcoming digital workstation release.',
        keywords: ['bookmark', 'saved', 'manager', 'reading list'],
      },
      {
        label: 'Study Planner',
        disabled: true,
        statusNote: 'Feature in preparation for the upcoming digital workstation release.',
        keywords: ['study planner', 'calendar', 'schedule', 'reading plan'],
      },
    ],
  },
  {
    id: 'external-resources',
    title: 'External Resources',
    icon: '🔗',
    description: 'Partner sites and theological tools',
    keywords: [
      'external',
      'resources',
      'bible gateway',
      'blue letter bible',
      'logos',
      'software',
      'lexicon',
      'hermeneutics',
    ],
    links: [
      {
        label: 'Bible Gateway',
        href: '/resources/bible-gateway',
        keywords: ['bible gateway', 'translations', 'parallel', 'audio bible'],
      },
      {
        label: 'Blue Letter Bible',
        href: '/resources/blue-letter-bible',
        keywords: ['blue letter bible', 'strongs concordance', 'hebrew', 'greek', 'hermeneutics'],
      },
      {
        label: 'Logos Software',
        href: '/resources',
        keywords: ['logos software', 'commentaries', 'datasets', 'exegetical guide'],
      },
    ],
  },
];

interface CategoryLinkGridProps {
  categories?: QuickLinkCategory[];
  filterKeyword?: string;
  searchQuery?: string;
}

export default function CategoryLinkGrid({
  categories = CATEGORIES_DATA,
  filterKeyword = '',
  searchQuery = '',
}: CategoryLinkGridProps) {
  const normQuery = searchQuery.trim().toLowerCase();
  const normKeyword = filterKeyword.trim().toLowerCase();

  const filteredCategories = categories.filter((cat) => {
    if (!normQuery && !normKeyword) return true;

    const matchesKeyword = normKeyword
      ? cat.keywords.some((k) => k.toLowerCase().includes(normKeyword)) ||
        cat.links.some((l) =>
          l.keywords?.some((k) => k.toLowerCase().includes(normKeyword))
        )
      : true;

    const matchesQuery = normQuery
      ? cat.title.toLowerCase().includes(normQuery) ||
        cat.description.toLowerCase().includes(normQuery) ||
        cat.links.some((l) => l.label.toLowerCase().includes(normQuery)) ||
        cat.keywords.some((k) => k.toLowerCase().includes(normQuery))
      : true;

    return matchesKeyword && matchesQuery;
  });

  if (filteredCategories.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center space-y-2">
        <span className="text-2xl block text-muted-foreground">🔍</span>
        <p className="text-sm font-semibold text-primary">No categories match your criteria</p>
        <p className="text-xs text-muted-foreground">
          Try clearing your search term or selecting another topic.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCategories.map((cat) => (
        <div
          key={cat.id}
          className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="text-2xl text-tertiary">{cat.icon}</span>
            </div>
            <div>
              <h4 className="text-lg font-heading font-bold text-primary">{cat.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {cat.description}
              </p>
            </div>
          </div>

          <ul className="space-y-2.5 pt-2 border-t border-border/50">
            {cat.links.map((link) => {
              if (link.disabled) {
                return (
                  <li
                    key={link.label}
                    className="group relative flex items-center justify-between text-xs text-muted-foreground/60 cursor-not-allowed py-0.5"
                    title={link.statusNote}
                  >
                    <span className="flex items-center gap-1.5 line-through">
                      <span className="text-[10px] text-muted-foreground/40">→</span>
                      <span>{link.label}</span>
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 bg-muted rounded text-muted-foreground font-medium tracking-wide">
                      In Prep
                    </span>
                  </li>
                );
              }

              return (
                <li key={link.label}>
                  <Link
                    href={link.href || '#'}
                    className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1.5 font-medium py-0.5"
                  >
                    <span className="text-[10px] text-tertiary">→</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
