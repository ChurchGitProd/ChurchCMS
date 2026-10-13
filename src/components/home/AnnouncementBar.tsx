import { BookOpen } from 'lucide-react';
import { client } from '../../../tina/__generated__/client';
import { getValidZoomUrl, resolveUpcomingZoomSeminar } from '@/lib/zoom';

interface AnnouncementBarProps {
  text?: string | null;
  subtext?: string | null;
  zoomUrl?: string | null;
  zoomInfoData?: any;
}

export default async function AnnouncementBar({
  text,
  subtext,
  zoomUrl,
  zoomInfoData,
}: AnnouncementBarProps) {
  if (!text) return null;

  let activeZoomUrl: string | null = getValidZoomUrl(zoomUrl);

  // If no explicit valid zoomUrl was passed as prop, resolve the next upcoming seminar from TinaCMS
  if (!activeZoomUrl) {
    try {
      let data = zoomInfoData;
      if (!data) {
        const zoomInfoRes = await client.queries.zoomInfo(
          { relativePath: 'index.md' },
          { fetchOptions: { cache: 'no-store' } }
        );
        data = zoomInfoRes?.data?.zoomInfo;
      }
      const upcoming = resolveUpcomingZoomSeminar(data);
      activeZoomUrl = upcoming?.zoomUrl || null;
    } catch {
      activeZoomUrl = null;
    }
  }

  // Format subtext: ensure single arrow if external link is active
  const renderSubtext = () => {
    if (!subtext) return null;

    if (activeZoomUrl) {
      const displayText =
        subtext.endsWith('↗') || subtext.endsWith('→') ? subtext : `${subtext} ↗`;

      return (
        <a
          href={activeZoomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline text-tertiary font-medium hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-tertiary rounded-sm cursor-pointer transition-colors"
          aria-label={`${subtext} (opens live Zoom meeting in a new tab)`}
        >
          {displayText}
        </a>
      );
    }

    return <span className="hidden md:inline text-tertiary font-medium">{subtext}</span>;
  };

  // If subtext is empty and text mentions Zoom / Seminar, allow text itself to be linked
  const isTextSeminarNotice =
    !subtext && activeZoomUrl && /zoom|seminar/i.test(text || '');

  return (
    <div className="bg-secondary text-secondary-foreground text-xs py-2 px-4 text-center tracking-wider font-sans border-b border-border flex items-center justify-center gap-2">
      <BookOpen className="w-4 h-4 text-tertiary flex-shrink-0" />
      {isTextSeminarNotice && activeZoomUrl ? (
        <a
          href={activeZoomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-tertiary rounded-sm cursor-pointer transition-colors text-tertiary font-medium"
          aria-label={`${text} (opens live Zoom meeting in a new tab)`}
        >
          {text.endsWith('↗') || text.endsWith('→') ? text : `${text} ↗`}
        </a>
      ) : (
        <span>{text}</span>
      )}
      {subtext && (
        <>
          <span className="hidden md:inline">|</span>
          {renderSubtext()}
        </>
      )}
    </div>
  );
}
