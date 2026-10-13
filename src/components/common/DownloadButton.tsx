import React from 'react';

interface DownloadButtonProps {
  url?: string;
  file?: string;
  filename?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  disabledTooltip?: string;
  ariaLabel?: string;
}

export default function DownloadButton({
  url,
  file,
  filename,
  children,
  className = '',
  disabled = false,
  disabledTooltip = 'Document currently unavailable',
  ariaLabel,
}: DownloadButtonProps) {
  const isUnavailable = disabled || (!url && !file);

  if (isUnavailable) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        aria-label={ariaLabel}
        title={disabledTooltip}
        className={`${className} opacity-60 cursor-not-allowed`}
      >
        {children}
      </button>
    );
  }

  const queryParams = new URLSearchParams();
  if (url) queryParams.set('url', url);
  if (file) queryParams.set('file', file);
  if (filename) queryParams.set('filename', filename);

  const downloadHref = `/api/download?${queryParams.toString()}`;

  return (
    <a
      href={downloadHref}
      download={filename || true}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}
