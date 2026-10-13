'use client';

import Link from 'next/link';
import { useCourseProgress } from '@/lib/useCourseProgress';

interface CourseProgressData {
  progressTitle?: string | null;
  progressCourse?: string | null;
  progressPercentage?: string | null;
  progressDescription?: string | null;
  progressButtonText?: string | null;
}

interface CourseProgressCardProps {
  data?: CourseProgressData | null;
  totalLessons?: number;
  allLessonSlugs?: string[];
}

export default function CourseProgressCard({
  data,
  totalLessons = 5,
  allLessonSlugs,
}: CourseProgressCardProps) {
  const { completedCount, totalLessons: total, progressPercentage, mounted } = useCourseProgress(
    totalLessons,
    allLessonSlugs
  );

  const title = data?.progressTitle || 'Your Course Progress';
  const course = data?.progressCourse || 'Principles of Hermeneutics';

  // Compute dynamic percentage and description when mounted
  const displayPercentage = mounted ? `${progressPercentage}%` : data?.progressPercentage || '0%';
  const displayCompleted = mounted ? completedCount : 0;
  const displayTotal = mounted ? total : totalLessons;

  let description: string;
  let buttonText: string;

  if (mounted) {
    if (progressPercentage === 100) {
      description = `All ${displayTotal} lessons completed. You have fulfilled all foundational requirements in this curriculum.`;
      buttonText = 'Review Curriculum';
    } else if (progressPercentage === 0) {
      description = `You have completed 0 of ${displayTotal} lessons. Begin your first lesson to start tracking your curriculum progress.`;
      buttonText = 'Start First Lesson';
    } else {
      description = `You have completed ${displayCompleted} of ${displayTotal} foundational lessons in this series. Resume to complete your study.`;
      buttonText = data?.progressButtonText || 'Resume Course';
    }
  } else {
    description = `Loading your course progress...`;
    buttonText = data?.progressButtonText || 'Resume Course';
  }

  const clampedPercentage = mounted ? progressPercentage : 0;

  return (
    <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm transition-colors">
      <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">
        {title}
      </h3>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{course}</span>
          <span className="font-bold text-primary">{displayPercentage}</span>
        </div>
        {/* Dynamic Progress Bar */}
        <div
          className="w-full bg-muted rounded-full h-2 overflow-hidden"
          role="progressbar"
          aria-valuenow={clampedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Course progress: ${displayPercentage}`}
        >
          <div
            className="bg-tertiary h-full transition-all duration-500 rounded-full"
            style={{ width: `${clampedPercentage}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-muted-foreground pt-0.5">
          <span>
            {displayCompleted} / {displayTotal} lessons
          </span>
          <span>{clampedPercentage === 100 ? '✓ Complete' : `${100 - clampedPercentage}% remaining`}</span>
        </div>
      </div>
      <p className="text-[11px] text-muted-foreground leading-relaxed">
        {description}
      </p>
      <Link
        href="/lessons"
        className="block text-center py-2.5 px-4 bg-primary text-primary-foreground text-xs font-bold rounded-lg hover:bg-primary/95 transition-all shadow-xs"
      >
        {buttonText}
      </Link>
    </div>
  );
}
