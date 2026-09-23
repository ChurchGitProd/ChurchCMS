import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Lessons() {
  const lessonsData = await client.queries.lessons({ relativePath: "index.md" });
  const data = lessonsData.data.lessons;
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
            <span className="text-primary font-semibold">Bible Lessons</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Curriculum & Exegesis'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Expository Bible Lessons'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'Structured, text-centered lessons written by theological scholars, analyzing historical context, original languages, and doctrinal implications.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <input type="text" placeholder={data.searchPlaceholder || 'Search lessons...'} className="w-full sm:w-72 pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">🔍</span>
            </div>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Teachers</option>
              <option>Dr. Charles Vance</option>
              <option>Prof. Eleanor Sterling</option>
              <option>Prof. Julian Mercer</option>
            </select>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Divisions</option>
              <option>Pentateuch</option>
              <option>Historical Books</option>
              <option>Gospels & Acts</option>
              <option>Epistles</option>
            </select>
          </div>
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing <span className="font-bold text-primary">6</span> of <span className="font-bold">28</span> lessons
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Lessons Listing */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Lesson Block */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 h-48 rounded-lg overflow-hidden border border-border">
                <img src="https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png" className="w-full h-full object-cover" alt="Featured lesson" />
              </div>
              <div className="w-full md:w-1/2 space-y-3">
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">{data.featuredLesson?.badge || 'Featured Lesson'}</span>
                <h2 className="text-xl font-heading font-bold text-primary">{data.featuredLesson?.title || 'Genesis 1-11 — The Theology of Creation'}</h2>
                <p className="text-xs text-muted-foreground">
                  {data.featuredLesson?.description || 'Dr. Charles Vance analyzes the primeval history of Genesis, focusing on the structural parallels of creation narratives and the covenant of grace.'}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Teacher: {data.featuredLesson?.teacher || 'Dr. Vance'}</span>
                  <a href="#" className="text-primary font-semibold hover:underline">{data.featuredLesson?.linkText || 'Start Lesson'}</a>
                </div>
              </div>
            </div>

            {/* Lesson Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Lesson Card 1 */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground font-semibold">
                    <span>Romans 5-8</span>
                    <span className="text-tertiary uppercase">Epistles</span>
                  </div>
                  <h3 className="text-base font-heading font-bold text-primary">Grace, Justification, and New Life</h3>
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    Tracing Paul's masterpiece argument from legal justification to the intimate reality of life in the Holy Spirit.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Prof. Eleanor Sterling</span>
                  <a href="#" className="text-primary font-semibold hover:underline">Read Lesson</a>
                </div>
              </div>

              {/* Lesson Card 2 */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground font-semibold">
                    <span>Exodus 19-24</span>
                    <span className="text-tertiary uppercase">Pentateuch</span>
                  </div>
                  <h3 className="text-base font-heading font-bold text-primary">The Sinaitic Covenant & Law</h3>
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    Exploring the sovereign treaty structure of the Decalogue and the tabernacle blueprints in light of ancient Near Eastern treaties.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Dr. Charles Vance</span>
                  <a href="#" className="text-primary font-semibold hover:underline">Read Lesson</a>
                </div>
              </div>

              {/* Lesson Card 3 */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground font-semibold">
                    <span>John 1:1-18</span>
                    <span className="text-tertiary uppercase">Gospels</span>
                  </div>
                  <h3 className="text-base font-heading font-bold text-primary">The Prologue of John & Logos Theology</h3>
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    Analyzing the Greek philosophical and Hebrew scriptural backgrounds of the 'Logos' (Word) in John's opening prologue.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Prof. Julian Mercer</span>
                  <a href="#" className="text-primary font-semibold hover:underline">Read Lesson</a>
                </div>
              </div>

              {/* Lesson Card 4 */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground font-semibold">
                    <span>Hebrews 8-10</span>
                    <span className="text-tertiary uppercase">Epistles</span>
                  </div>
                  <h3 className="text-base font-heading font-bold text-primary">The Better Covenant & Sanctuary</h3>
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    Investigating the author of Hebrews' comparison between the Levitical priesthood and Christ's eternal high priesthood.
                  </p>
                </div>
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Prof. Julian Mercer</span>
                  <a href="#" className="text-primary font-semibold hover:underline">Read Lesson</a>
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
                    Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">4</span> of <span className="font-medium">28</span> lessons
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
            
            {/* Course Progress Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.progressTitle || 'Your Course Progress'}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{data.progressCourse || 'Principles of Hermeneutics'}</span>
                  <span className="font-bold text-primary">{data.progressPercentage || '40%'}</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-tertiary h-full w-2/5"></div>
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {data.progressDescription || 'You have completed 2 out of 5 foundational lessons in this series. Resume to earn your certificate.'}
              </p>
              <a href="#" className="block text-center py-2 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all">
                {data.progressButtonText || 'Resume Course'}
              </a>
            </div>

            {/* Seminar Schedule Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">{data.seminarTitle || 'Upcoming Q&A Seminars'}</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-tertiary pl-3 py-1">
                  <p className="text-xs font-bold text-primary">Genesis 1-11 Discussion</p>
                  <p className="text-[11px] text-muted-foreground">Thursday, March 20 | 7:00 PM EST</p>
                </div>
                <div className="border-l-2 border-tertiary pl-3 py-1">
                  <p className="text-xs font-bold text-primary">Romans 5-8 Discussion</p>
                  <p className="text-[11px] text-muted-foreground">Thursday, March 27 | 7:00 PM EST</p>
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
