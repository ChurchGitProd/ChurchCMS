import Link from 'next/link';

interface AcademicOfficeWidgetProps {
  office?: {
    title?: string | null;
    description?: string | null;
    address?: string | null;
    email?: string | null;
    buttonText?: string | null;
    buttonLink?: string | null;
  } | null;
}

export default function AcademicOfficeWidget({ office }: AcademicOfficeWidgetProps) {
  const title = office?.title || 'Academic Office';
  const description =
    office?.description ||
    'Have questions about our doctrinal statement, research papers, or digital library access? Reach out to our administrative team.';
  const address = office?.address || "100 Scholar's Row, Boston, MA";
  const email = office?.email || 'office@scriptura-library.org';
  const buttonText = office?.buttonText || 'Contact Office';
  const buttonLink = office?.buttonLink || '/contact';

  return (
    <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
      <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed font-sans">
        {description}
      </p>
      <div className="space-y-2.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="text-tertiary">📍</span>
          <span>{address}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-tertiary">✉️</span>
          <a
            href={`mailto:${email}`}
            className="hover:text-primary transition-colors"
          >
            {email}
          </a>
        </div>
      </div>
      <Link
        href={buttonLink}
        className="block text-center py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all shadow-xs"
      >
        {buttonText}
      </Link>
    </div>
  );
}
