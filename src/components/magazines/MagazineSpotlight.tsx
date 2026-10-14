import Link from 'next/link';
import { sanitizeImageUrl } from '@/lib/media';

interface SpotlightIssueData {
  slug: string;
  title: string;
  issue: string;
  badge?: string | null;
  description: string;
  contributorsCount?: number | null;
  articlesCount?: number | null;
  coverImage?: string | null;
}

interface MagazineSpotlightProps {
  sectionTitle?: string | null;
  issue: SpotlightIssueData;
}

export default function MagazineSpotlight({
  sectionTitle = 'Latest Issue Spotlight',
  issue,
}: MagazineSpotlightProps) {
  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-primary mb-6">
        {sectionTitle || 'Latest Issue Spotlight'}
      </h3>
      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-48 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0 relative">
            {issue.coverImage ? (
              <img
                src={sanitizeImageUrl(issue.coverImage)}
                alt={`${issue.title} Cover`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                No Cover
              </div>
            )}
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider block">
                  {issue.issue}
                </span>
                <h4 className="text-xl font-heading font-bold text-primary">
                  {issue.title}
                </h4>
              </div>
              {issue.badge && (
                <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary font-medium">
                  {issue.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {issue.description}
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
              {issue.contributorsCount && (
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">👤</span> {issue.contributorsCount} Contributors
                </span>
              )}
              {issue.articlesCount && (
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">📄</span> {issue.articlesCount} Articles
                </span>
              )}
            </div>
            <div>
              <Link
                href={`/magazines/${issue.slug}`}
                className="inline-block text-tertiary font-bold text-xs hover:underline mt-2 focus:outline-none focus:ring-1 focus:ring-primary rounded"
              >
                Read {issue.issue} Issue →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
