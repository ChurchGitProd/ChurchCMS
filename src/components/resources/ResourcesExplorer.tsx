'use client';

import { useState, useMemo } from 'react';
import ResourceCard, { ResourceItemData } from './ResourceCard';
import FeaturedResourceBanner from './FeaturedResourceBanner';
import ResourceSidebar from './ResourceSidebar';

interface FeaturedResourceData {
  badge?: string | null;
  tag?: string | null;
  title: string;
  description: string;
  rating?: string | null;
  linkText?: string | null;
  linkUrl?: string | null;
}

interface ResourcesExplorerProps {
  resources: ResourceItemData[];
  featuredResource?: FeaturedResourceData | null;
  searchPlaceholder?: string | null;
  popularResourcesTitle?: string | null;
  recentAdditionsTitle?: string | null;
  categoryTagsTitle?: string | null;
}

const ITEMS_PER_PAGE = 8;

export default function ResourcesExplorer({
  resources,
  featuredResource,
  searchPlaceholder,
  popularResourcesTitle,
  recentAdditionsTitle,
  categoryTagsTitle,
}: ResourcesExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('All Types');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    'All Categories',
    'Bible Software',
    'Commentaries',
    'Lexicons & Dictionaries',
    'Academic Journals',
    'Church History',
    'Original Languages',
  ];

  const types = [
    'All Types',
    'Free Resources',
    'Paid Resources',
    'Open Access',
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCategory) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All Categories') {
        const cat = selectedCategory.toLowerCase();
        const itemCat = item.category.toLowerCase();
        // Handle variations (e.g. "Lexicons" or "Lexicons & Dictionaries")
        if (
          !itemCat.includes(cat) &&
          !cat.includes(itemCat)
        ) {
          return false;
        }
      }

      // Pricing Type filter
      if (selectedType !== 'All Types') {
        const itemType = (item.pricingType || 'Free').toLowerCase();
        if (selectedType === 'Free Resources' && itemType !== 'free') return false;
        if (selectedType === 'Paid Resources' && itemType !== 'paid') return false;
        if (selectedType === 'Open Access' && itemType !== 'open access' && itemType !== 'free') return false;
      }

      return true;
    });
  }, [resources, searchQuery, selectedCategory, selectedType]);

  const totalPages = Math.max(1, Math.ceil(filteredResources.length / ITEMS_PER_PAGE));
  const displayedResources = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredResources.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredResources, currentPage]);

  const handleCategorySelectFromSidebar = (cat: string) => {
    // Check if matches one of the categories or maps cleanly
    const match = categories.find((c) => c.toLowerCase().includes(cat.toLowerCase()) || cat.toLowerCase().includes(c.toLowerCase()));
    if (match) {
      setSelectedCategory(match);
    } else {
      setSelectedCategory(cat);
    }
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedType('All Types');
    setCurrentPage(1);
  };

  return (
    <>
      {/* Search & Category Filters Bar */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:flex-initial">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={searchPlaceholder || 'Search resources...'}
                className="w-full sm:w-72 pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">
                🔍
              </span>
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Type Dropdown */}
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            {(searchQuery || selectedCategory !== 'All Categories' || selectedType !== 'All Types') && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-muted-foreground hover:text-primary underline px-1"
              >
                Reset
              </button>
            )}
          </div>

          {/* Results Counter */}
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing <span className="font-bold text-primary">{filteredResources.length}</span> of{' '}
            <span className="font-bold">{resources.length}</span> resources
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Resources Listing & Pagination (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Resource Banner (Logos Bible Software) */}
            {currentPage === 1 && !searchQuery && selectedCategory === 'All Categories' && selectedType === 'All Types' && (
              <FeaturedResourceBanner resource={featuredResource} />
            )}

            {/* Resource Listing Grid */}
            {displayedResources.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {displayedResources.map((item) => (
                  <ResourceCard key={item.slug} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-8 text-center space-y-3">
                <span className="text-3xl">🔍</span>
                <h3 className="text-base font-heading font-bold text-primary">No resources found</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  No resources matched your current search and filter criteria. Try clearing filters or searching with different keywords.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors inline-block"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 text-xs rounded border border-border bg-card text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-card transition-all"
                  aria-label="Previous Page"
                >
                  <span className="text-sm">←</span>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-3 py-1.5 text-xs rounded border transition-all ${
                      currentPage === pageNumber
                        ? 'border-primary bg-primary text-primary-foreground font-bold'
                        : 'border-border bg-card text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 text-xs rounded border border-border bg-card text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:hover:bg-card transition-all"
                  aria-label="Next Page"
                >
                  <span className="text-sm">→</span>
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Sidebar Widgets (4 cols) */}
          <div className="lg:col-span-4">
            <ResourceSidebar
              popularTitle={popularResourcesTitle}
              recentTitle={recentAdditionsTitle}
              categoryTitle={categoryTagsTitle}
              onSelectCategory={handleCategorySelectFromSidebar}
              selectedCategory={selectedCategory}
            />
          </div>

        </div>
      </main>
    </>
  );
}
