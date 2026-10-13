interface ContactInfoCardsProps {
  emailCard?: {
    title?: string | null;
    description?: string | null;
    email?: string | null;
  } | null;
  phoneCard?: {
    title?: string | null;
    description?: string | null;
    phone?: string | null;
  } | null;
  locationCard?: {
    title?: string | null;
    description?: string | null;
    address?: string | null;
  } | null;
}

export default function ContactInfoCards({
  emailCard,
  phoneCard,
  locationCard,
}: ContactInfoCardsProps) {
  const emailTitle = emailCard?.title || 'Email Us';
  const emailDesc = emailCard?.description || 'For general inquiries and support';
  const emailVal = emailCard?.email || 'contact@scriptura.org';

  const phoneTitle = phoneCard?.title || 'Call Us';
  const phoneDesc = phoneCard?.description || 'Mon-Fri, 9:00 AM - 5:00 PM EST';
  const phoneVal = phoneCard?.phone || '+1 (555) 123-4567';

  const locTitle = locationCard?.title || 'Visit Us';
  const locDesc = locationCard?.description || 'Our main office location';
  const locVal =
    locationCard?.address || "123 Theology Lane\nScholar's Quarter, ST 40012";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Email */}
      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="text-2xl text-tertiary">✉️</span>
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-primary">
              {emailTitle}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{emailDesc}</p>
          </div>
        </div>
        <a
          href={`mailto:${emailVal}`}
          className="text-sm font-bold text-tertiary hover:underline inline-block break-all"
        >
          {emailVal}
        </a>
      </div>

      {/* Card 2: Phone */}
      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="text-2xl text-tertiary">📞</span>
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-primary">
              {phoneTitle}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{phoneDesc}</p>
          </div>
        </div>
        <a
          href={`tel:${phoneVal.replace(/[^0-9+]/g, '')}`}
          className="text-sm font-bold text-tertiary hover:underline inline-block"
        >
          {phoneVal}
        </a>
      </div>

      {/* Card 3: Location */}
      <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="text-2xl text-tertiary">📍</span>
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-primary">
              {locTitle}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{locDesc}</p>
          </div>
        </div>
        <p className="text-sm font-bold text-primary whitespace-pre-line leading-snug">
          {locVal}
        </p>
      </div>
    </div>
  );
}
