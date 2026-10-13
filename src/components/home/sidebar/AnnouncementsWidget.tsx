interface AnnouncementItem {
  date?: string | null;
  title?: string | null;
  description?: string | null;
}

interface AnnouncementsWidgetData {
  title?: string | null;
  items?: (AnnouncementItem | null)[] | null;
}

interface AnnouncementsWidgetProps {
  data?: AnnouncementsWidgetData | null;
}

export default function AnnouncementsWidget({ data }: AnnouncementsWidgetProps) {
  const title = data?.title || 'Platform Announcements';

  const defaultItems: AnnouncementItem[] = [
    {
      date: 'March 14, 2025',
      title: 'Greek Interlinear Concordance Added',
      description:
        'New scholarly translation guides are now accessible within the Bible References module.',
    },
    {
      date: 'March 08, 2025',
      title: 'Spring Theological Journal Published',
      description:
        'The Spring edition of Scripture Quarterly is now live on the Magazines page.',
    },
  ];

  const items =
    data?.items && data.items.length > 0
      ? (data.items.filter(Boolean) as AnnouncementItem[])
      : defaultItems;

  return (
    <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
      <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <span className="text-[10px] text-muted-foreground">{item.date}</span>
            <h4 className="text-xs font-bold text-primary hover:text-tertiary transition-colors cursor-pointer">
              {item.title}
            </h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
