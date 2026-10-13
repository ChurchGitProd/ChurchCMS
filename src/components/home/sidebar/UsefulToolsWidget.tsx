import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ToolItem {
  name?: string | null;
  link?: string | null;
}

interface UsefulToolsWidgetData {
  title?: string | null;
  tools?: (ToolItem | null)[] | null;
}

interface UsefulToolsWidgetProps {
  data?: UsefulToolsWidgetData | null;
}

export default function UsefulToolsWidget({ data }: UsefulToolsWidgetProps) {
  const title = data?.title || 'Useful Tools';

  const defaultTools: ToolItem[] = [
    { name: "Strong's Concordance Search", link: '/resources' },
    { name: 'Greek-Hebrew Lexicon', link: '/resources' },
    { name: 'Biblical Atlas Maps', link: '/resources' },
  ];

  const tools =
    data?.tools && data.tools.length > 0
      ? (data.tools.filter(Boolean) as ToolItem[])
      : defaultTools;

  return (
    <div className="bg-card border border-border p-6 rounded-xl space-y-3 shadow-sm">
      <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
        {title}
      </h3>
      <ul className="space-y-2 text-xs text-muted-foreground">
        {tools.map((tool, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-tertiary flex-shrink-0" />
            <Link
              href={tool.link || '/resources'}
              className="hover:text-primary hover:underline transition-colors"
            >
              {tool.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
