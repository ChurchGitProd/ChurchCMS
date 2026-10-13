/**
 * Safe Zoom URL validation for SCRIPTURA Digital Library.
 * Enforces HTTPS and whitelists official Zoom hostnames.
 */

export function getValidZoomUrl(url?: string | null): string | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'https:') return null;

    const hostname = parsed.hostname.toLowerCase();
    const isZoomHost =
      hostname === 'zoom.us' ||
      hostname.endsWith('.zoom.us') ||
      hostname === 'zoomgov.com' ||
      hostname.endsWith('.zoomgov.com');

    if (!isZoomHost) return null;

    return trimmed;
  } catch {
    return null;
  }
}

export interface UpcomingSeminarCandidate {
  title?: string | null;
  dateStr?: string | null;
  timeStr?: string | null;
  parsedDate: Date | null;
  zoomUrl: string;
  isFeatured: boolean;
  isUpcoming: boolean;
}

/**
 * Safely parse seminar date and time strings into a Date object.
 * Handles strings like "July 4, 2024", "Thursday, March 20, 2025", "7:00 PM EST", ranges like "7:00 PM - 8:30 PM EST".
 */
export function parseSeminarDateTime(dateStr?: string | null, timeStr?: string | null): Date | null {
  if (!dateStr || typeof dateStr !== 'string') return null;
  const cleanDate = dateStr.trim();
  if (!cleanDate) return null;

  // Extract start time if formatted as a range e.g. '7:00 PM - 8:30 PM EST'
  let cleanTime = '';
  if (timeStr && typeof timeStr === 'string') {
    const timeMatch = timeStr.match(/\b\d{1,2}:\d{2}\s*(?:AM|PM)?/i);
    if (timeMatch) {
      cleanTime = timeMatch[0];
      if (/PM/i.test(timeStr) && !/AM|PM/i.test(cleanTime)) {
        cleanTime += ' PM';
      } else if (/AM/i.test(timeStr) && !/AM|PM/i.test(cleanTime)) {
        cleanTime += ' AM';
      }
    }
  }

  // Attempt 1: Combined Date + cleanTime
  if (cleanTime) {
    const combined = Date.parse(`${cleanDate} ${cleanTime}`);
    if (!isNaN(combined)) return new Date(combined);
  }

  // Attempt 2: Date string alone
  const combinedDate = Date.parse(cleanDate);
  if (!isNaN(combinedDate)) return new Date(combinedDate);

  // Attempt 3: Strip leading weekday (e.g. 'Thursday, March 20, 2025' -> 'March 20, 2025')
  const strippedDate = cleanDate.replace(
    /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)[,\s]+/i,
    ''
  );
  const strippedParsed = Date.parse(strippedDate);
  if (!isNaN(strippedParsed)) return new Date(strippedParsed);

  return null;
}

/**
 * Determines the next upcoming seminar with a valid Zoom meeting URL from zoomInfo data.
 * Checks featuredMeeting and sessions, prioritizes earliest upcoming future seminar,
 * and gracefully falls back to the configured featured live seminar.
 */
export function resolveUpcomingZoomSeminar(
  zoomInfoData?: any
): UpcomingSeminarCandidate | null {
  if (!zoomInfoData) return null;

  const candidates: UpcomingSeminarCandidate[] = [];

  // 1. Featured Meeting Card
  const fm = zoomInfoData.featuredMeeting;
  const fmZoomUrl = getValidZoomUrl(fm?.zoomUrl);
  if (fmZoomUrl) {
    candidates.push({
      title: fm?.title || 'Next Live Zoom Seminar',
      dateStr: fm?.date || '',
      timeStr: fm?.time || '',
      parsedDate: parseSeminarDateTime(fm?.date, fm?.time),
      zoomUrl: fmZoomUrl,
      isFeatured: true,
      isUpcoming: true,
    });
  }

  // 2. Scheduled Sessions List
  const sessions = Array.isArray(zoomInfoData.sessions) ? zoomInfoData.sessions : [];
  for (const session of sessions) {
    const sUrl = getValidZoomUrl(session?.actionUrl || session?.zoomUrl);
    if (sUrl) {
      const isUpcoming = !session?.status || /upcoming/i.test(session.status);
      candidates.push({
        title: session?.title || 'Seminar Session',
        dateStr: session?.date || '',
        timeStr: session?.timeOrActionText || '',
        parsedDate: parseSeminarDateTime(session?.date, session?.timeOrActionText),
        zoomUrl: sUrl,
        isFeatured: false,
        isUpcoming,
      });
    }
  }

  if (candidates.length === 0) return null;

  const now = Date.now();
  // Filter candidates that are upcoming and strictly in the future
  const futureCandidates = candidates.filter(
    (c) => c.isUpcoming && c.parsedDate && c.parsedDate.getTime() >= now
  );

  if (futureCandidates.length > 0) {
    // Sort chronologically ascending (earliest future session first)
    futureCandidates.sort(
      (a, b) => (a.parsedDate?.getTime() ?? 0) - (b.parsedDate?.getTime() ?? 0)
    );
    return futureCandidates[0];
  }

  // Fallback: If no future date is found (e.g. content dates are relative/mock/historical),
  // prefer the explicitly designated Featured Meeting ("NEXT LIVE SESSION")
  const featured = candidates.find((c) => c.isFeatured);
  if (featured) return featured;

  // Otherwise pick first upcoming session with a valid link
  const upcomingSession = candidates.find((c) => c.isUpcoming);
  if (upcomingSession) return upcomingSession;

  return candidates[0];
}
