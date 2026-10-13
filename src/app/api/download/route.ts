import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

// Explicit allowlist of external hosts permitted for proxied download
const ALLOWED_EXTERNAL_HOSTS = new Set([
  'uxmagic.blob.core.windows.net',
]);

// Allowed file extensions
const ALLOWED_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.pdf']);

const MIME_TYPES: Record<string, string> = {
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

// Sanitize filename to prevent header injection or path anomalies
function sanitizeFilename(name: string): string {
  const sanitized = name.replace(/[^a-zA-Z0-9._-]/g, '_');
  return sanitized.length > 0 ? sanitized : 'download';
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawUrl = searchParams.get('url');
  const localFile = searchParams.get('file');
  const filename = searchParams.get('filename') || 'download';

  const cleanFilename = sanitizeFilename(filename);

  // Case 1: Approved external URL download (e.g. Azure Blob images)
  if (rawUrl) {
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(rawUrl);
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    if (parsedUrl.protocol !== 'https:') {
      return NextResponse.json({ error: 'Only HTTPS URLs are permitted' }, { status: 400 });
    }

    const hostname = parsedUrl.hostname.toLowerCase();
    if (!ALLOWED_EXTERNAL_HOSTS.has(hostname)) {
      return NextResponse.json({ error: 'External host is not permitted' }, { status: 403 });
    }

    // Restrict to known safe agent-images path
    if (!parsedUrl.pathname.startsWith('/public/agent-images/')) {
      return NextResponse.json({ error: 'Path not permitted' }, { status: 403 });
    }

    const ext = path.extname(parsedUrl.pathname).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      return NextResponse.json({ error: 'File type not permitted' }, { status: 403 });
    }

    try {
      const response = await fetch(parsedUrl.toString());

      if (!response.ok) {
        return NextResponse.json(
          { error: `Upstream resource returned status ${response.status}` },
          { status: response.status === 404 ? 404 : 502 }
        );
      }

      const contentType = response.headers.get('content-type') || 'application/octet-stream';
      const contentLength = response.headers.get('content-length');

      const headers = new Headers();
      headers.set('Content-Disposition', `attachment; filename="${cleanFilename}"`);
      headers.set('Content-Type', contentType);
      if (contentLength) {
        headers.set('Content-Length', contentLength);
      }
      headers.set('Cache-Control', 'public, max-age=86400, immutable');

      return new Response(response.body, {
        status: 200,
        headers,
      });
    } catch (err) {
      console.error('Error fetching remote download asset:', err);
      return NextResponse.json({ error: 'Failed to retrieve asset' }, { status: 502 });
    }
  }

  // Case 2: Local document path in public/documents/ or public/uploads/
  if (localFile) {
    if (localFile.includes('..')) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    }

    const publicDir = path.resolve(process.cwd(), 'public');
    const documentsDir = path.resolve(publicDir, 'documents');
    const uploadsDir = path.resolve(publicDir, 'uploads');

    // Strip leading slash if passed as "/uploads/filename.pdf"
    const normalizedLocal = localFile.startsWith('/') ? localFile.slice(1) : localFile;

    let resolvedPath: string;
    if (normalizedLocal.startsWith('uploads/') || normalizedLocal.startsWith('documents/')) {
      resolvedPath = path.resolve(publicDir, normalizedLocal);
    } else {
      const inDocs = path.resolve(documentsDir, normalizedLocal);
      const inUploads = path.resolve(uploadsDir, normalizedLocal);
      resolvedPath = fs.existsSync(inDocs) ? inDocs : inUploads;
    }

    // Prevent directory traversal attacks: must reside strictly within documentsDir or uploadsDir
    const isInsideDocs = resolvedPath.startsWith(documentsDir + path.sep);
    const isInsideUploads = resolvedPath.startsWith(uploadsDir + path.sep);

    if (!isInsideDocs && !isInsideUploads) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      return NextResponse.json({ error: 'File type not permitted' }, { status: 403 });
    }

    if (!fs.existsSync(resolvedPath)) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 });
    }

    const stat = fs.statSync(resolvedPath);
    if (!stat.isFile()) {
      return NextResponse.json({ error: 'Not a file' }, { status: 400 });
    }

    const stream = fs.createReadStream(resolvedPath);
    const readable = new ReadableStream({
      start(controller) {
        stream.on('data', (chunk) => controller.enqueue(chunk));
        stream.on('end', () => controller.close());
        stream.on('error', (err) => controller.error(err));
      },
    });

    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${cleanFilename}"`);
    headers.set('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
    headers.set('Content-Length', stat.size.toString());

    return new Response(readable, {
      status: 200,
      headers,
    });
  }

  return NextResponse.json({ error: 'No download target specified' }, { status: 400 });
}
