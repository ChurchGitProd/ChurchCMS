'use client';

import React, { useState, useMemo } from 'react';
import ArchiveItemCard, { ArchiveItemData } from './ArchiveItemCard';

interface ArchivesExplorerProps {
  initialArchives: ArchiveItemData[];
  catalogInfo?: string | null;
  featuredBlock?: React.ReactNode;
  sidebar?: React.ReactNode;
}

type FilterCategory = 'All Archives' | 'Manuscripts' | 'Transcripts' | 'Historical Commentaries';

export default function ArchivesExplorer({
  initialArchives,
  catalogInfo = 'Archive Catalog: 150+ Years of Research',
  featuredBlock,
  sidebar,
}: ArchivesExplorerProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All Archives');

  const filterTabs: FilterCategory[] = [
    'All Archives',
    'Manuscripts',
    'Transcripts',
    'Historical Commentaries',
  ];

  // Map user-friendly UI tabs to canonical entity categories
  const filteredArchives = useMemo(() => {
    return initialArchives.filter((item) => {
      if (selectedFilter === 'All Archives') return true;
      if (selectedFilter === 'Manuscripts') {
        return item.category === 'Manuscript Documentation' || item.category.toLowerCase().includes('manuscript');
      }
      if (selectedFilter === 'Transcripts') {
        return item.category === 'Seminar Transcript' || item.category.toLowerCase().includes('transcript');
      }
      if (selectedFilter === 'Historical Commentaries') {
        return item.category === 'Historical Commentary' || item.category.toLowerCase().includes('commentary');
      }
      return true;
    });
  }, [initialArchives, selectedFilter]);

  return (
    <>
      {/* 5. Archive Type Filters */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted text-primary hover:bg-tertiary/10 font-medium'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
          <div className="text-xs text-muted-foreground">
            {catalogInfo || 'Archive Catalog: 150+ Years of Research'}
          </div>
        </div>
      </section>

      {/* 6. Main Content Layout (12 cols) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Archive Listing & Featured Block (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 6A. Featured Archive Block */}
            {featuredBlock}

            {/* 6B. Archive Items Listing */}
            <div className="space-y-4">
              {filteredArchives.length === 0 ? (
                <div className="bg-card border border-border rounded-xl p-8 text-center space-y-3">
                  <span className="text-2xl block">📜</span>
                  <h4 className="text-base font-heading font-bold text-primary">
                    No Archives Found
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    No archival documents match the selected classification.
                  </p>
                  <button
                    onClick={() => setSelectedFilter('All Archives')}
                    className="px-3.5 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded hover:bg-primary/90 transition-colors uppercase tracking-wider"
                  >
                    View All Archives
                  </button>
                </div>
              ) : (
                filteredArchives.map((item) => (
                  <ArchiveItemCard key={item.slug} item={item} />
                ))
              )}
            </div>

            {/* 6C. Truthful Functional Pagination (Single Page for 3 Items) */}
            <nav className="flex items-center justify-between border-t border-border pt-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  disabled={true}
                  className="px-4 py-2 border border-border text-xs font-semibold rounded bg-card text-muted-foreground/60 cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  disabled={true}
                  className="px-4 py-2 border border-border text-xs font-semibold rounded bg-card text-muted-foreground/60 cursor-not-allowed"
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Showing{' '}
                    <span className="font-medium text-primary">
                      {filteredArchives.length === 0 ? 0 : 1}
                    </span>{' '}
                    to{' '}
                    <span className="font-medium text-primary">
                      {filteredArchives.length}
                    </span>{' '}
                    of{' '}
                    <span className="font-medium">
                      {filteredArchives.length}
                    </span>{' '}
                    archives
                  </p>
                </div>
                <div>
                  <span className="relative z-0 inline-flex rounded shadow-sm -space-x-px">
                    <button
                      disabled={true}
                      className="relative inline-flex items-center px-2.5 py-1.5 rounded-l-md border border-border bg-card text-xs font-medium text-muted-foreground/60 cursor-not-allowed"
                      aria-label="Previous Page"
                    >
                      <span className="text-sm">←</span>
                    </button>
                    <button
                      className="relative inline-flex items-center px-3 py-1.5 border border-primary bg-primary text-primary-foreground text-xs font-medium z-10"
                    >
                      1
                    </button>
                    <button
                      disabled={true}
                      className="relative inline-flex items-center px-2.5 py-1.5 rounded-r-md border border-border bg-card text-xs font-medium text-muted-foreground/60 cursor-not-allowed"
                      aria-label="Next Page"
                    >
                      <span className="text-sm">→</span>
                    </button>
                  </span>
                </div>
              </div>
            </nav>
          </div>

          {/* Right Column: Sidebar Widgets (4 cols) */}
          {sidebar}
        </div>
      </main>
    </>
  );
}
