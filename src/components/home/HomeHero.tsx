import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HeroData {
  headline?: string | null;
  subheadline?: string | null;
  ctaText?: string | null;
  ctaLink?: string | null;
  secondaryCtaText?: string | null;
  secondaryCtaLink?: string | null;
  heroImage?: string | null;
}

interface HomeHeroProps {
  data?: HeroData | null;
}

export default function HomeHero({ data }: HomeHeroProps) {
  const headline = data?.headline || 'Unveiling the Depth of Holy Scripture';
  const subheadline =
    data?.subheadline ||
    'A meticulous, beautifully curated editorial platform dedicated purely to the preservation, study, and teaching of biblical texts. Explore ancient manuscripts, modern commentaries, comprehensive lessons, and scholarly resources in an environment designed for deep contemplation.';
  const ctaText = data?.ctaText || 'Explore Digital Library';
  const ctaLink = data?.ctaLink || '/library';
  const secondaryCtaText = data?.secondaryCtaText || 'Browse Lessons';
  const secondaryCtaLink = data?.secondaryCtaLink || '/lessons';
  const heroImage = data?.heroImage || '/hero image.webp';

  const renderHeadline = (text: string) => {
    if (text.includes('Holy Scripture')) {
      const parts = text.split('Holy Scripture');
      return (
        <>
          {parts[0]}
          <span
            className="text-tertiary font-normal text-5xl sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Sacramento', cursive" }}
          >
            Holy Scripture
          </span>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden border-b border-border"
      style={{
        background:
          'radial-gradient(circle at top right, rgba(153,212,224,0.35), transparent 40%), linear-gradient(180deg, #EAF7FA 0%, #F4FBFC 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-medium text-secondary">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span>PREMIUM DIGITAL BIBLE LIBRARY &amp; SCHOLARLY ARCHIVE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
              {renderHeadline(headline)}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-sans">
              {subheadline}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={ctaLink}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/95 transition-all flex items-center gap-2 group"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={secondaryCtaLink}
                className="px-6 py-3 bg-card text-primary border border-border font-semibold rounded-lg hover:bg-muted transition-all flex items-center gap-2"
              >
                <span>{secondaryCtaText}</span>
                <BookOpen className="w-4 h-4 text-tertiary" />
              </Link>
            </div>
          </div>

          {/* Hero Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/20 to-primary/10 rounded-2xl blur-2xl -z-10"></div>
            <div className="border-4 border-border rounded-2xl p-2 bg-card shadow-2xl overflow-hidden transform hover:rotate-1 transition-transform duration-300">
              <img
                src={heroImage}
                alt="Open Bible on altar"
                className="w-full h-auto rounded-lg object-cover shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
