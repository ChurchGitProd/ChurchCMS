import React from 'react';

interface BooksSidebarProps {
  submissionsTitle?: string | null;
  submissionsDescription?: string | null;
  submissionsButtonText?: string | null;
}

export default function BooksSidebar({
  submissionsTitle = 'Scholarly Submissions',
  submissionsDescription = 'Interested in publishing your theological research, monograph, or commentary abstract with the Scriptura Research Press?',
  submissionsButtonText = 'Review Guidelines',
}: BooksSidebarProps) {
  return (
    <aside className="lg:col-span-4 space-y-8">
      {/* Book Submission Guidelines Widget */}
      <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
        <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
          {submissionsTitle || 'Scholarly Submissions'}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {submissionsDescription ||
            'Interested in publishing your theological research, monograph, or commentary abstract with the Scriptura Research Press?'}
        </p>
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Submission guidelines not yet available"
          className="w-full text-center py-2.5 bg-primary/80 text-primary-foreground text-xs font-bold rounded cursor-not-allowed opacity-75 transition-all flex items-center justify-center gap-1.5"
        >
          <span>{submissionsButtonText || 'Review Guidelines'}</span>
          <span className="text-[10px] font-normal opacity-80">(Unavailable)</span>
        </button>
      </div>

      {/* Featured Quote */}
      <div className="bg-secondary text-secondary-foreground p-6 rounded-xl space-y-4 shadow-sm">
        <span className="text-2xl text-tertiary block">🔖</span>
        <p className="text-xs italic leading-relaxed">
          &ldquo;A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.&rdquo;
        </p>
        <span className="block text-[10px] font-bold text-tertiary uppercase tracking-widest">
          — Charles Kingsley
        </span>
      </div>
    </aside>
  );
}
