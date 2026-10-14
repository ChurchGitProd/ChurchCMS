'use client';

import { useState } from 'react';
import { sanitizeImageUrl } from '@/lib/media';

interface MeetingDetailCardsProps {
  speakerCard?: {
    title?: string | null;
    name?: string | null;
    role?: string | null;
    bio?: string | null;
    avatarUrl?: string | null;
  } | null;
  meetingAccessCard?: {
    title?: string | null;
    platform?: string | null;
    meetingId?: string | null;
    passcode?: string | null;
  } | null;
  preparationCard?: {
    title?: string | null;
    subtitle?: string | null;
    reading1?: string | null;
    reading2?: string | null;
    reading3?: string | null;
  } | null;
}

export default function MeetingDetailCards({
  speakerCard,
  meetingAccessCard,
  preparationCard,
}: MeetingDetailCardsProps) {
  const [copiedField, setCopiedField] = useState<'id' | 'pass' | null>(null);

  const speakerTitle = speakerCard?.title || 'Featured Speaker';
  const speakerName = speakerCard?.name || 'Dr. Charles Vance';
  const speakerRole = speakerCard?.role || 'Professor of Systematic Theology';
  const speakerBio =
    speakerCard?.bio ||
    'Dr. Vance has over 25 years of teaching experience and specializes in Trinitarian theology and Christology.';
  const speakerAvatar =
    speakerCard?.avatarUrl ||
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop';

  const accessTitle = meetingAccessCard?.title || 'Meeting Access';
  const accessPlatform = meetingAccessCard?.platform || 'Zoom Platform';
  const meetingId = meetingAccessCard?.meetingId || '845-291-0347';
  const passcode = meetingAccessCard?.passcode || 'SCRIPTURA2024';

  const prepTitle = preparationCard?.title || 'Preparation';
  const prepSubtitle = preparationCard?.subtitle || 'Recommended Reading';
  const reading1 = preparationCard?.reading1 || 'Genesis 1:26-27';
  const reading2 = preparationCard?.reading2 || 'Matthew 28:19';
  const reading3 = preparationCard?.reading3 || '2 Corinthians 13:14';

  const copyText = (text: string, field: 'id' | 'pass') => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Speaker */}
      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
        <div className="w-20 h-20 rounded-lg bg-primary/10 overflow-hidden">
          <img
            src={sanitizeImageUrl(speakerAvatar)}
            alt={speakerName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-primary">
            {speakerTitle}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{speakerName}</p>
          <p className="text-[10px] text-muted-foreground/70">{speakerRole}</p>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {speakerBio}
        </p>
      </div>

      {/* Card 2: Meeting Access */}
      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <svg
            className="w-6 h-6 text-tertiary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-primary">
            {accessTitle}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{accessPlatform}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <p>
              <span className="font-medium text-primary">Meeting ID:</span>{' '}
              <span className="font-mono">{meetingId}</span>
            </p>
            <button
              type="button"
              onClick={() => copyText(meetingId, 'id')}
              className="text-[10px] font-medium text-tertiary hover:underline"
              aria-label="Copy meeting ID"
            >
              {copiedField === 'id' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <p>
              <span className="font-medium text-primary">Passcode:</span>{' '}
              <span className="font-mono">{passcode}</span>
            </p>
            <button
              type="button"
              onClick={() => copyText(passcode, 'pass')}
              className="text-[10px] font-medium text-tertiary hover:underline"
              aria-label="Copy passcode"
            >
              {copiedField === 'pass' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      {/* Card 3: Preparation */}
      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <svg
            className="w-6 h-6 text-tertiary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0-5H20" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-heading font-bold text-primary">
            {prepTitle}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">{prepSubtitle}</p>
        </div>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <svg
              className="w-3.5 h-3.5 text-tertiary mt-0.5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{reading1}</span>
          </li>
          <li className="flex items-start gap-2">
            <svg
              className="w-3.5 h-3.5 text-tertiary mt-0.5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{reading2}</span>
          </li>
          <li className="flex items-start gap-2">
            <svg
              className="w-3.5 h-3.5 text-tertiary mt-0.5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{reading3}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
