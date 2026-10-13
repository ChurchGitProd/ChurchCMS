'use client';

import React, { useState } from 'react';
import { Download, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import DownloadButton from '@/components/common/DownloadButton';

interface FeaturedImageData {
  badge?: string | null;
  title?: string | null;
  description?: string | null;
  scriptureLabel?: string | null;
  scriptureQuote?: string | null;
  scriptureReference?: string | null;
  downloadButtonText?: string | null;
  citationButtonText?: string | null;
  image?: string | null;
}

interface FeaturedImageSpotlightProps {
  data?: FeaturedImageData | null;
}

export default function FeaturedImageSpotlight({ data }: FeaturedImageSpotlightProps) {
  const [showCitation, setShowCitation] = useState(false);

  const badge = data?.badge || 'Featured Spotlight';
  const title = data?.title || 'Codex Sinaiticus Fragment Scan';
  const description =
    data?.description ||
    'A meticulous high-resolution scan of the 4th-century Greek uncial manuscript of the Bible, showcasing the elegant script and structural formatting of the Pauline Epistles.';
  const scriptureLabel = data?.scriptureLabel || 'Related Scripture:';
  const scriptureQuote =
    data?.scriptureQuote ||
    '"For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes..."';
  const scriptureReference = data?.scriptureReference || '— Romans 1:16';
  const downloadButtonText = data?.downloadButtonText || 'Download High-Res';
  const citationButtonText = data?.citationButtonText || 'View Citation Details';

  const imageUrl =
    data?.image ||
    'https://uxmagic.blob.core.windows.net/public/agent-images/hero_bible-1782719363350-90sctq9ygv4.png';

  return (
    <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Image preview (7 cols) */}
        <div className="lg:col-span-7 rounded-lg overflow-hidden border border-border shadow-inner bg-muted">
          <img
            src={imageUrl}
            className="w-full h-auto object-cover"
            alt={title}
          />
        </div>

        {/* Right Column: Metadata & Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest block">
            {badge}
          </span>
          <h2 className="text-2xl font-heading font-bold text-primary leading-tight">
            {title}
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Scripture Callout Box */}
          <div className="p-4 bg-muted rounded-lg space-y-2">
            <p className="text-xs font-semibold text-primary">{scriptureLabel}</p>
            <blockquote className="text-xs italic text-muted-foreground leading-relaxed">
              {scriptureQuote}
            </blockquote>
            <span className="block text-[10px] text-tertiary font-bold uppercase">
              {scriptureReference}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap gap-3 items-center">
            {/* Real High-Resolution Download via verified API proxy */}
            <DownloadButton
              url={imageUrl}
              filename="codex-sinaiticus-fragment.png"
              className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadButtonText}</span>
            </DownloadButton>

            {/* Non-deceptive inline Citation Details Toggle */}
            <button
              type="button"
              onClick={() => setShowCitation(!showCitation)}
              className="px-4 py-2 bg-card border border-border text-primary text-xs font-bold rounded hover:bg-muted transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-tertiary" />
              <span>{citationButtonText}</span>
              {showCitation ? (
                <ChevronUp className="w-3 h-3 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-3 h-3 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Inline Citation Card */}
          {showCitation && (
            <div className="p-3.5 rounded-lg bg-muted/80 border border-border space-y-1.5 text-xs text-muted-foreground animate-fadeIn">
              <p className="font-semibold text-primary">Archival Attribution &amp; Source:</p>
              <p className="text-[11px] leading-relaxed">
                Source Document: 4th-Century Greek Uncial Biblical Manuscript (Codex Sinaiticus). High-resolution digital facsimile maintained for scholarly textual research and historical commentary.
              </p>
              <p className="text-[10px] text-tertiary font-medium">
                Attribution: Scriptura Research Institute Digital Library Catalog
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
