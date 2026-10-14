import Link from 'next/link';
import { sanitizeImageUrl } from '@/lib/media';

interface RelatedLessonCardProps {
  title?: string | null;
  course?: string | null;
  description?: string | null;
  buttonText?: string | null;
  image?: string | null;
}

export default function RelatedLessonCard({
  title,
  course,
  description,
  buttonText,
  image,
}: RelatedLessonCardProps) {
  const displayTitle = title || 'Related Lesson Course';
  const displayCourse = course || 'Course: Principles of Biblical Hermeneutics';
  const displayDescription =
    description ||
    'Learn the grammatical-historical method used by scholars to interpret ancient scripture accurately.';
  const displayButtonText = buttonText || 'Go to Course';

  const fallbackThumbnail =
    'https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png';
  const displayImage = image || fallbackThumbnail;

  return (
    <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
      <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
        {displayTitle}
      </h3>
      <div className="space-y-3">
        <div className="h-28 rounded-lg overflow-hidden bg-muted relative">
          <img
            src={sanitizeImageUrl(displayImage)}
            className="w-full h-full object-cover"
            alt="Course thumbnail"
          />
        </div>
        <h4 className="font-heading font-bold text-sm text-primary">
          {displayCourse}
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {displayDescription}
        </p>
        <Link
          href="/lessons"
          className="block text-center py-2 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all shadow-sm"
        >
          {displayButtonText}
        </Link>
      </div>
    </div>
  );
}
