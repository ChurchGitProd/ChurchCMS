import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Books() {
  const booksData = await client.queries.books({ relativePath: "index.md" });
  const data = booksData.data.books;
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
            <span className="text-primary font-semibold">Books</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Scholarly Monographs'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Theological Books & Publications'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'Explore our collection of peer-reviewed monographs, historical commentaries, and study manuals published by the Scriptura Research Institute.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Category Filters */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <input type="text" placeholder={data.searchPlaceholder || 'Search books...'} className="w-full sm:w-72 pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">🔍</span>
            </div>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Subjects</option>
              <option>Hermeneutics</option>
              <option>Biblical Archaeology</option>
              <option>Covenant Theology</option>
            </select>
          </div>
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing <span className="font-bold text-primary">4</span> of <span className="font-bold">16</span> books
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Book Grid */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Featured Book Spotlight */}
            <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 flex-shrink-0 border border-border rounded-lg shadow-md overflow-hidden aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop" alt="The Pauline Paradigm book cover" className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-8 space-y-4">
                  <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">{data.featuredBook?.badge || 'Featured Publication'}</span>
                  <h2 className="text-2xl font-heading font-bold text-primary">{data.featuredBook?.title || 'The Pauline Paradigm'}</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {data.featuredBook?.description || 'A seminal study exploring the structural layout, rhetorical devices, and theological highlights of the Pauline Epistles, focusing specifically on justification and union with Christ.'}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all flex items-center gap-1.5">
                      <span className="text-sm">⬇️</span>
                      <span>{data.featuredBook?.downloadButtonText || 'Download PDF'}</span>
                    </button>
                    <button className="px-4 py-2 bg-card border border-border text-primary text-xs font-bold rounded hover:bg-muted transition-all">
                      {data.featuredBook?.abstractButtonText || 'Read Abstract'}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Book Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Book Card 1 */}
              <div className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all">
                <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=267&fit=crop" alt="The Abrahamic Promise book cover" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Monograph</span>
                    <h3 className="text-base font-heading font-bold text-primary">The Abrahamic Promise</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      A deep dive into the legal, historical, and spiritual ramifications of the covenant made in Genesis 15.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-muted-foreground">Dr. Vance</span>
                    <a href="#" className="text-xs font-bold text-primary hover:text-tertiary">Download PDF</a>
                  </div>
                </div>
              </div>

              {/* Book Card 2 */}
              <div className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all">
                <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=267&fit=crop" alt="Hermeneutics Handbook book cover" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Manual</span>
                    <h3 className="text-base font-heading font-bold text-primary">Hermeneutics Handbook</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      The grammatical-historical method outlined with practical textual analysis exercises.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-muted-foreground">Prof. Mercer</span>
                    <a href="#" className="text-xs font-bold text-primary hover:text-tertiary">Download PDF</a>
                  </div>
                </div>
              </div>

              {/* Book Card 3 */}
              <div className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all">
                <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=200&h=267&fit=crop" alt="Stones of the Temple book cover" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Monograph</span>
                    <h3 className="text-base font-heading font-bold text-primary">Stones of the Temple</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      An archaeological and historical breakdown of Herod's temple expansion and its scriptural references.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-muted-foreground">Dr. Keller</span>
                    <a href="#" className="text-xs font-bold text-primary hover:text-tertiary">Download PDF</a>
                  </div>
                </div>
              </div>

              {/* Book Card 4 */}
              <div className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all">
                <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=267&fit=crop" alt="Byzantine Text Families book cover" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Monograph</span>
                    <h3 className="text-base font-heading font-bold text-primary">Byzantine Text Families</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      Comparing the textual transmission lineages of early Byzantine uncial manuscripts.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-muted-foreground">Dr. Keller</span>
                    <a href="#" className="text-xs font-bold text-primary hover:text-tertiary">Download PDF</a>
                  </div>
                </div>
              </div>

            </section>

            {/* Pagination */}
            <nav className="flex items-center justify-between border-t border-border pt-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <a href="#" className="px-4 py-2 border border-border text-xs font-semibold rounded bg-card hover:bg-muted text-primary">Previous</a>
                <a href="#" className="px-4 py-2 border border-border text-xs font-semibold rounded bg-card hover:bg-muted text-primary">Next</a>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">4</span> of <span className="font-medium">16</span> books
                  </p>
                </div>
                <div>
                  <span className="relative z-0 inline-flex rounded shadow-sm -space-x-px">
                    <a href="#" className="relative inline-flex items-center px-2.5 py-1.5 rounded-l-md border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">
                      <span>←</span>
                    </a>
                    <a href="#" className="relative inline-flex items-center px-3 py-1.5 border border-primary bg-primary text-primary-foreground text-xs font-medium">1</a>
                    <a href="#" className="relative inline-flex items-center px-3 py-1.5 border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">2</a>
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
            
            {/* Book Submission Guidelines Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.submissionsTitle || 'Scholarly Submissions'}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.submissionsDescription || 'Interested in publishing your theological research, monograph, or commentary abstract with the Scriptura Research Press?'}
              </p>
              <a href="#" className="block text-center py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all">
                {data.submissionsButtonText || 'Review Guidelines'}
              </a>
            </div>

            {/* Featured Quote */}
            <div className="bg-secondary text-secondary-foreground p-6 rounded-xl space-y-4">
              <span className="text-2xl text-tertiary">🔖</span>
              <p className="text-xs italic leading-relaxed">
                "A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors."
              </p>
              <span className="block text-[10px] font-bold text-tertiary uppercase tracking-widest">— Charles Kingsley</span>
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
