import Link from 'next/link';
import DownloadButton from '@/components/common/DownloadButton';

export interface ArchiveItemData {
  slug: string;
  title: string;
  category: string;
  catalogRef: string;
  dateLabel: string;
  attributionRole?: string | null;
  attributionName?: string | null;
  description: string;
  actionLabel?: string | null;
  actionType?: 'download' | 'link' | null;
  pdfFile?: string | null;
}

interface ArchiveItemCardProps {
  item: ArchiveItemData;
}

export default function ArchiveItemCard({ item }: ArchiveItemCardProps) {
  const isDownload = item.actionType === 'download' || item.actionLabel?.toLowerCase().includes('pdf');

  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:border-tertiary transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <span className="text-xs font-bold text-tertiary uppercase tracking-wider">
          {item.category}
        </span>
        <span className="text-xs text-muted-foreground">
          {item.dateLabel} | Catalog: {item.catalogRef}
        </span>
      </div>
      <h3 className="text-base font-heading font-bold text-primary mb-2">
        <Link
          href={`/archives/${item.slug}`}
          className="hover:text-tertiary transition-colors"
        >
          {item.title}
        </Link>
      </h3>
      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
        {item.description}
      </p>
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {item.attributionRole && item.attributionName ? (
            `${item.attributionRole}: ${item.attributionName}`
          ) : item.attributionName ? (
            item.attributionName
          ) : null}
        </span>
        <div>
          {isDownload ? (
            <DownloadButton
              file={item.pdfFile || undefined}
              filename={item.pdfFile ? `${item.slug}.pdf` : undefined}
              disabled={!item.pdfFile}
              disabledTooltip={`${item.title} archival PDF is not yet digitized`}
              className="text-primary font-bold hover:underline"
            >
              {item.pdfFile ? (item.actionLabel || 'Download PDF') : `${item.actionLabel || 'View PDF'} (Unavailable)`}
            </DownloadButton>
          ) : (
            <Link
              href={`/archives/${item.slug}`}
              className="text-primary font-bold hover:underline"
            >
              {item.actionLabel || 'Access Details'} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
