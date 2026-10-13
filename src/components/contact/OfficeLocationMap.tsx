interface OfficeLocationMapProps {
  mapLocation?: {
    imageUrl?: string | null;
    addressText?: string | null;
  } | null;
}

export default function OfficeLocationMap({
  mapLocation,
}: OfficeLocationMapProps) {
  const imageUrl =
    mapLocation?.imageUrl ||
    'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=675&fit=crop';
  const addressText =
    mapLocation?.addressText ||
    "123 Theology Lane, Scholar's Quarter, ST 40012";

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="aspect-video bg-muted relative">
        <img
          src={imageUrl}
          alt="Map location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="text-center space-y-3">
            <span className="text-4xl text-white mx-auto block">📍</span>
            <p className="text-sm text-white font-medium max-w-md mx-auto">
              {addressText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
