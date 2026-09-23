import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function References() {
  const referencesData = await client.queries.references({ relativePath: "index.md" });
  const data = referencesData.data.references;
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
            <span className="text-primary font-semibold">Bible References</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Scriptural Concordance'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Theological Cross-References'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'A meticulously cross-referenced database linking messianic prophecies, apostolic epistles, covenants, and historical chronicles with linguistic breakdowns.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <input type="text" placeholder={data.searchPlaceholder || 'Search references (e.g. Isaiah 53)...'} className="w-full sm:w-72 pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">🔍</span>
            </div>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Testaments</option>
              <option>Old Testament</option>
              <option>New Testament</option>
            </select>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Genres</option>
              <option>Prophecy</option>
              <option>Law</option>
              <option>Poetry & Wisdom</option>
              <option>Gospels</option>
              <option>Epistles</option>
            </select>
          </div>
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing <span className="font-bold text-primary">12</span> of <span className="font-bold">148</span> references
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: References Listing & Pagination */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Reference Block */}
            <div className="bg-primary text-primary-foreground p-6 rounded-xl space-y-4 border border-primary/20 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">{data.featuredReference?.badge || 'FEATURED SCHOLARLY REFERENCE'}</span>
                <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">{data.featuredReference?.tag || 'Pentateuch Study'}</span>
              </div>
              <h2 className="text-2xl font-heading font-bold">{data.featuredReference?.title || 'Genesis 15:1-6 — The Covenant of Faith'}</h2>
              <p className="text-xs text-primary-foreground/90 leading-relaxed font-sans">
                {data.featuredReference?.description || '"And he believed the Lord, and he counted it to him as righteousness." This foundational text establishes the doctrine of justification by faith.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75">
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">📖</span> {data.featuredReference?.crossReferences || 'Cross-References: Romans 4, Galatians 3, Hebrews 11'}
                </span>
                <a href="/lessons" className="text-tertiary font-bold hover:underline flex items-center gap-1">
                  <span>{data.featuredReference?.linkText || 'Read Full Commentary'}</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Bible References Listing */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Matthew 1:22-23</span>
                    <h3 className="text-lg font-heading font-bold text-primary">The Virgin Birth Prophecy Parallel</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Prophecy Fulfillment</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Explores Matthew's citation of Isaiah 7:14, analyzing the linguistic transition from Hebrew 'almah' to Greek 'parthenos' and its theological significance.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> By Dr. Thomas Keller
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Isaiah 7:14</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Messianic</span>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Psalm 22:1-31</span>
                    <h3 className="text-lg font-heading font-bold text-primary">The Crucifixion Psalm Cross-References</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Poetry & Wisdom</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A detailed map linking the exact phrasing of Psalm 22 with the Passion details in Matthew 27, demonstrating precise prophetic alignment.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> By Prof. Julian Mercer
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Matthew 27</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Prophetic Lyre</span>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Deuteronomy 6:4-9</span>
                    <h3 className="text-lg font-heading font-bold text-primary">The Shema and the Greatest Commandment</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Torah Law</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tracing the historical and liturgical development of the Shema, and how Jesus synthesized it with Leviticus 19:18 in Mark 12.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> By Dr. Charles Vance
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Mark 12</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Shema</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <nav className="flex items-center justify-between border-t border-border pt-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <a href="#" className="px-4 py-2 border border-border text-xs font-semibold rounded bg-card hover:bg-muted text-primary">Previous</a>
                <a href="#" className="px-4 py-2 border border-border text-xs font-semibold rounded bg-card hover:bg-muted text-primary">Next</a>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">3</span> of <span className="font-medium">128</span> entries
                  </p>
                </div>
                <div>
                  <span className="relative z-0 inline-flex rounded shadow-sm -space-x-px">
                    <a href="#" className="relative inline-flex items-center px-2.5 py-1.5 rounded-l-md border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">
                      <span>←</span>
                    </a>
                    <a href="#" className="relative inline-flex items-center px-3 py-1.5 border border-primary bg-primary text-primary-foreground text-xs font-medium">1</a>
                    <a href="#" className="relative inline-flex items-center px-3 py-1.5 border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">2</a>
                    <a href="#" className="relative inline-flex items-center px-3 py-1.5 border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">3</a>
                    <a href="#" className="relative inline-flex items-center px-2.5 py-1.5 rounded-r-md border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">
                      <span>→</span>
                    </a>
                  </span>
                </div>
              </div>
            </nav>

          </div>

          {/* Right Column: Sidebar Widgets */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Tags / Topics Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.topicsTitle || 'Browse by Topic'}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Messianic Prophecy</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Covenants</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Hebrew Poetry</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Pauline Epistles</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Gospel Parallels</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Greek Concordance</span>
              </div>
            </div>

            {/* Related Lesson Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.relatedLessonTitle || 'Related Lesson Course'}</h3>
              <div className="space-y-3">
                <div className="h-28 rounded-lg overflow-hidden bg-muted relative">
                  <img src="https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png" className="w-full h-full object-cover" alt="Course thumbnail" />
                </div>
                <h4 className="font-heading font-bold text-sm text-primary">{data.relatedLessonCourse || 'Course: Principles of Biblical Hermeneutics'}</h4>
                <p className="text-xs text-muted-foreground">{data.relatedLessonDescription || 'Learn the grammatical-historical method used by scholars to interpret ancient scripture accurately.'}</p>
                <a href="/lessons" className="block text-center py-2 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all">
                  {data.relatedLessonButtonText || 'Go to Course'}
                </a>
              </div>
            </div>

          </aside>

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
