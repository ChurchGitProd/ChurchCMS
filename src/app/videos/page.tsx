import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Videos() {
  const videosData = await client.queries.videos({ relativePath: "index.md" });
  const data = videosData.data.videos;
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
            <span className="text-primary font-semibold">Bible Videos</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Lectures & Seminars'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Theological Video Library'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'High-definition video recordings of scholarly lectures, textual expositions, and historical breakdowns of biblical literature.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <input type="text" placeholder={data.searchPlaceholder || 'Search videos...'} className="w-full sm:w-72 pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">🔍</span>
            </div>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Speakers</option>
              <option>Dr. Charles Vance</option>
              <option>Prof. Julian Mercer</option>
              <option>Dr. Thomas Keller</option>
            </select>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Series</option>
              <option>Hermeneutics Series</option>
              <option>Archaeology Series</option>
              <option>Covenant Series</option>
            </select>
          </div>
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing <span className="font-bold text-primary">8</span> of <span className="font-bold">42</span> videos
          </div>
        </div>
      </section>

      {/* Featured Video Hero */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        <section className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-lg overflow-hidden relative bg-primary shadow-lg group">
              <img src="https://uxmagic.blob.core.windows.net/public/agent-images/library_shelf-1782719371570-ajnz70oz8sg.png" className="w-full h-auto object-cover opacity-80" alt="Video cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-12 sm:w-20 sm:h-16 rounded-xl bg-primary/95 text-primary-foreground flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl sm:text-3xl ml-1">▶️</span>
                </span>
              </div>
              <span className="absolute bottom-4 right-4 bg-primary/80 text-primary-foreground text-xs px-2.5 py-1 rounded font-semibold">
                45:30
              </span>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">{data.featuredVideo?.badge || 'Featured Lecture'}</span>
              <h2 className="text-2xl font-heading font-bold text-primary">{data.featuredVideo?.title || 'Introduction to Greek Codex Sinaiticus'}</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.featuredVideo?.description || 'Prof. Julian Mercer delivers a comprehensive lecture on the transcription techniques, textual variations, and historical impact of the Sinaiticus Codex.'}
              </p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p><span className="font-semibold text-primary">Speaker:</span> {data.featuredVideo?.speaker || 'Prof. Julian Mercer'}</p>
                <p><span className="font-semibold text-primary">Scripture:</span> {data.featuredVideo?.scripture || 'Romans 1-3, Galatians 1'}</p>
                <p><span className="font-semibold text-primary">Recorded:</span> {data.featuredVideo?.recorded || 'March 2025'}</p>
              </div>
              <div className="pt-2">
                <button className="px-5 py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all flex items-center gap-1.5">
                  <span className="text-sm">▶️</span>
                  <span>{data.featuredVideo?.buttonText || 'Watch Lecture Now'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Grid */}
        <section className="space-y-6">
          <h3 className="text-xl font-heading font-bold text-primary border-b border-border pb-2">{data.lecturesTitle || 'All Lectures & Seminars'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Video Card 1 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
              <div className="h-48 overflow-hidden relative bg-primary">
                <img src="https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png" className="w-full h-full object-cover opacity-80" alt="Video cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-xl ml-1">▶️</span>
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 bg-primary/75 text-primary-foreground text-[10px] px-2 py-1 rounded">28:15</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Hermeneutics Series</span>
                  <h4 className="font-heading font-bold text-base text-primary line-clamp-1">How to Interpret Hebrew Poetry</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">Exploring Psalms, Song of Solomon, and Job with focus on semantic parallelism.</p>
                </div>
                <div className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
                  <p className="font-semibold text-primary">Dr. Charles Vance | Psalms</p>
                </div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
              <div className="h-48 overflow-hidden relative bg-primary">
                <img src="https://uxmagic.blob.core.windows.net/public/agent-images/hero_bible-1782719363350-90sctq9ygv4.png" className="w-full h-full object-cover opacity-80" alt="Video cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-xl ml-1">▶️</span>
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 bg-primary/75 text-primary-foreground text-[10px] px-2 py-1 rounded">34:50</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Archaeology Series</span>
                  <h4 className="font-heading font-bold text-base text-primary line-clamp-1">The Qumran Caves Excavations</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">Analyzing the discovery conditions and preservation of the Dead Sea Scrolls.</p>
                </div>
                <div className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
                  <p className="font-semibold text-primary">Dr. Thomas Keller | Isaiah</p>
                </div>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
              <div className="h-48 overflow-hidden relative bg-primary">
                <img src="https://uxmagic.blob.core.windows.net/public/agent-images/library_shelf-1782719371570-ajnz70oz8sg.png" className="w-full h-full object-cover opacity-80" alt="Video cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-xl ml-1">▶️</span>
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 bg-primary/75 text-primary-foreground text-[10px] px-2 py-1 rounded">41:20</span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Covenant Series</span>
                  <h4 className="font-heading font-bold text-base text-primary line-clamp-1">The Abrahamic Promise Explored</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">A historical-legal examination of the sovereign oath structure in Genesis 15.</p>
                </div>
                <div className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
                  <p className="font-semibold text-primary">Dr. Charles Vance | Genesis 15</p>
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
                Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">3</span> of <span className="font-medium">18</span> videos
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
