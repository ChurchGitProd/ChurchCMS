import React, { useState, useEffect, useRef } from 'react';
import { wrapFieldsWithMeta } from 'tinacms';

/**
 * Custom TinaCMS field component for YouTube Video URL.
 * Automatically fetches the video duration via /api/youtube/duration and updates
 * the 'duration' field in the same video document.
 */
export const YouTubeUrlField = wrapFieldsWithMeta((props: any) => {
  const { input, field, form } = props;
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'info' | 'success' | 'warning' | 'error'>('info');
  const lastFetchedUrlRef = useRef<string>('');

  const fetchDuration = async (urlToFetch: string, force = false) => {
    const trimmed = (urlToFetch || '').trim();
    if (!trimmed) {
      setStatusMessage(null);
      return;
    }

    if (!force && trimmed === lastFetchedUrlRef.current) {
      return;
    }

    // Basic quick check to ensure it looks like a YouTube link before hitting API
    const isYt =
      trimmed.includes('youtube.com') ||
      trimmed.includes('youtu.be') ||
      trimmed.includes('youtube-nocookie.com');

    if (!isYt) {
      setStatusMessage('Please enter a valid YouTube URL (e.g. https://www.youtube.com/watch?v=...)');
      setStatusType('warning');
      return;
    }

    setLoading(true);
    setStatusMessage('Querying YouTube for duration...');
    setStatusType('info');

    try {
      const res = await fetch(`/api/youtube/duration?url=${encodeURIComponent(trimmed)}`);
      const data = await res.json();

      lastFetchedUrlRef.current = trimmed;

      if (data.success && data.duration) {
        setStatusMessage(`Auto-detected duration: ${data.duration}`);
        setStatusType('success');

        // Automatically update the duration field in the same TinaCMS record
        if (form && typeof form.change === 'function') {
          form.change('duration', data.duration);
        }
      } else if (data.error) {
        setStatusMessage(data.error);
        setStatusType(data.canManualEdit ? 'warning' : 'error');
      } else {
        setStatusMessage('Unable to auto-detect duration. You may enter it manually.');
        setStatusType('warning');
      }
    } catch (err: any) {
      setStatusMessage('Network error checking duration. Manual entry is enabled.');
      setStatusType('warning');
    } finally {
      setLoading(false);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    input.onBlur(e);
    if (input.value && input.value !== lastFetchedUrlRef.current) {
      fetchDuration(input.value);
    }
  };

  const handleManualDetect = (e: React.MouseEvent) => {
    e.preventDefault();
    fetchDuration(input.value, true);
  };

  return (
    <div style={{ width: '100%' }}>
      <input
        type="text"
        id={input.name}
        name={input.name}
        value={input.value || ''}
        onChange={input.onChange}
        onBlur={handleBlur}
        placeholder="https://www.youtube.com/watch?v=..."
        style={{
          width: '100%',
          padding: '10px 12px',
          fontSize: '14px',
          borderRadius: '6px',
          border: '1px solid #cbd5e1',
          outline: 'none',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '6px',
          fontSize: '12px',
          lineHeight: '1.4',
        }}
      >
        <div style={{ flex: 1, marginRight: '8px' }}>
          {loading && (
            <span style={{ color: '#305cde', fontWeight: 500 }}>
              ⏳ Querying YouTube for duration...
            </span>
          )}
          {!loading && statusMessage && (
            <span
              style={{
                color:
                  statusType === 'success'
                    ? '#15803d'
                    : statusType === 'warning'
                    ? '#b45309'
                    : statusType === 'error'
                    ? '#b91c1c'
                    : '#475569',
                fontWeight: statusType === 'success' ? 600 : 400,
              }}
            >
              {statusType === 'success' ? '✓ ' : 'ℹ '}
              {statusMessage}
            </span>
          )}
          {!loading && !statusMessage && (
            <span style={{ color: '#64748b' }}>
              Duration will be retrieved automatically from YouTube when entered.
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleManualDetect}
          disabled={loading || !input.value}
          style={{
            padding: '4px 10px',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            borderRadius: '4px',
            border: '1px solid #cbd5e1',
            backgroundColor: loading || !input.value ? '#f1f5f9' : '#eff4ff',
            color: loading || !input.value ? '#94a3b8' : '#1d4b8a',
            cursor: loading || !input.value ? 'not-allowed' : 'pointer',
            flexShrink: 0,
            transition: 'all 0.15s ease',
          }}
          title="Detect duration from YouTube"
        >
          {loading ? 'Detecting...' : 'Detect Duration'}
        </button>
      </div>
    </div>
  );
});

export default YouTubeUrlField;
