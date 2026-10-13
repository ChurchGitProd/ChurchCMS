'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'scriptura_completed_lessons';

export function getCompletedLessons(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useCourseProgress(totalLessons = 5, allLessonSlugs?: string[]) {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  const syncProgress = useCallback(() => {
    const current = getCompletedLessons();
    setCompletedSlugs(current);
  }, []);

  useEffect(() => {
    setMounted(true);
    syncProgress();

    const handleUpdate = () => syncProgress();
    window.addEventListener('scriptura-progress-update', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('scriptura-progress-update', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [syncProgress]);

  const toggleLesson = useCallback((slug: string) => {
    const current = getCompletedLessons();
    let next: string[];
    if (current.includes(slug)) {
      next = current.filter((s) => s !== slug);
    } else {
      next = [...current, slug];
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}

    setCompletedSlugs(next);
    window.dispatchEvent(new Event('scriptura-progress-update'));
  }, []);

  const isCompleted = useCallback(
    (slug: string) => completedSlugs.includes(slug),
    [completedSlugs]
  );

  // Compute validated count (filter by known slugs if provided)
  const validCompletedCount = allLessonSlugs && allLessonSlugs.length > 0
    ? completedSlugs.filter((s) => allLessonSlugs.includes(s)).length
    : completedSlugs.length;

  const total = totalLessons > 0 ? totalLessons : 5;
  const clampedCompleted = Math.min(validCompletedCount, total);
  const percentage = Math.round((clampedCompleted / total) * 100);

  return {
    completedSlugs,
    isCompleted,
    toggleLesson,
    completedCount: clampedCompleted,
    totalLessons: total,
    progressPercentage: percentage,
    mounted,
  };
}
