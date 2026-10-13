'use client';

import React, { useState, useMemo } from 'react';
import LibraryResourceCard, { LibraryResourceData } from './LibraryResourceCard';
import FeaturedLibrarySpotlight from './FeaturedLibrarySpotlight';
import LibrarySidebar from './LibrarySidebar';

interface FeaturedResourceData {
  badge?: string | null;
  tag?: string | null;
  title?: string | null;
  description?: string | null;
  details?: string | null;
  linkText?: string | null;
}

interface SidebarTitles {
  categoriesTitle?: string | null;
  popularTitle?: string | null;
  recentTitle?: string | null;
}

interface LibraryExplorerProps {
  resources: LibraryResourceData[];
  searchPlaceholder?: string | null;
  featuredResource?: FeaturedResourceData | null;
  sidebarTitles?: SidebarTitles;
}

const CATEGORY_OPTIONS = [
  'All Categories',
  'Commentaries',
  'Lexicons',
  'Historical Documents',
  'Theological Treatises',
  'Research Papers',
];

const ERA_OPTIONS = [
  'All Eras',
  'Patristic Era',
  'Reformation',
  'Modern Scholarship',
  'Contemporary',
];

export default function LibraryExplorer({
  resources,
  searchPlaceholder = 'Search library resources...',
  featuredResource,
  sidebarTitles,
}: LibraryExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedEra, setSelectedEra] = useState('All Eras');

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedEra('All Eras');
  };

  // Compound filter logic: search + category + era
  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      // 1. Text Search Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesAuthor = item.author ? item.author.toLowerCase().includes(q) : false;
        const matchesDetail = item.primaryDetail ? item.primaryDetail.toLowerCase().includes(q) : false;
        const matchesTags = item.tags ? item.tags.some((t) => t && t.toLowerCase().includes(q)) : false;
        const matchesCat = item.category.toLowerCase().includes(q);
        const matchesEra = item.era.toLowerCase().includes(q);

        if (
          !matchesTitle &&
          !matchesDesc &&
          !matchesAuthor &&
          !matchesDetail &&
          !matchesTags &&
          !matchesCat &&
          !matchesEra
        ) {
          return false;
        }
      }

      // 2. Category Filter (supports exact and plural/singular variations)
      if (selectedCategory && selectedCategory !== 'All Categories') {
        const selCat = selectedCategory.toLowerCase();
        const itemCat = item.category.toLowerCase();
        const catMatch =
          itemCat === selCat ||
          itemCat.includes(selCat) ||
          selCat.includes(itemCat);
        if (!catMatch) {
          return false;
        }
      }

      // 3. Era Filter
      if (selectedEra && selectedEra !== 'All Eras') {
        if (item.era.toLowerCase() !== selectedEra.toLowerCase()) {
          return false;
        }
      }

      return true;
    });
  }, [resources, searchQuery, selectedCategory, selectedEra]);

  const totalFiltered = filteredResources.length;
  const totalResources = resources.length;

  return (
    <>
      {/* Search & Filter Toolbar (Full width banner matching original HTML) */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:flex-initial">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder || 'Search library resources...'}
                aria-label="Search library resources"
                className="w-full sm:w-72 pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">
                🔍
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Select Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by category"
              className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Era Select Dropdown */}
            <select
              value={selectedEra}
              onChange={(e) => setSelectedEra(e.target.value)}
              aria-label="Filter by historical era"
              className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {ERA_OPTIONS.map((era) => (
                <option key={era} value={era}>
                  {era}
                </option>
              ))}
            </select>

            {/* Active Filters Reset Link */}
            {(searchQuery || selectedCategory !== 'All Categories' || selectedEra !== 'All Eras') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs text-tertiary hover:underline font-medium"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Truthful Dynamic Dataset Counter */}
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing{' '}
            <span className="font-bold text-primary">
              {totalFiltered === 0 ? 0 : 1}
            </span>{' '}
            to{' '}
            <span className="font-bold text-primary">
              {totalFiltered}
            </span>{' '}
            of <span className="font-bold">{totalFiltered}</span> resources
            {totalFiltered !== totalResources && (
              <span className="text-[11px] text-muted-foreground/70 ml-1">
                (filtered from {totalResources})
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Layout (8 / 4 Column Grid) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Featured Spotlight + Resource List + Pagination */}
          <div className="lg:col-span-8 space-y-8">
            {/* Featured Resource Section */}
            {featuredResource && (
              <FeaturedLibrarySpotlight
                badge={featuredResource.badge}
                tag={featuredResource.tag}
                title={featuredResource.title}
                description={featuredResource.description}
                details={featuredResource.details}
                linkText={featuredResource.linkText}
              />
            )}

            {/* Resource Cards List or Empty State */}
            {totalFiltered > 0 ? (
              <div className="space-y-6">
                {filteredResources.map((res) => (
                  <LibraryResourceCard key={res.slug} resource={res} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-card border border-border rounded-xl space-y-3">
                <span className="text-3xl block">📖</span>
                <h4 className="text-base font-heading font-bold text-primary">
                  No library resources found
                </h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  No catalog items matched your selected category, era, or search query.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            )}

            {/* Truthful Pagination (Zero Dead '#' Links) */}
            <nav aria-label="Pagination" className="flex items-center justify-between border-t border-border pt-6">
              {/* Mobile Controls */}
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="px-4 py-2 border border-border text-xs font-semibold rounded bg-card text-muted-foreground opacity-50 cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="px-4 py-2 border border-border text-xs font-semibold rounded bg-card text-muted-foreground opacity-50 cursor-not-allowed"
                >
                  Next
                </button>
              </div>

              {/* Desktop Controls */}
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Showing{' '}
                    <span className="font-medium text-primary">
                      {totalFiltered === 0 ? 0 : 1}
                    </span>{' '}
                    to{' '}
                    <span className="font-medium text-primary">
                      {totalFiltered}
                    </span>{' '}
                    of <span className="font-medium">{totalFiltered}</span> entries
                  </p>
                </div>
                <div>
                  <span className="relative z-0 inline-flex rounded shadow-sm -space-x-px">
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      aria-label="Previous page"
                      className="relative inline-flex items-center px-2.5 py-1.5 rounded-l-md border border-border bg-card text-xs font-medium text-muted-foreground opacity-50 cursor-not-allowed"
                    >
                      <span>←</span>
                    </button>
                    <button
                      type="button"
                      aria-current="page"
                      className="relative inline-flex items-center px-3 py-1.5 border border-primary bg-primary text-primary-foreground text-xs font-medium"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      disabled
                      aria-disabled="true"
                      aria-label="Next page"
                      className="relative inline-flex items-center px-2.5 py-1.5 rounded-r-md border border-border bg-card text-xs font-medium text-muted-foreground opacity-50 cursor-not-allowed"
                    >
                      <span>→</span>
                    </button>
                  </span>
                </div>
              </div>
            </nav>
          </div>

          {/* Right Column: Sidebar Widgets (Interactive category pills sync with explorer) */}
          <LibrarySidebar
            categoriesTitle={sidebarTitles?.categoriesTitle}
            popularTitle={sidebarTitles?.popularTitle}
            recentTitle={sidebarTitles?.recentTitle}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          />
        </div>
      </main>
    </>
  );
}
