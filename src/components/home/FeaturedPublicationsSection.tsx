import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DownloadButton from '@/components/common/DownloadButton';

interface BookItem {
  badge?: string | null;
  title?: string | null;
  author?: string | null;
  description?: string | null;
  coverImage?: string | null;
  downloadLink?: string | null;
}

interface MagazineItem {
  badge?: string | null;
  title?: string | null;
  issue?: string | null;
  description?: string | null;
  coverImage?: string | null;
  readLink?: string | null;
}

interface FeaturedPublicationsData {
  sectionTitle?: string | null;
  book?: BookItem | null;
  magazine?: MagazineItem | null;
}

interface FeaturedPublicationsSectionProps {
  data?: FeaturedPublicationsData | null;
}

export default function FeaturedPublicationsSection({ data }: FeaturedPublicationsSectionProps) {
  const sectionTitle = data?.sectionTitle || 'Featured Books & Magazines';

  const book: BookItem = {
    badge: data?.book?.badge || 'Book Highlight',
    title: data?.book?.title || 'The Abrahamic Promise',
    author: data?.book?.author || 'Dr. Vance',
    description:
      data?.book?.description ||
      'A deep dive into the legal, historical, and spiritual ramifications of the covenant made in Genesis 15.',
    coverImage:
      data?.book?.coverImage ||
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=267&fit=crop',
    downloadLink: data?.book?.downloadLink || '/books',
  };

  const magazine: MagazineItem = {
    badge: data?.magazine?.badge || 'Quarterly Issue',
    title: data?.magazine?.title || 'Biblical Archaeology Review',
    issue: data?.magazine?.issue || 'Issue #48',
    description:
      data?.magazine?.description ||
      'Exploring the latest excavations in Jerusalem and their correlation with Old Testament chronicles.',
    coverImage:
      data?.magazine?.coverImage ||
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=267&fit=crop',
    readLink: data?.magazine?.readLink || '/magazines',
  };

  return (
    <section id="books" className="space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
          <span className="w-1.5 h-6 bg-tertiary rounded"></span>
          {sectionTitle}
        </h2>
        <Link
          href="/books"
          className="text-xs font-semibold text-tertiary hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1 group"
        >
          <span>Browse Catalog</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Card */}
        <div className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all">
          <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden bg-muted">
            <img
              src={book.coverImage || ''}
              alt={`${book.title} cover`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">
                {book.badge}
              </span>
              <h3 className="text-base font-heading font-bold text-primary">
                {book.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                {book.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-muted-foreground">
                Author: {book.author}
              </span>
              <DownloadButton
                file={book.downloadLink || undefined}
                filename="the-abrahamic-promise.pdf"
                disabled={!book.downloadLink}
                disabledTooltip="The Abrahamic Promise PDF is not yet available for download"
                className="text-xs font-bold text-primary hover:text-tertiary transition-colors"
              >
                {book.downloadLink ? 'Download PDF' : 'Download PDF (Unavailable)'}
              </DownloadButton>
            </div>
          </div>
        </div>

        {/* Magazine Card */}
        <div className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all">
          <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden bg-muted">
            <img
              src={magazine.coverImage || ''}
              alt={`${magazine.title} cover`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">
                {magazine.badge}
              </span>
              <h3 className="text-base font-heading font-bold text-primary">
                {magazine.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                {magazine.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-muted-foreground">
                {magazine.issue}
              </span>
              <Link
                href={magazine.readLink || '/magazines'}
                className="text-xs font-bold text-primary hover:text-tertiary transition-colors"
              >
                Read Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
