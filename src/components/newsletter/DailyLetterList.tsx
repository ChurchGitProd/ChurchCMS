import DailyLetterCard, { DailyLetterItemData } from './DailyLetterCard';

interface DailyLetterListProps {
  letters: DailyLetterItemData[];
  title?: string;
}

export default function DailyLetterList({
  letters,
  title = 'Recent Daily Letters',
}: DailyLetterListProps) {
  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-primary mb-6">
        {title}
      </h3>
      <div className="space-y-4">
        {letters.map((letter) => (
          <DailyLetterCard key={letter.slug} letter={letter} />
        ))}
      </div>
    </div>
  );
}
