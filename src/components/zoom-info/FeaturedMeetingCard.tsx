'use client';

import { useState } from 'react';
import { getValidZoomUrl } from '@/lib/zoom';

interface FeaturedMeetingCardProps {
  featuredMeeting?: {
    badge?: string | null;
    tag?: string | null;
    title?: string | null;
    description?: string | null;
    date?: string | null;
    time?: string | null;
    duration?: string | null;
    buttonText?: string | null;
    zoomUrl?: string | null;
  } | null;
  meetingId?: string | null;
  passcode?: string | null;
}

export default function FeaturedMeetingCard({
  featuredMeeting,
  meetingId = '845-291-0347',
  passcode = 'SCRIPTURA2024',
}: FeaturedMeetingCardProps) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const badge = featuredMeeting?.badge || 'NEXT LIVE SESSION';
  const tag = featuredMeeting?.tag || 'This Thursday';
  const title =
    featuredMeeting?.title || 'The Doctrine of the Trinity: A Biblical Foundation';
  const description =
    featuredMeeting?.description ||
    'Join Dr. Charles Vance for an in-depth exploration of the Trinitarian doctrine as revealed in Scripture. This session will examine key passages in both Old and New Testaments that illuminate the nature of God as Father, Son, and Holy Spirit.';
  const date = featuredMeeting?.date || 'July 4, 2024';
  const time = featuredMeeting?.time || '7:00 PM EST';
  const duration = featuredMeeting?.duration || '90 Minutes';
  const buttonText = featuredMeeting?.buttonText || 'Join Meeting';
  const validZoomUrl = getValidZoomUrl(featuredMeeting?.zoomUrl);

  const actualMeetingId = meetingId || '845-291-0347';
  const actualPasscode = passcode || 'SCRIPTURA2024';

  const copyToClipboard = (text: string, type: 'id' | 'pass') => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      if (type === 'id') {
        setCopiedId(true);
        setTimeout(() => setCopiedId(false), 2000);
      } else {
        setCopiedPass(true);
        setTimeout(() => setCopiedPass(false), 2000);
      }
    }
  };

  return (
    <>
      <div className="bg-primary text-primary-foreground p-8 rounded-xl space-y-6 border border-primary/20 shadow-md">
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
          <p className="text-sm text-primary-foreground/90 leading-relaxed font-sans">
            {description}
          </p>
        </div>
        <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-tertiary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span>{date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-tertiary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{time}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-tertiary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m22 8-6 4 6 4V8Z" />
                <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
              </svg>
              <span>{duration}</span>
            </span>
          </div>
          {validZoomUrl ? (
            <div className="flex items-center gap-3">
              <a
                href={validZoomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-tertiary text-primary font-bold text-xs rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Join Zoom Class</span>
                <span>↗</span>
              </a>
              <button
                type="button"
                onClick={() => setShowJoinModal(true)}
                className="text-xs text-primary-foreground/80 hover:text-white underline cursor-pointer"
              >
                Meeting Info
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowJoinModal(true)}
              className="px-6 py-2.5 bg-tertiary text-primary font-bold text-xs rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider cursor-pointer"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>

      {/* Interactive Meeting Access Modal */}
      {showJoinModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowJoinModal(false)}
        >
          <div
            className="bg-card text-card-foreground border border-border rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">
                  Seminar Access
                </span>
                <h3
                  id="join-modal-title"
                  className="text-xl font-heading font-bold text-primary mt-1"
                >
                  Join Zoom Meeting
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowJoinModal(false)}
                className="text-muted-foreground hover:text-primary p-1 rounded-lg text-lg leading-none cursor-pointer"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              Use the credentials below in the Zoom app or join directly via the official Zoom web portal.
            </p>

            <div className="space-y-3 bg-muted/60 p-4 rounded-xl border border-border">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground font-medium">Meeting ID:</span>
                <div className="flex items-center gap-2">
                  <code className="font-mono font-bold text-primary text-sm">
                    {actualMeetingId}
                  </code>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(actualMeetingId, 'id')}
                    className="px-2 py-1 bg-background hover:bg-muted text-[10px] font-semibold text-primary rounded border border-border transition-colors cursor-pointer"
                  >
                    {copiedId ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs pt-2 border-t border-border">
                <span className="text-muted-foreground font-medium">Passcode:</span>
                <div className="flex items-center gap-2">
                  <code className="font-mono font-bold text-primary text-sm">
                    {actualPasscode}
                  </code>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(actualPasscode, 'pass')}
                    className="px-2 py-1 bg-background hover:bg-muted text-[10px] font-semibold text-primary rounded border border-border transition-colors cursor-pointer"
                  >
                    {copiedPass ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {validZoomUrl ? (
                <a
                  href={validZoomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground text-center font-bold text-xs rounded hover:bg-primary/90 transition-all uppercase tracking-wider"
                >
                  Join Zoom Class ↗
                </a>
              ) : (
                <a
                  href="https://zoom.us/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground text-center font-bold text-xs rounded hover:bg-primary/90 transition-all uppercase tracking-wider"
                >
                  Open Zoom Portal ↗
                </a>
              )}
              <button
                type="button"
                onClick={() => setShowJoinModal(false)}
                className="px-4 py-2.5 bg-muted text-muted-foreground hover:text-primary text-center font-bold text-xs rounded hover:bg-muted/80 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
