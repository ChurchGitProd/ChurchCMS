import Link from 'next/link';

interface SessionItem {
  date?: string | null;
  title?: string | null;
  status?: string | null;
  description?: string | null;
  speaker?: string | null;
  timeOrActionText?: string | null;
  actionUrl?: string | null;
  isDashed?: boolean | null;
}

interface SessionScheduleListProps {
  sessionsTitle?: string | null;
  sessions?: (SessionItem | null)[] | null;
}

const DEFAULT_SESSIONS: SessionItem[] = [
  {
    date: 'July 11, 2024',
    title: 'Eschatology: The Last Things',
    status: 'Upcoming',
    description:
      'An exploration of biblical prophecy concerning the end times, including the return of Christ, resurrection, and final judgment.',
    speaker: 'Prof. Eleanor Sterling',
    timeOrActionText: '7:00 PM EST',
    actionUrl: '',
    isDashed: false,
  },
  {
    date: 'June 27, 2024',
    title: 'The Parables of Jesus',
    status: 'Recording Available',
    description:
      "A comprehensive study of Jesus' parabolic teaching methods and their theological significance for understanding the Kingdom of God.",
    speaker: 'Dr. Thomas Keller',
    timeOrActionText: 'Watch Recording →',
    actionUrl: '/videos',
    isDashed: false,
  },
  {
    date: 'June 20, 2024',
    title: 'Biblical Hermeneutics',
    status: 'Recording Available',
    description:
      'Introduction to principles of biblical interpretation, including historical-grammatical method and literary analysis.',
    speaker: 'Dr. Michael Horton',
    timeOrActionText: 'Watch Recording →',
    actionUrl: '/videos',
    isDashed: false,
  },
  {
    date: 'June 13, 2024',
    title: 'The Book of Hebrews',
    status: 'Recording Available',
    description:
      "An expository journey through the epistle to the Hebrews, focusing on Christ's supremacy and the new covenant.",
    speaker: 'Prof. Sarah Williams',
    timeOrActionText: 'Watch Recording →',
    actionUrl: '/videos',
    isDashed: true,
  },
];

export default function SessionScheduleList({
  sessionsTitle,
  sessions,
}: SessionScheduleListProps) {
  const title = sessionsTitle || 'Upcoming & Past Sessions';
  const validSessions = sessions
    ? sessions.filter((s): s is SessionItem => Boolean(s))
    : [];
  const sessionList =
    validSessions.length > 0 ? validSessions : DEFAULT_SESSIONS;

  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-primary mb-6">
        {title}
      </h3>
      <div className="space-y-4">
        {sessionList.map((session, idx) => {
          const date = session.date || '';
          const sessionTitle = session.title || '';
          const status = session.status || 'Upcoming';
          const description = session.description || '';
          const speaker = session.speaker || '';
          const timeOrAction = session.timeOrActionText || '';
          const actionUrl = session.actionUrl || '';
          const isDashed = Boolean(session.isDashed);

          const isUpcoming =
            status.toLowerCase().includes('upcoming') ||
            timeOrAction.toLowerCase().includes('est') ||
            timeOrAction.toLowerCase().includes('pm') ||
            timeOrAction.toLowerCase().includes('am');

          const cardBorderClass = isDashed
            ? 'border-dashed border-border'
            : 'border-border';

          const titleColorClass = isDashed
            ? 'text-muted-foreground'
            : 'text-primary';

          const dateColorClass = isDashed
            ? 'text-muted-foreground'
            : 'text-tertiary';

          const statusColorClass =
            status.toLowerCase() === 'upcoming'
              ? 'text-primary'
              : 'text-muted-foreground';

          return (
            <div
              key={idx}
              className={`bg-card border ${cardBorderClass} rounded-xl p-6 ${
                isDashed ? '' : 'hover:shadow-md'
              } transition-all space-y-3`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span
                    className={`text-[10px] font-bold ${dateColorClass} uppercase tracking-wider`}
                  >
                    {date}
                  </span>
                  <h4 className={`text-lg font-heading font-bold ${titleColorClass}`}>
                    {sessionTitle}
                  </h4>
                </div>
                <span
                  className={`px-2 py-0.5 bg-muted rounded text-[10px] ${statusColorClass}`}
                >
                  {status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-tertiary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>{speaker}</span>
                </span>

                {isUpcoming || !actionUrl ? (
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-tertiary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{timeOrAction}</span>
                  </span>
                ) : (
                  <Link
                    href={actionUrl}
                    className="text-tertiary font-bold hover:underline"
                  >
                    {timeOrAction || 'Watch Recording →'}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
