import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Images() {
  const imagesData = await client.queries.images({ relativePath: "index.md" });
  const data = imagesData.data.images;
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
            <span className="text-primary font-semibold">Bible Images</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Visual Commentary'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Biblical Imagery & Artifacts'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'High-resolution photography of ancient manuscript fragments, archaeological locations, and scholarly diagrams designed to enrich scriptural comprehension.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Category Filters */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button className="px-3.5 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded">All Images</button>
            <button className="px-3.5 py-1.5 bg-muted text-primary hover:bg-tertiary/10 text-xs font-medium rounded transition-colors">Manuscripts</button>
            <button className="px-3.5 py-1.5 bg-muted text-primary hover:bg-tertiary/10 text-xs font-medium rounded transition-colors">Archaeology</button>
            <button className="px-3.5 py-1.5 bg-muted text-primary hover:bg-tertiary/10 text-xs font-medium rounded transition-colors">Diagrams</button>
          </div>
          <div className="relative w-full sm:w-64">
            <input type="text" placeholder={data.searchPlaceholder || 'Search gallery...'} className="w-full pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">🔍</span>
          </div>
        </div>
      </section>

      {/* Featured Image Spotlight */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-lg overflow-hidden border border-border shadow-inner">
              <img src="https://uxmagic.blob.core.windows.net/public/agent-images/hero_bible-1782719363350-90sctq9ygv4.png" className="w-full h-auto object-cover" alt="Manuscript fragment" />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">{data.featuredImage?.badge || 'Featured Spotlight'}</span>
              <h2 className="text-2xl font-heading font-bold text-primary">{data.featuredImage?.title || 'Codex Sinaiticus Fragment Scan'}</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.featuredImage?.description || 'A meticulous high-resolution scan of the 4th-century Greek uncial manuscript of the Bible, showcasing the elegant script and structural formatting of the Pauline Epistles.'}
              </p>
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <p className="text-xs font-semibold text-primary">{data.featuredImage?.scriptureLabel || 'Related Scripture:'}</p>
                <blockquote className="text-xs italic text-muted-foreground">
                  {data.featuredImage?.scriptureQuote || '"For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes..."'}
                </blockquote>
                <span className="block text-[10px] text-tertiary font-bold uppercase">{data.featuredImage?.scriptureReference || '— Romans 1:16'}</span>
              </div>
              <div className="pt-2 flex gap-3">
                <button className="px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all flex items-center gap-1.5">
                  <span className="text-sm">⬇️</span>
                  <span>{data.featuredImage?.downloadButtonText || 'Download High-Res'}</span>
                </button>
                <button className="px-4 py-2 bg-card border border-border text-primary text-xs font-bold rounded hover:bg-muted transition-all">
                  {data.featuredImage?.citationButtonText || 'View Citation Details'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid (Masonry / Standard) */}
        <section className="space-y-6">
          <h3 className="text-xl font-heading font-bold text-primary border-b border-border pb-2">{data.archiveTitle || 'Image Archive'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Image Card 1 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
              <div className="h-56 overflow-hidden relative">
                <img src="https://uxmagic.blob.core.windows.net/public/agent-images/library_shelf-1782719371570-ajnz70oz8sg.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Archaeological remains" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded">Archaeology</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-primary">The Southern Steps of Jerusalem</h4>
                  <p className="text-xs text-muted-foreground">
                    Dating back to the Second Temple period, where scholars believe teachings and gatherings frequently occurred.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-semibold text-tertiary">Luke 2:46</span>
                  <a href="#" className="hover:text-primary hover:underline">View Details</a>
                </div>
              </div>
            </div>

            {/* Image Card 2 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
              <div className="h-56 overflow-hidden relative">
                <img src="https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Scribal study" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded">Scribal Study</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-primary">Greek Codex Transcription Annotations</h4>
                  <p className="text-xs text-muted-foreground">
                    Documenting the variant marks and marginal notations of early Byzantine scribes transcribing the Gospels.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-semibold text-tertiary">Mark 1:1</span>
                  <a href="#" className="hover:text-primary hover:underline">View Details</a>
                </div>
              </div>
            </div>

            {/* Image Card 3 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
              <div className="h-56 overflow-hidden relative">
                <img src="https://uxmagic.blob.core.windows.net/public/agent-images/hero_bible-1782719363350-90sctq9ygv4.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Scroll" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded">Manuscript</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-base text-primary">The Great Isaiah Scroll Replica</h4>
                  <p className="text-xs text-muted-foreground">
                    A facsimile preview of the beautifully preserved 24-foot scroll discovered in Qumran Cave 1.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-semibold text-tertiary">Isaiah 40:8</span>
                  <a href="#" className="hover:text-primary hover:underline">View Details</a>
                </div>
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
                Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">3</span> of <span className="font-medium">45</span> images
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
