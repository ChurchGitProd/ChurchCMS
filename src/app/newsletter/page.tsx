import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Newsletter() {
  const newsletterData = await client.queries.newsletter({ relativePath: "index.md" });
  const data = newsletterData.data.newsletter;
  return (
    <div className="min-h-screen w-full flex flex-col relative text-foreground font-sans" style={{background: 'radial-gradient(circle at top left, rgba(153,212,224,0.28), transparent 45%), radial-gradient(circle at bottom right, rgba(153,212,224,0.18), transparent 50%), linear-gradient(180deg, #FCFEFE 0%, #F4FBFC 20%, #EAF7FA 45%, #DDF2F6 70%, #C8E8EF 100%)'}}>
      {/* Top Announcement Bar */}
      <div className="bg-secondary text-secondary-foreground text-xs py-2 px-4 text-center tracking-wider font-sans border-b border-border flex items-center justify-center gap-2">
        <span className="text-sm text-tertiary">📖</span>
        <span>{data.announcementText}</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline text-tertiary font-medium">{data.announcementSubtext}</span>
      </div>

      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="text-[10px]">→</span>
            <span className="text-primary font-semibold">Daily Newsletter</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Daily Devotional'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Scriptura Daily Letter'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'Start each day with scripture-centered reflections, theological insights, and practical wisdom delivered straight to your inbox.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Featured Devotional Block */}
          <div className="bg-primary text-primary-foreground p-8 rounded-xl space-y-6 border border-primary/20 shadow-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1504052433769-3ad39850e9c9?w=1200&h=400&fit=crop" alt="Bible background" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">{data.featuredDevotional?.badge || 'TODAY\'S DEVOTIONAL'}</span>
                <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">{data.featuredDevotional?.tag || 'Daily'}</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-heading font-bold">{data.featuredDevotional?.title || 'The Peace That Passes Understanding'}</h2>
                <p className="text-sm text-primary-foreground/90 leading-relaxed font-sans">
                  {data.featuredDevotional?.scripture || '"And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." — Philippians 4:7'}
                </p>
                <p className="text-xs text-primary-foreground/80 leading-relaxed">
                  {data.featuredDevotional?.content || 'In a world filled with anxiety and uncertainty, the apostle Paul points us to a peace that transcends human comprehension.'}
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75">
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">📅</span> {data.featuredDevotional?.date || 'June 30, 2024'}
                </span>
                <a href="#" className="text-tertiary font-bold hover:underline flex items-center gap-1">
                  <span>Read Full Devotional</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Archive Listing */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-6">Recent Daily Letters</h3>
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">June 29, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-primary">Walking by Faith, Not by Sight</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">2 Corinthians 5:7</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Faith is not a blind leap into the unknown, but a confident trust in the known character of God. Explore what it means to walk by faith in every aspect of life.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Dr. Thomas Keller
                  </span>
                  <a href="#" className="text-tertiary font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">June 28, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-primary">The Wisdom of the Cross</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">1 Corinthians 1:18</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The message of the cross appears foolish to the world, but to those being saved, it is the power of God. Discover the divine wisdom hidden in Christ's sacrifice.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Prof. Eleanor Sterling
                  </span>
                  <a href="#" className="text-tertiary font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">June 27, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-primary">Called to Be Holy</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">1 Peter 1:15-16</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Holiness is not merely moral perfection but being set apart for God's purposes. Learn how the call to holiness shapes our identity and daily walk.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Dr. Charles Vance
                  </span>
                  <a href="#" className="text-tertiary font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">June 26, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-primary">The Armor of God</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Ephesians 6:10-18</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Spiritual warfare is a reality for every believer. Discover how to stand firm in the full armor of God and resist the schemes of the enemy.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Dr. Michael Horton
                  </span>
                  <a href="#" className="text-tertiary font-bold hover:underline">Read More →</a>
                </div>
              </div>

              {/* Item 5 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">June 25, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-primary">Abiding in the Vine</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">John 15:1-8</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Jesus uses the imagery of the vine and branches to teach us about spiritual vitality and fruitfulness. Learn what it means to truly abide in Him.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Prof. Sarah Williams
                  </span>
                  <a href="#" className="text-tertiary font-bold hover:underline">Read More →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Signup CTA Section */}
          <div className="bg-secondary text-secondary-foreground p-8 rounded-xl space-y-6 border border-secondary/20 shadow-md">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-heading font-bold text-tertiary">{data.signupCTA?.title || 'Subscribe to Daily Scripture Letters'}</h3>
              <p className="text-sm text-secondary-foreground/90 max-w-2xl mx-auto">
                {data.signupCTA?.description || 'Join over 15,000 subscribers who receive daily devotionals, theological insights, and scripture reflections directly in their inbox every morning at 6:00 AM.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-3 text-sm rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-tertiary border border-border" />
                <button className="px-6 py-3 bg-tertiary text-primary font-bold text-sm rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider">
                  {data.signupCTA?.buttonText || 'Subscribe Free'}
                </button>
              </div>
              <p className="text-[10px] text-secondary-foreground/60">
                {data.signupCTA?.privacyNote || 'No spam. Unsubscribe anytime. Your privacy is protected.'}
              </p>
            </div>
          </div>

          {/* Scripture Quote Banner */}
          <div className="bg-card border border-border p-8 rounded-xl text-center space-y-4">
            <span className="text-4xl text-tertiary mx-auto block">"</span>
            <blockquote className="text-xl font-heading font-bold text-primary leading-relaxed max-w-3xl mx-auto">
              "{data.scriptureQuote?.quote || 'Your word is a lamp to my feet and a light to my path.'}"
            </blockquote>
            <cite className="text-sm text-muted-foreground not-italic">
              — {data.scriptureQuote?.reference || 'Psalm 119:105 (ESV)'}
            </cite>
          </div>

        </div>
      </main>

      {/* Newsletter Strip */}
      <section id="newsletter" className="bg-secondary text-secondary-foreground py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-heading font-bold text-tertiary">Subscribe to Scripture Quarterly</h3>
              <p className="text-xs text-secondary-foreground/80">Get theological journals, research updates, and scripture study guides delivered quarterly.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <input type="email" placeholder="Enter your email address" className="flex-1 px-4 py-2.5 text-xs rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-tertiary border border-border" />
              <button className="px-5 py-2.5 bg-primary text-primary-foreground font-bold text-xs rounded hover:bg-primary/95 transition-all uppercase tracking-wider">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
