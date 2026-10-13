import Link from 'next/link';

export interface SeminarItem {
  title: string;
  schedule: string;
  link?: string;
}

interface UpcomingSeminarsCardProps {
  title?: string | null;
  seminars?: SeminarItem[];
}

export default function UpcomingSeminarsCard({
  title = 'Upcoming Q&A Seminars',
  seminars,
}: UpcomingSeminarsCardProps) {
  const defaultSeminars: SeminarItem[] = [
    {
      title: 'Genesis 1-11 Discussion',
      schedule: 'Thursday, March 20 | 7:00 PM EST',
      link: '/zoom-info',
    },
    {
      title: 'Romans 5-8 Discussion',
      schedule: 'Thursday, March 27 | 7:00 PM EST',
      link: '/zoom-info',
    },
  ];

  const items = seminars && seminars.length > 0 ? seminars : defaultSeminars;

  return (
    <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
      <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
        {title || 'Upcoming Q&A Seminars'}
      </h3>
      <div className="space-y-3">
        {items.map((seminar, idx) => (
          <div key={idx} className="border-l-2 border-tertiary pl-3 py-1">
            <Link
              href={seminar.link || '/zoom-info'}
              className="text-xs font-bold text-primary hover:text-tertiary transition-colors block"
            >
              {seminar.title}
            </Link>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              {seminar.schedule}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
