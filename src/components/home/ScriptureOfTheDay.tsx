'use client';

import { useState, useEffect } from 'react';
import { Share2, Bookmark, Check } from 'lucide-react';

interface ScriptureData {
  verse?: string | null;
  reference?: string | null;
}

interface ScriptureOfTheDayProps {
  data?: ScriptureData | null;
}

interface BookmarkItem {
  id: string;
  verse: string;
  reference: string;
  savedAt: string;
}

export default function ScriptureOfTheDay({ data }: ScriptureOfTheDayProps) {
  const verse = data?.verse || 'Your word is a lamp to my feet and a light to my path.';
  const reference = data?.reference || 'Psalm 119:105 (ESV)';

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isShared, setIsShared] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Stable ID for this Scripture quote
  const scriptureId = `scripture-${reference.replace(/\s+/g, '-').toLowerCase()}`;

  // Check initial bookmark status from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('scriptura_bookmarks');
      if (stored) {
        const bookmarks: BookmarkItem[] = JSON.parse(stored);
        const exists = bookmarks.some((b) => b.id === scriptureId || b.verse === verse);
        setIsBookmarked(exists);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [scriptureId, verse]);

  // Toast auto-dismiss timer
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Handle Share functionality
  const handleShare = async () => {
    const shareText = `“${verse}”\n— ${reference}\n\nSCRIPTURA Digital Library`;
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://scriptura.library';

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `Scripture of the Day — ${reference}`,
          text: shareText,
          url: shareUrl,
        });
        setIsShared(true);
        setToastMessage('Scripture shared successfully.');
        setTimeout(() => setIsShared(false), 2500);
      } catch (err: unknown) {
        // Gracefully ignore user abort / dismissal
        if (err instanceof Error && err.name !== 'AbortError') {
          copyToClipboard(shareText);
        }
      }
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setIsShared(true);
        setToastMessage('Scripture copied to clipboard.');
        setTimeout(() => setIsShared(false), 2500);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setIsShared(true);
        setToastMessage('Scripture copied to clipboard.');
        setTimeout(() => setIsShared(false), 2500);
      }
    } catch {
      setToastMessage('Unable to copy scripture.');
    }
  };

  // Handle Bookmark toggle
  const handleToggleBookmark = () => {
    try {
      const stored = localStorage.getItem('scriptura_bookmarks');
      let bookmarks: BookmarkItem[] = stored ? JSON.parse(stored) : [];

      if (isBookmarked) {
        bookmarks = bookmarks.filter((b) => b.id !== scriptureId && b.verse !== verse);
        setIsBookmarked(false);
        setToastMessage('Bookmark removed.');
      } else {
        const newBookmark: BookmarkItem = {
          id: scriptureId,
          verse,
          reference,
          savedAt: new Date().toISOString(),
        };
        bookmarks.push(newBookmark);
        setIsBookmarked(true);
        setToastMessage('Scripture bookmarked to library.');
      }

      localStorage.setItem('scriptura_bookmarks', JSON.stringify(bookmarks));
      window.dispatchEvent(new Event('scriptura-bookmarks-update'));
    } catch {
      setToastMessage('Bookmark updated.');
    }
  };

  return (
    <section
      className="py-12 border-b border-border relative transition-colors duration-200"
      style={{ background: 'var(--blue-tint-4)' }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <span className="text-xs font-bold tracking-widest text-tertiary uppercase">
          Scripture of the Day
        </span>
        <blockquote className="text-2xl sm:text-3xl font-heading italic text-primary leading-relaxed">
          &ldquo;{verse}&rdquo;
        </blockquote>
        <cite className="block text-sm font-sans font-semibold text-muted-foreground not-italic">
          — {reference}
        </cite>
        <div className="pt-2 flex justify-center items-center gap-3">
          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className={`p-2.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              isShared
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-card/80 hover:bg-muted text-muted-foreground hover:text-primary border border-border/60 shadow-xs'
            }`}
            title="Share Scripture of the Day"
            aria-label="Share Scripture of the Day"
          >
            {isShared ? <Check className="w-5 h-5 text-current animate-in zoom-in-75 duration-200" /> : <Share2 className="w-5 h-5" />}
          </button>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            aria-pressed={mounted ? isBookmarked : false}
            className={`p-2.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              mounted && isBookmarked
                ? 'bg-tertiary/15 text-tertiary border border-tertiary/40 shadow-xs'
                : 'bg-card/80 hover:bg-muted text-muted-foreground hover:text-primary border border-border/60 shadow-xs'
            }`}
            title={mounted && isBookmarked ? 'Remove bookmark' : 'Bookmark Scripture'}
            aria-label={mounted && isBookmarked ? 'Remove bookmark' : 'Bookmark Scripture'}
          >
            <Bookmark
              className={`w-5 h-5 transition-all duration-200 ${
                mounted && isBookmarked ? 'fill-tertiary text-tertiary scale-105' : 'text-current'
              }`}
            />
          </button>
        </div>

        {/* Inline Feedback Toast Notification */}
        {toastMessage && (
          <div
            role="status"
            aria-live="polite"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium shadow-md animate-in fade-in slide-in-from-bottom-2 duration-200 mx-auto"
          >
            <Check className="w-3.5 h-3.5 text-tertiary" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
}
