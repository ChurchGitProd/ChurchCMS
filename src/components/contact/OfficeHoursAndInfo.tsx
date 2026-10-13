interface OfficeHoursAndInfoProps {
  officeHours?: {
    title?: string | null;
    weekdayHours?: string | null;
    saturdayHours?: string | null;
    sundayHours?: string | null;
    note?: string | null;
  } | null;
  additionalInfo?: {
    title?: string | null;
    items?: (string | null)[] | null;
  } | null;
}

const DEFAULT_ADDITIONAL_INFO = [
  "For urgent matters outside office hours, please email us and we'll respond the next business day.",
  'Researchers and scholars interested in accessing our archives should contact us at least 2 weeks in advance.',
  'Donation inquiries can be directed to our development team via the main contact form.',
];

export default function OfficeHoursAndInfo({
  officeHours,
  additionalInfo,
}: OfficeHoursAndInfoProps) {
  const hoursTitle = officeHours?.title || 'Office Hours';
  const weekday = officeHours?.weekdayHours || '9:00 AM - 5:00 PM';
  const saturday = officeHours?.saturdayHours || '10:00 AM - 2:00 PM';
  const sunday = officeHours?.sundayHours || 'Closed';
  const note =
    officeHours?.note ||
    'Holiday hours may vary. Check our announcements for any schedule changes.';

  const infoTitle = additionalInfo?.title || 'Additional Information';
  const infoItems =
    additionalInfo?.items && additionalInfo.items.length > 0
      ? additionalInfo.items.filter((item): item is string => Boolean(item))
      : DEFAULT_ADDITIONAL_INFO;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Office Hours */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-sm flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-bold text-primary flex items-center gap-2">
            <span className="text-tertiary">🕐</span>
            <span>{hoursTitle}</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-muted-foreground">
            <li className="flex justify-between items-center py-0.5 border-b border-border/40 pb-1.5">
              <span>Monday - Friday</span>
              <span className="font-semibold text-primary">{weekday}</span>
            </li>
            <li className="flex justify-between items-center py-0.5 border-b border-border/40 pb-1.5">
              <span>Saturday</span>
              <span className="font-semibold text-primary">{saturday}</span>
            </li>
            <li className="flex justify-between items-center py-0.5">
              <span>Sunday</span>
              <span className="font-medium text-muted-foreground">{sunday}</span>
            </li>
          </ul>
        </div>
        <div className="pt-3 border-t border-border/60">
          <p className="text-[10px] text-muted-foreground italic">
            * {note}
          </p>
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-sm">
        <h3 className="text-lg font-heading font-bold text-primary flex items-center gap-2">
          <span className="text-tertiary">ℹ️</span>
          <span>{infoTitle}</span>
        </h3>
        <ul className="space-y-3 text-xs text-muted-foreground">
          {infoItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 leading-relaxed">
              <span className="text-tertiary mt-0.5 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
