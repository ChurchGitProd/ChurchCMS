'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DownloadButton from '@/components/common/DownloadButton';

export interface BookCardData {
  slug: string;
  title: string;
  author: string;
  format: string;
  subject: string;
  description: string;
  coverImage?: string | null;
  abstract?: string | null;
  pdfFile?: string | null;
}

interface BookCardProps {
  book: BookCardData;
}

export default function BookCard({ book }: BookCardProps) {
  const [isAbstractOpen, setIsAbstractOpen] = useState(false);
  const hasAbstract = Boolean(book.abstract && book.abstract.trim());
  const abstractElementId = `card-abstract-${book.slug}`;

  return (
    <div className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition-all group">
      <div className="flex gap-4">
        {/* Book Cover Thumbnail */}
        <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden relative bg-muted">
          {book.coverImage ? (
            <Image
              src={book.coverImage}
              alt={`${book.title} book cover`}
              fill
              sizes="96px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs font-serif">
              📖
            </div>
          )}
        </div>

        {/* Book Information */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">
                {book.format}
              </span>
              <span className="text-[10px] text-muted-foreground/80 font-medium px-2 py-0.5 bg-muted rounded">
                {book.subject}
              </span>
            </div>

            <h3 className="text-base font-heading font-bold text-primary mt-1">
              <Link
                href={`/books/${book.slug}`}
                className="hover:text-tertiary transition-colors"
              >
                {book.title}
              </Link>
            </h3>

            <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
              {book.description}
            </p>
          </div>
        </div>
      </div>

      {/* Expandable Abstract in Card */}
      {isAbstractOpen && hasAbstract && (
        <div
          id={abstractElementId}
          className="mt-3 p-3 bg-muted/60 border border-border rounded-lg text-xs space-y-1 animate-fadeIn"
        >
          <div className="flex items-center justify-between">
            <span className="font-bold text-primary block uppercase tracking-wider text-[10px]">
              Monograph Abstract Summary
            </span>
            <button
              type="button"
              onClick={() => setIsAbstractOpen(false)}
              className="text-[10px] text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Close abstract"
            >
              ✕ Close
            </button>
          </div>
          <p className="text-muted-foreground leading-relaxed italic text-[11px]">
            {book.abstract}
          </p>
        </div>
      )}

      {/* Footer Meta & Actions */}
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-border/50">
        <span className="text-xs text-muted-foreground font-medium">
          {book.author}
        </span>
        <div className="flex items-center gap-3">
          {hasAbstract ? (
            <button
              type="button"
              onClick={() => setIsAbstractOpen((prev) => !prev)}
              aria-expanded={isAbstractOpen}
              aria-controls={abstractElementId}
              className="text-xs font-bold text-tertiary hover:underline cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-tertiary rounded-sm flex items-center gap-0.5"
            >
              <span>{isAbstractOpen ? 'Close Abstract' : 'Read Abstract'}</span>
              <span className="text-[9px]">{isAbstractOpen ? '▲' : '▼'}</span>
            </button>
          ) : (
            <span className="text-[11px] text-muted-foreground/60 italic">
              Abstract unavailable
            </span>
          )}
          <DownloadButton
            file={book.pdfFile || undefined}
            filename={book.pdfFile ? `${book.slug}.pdf` : undefined}
            disabled={!book.pdfFile}
            disabledTooltip="Publication PDF not yet available"
            className="text-xs font-bold text-primary hover:text-tertiary transition-colors"
          >
            {book.pdfFile ? 'Download PDF' : 'Download PDF (Unavailable)'}
          </DownloadButton>
        </div>
      </div>
    </div>
  );
}
