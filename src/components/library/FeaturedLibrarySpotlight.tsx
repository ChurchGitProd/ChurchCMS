'use client';

import React, { useState } from 'react';

interface FeaturedLibrarySpotlightProps {
  badge?: string | null;
  tag?: string | null;
  title?: string | null;
  description?: string | null;
  details?: string | null;
  linkText?: string | null;
}

export default function FeaturedLibrarySpotlight({
  badge = 'FEATURED RESOURCE',
  tag = 'New Addition',
  title = 'Complete Systematic Theology Collection',
  description = 'A comprehensive 12-volume systematic theology covering all major doctrines, biblical foundations, historical development, and contemporary applications. Includes extensive cross-references and original language analysis.',
  details = '12 Volumes | 4,800 Pages',
  linkText = 'Access Collection',
}: FeaturedLibrarySpotlightProps) {
  const [isAccessOpen, setIsAccessOpen] = useState(false);

  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-xl space-y-4 border border-primary/20 shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">
          {badge || 'FEATURED RESOURCE'}
        </span>
        <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">
          {tag || 'New Addition'}
        </span>
      </div>

      <h2 className="text-2xl font-heading font-bold tracking-tight">
        {title || 'Complete Systematic Theology Collection'}
      </h2>

      <p className="text-xs text-primary-foreground/90 leading-relaxed font-sans">
        {description}
      </p>

      {/* Expandable In-Place Collection Access Drawer */}
      {isAccessOpen && (
        <div className="p-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-xs space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="font-bold text-tertiary text-[10px] uppercase tracking-wider">
              Collection Archive Information
            </span>
            <span className="text-[10px] bg-tertiary/20 text-tertiary px-2 py-0.5 rounded font-mono">
              Status: {tag || 'New Addition'}
            </span>
          </div>
          <p className="text-primary-foreground/80 leading-relaxed">
            {description}
          </p>
          <div className="pt-2 border-t border-primary-foreground/10 flex flex-wrap items-center justify-between text-[11px] text-primary-foreground/70">
            <span>Scope: {details || '12 Volumes | 4,800 Pages'}</span>
            <span className="italic">Repository access available via library desk reference</span>
          </div>
        </div>
      )}

      {/* Action Row */}
      <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75 border-t border-primary-foreground/15">
        <span className="flex items-center gap-1.5">
          <span className="text-tertiary">📚</span> {details || '12 Volumes | 4,800 Pages'}
        </span>

        <button
          type="button"
          onClick={() => setIsAccessOpen((prev) => !prev)}
          aria-expanded={isAccessOpen}
          className="text-tertiary font-bold hover:underline flex items-center gap-1 transition-all"
        >
          <span>{isAccessOpen ? 'Close Collection Details' : (linkText || 'Access Collection')}</span>
          <span className="text-xs">{isAccessOpen ? '▲' : '→'}</span>
        </button>
      </div>
    </div>
  );
}
