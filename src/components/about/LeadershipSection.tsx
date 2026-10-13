export interface ScholarItem {
  name: string;
  role: string;
  avatar?: string | null;
  bio: string;
}

interface LeadershipSectionProps {
  title?: string | null;
  scholars?: (ScholarItem | null)[] | null;
}

const DEFAULT_SCHOLARS: ScholarItem[] = [
  {
    name: 'Dr. Charles Vance',
    role: 'Director of Hermeneutics',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    bio: 'Former Professor of Old Testament Studies at Harvard Divinity School, specializing in ancient covenants.',
  },
  {
    name: 'Dr. Thomas Keller',
    role: 'Chief Archivist',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Expert in Dead Sea Scrolls and Hellenistic Greek texts, driving our digital manuscript restoration.',
  },
  {
    name: 'Prof. Julian Mercer',
    role: 'Biblical Theology Lead',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    bio: 'Author of "The Pauline Paradigm" and lecturer on New Testament epistolary structures.',
  },
];

export default function LeadershipSection({
  title = 'Academic Leadership',
  scholars,
}: LeadershipSectionProps) {
  const list =
    scholars && scholars.length > 0
      ? scholars.filter((s): s is ScholarItem => Boolean(s))
      : DEFAULT_SCHOLARS;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
        <span className="w-1.5 h-6 bg-tertiary rounded"></span>
        <span>{title || 'Academic Leadership'}</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {list.map((scholar, idx) => {
          const defaultAvatar =
            DEFAULT_SCHOLARS[idx % DEFAULT_SCHOLARS.length].avatar ||
            'https://randomuser.me/api/portraits/men/12.jpg';
          const avatarUrl =
            scholar.avatar && scholar.avatar.trim() !== ''
              ? scholar.avatar
              : defaultAvatar;

          return (
            <div
              key={scholar.name || idx}
              className="bg-card border border-border rounded-xl p-4 text-center space-y-3 hover:shadow-md transition-shadow"
            >
              <img
                src={avatarUrl}
                alt={scholar.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-tertiary"
              />
            <div>
              <h4 className="font-heading font-bold text-sm text-primary">
                {scholar.name}
              </h4>
              <p className="text-[10px] text-tertiary uppercase tracking-wider font-semibold">
                {scholar.role}
              </p>
            </div>
            <p className="text-[11px] text-muted-foreground line-clamp-3 leading-relaxed">
              {scholar.bio}
            </p>
          </div>
        );
      })}
      </div>
    </section>
  );
}
