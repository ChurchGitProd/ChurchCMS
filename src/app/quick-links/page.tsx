import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function QuickLinks() {
  const quickLinksData = await client.queries.quickLinks({ relativePath: "index.md" });
  const data = quickLinksData.data.quickLinks;
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
            <span className="text-primary font-semibold">Quick Links</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Navigation Hub'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Quick Links Directory'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'Fast-track access to all theological resources, study materials, and platform features.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Feature Shortcut Banner */}
          <div className="bg-primary text-primary-foreground p-8 rounded-xl space-y-6 border border-primary/20 shadow-md">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">{data.featuredBanner?.badge || 'FEATURED ACCESS'}</span>
              <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">{data.featuredBanner?.tag || 'Most Popular'}</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold">{data.featuredBanner?.title || 'Start Your Study Journey'}</h2>
              <p className="text-sm text-primary-foreground/90 leading-relaxed font-sans">
                {data.featuredBanner?.description || 'Begin with our most accessed resources: daily devotionals, featured lessons, and live seminar recordings.'}
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-4">
              <a href={data.featuredBanner?.button1Link || '/newsletter'} className="px-6 py-2.5 bg-tertiary text-primary font-bold text-xs rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider">
                {data.featuredBanner?.button1Text || 'Daily Devotional'}
              </a>
              <a href={data.featuredBanner?.button2Link || '/lessons'} className="px-6 py-2.5 bg-background text-primary font-bold text-xs rounded hover:bg-background/90 transition-all uppercase tracking-wider">
                {data.featuredBanner?.button2Text || 'Featured Lessons'}
              </a>
              <a href={data.featuredBanner?.button3Link || '/zoom-info'} className="px-6 py-2.5 bg-background text-primary font-bold text-xs rounded hover:bg-background/90 transition-all uppercase tracking-wider">
                {data.featuredBanner?.button3Text || 'Live Seminars'}
              </a>
            </div>
          </div>

          {/* Categorized Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-6">{data.categorySectionTitle || 'Browse by Category'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category 1: Study Resources */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="text-2xl text-tertiary">📖</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">Study Resources</h4>
                  <p className="text-xs text-muted-foreground mt-1">Bible lessons, references, and study guides</p>
                </div>
                <ul className="space-y-2">
                  <li><a href="/lessons" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Bible Lessons</a></li>
                  <li><a href="/references" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Cross-References</a></li>
                  <li><a href="/library" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Digital Library</a></li>
                </ul>
              </div>

              {/* Category 2: Media & Visuals */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="text-2xl text-tertiary">▶️</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">Media & Visuals</h4>
                  <p className="text-xs text-muted-foreground mt-1">Videos, images, and multimedia content</p>
                </div>
                <ul className="space-y-2">
                  <li><a href="/videos" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Bible Videos</a></li>
                  <li><a href="/images" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Biblical Imagery</a></li>
                  <li><a href="/magazines" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Magazines</a></li>
                </ul>
              </div>

              {/* Category 3: Publications */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="text-2xl text-tertiary">📋</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">Publications</h4>
                  <p className="text-xs text-muted-foreground mt-1">Books, archives, and scholarly works</p>
                </div>
                <ul className="space-y-2">
                  <li><a href="/books" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Theological Books</a></li>
                  <li><a href="/archives" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Historical Archives</a></li>
                  <li><a href="/newsletter" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Daily Newsletter</a></li>
                </ul>
              </div>

              {/* Category 4: Community */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="text-2xl text-tertiary">👥</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">Community</h4>
                  <p className="text-xs text-muted-foreground mt-1">Live sessions, events, and connections</p>
                </div>
                <ul className="space-y-2">
                  <li><a href="/zoom-info" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Zoom Seminars</a></li>
                  <li><a href="/contact" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Contact Office</a></li>
                  <li><a href="/about" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> About Us</a></li>
                </ul>
              </div>

              {/* Category 5: Tools & Utilities */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="text-2xl text-tertiary">⚙️</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">Tools & Utilities</h4>
                  <p className="text-xs text-muted-foreground mt-1">Search, filters, and platform features</p>
                </div>
                <ul className="space-y-2">
                  <li><a href="/library" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Advanced Search</a></li>
                  <li><a href="#" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Bookmark Manager</a></li>
                  <li><a href="#" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Study Planner</a></li>
                </ul>
              </div>

              {/* Category 6: External Resources */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="text-2xl text-tertiary">🔗</span>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-bold text-primary">External Resources</h4>
                  <p className="text-xs text-muted-foreground mt-1">Partner sites and theological tools</p>
                </div>
                <ul className="space-y-2">
                  <li><a href="#" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Bible Gateway</a></li>
                  <li><a href="#" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Blue Letter Bible</a></li>
                  <li><a href="#" className="text-xs text-primary hover:text-tertiary transition-colors flex items-center gap-1"><span className="text-[10px]">→</span> Logos Software</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search Links Module */}
          <div className="bg-muted border border-border rounded-xl p-8">
            <h3 className="text-xl font-heading font-bold text-primary mb-6">{data.searchSectionTitle || 'Search Links'}</h3>
            <div className="space-y-4">
              <div className="relative">
                <input type="text" placeholder={data.searchPlaceholder || 'Search for links by keyword, topic, or scripture...'} className="w-full pl-10 pr-4 py-3 text-sm rounded-lg bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground" />
                <span className="absolute left-3 top-3.5 text-muted-foreground text-lg">🔍</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-background rounded text-xs text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Genesis</span>
                <span className="px-3 py-1 bg-background rounded text-xs text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Trinity</span>
                <span className="px-3 py-1 bg-background rounded text-xs text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Eschatology</span>
                <span className="px-3 py-1 bg-background rounded text-xs text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Christology</span>
                <span className="px-3 py-1 bg-background rounded text-xs text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Church History</span>
                <span className="px-3 py-1 bg-background rounded text-xs text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Hermeneutics</span>
              </div>
            </div>
          </div>

          {/* Resource Shortcut Cards */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-6">{data.shortcutsSectionTitle || 'Resource Shortcuts'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="/lessons" className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center">
                <span className="text-3xl text-tertiary mx-auto mb-2 block">🔖</span>
                <p className="text-xs font-bold text-primary">All Lessons</p>
                <p className="text-[10px] text-muted-foreground">148 lessons</p>
              </a>
              <a href="/references" className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center">
                <span className="text-3xl text-tertiary mx-auto mb-2 block">📖</span>
                <p className="text-xs font-bold text-primary">References</p>
                <p className="text-[10px] text-muted-foreground">Cross-references</p>
              </a>
              <a href="/library" className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center">
                <span className="text-3xl text-tertiary mx-auto mb-2 block">📚</span>
                <p className="text-xs font-bold text-primary">Library</p>
                <p className="text-[10px] text-muted-foreground">Digital resources</p>
              </a>
              <a href="/zoom-info" className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center">
                <span className="text-3xl text-tertiary mx-auto mb-2 block">📹</span>
                <p className="text-xs font-bold text-primary">Seminars</p>
                <p className="text-[10px] text-muted-foreground">Live sessions</p>
              </a>
              <a href="/newsletter" className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center">
                <span className="text-3xl text-tertiary mx-auto mb-2 block">✉️</span>
                <p className="text-xs font-bold text-primary">Newsletter</p>
                <p className="text-[10px] text-muted-foreground">Daily devotionals</p>
              </a>
              <a href="/books" className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center">
                <span className="text-3xl text-tertiary mx-auto mb-2 block">📋</span>
                <p className="text-xs font-bold text-primary">Books</p>
                <p className="text-[10px] text-muted-foreground">Publications</p>
              </a>
              <a href="/archives" className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center">
                <span className="text-3xl text-tertiary mx-auto mb-2 block">📁</span>
                <p className="text-xs font-bold text-primary">Archives</p>
                <p className="text-[10px] text-muted-foreground">Historical docs</p>
              </a>
              <a href="/contact" className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-all text-center">
                <span className="text-3xl text-tertiary mx-auto mb-2 block">📞</span>
                <p className="text-xs font-bold text-primary">Contact</p>
                <p className="text-[10px] text-muted-foreground">Get in touch</p>
              </a>
            </div>
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
