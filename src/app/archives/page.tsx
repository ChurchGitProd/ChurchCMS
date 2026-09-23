import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Archives() {
  const archivesData = await client.queries.archives({ relativePath: "index.md" });
  const data = archivesData.data.archives;
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
            <span className="text-primary font-semibold">Archives</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Historical Repository'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Scriptural & Historical Archives'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'Deep theological materials, past seminar transcripts, rare manuscript documentation, and historical commentaries archived for serious research.'}
            </p>
          </div>
        </div>
      </section>

      {/* Archive Type Filters */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button className="px-3.5 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded">All Archives</button>
            <button className="px-3.5 py-1.5 bg-muted text-primary hover:bg-tertiary/10 text-xs font-medium rounded transition-colors">Manuscripts</button>
            <button className="px-3.5 py-1.5 bg-muted text-primary hover:bg-tertiary/10 text-xs font-medium rounded transition-colors">Transcripts</button>
            <button className="px-3.5 py-1.5 bg-muted text-primary hover:bg-tertiary/10 text-xs font-medium rounded transition-colors">Historical Commentaries</button>
          </div>
          <div className="text-xs text-muted-foreground">
            {data.catalogInfo || 'Archive Catalog: 150+ Years of Research'}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Archive Listing */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Archive Block */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">{data.featuredArchive?.badge || 'Featured Archival Document'}</span>
                <span className="text-xs text-muted-foreground">Catalog Ref: {data.featuredArchive?.catalogRef || 'MS-8840'}</span>
              </div>
              <h2 className="text-xl font-heading font-bold text-primary">{data.featuredArchive?.title || 'The Codex Sinaiticus Restored Transcripts'}</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.featuredArchive?.description || 'A comprehensive, digitalized, and annotated transcription of the Epistle to the Galatians as found in the Codex Sinaiticus.'}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">📁</span> Category: {data.featuredArchive?.category || 'Manuscripts / Greek'}
                </span>
                <a href="#" className="text-primary font-semibold hover:underline">{data.featuredArchive?.linkText || 'Access Document'}</a>
              </div>
            </div>

            {/* Archive Listing */}
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="bg-card border border-border rounded-lg p-5 hover:border-tertiary transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Historical Commentary</span>
                  <span className="text-xs text-muted-foreground">Published: 1884 | Catalog: HC-12</span>
                </div>
                <h3 className="text-base font-heading font-bold text-primary mb-2">The Covenant of Grace in the Pentateuch</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  An archived classic theological monograph analyzing the structural parallels of Genesis covenants, originally published by the Boston Theological Press.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Author: Dr. Arthur Pendelton</span>
                  <a href="#" className="text-primary font-bold hover:underline">View PDF</a>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-card border border-border rounded-lg p-5 hover:border-tertiary transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Seminar Transcript</span>
                  <span className="text-xs text-muted-foreground">Dated: Oct 2024 | Catalog: TS-48</span>
                </div>
                <h3 className="text-base font-heading font-bold text-primary mb-2">Hermeneutics Roundtable: Covenant Theology</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  The full verbatim transcript of the academic roundtable discussion featuring Dr. Vance, Prof. Mercer, and guest theologians.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Host: Scriptura Research Institute</span>
                  <a href="#" className="text-primary font-bold hover:underline">Read Transcript</a>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-card border border-border rounded-lg p-5 hover:border-tertiary transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Manuscript Documentation</span>
                  <span className="text-xs text-muted-foreground">Restored: Jan 2025 | Catalog: MS-90</span>
                </div>
                <h3 className="text-base font-heading font-bold text-primary mb-2">The Great Isaiah Scroll Facsimile Notes</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Archived notes detailing the physical condition, ink analysis, and orthographic variations of the Dead Sea Scroll Isaiah facsimile.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Lead: Dr. Thomas Keller</span>
                  <a href="#" className="text-primary font-bold hover:underline">Access Notes</a>
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
                    Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">3</span> of <span className="font-medium">42</span> archives
                  </p>
                </div>
                <div>
                  <span className="relative z-0 inline-flex rounded shadow-sm -space-x-px">
                    <a href="#" className="relative inline-flex items-center px-2.5 py-1.5 rounded-l-md border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">
                      <span className="text-sm">←</span>
                    </a>
                    <a href="#" className="relative inline-flex items-center px-3 py-1.5 border border-primary bg-primary text-primary-foreground text-xs font-medium">1</a>
                    <a href="#" className="relative inline-flex items-center px-3 py-1.5 border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">2</a>
                    <a href="#" className="relative inline-flex items-center px-2.5 py-1.5 rounded-r-md border border-border bg-card text-xs font-medium text-muted-foreground hover:bg-muted">
                      <span className="text-sm">→</span>
                    </a>
                  </span>
                </div>
              </div>
            </nav>

          </div>

          {/* Right Column: Sidebar Widgets */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Archive Tags Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.classificationsTitle || 'Archive Classifications'}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Byzantine Codices</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Reformation Tracts</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Puritan Monographs</span>
                <span className="px-2.5 py-1 bg-muted hover:bg-tertiary/10 text-xs text-primary rounded cursor-pointer transition-colors">Dead Sea Scrolls</span>
              </div>
            </div>

            {/* Archive Policy */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-3 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.accessPolicy?.title || 'Access Policy'}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.accessPolicy?.description || 'All archived materials are public-domain or licensed for theological research. High-resolution downloads are free for academic citation.'}
              </p>
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
