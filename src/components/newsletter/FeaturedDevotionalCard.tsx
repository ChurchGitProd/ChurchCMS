'use client';

import { useState } from 'react';
import { sanitizeImageUrl } from '@/lib/media';

interface FeaturedDevotionalData {
  badge?: string | null;
  tag?: string | null;
  title: string;
  scripture: string;
  content: string;
  date: string;
  coverImage?: string | null;
}

interface FeaturedDevotionalCardProps {
  devotional?: FeaturedDevotionalData | null;
}

export default function FeaturedDevotionalCard({
  devotional,
}: FeaturedDevotionalCardProps) {
  const [expanded, setExpanded] = useState(false);

  const badge = devotional?.badge || "TODAY'S DEVOTIONAL";
  const tag = devotional?.tag || 'Daily';
  const title = devotional?.title || 'The Peace That Passes Understanding';
  const scripture =
    devotional?.scripture ||
    '"And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." — Philippians 4:7';
  const content =
    devotional?.content ||
    'In a world filled with anxiety and uncertainty, the apostle Paul points us to a peace that transcends human comprehension. This peace is not the absence of trouble, but the presence of God in the midst of it. Today, let us explore how this divine peace guards our hearts and minds through Christ.';
  const date = devotional?.date || 'June 30, 2024';

  const fallbackBg =
    'https://images.unsplash.com/photo-1504052433769-3ad39850e9c9?w=1200&h=400&fit=crop';
  const displayBg = devotional?.coverImage || fallbackBg;

  return (
    <div
      id="todays-devotional"
      className="bg-primary text-primary-foreground p-8 rounded-xl space-y-6 border border-primary/20 shadow-md relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src={sanitizeImageUrl(displayBg)}
          alt="Bible background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-start">
          <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">
            {badge}
          </span>
          <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">
            {tag}
          </span>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-heading font-bold">{title}</h2>
          <p className="text-sm text-primary-foreground/90 leading-relaxed font-sans italic border-l-2 border-tertiary pl-4">
            {scripture}
          </p>
          <p className="text-xs text-primary-foreground/80 leading-relaxed">
            {content}
          </p>
          {expanded && (
            <div className="pt-3 border-t border-primary-foreground/20 text-xs text-primary-foreground/85 leading-relaxed space-y-2">
              <p>
                When Paul wrote to the Philippian church, he was writing from a Roman prison cell. Yet, his message was marked not by despair, but by profound rejoicing. He instructs the believers to present their requests to God with thanksgiving, promising that divine peace will serve as a watchful sentry over their inner life.
              </p>
              <p>
                As we begin this day, cast your anxieties upon the Lord. Rest in the assurance that His sovereign hand sustains you, and let His unshakeable peace guard your thoughts throughout every endeavor.
              </p>
            </div>
          )}
        </div>
        <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-tertiary">📅</span> {date}
          </span>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-tertiary font-bold hover:underline flex items-center gap-1 transition-colors"
          >
            <span>{expanded ? 'Show Less' : 'Read Full Devotional'}</span>
            <span className="text-sm">{expanded ? '↑' : '→'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
