import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Library() {
  const libraryData = await client.queries.library({ relativePath: "index.md" });
  const data = libraryData.data.library;
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
            <span className="text-primary font-semibold">Library</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Digital Resource Repository'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Theological Library'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'A comprehensive digital repository housing commentaries, lexicons, historical documents, theological treatises, and scholarly research materials for in-depth biblical study.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <input type="text" placeholder={data.searchPlaceholder || 'Search library resources...'} className="w-full sm:w-72 pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">🔍</span>
            </div>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Categories</option>
              <option>Commentaries</option>
              <option>Lexicons</option>
              <option>Historical Documents</option>
              <option>Theological Treatises</option>
              <option>Research Papers</option>
            </select>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Eras</option>
              <option>Patristic Era</option>
              <option>Reformation</option>
              <option>Modern Scholarship</option>
              <option>Contemporary</option>
            </select>
          </div>
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing <span className="font-bold text-primary">8</span> of <span className="font-bold">234</span> resources
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Library Resource Listing & Pagination */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Resource Section */}
            <div className="bg-primary text-primary-foreground p-6 rounded-xl space-y-4 border border-primary/20 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">{data.featuredResource?.badge || 'FEATURED RESOURCE'}</span>
                <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">{data.featuredResource?.tag || 'New Addition'}</span>
              </div>
              <h2 className="text-2xl font-heading font-bold">{data.featuredResource?.title || 'Complete Systematic Theology Collection'}</h2>
              <p className="text-xs text-primary-foreground/90 leading-relaxed font-sans">
                {data.featuredResource?.description || 'A comprehensive 12-volume systematic theology covering all major doctrines, biblical foundations, historical development, and contemporary applications.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75">
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">📚</span> {data.featuredResource?.details || '12 Volumes | 4,800 Pages'}
                </span>
                <a href="#" className="text-tertiary font-bold hover:underline flex items-center gap-1">
                  <span>{data.featuredResource?.linkText || 'Access Collection'}</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Library Resource Listing */}
            <div className="space-y-6">
              {/* Resource 1 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Commentary Series</span>
                    <h3 className="text-lg font-heading font-bold text-primary">Matthew Henry's Complete Commentary</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Classic</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The complete 6-volume commentary on the entire Bible, offering practical, devotional, and doctrinal insights from one of the most beloved Puritan commentators.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">📅</span> Originally Published: 1706-1710
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">6 Volumes</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Complete Bible</span>
                  </div>
                </div>
              </div>

              {/* Resource 2 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Lexicon</span>
                    <h3 className="text-lg font-heading font-bold text-primary">Brown-Driver-Briggs Hebrew Lexicon</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Reference</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The standard and most widely-cited Hebrew-English lexicon, providing detailed definitions, etymologies, and usage examples for every Old Testament Hebrew word.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">🌐</span> Hebrew-English
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">OT Only</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">8,700+ Entries</span>
                  </div>
                </div>
              </div>

              {/* Resource 3 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Theological Treatise</span>
                    <h3 className="text-lg font-heading font-bold text-primary">Institutes of the Christian Religion</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Reformation</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  John Calvin's magnum opus, a systematic exposition of Christian theology covering the knowledge of God, the creation of man, Christ the Redeemer, and the church.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> John Calvin
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">4 Books</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">1536 Edition</span>
                  </div>
                </div>
              </div>

              {/* Resource 4 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Historical Document</span>
                    <h3 className="text-lg font-heading font-bold text-primary">Nicene Creed & Early Church Fathers</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Patristic</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Collection of primary sources from the first four centuries, including the Nicene Creed, writings of Augustine, Athanasius, and other early church fathers.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">📜</span> 1st-4th Century
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Primary Sources</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">Creeds</span>
                  </div>
                </div>
              </div>

              {/* Resource 5 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Research Paper</span>
                    <h3 className="text-lg font-heading font-bold text-primary">The Doctrine of Justification: A Historical Survey</h3>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Scholarship</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  An academic examination of the doctrine of justification through church history, from the early church through the Reformation to contemporary theological discussions.
                </p>
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">🎓</span> Dr. Michael Horton
                  </span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">45 Pages</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px]">2023</span>
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
                    Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">5</span> of <span className="font-medium">234</span> entries
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
            
            {/* Resource Categories Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.categoriesTitle || 'Browse by Category'}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Commentaries</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Lexicons</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Dictionaries</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Theology</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Church History</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Original Languages</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Apologetics</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Ethics</span>
              </div>
            </div>

            {/* Popular Resources Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.popularTitle || 'Most Accessed'}</h3>
              <div className="space-y-3">
                <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-tertiary/10 transition-colors">
                  <h4 className="font-heading font-bold text-sm text-primary">Strong's Concordance</h4>
                  <p className="text-[10px] text-muted-foreground">Complete Hebrew & Greek dictionary</p>
                </a>
                <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-tertiary/10 transition-colors">
                  <h4 className="font-heading font-bold text-sm text-primary">Westminster Confession</h4>
                  <p className="text-[10px] text-muted-foreground">Reformed doctrinal standards</p>
                </a>
                <a href="#" className="block p-3 bg-muted rounded-lg hover:bg-tertiary/10 transition-colors">
                  <h4 className="font-heading font-bold text-sm text-primary">Thayer's Greek Lexicon</h4>
                  <p className="text-[10px] text-muted-foreground">New Testament word definitions</p>
                </a>
              </div>
            </div>

            {/* Recent Additions Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.recentTitle || 'Recently Added'}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-tertiary text-lg">📄</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-primary">Modern Hermeneutics</h4>
                    <p className="text-[10px] text-muted-foreground">Added 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-tertiary text-lg">📄</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-primary">Biblical Archaeology</h4>
                    <p className="text-[10px] text-muted-foreground">Added 5 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-tertiary text-lg">📄</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-primary">Patristic Studies</h4>
                    <p className="text-[10px] text-muted-foreground">Added 1 week ago</p>
                  </div>
                </div>
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
