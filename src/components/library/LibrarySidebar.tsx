'use client';

import React from 'react';

interface LibrarySidebarProps {
  categoriesTitle?: string | null;
  popularTitle?: string | null;
  recentTitle?: string | null;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

const SIDEBAR_CATEGORIES = [
  'Commentaries',
  'Lexicons',
  'Dictionaries',
  'Theology',
  'Church History',
  'Original Languages',
  'Apologetics',
  'Ethics',
];

const MOST_ACCESSED_ITEMS = [
  {
    title: "Strong's Concordance",
    subtitle: 'Complete Hebrew & Greek dictionary',
  },
  {
    title: 'Westminster Confession',
    subtitle: 'Reformed doctrinal standards',
  },
  {
    title: "Thayer's Greek Lexicon",
    subtitle: 'New Testament word definitions',
  },
];

const RECENTLY_ADDED_ITEMS = [
  {
    title: 'Modern Hermeneutics',
    subtitle: 'Added 2 days ago',
  },
  {
    title: 'Biblical Archaeology',
    subtitle: 'Added 5 days ago',
  },
  {
    title: 'Patristic Studies',
    subtitle: 'Added 1 week ago',
  },
];

export default function LibrarySidebar({
  categoriesTitle = 'Browse by Category',
  popularTitle = 'Most Accessed',
  recentTitle = 'Recently Added',
  selectedCategory,
  onSelectCategory,
}: LibrarySidebarProps) {
  return (
    <aside className="lg:col-span-4 space-y-8">
      {/* Resource Categories Widget */}
      <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
        <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
          {categoriesTitle || 'Browse by Category'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {SIDEBAR_CATEGORIES.map((cat) => {
            const isActive = selectedCategory?.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory && onSelectCategory(cat)}
                className={`px-2.5 py-1 text-xs rounded transition-colors text-left ${
                  isActive
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'bg-muted hover:bg-tertiary/10 text-primary cursor-pointer'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Most Accessed (Informational Reference Cards, Zero Dead '#' Links) */}
      <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
        <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
          {popularTitle || 'Most Accessed'}
        </h3>
        <div className="space-y-3">
          {MOST_ACCESSED_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="block p-3 bg-muted/70 rounded-lg border border-border/40 hover:bg-tertiary/10 transition-colors"
            >
              <h4 className="font-heading font-bold text-sm text-primary">
                {item.title}
              </h4>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Added (Informational Notices) */}
      <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
        <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
          {recentTitle || 'Recently Added'}
        </h3>
        <div className="space-y-3">
          {RECENTLY_ADDED_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-muted flex items-center justify-center flex-shrink-0 text-base text-tertiary">
                📄
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs text-primary">
                  {item.title}
                </h4>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
