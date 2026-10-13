import Link from 'next/link';
import { BookOpen, Bookmark, Clipboard, Folder } from 'lucide-react';

export default function QuickStudyLinksWidget() {
  const links = [
    {
      title: 'Bible Texts',
      href: '/references',
      icon: BookOpen,
    },
    {
      title: 'All Lessons',
      href: '/lessons',
      icon: Bookmark,
    },
    {
      title: 'Publications',
      href: '/books',
      icon: Clipboard,
    },
    {
      title: 'Archives',
      href: '/archives',
      icon: Folder,
    },
  ];

  return (
    <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
      <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
        Quick Study Links
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {links.map((link, idx) => {
          const Icon = link.icon;
          return (
            <Link
              key={idx}
              href={link.href}
              className="p-3 bg-muted hover:bg-tertiary/10 rounded text-center transition-all group flex flex-col items-center justify-center"
            >
              <Icon className="w-5 h-5 text-tertiary mb-1 transition-transform group-hover:scale-110" />
              <span className="block text-[10px] font-medium text-primary group-hover:text-tertiary transition-colors">
                {link.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
