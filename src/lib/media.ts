/**
 * Utility to sanitize and normalize image URLs.
 *
 * Resolves TinaCloud media resolution quirks where TinaCloud's GraphQL API
 * prepends `https://assets.tina.io/<clientId>/` to:
 * 1. Absolute external URLs (e.g. Unsplash, Azure Blob) -> Strips the prepended assets.tina.io
 * 2. Local public repository assets (e.g. /hero-image.webp, /uploads/*) -> Returns the clean local path
 * 3. Paths with spaces -> URL encodes them (e.g. /hero image.webp -> /hero%20image.webp)
 */
export function sanitizeImageUrl(url?: string | null): string {
  if (!url || typeof url !== 'string') return '';

  const trimmed = url.trim();

  // 1. Check if TinaCMS / TinaCloud prepended uploads or assets.tina.io to an absolute http(s) URL
  // e.g. "/uploadshttps://...", "/uploads/https://...", "https://assets.tina.io/<id>/uploadshttps://...", "https://assets.tina.io/<id>https://..."
  const nestedHttpMatch = trimmed.match(
    /(?:https?:\/\/[^\/]*assets\.tina\.io\/[^\/]+[\/]?)?(?:\/?uploads[\/]?)?(https?:\/\/.+)$/i
  );
  if (nestedHttpMatch && nestedHttpMatch[1]) {
    const nested = nestedHttpMatch[1];
    if (trimmed !== nested) {
      return nested;
    }
  }

  // 2. TinaCloud prepended its domain to a local repo asset in public/ (e.g. /hero, /uploads, /documents, /images)
  // e.g. "https://assets.tina.io/8806b500-960f-4f66-b582-b1fe3d6c3111/hero image.webp"
  // or "https://assets.tina.io/8806b500-960f-4f66-b582-b1fe3d6c3111/uploads/Qumran Caves.jpg"
  const localMatch = trimmed.match(
    /^https?:\/\/[^\/]*assets\.tina\.io\/[^\/]+(\/(?:hero|uploads|documents|images)[^?#]*)/i
  );
  if (localMatch && localMatch[1]) {
    return encodeURI(localMatch[1]);
  }

  // 3. Fallback for any Tina Cloud URL pointing to static media files that exist in the local public folder
  const localRootMatch = trimmed.match(
    /^https?:\/\/[^\/]*assets\.tina\.io\/[^\/]+(\/[^\/]+\.(?:webp|png|jpg|jpeg|gif|svg|ico))/i
  );
  if (localRootMatch && localRootMatch[1]) {
    return encodeURI(localRootMatch[1]);
  }

  // 4. Standalone relative path (e.g. "/hero image.webp")
  if (trimmed.startsWith('/')) {
    return encodeURI(trimmed);
  }

  return trimmed;
}
