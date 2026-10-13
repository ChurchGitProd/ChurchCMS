'use client';

import { useState } from 'react';
import FeaturedBanner from './FeaturedBanner';
import CategoryLinkGrid from './CategoryLinkGrid';
import SearchLinksModule from './SearchLinksModule';
import ShortcutCardGrid from './ShortcutCardGrid';
import { ShortcutCardData } from './ShortcutCard';

interface QuickLinksExplorerProps {
  featuredBanner?: {
    badge?: string | null;
    tag?: string | null;
    title?: string | null;
    description?: string | null;
    button1Text?: string | null;
    button1Link?: string | null;
    button2Text?: string | null;
    button2Link?: string | null;
    button3Text?: string | null;
    button3Link?: string | null;
  } | null;
  categorySectionTitle?: string;
  searchSectionTitle?: string;
  searchPlaceholder?: string;
  shortcutsSectionTitle?: string;
  shortcuts: ShortcutCardData[];
}

export default function QuickLinksExplorer({
  featuredBanner,
  categorySectionTitle = 'Browse by Category',
  searchSectionTitle = 'Search Links',
  searchPlaceholder = 'Search for links by keyword, topic, or scripture...',
  shortcutsSectionTitle = 'Resource Shortcuts',
  shortcuts,
}: QuickLinksExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
      <div className="space-y-12">
        {/* Feature Shortcut Banner */}
        <FeaturedBanner banner={featuredBanner} />

        {/* Categorized Quick Links */}
        <div>
          <h3 className="text-xl font-heading font-bold text-primary mb-6">
            {categorySectionTitle}
          </h3>
          <CategoryLinkGrid
            filterKeyword={selectedKeyword}
            searchQuery={searchQuery}
          />
        </div>

        {/* Search Links Module */}
        <SearchLinksModule
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedKeyword={selectedKeyword}
          onKeywordSelect={setSelectedKeyword}
          title={searchSectionTitle}
          placeholder={searchPlaceholder}
        />

        {/* Resource Shortcut Cards */}
        <ShortcutCardGrid
          shortcuts={shortcuts}
          searchQuery={searchQuery}
          selectedKeyword={selectedKeyword}
          title={shortcutsSectionTitle}
        />
      </div>
    </main>
  );
}
