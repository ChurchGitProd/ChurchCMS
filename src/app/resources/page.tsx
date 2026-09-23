import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Resources() {
  const resourcesData = await client.queries.resources({ relativePath: "index.md" });
  const data = resourcesData.data.resources;
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
            <span className="text-primary font-semibold">Useful Resources</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Resource Directory'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Useful Resources'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'A curated collection of external theological tools, Bible study software, academic databases, and scholarly resources.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Category Filters */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <input type="text" placeholder={data.searchPlaceholder || 'Search resources...'} className="w-full sm:w-72 pl-9 pr-4 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">🔍</span>
            </div>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Categories</option>
              <option>Bible Software</option>
              <option>Commentaries</option>
              <option>Lexicons & Dictionaries</option>
              <option>Academic Journals</option>
              <option>Church History</option>
              <option>Original Languages</option>
            </select>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Types</option>
              <option>Free Resources</option>
              <option>Paid Resources</option>
              <option>Open Access</option>
            </select>
          </div>
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing <span className="font-bold text-primary">12</span> of <span className="font-bold">86</span> resources
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Resources Listing & Pagination */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Resource Banner */}
            <div className="bg-primary text-primary-foreground p-6 rounded-xl space-y-4 border border-primary/20 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">{data.featuredResource?.badge || 'FEATURED RESOURCE'}</span>
                <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">{data.featuredResource?.tag || 'Essential Tool'}</span>
              </div>
              <h2 className="text-2xl font-heading font-bold">{data.featuredResource?.title || 'Logos Bible Software'}</h2>
              <p className="text-xs text-primary-foreground/90 leading-relaxed font-sans">
                {data.featuredResource?.description || 'The premier Bible study platform with original language tools, extensive commentaries, and a vast theological library.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75">
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">⭐</span> Rating: {data.featuredResource?.rating || '4.8/5'}
                </span>
                <a href={data.featuredResource?.linkUrl || '#'} className="text-tertiary font-bold hover:underline flex items-center gap-1">
                  <span>{data.featuredResource?.linkText || 'Visit Website'}</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* Resource Listing Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Resource 1 */}
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=60&h=60&fit=crop" alt="Blue Letter Bible" className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Free</span>
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-primary">Blue Letter Bible</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">Online Bible study with interlinear, commentaries, and lexicons.</p>
                </div>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary text-[10px]">⭐</span> 4.6
                  </span>
                  <a href="#" className="text-primary hover:text-tertiary transition-colors">Visit →</a>
                </div>
              </div>

              {/* Resource 2 */}
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="Bible Hub" className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Free</span>
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-primary">Bible Hub</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">Parallel Bible, interlinear, commentaries, and dictionaries.</p>
                </div>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary text-[10px]">⭐</span> 4.5
                  </span>
                  <a href="#" className="text-primary hover:text-tertiary transition-colors">Visit →</a>
                </div>
              </div>

              {/* Resource 3 */}
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=60&h=60&fit=crop" alt="Accordance" className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Paid</span>
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-primary">Accordance Bible Software</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">Advanced original language tools and biblical research platform.</p>
                </div>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary text-[10px]">⭐</span> 4.7
                  </span>
                  <a href="#" className="text-primary hover:text-tertiary transition-colors">Visit →</a>
                </div>
              </div>

              {/* Resource 4 */}
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=60&h=60&fit=crop" alt="Perseus" className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Free</span>
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-primary">Perseus Digital Library</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">Classical texts, Greek and Latin resources for biblical studies.</p>
                </div>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary text-[10px]">⭐</span> 4.4
                  </span>
                  <a href="#" className="text-primary hover:text-tertiary transition-colors">Visit →</a>
                </div>
              </div>

              {/* Resource 5 */}
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=60&h=60&fit=crop" alt="Bible Gateway" className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Free</span>
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-primary">Bible Gateway</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">Online Bible with multiple translations, reading plans, and devotionals.</p>
                </div>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary text-[10px]">⭐</span> 4.5
                  </span>
                  <a href="#" className="text-primary hover:text-tertiary transition-colors">Visit →</a>
                </div>
              </div>

              {/* Resource 6 */}
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=60&h=60&fit=crop" alt="JSTOR" className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Free</span>
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-primary">JSTOR</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">Academic journals and articles in theology and religious studies.</p>
                </div>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary text-[10px]">⭐</span> 4.6
                  </span>
                  <a href="#" className="text-primary hover:text-tertiary transition-colors">Visit →</a>
                </div>
              </div>

              {/* Resource 7 */}
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=60&h=60&fit=crop" alt="Oxford" className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Paid</span>
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-primary">Oxford Biblical Studies Online</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">Comprehensive scholarly resource with commentaries and reference works.</p>
                </div>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary text-[10px]">⭐</span> 4.7
                  </span>
                  <a href="#" className="text-primary hover:text-tertiary transition-colors">Visit →</a>
                </div>
              </div>

              {/* Resource 8 */}
              <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=60&h=60&fit=crop" alt="NET Bible" className="w-full h-full object-cover" />
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Free</span>
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold text-primary">NET Bible</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">New English Translation with extensive translator's notes.</p>
                </div>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary text-[10px]">⭐</span> 4.5
                  </span>
                  <a href="#" className="text-primary hover:text-tertiary transition-colors">Visit →</a>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <button className="px-3 py-1.5 text-xs rounded border border-border bg-card text-muted-foreground hover:bg-muted transition-all">
                <span className="text-sm">←</span>
              </button>
              <button className="px-3 py-1.5 text-xs rounded border border-border bg-primary text-primary-foreground">1</button>
              <button className="px-3 py-1.5 text-xs rounded border border-border bg-card text-muted-foreground hover:bg-muted transition-all">2</button>
              <button className="px-3 py-1.5 text-xs rounded border border-border bg-card text-muted-foreground hover:bg-muted transition-all">3</button>
              <button className="px-3 py-1.5 text-xs rounded border border-border bg-card text-muted-foreground hover:bg-muted transition-all">4</button>
              <button className="px-3 py-1.5 text-xs rounded border border-border bg-card text-muted-foreground hover:bg-muted transition-all">5</button>
              <button className="px-3 py-1.5 text-xs rounded border border-border bg-card text-muted-foreground hover:bg-muted transition-all">
                <span className="text-sm">→</span>
              </button>
            </div>

          </div>

          {/* Right Column: Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Popular Resources Widget */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-heading font-bold text-primary flex items-center gap-2">
                <span className="text-tertiary">🔥</span>
                {data.popularResourcesTitle || 'Popular Resources'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-tertiary/20 text-tertiary text-[10px] font-bold flex items-center justify-center mt-0.5">1</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">Logos Bible Software</a>
                    <p className="text-[10px] text-muted-foreground">12.5K visits/month</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-tertiary/20 text-tertiary text-[10px] font-bold flex items-center justify-center mt-0.5">2</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">Blue Letter Bible</a>
                    <p className="text-[10px] text-muted-foreground">9.8K visits/month</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-tertiary/20 text-tertiary text-[10px] font-bold flex items-center justify-center mt-0.5">3</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">Bible Gateway</a>
                    <p className="text-[10px] text-muted-foreground">8.2K visits/month</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-tertiary/20 text-tertiary text-[10px] font-bold flex items-center justify-center mt-0.5">4</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">Accordance</a>
                    <p className="text-[10px] text-muted-foreground">6.4K visits/month</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-tertiary/20 text-tertiary text-[10px] font-bold flex items-center justify-center mt-0.5">5</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">Bible Hub</a>
                    <p className="text-[10px] text-muted-foreground">5.9K visits/month</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Recent Additions Widget */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-heading font-bold text-primary flex items-center gap-2">
                <span className="text-tertiary">🕐</span>
                {data.recentAdditionsTitle || 'Recent Additions'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-tertiary text-sm mt-0.5">➕</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">SBL Greek New Testament</a>
                    <p className="text-[10px] text-muted-foreground">Added 2 days ago</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tertiary text-sm mt-0.5">➕</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">Theological Journals Database</a>
                    <p className="text-[10px] text-muted-foreground">Added 5 days ago</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tertiary text-sm mt-0.5">➕</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">Early Church Fathers Collection</a>
                    <p className="text-[10px] text-muted-foreground">Added 1 week ago</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-tertiary text-sm mt-0.5">➕</span>
                  <div>
                    <a href="#" className="text-xs font-semibold text-primary hover:text-tertiary transition-colors">Hebrew Lexicon Tools</a>
                    <p className="text-[10px] text-muted-foreground">Added 2 weeks ago</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Category Tags Widget */}
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-heading font-bold text-primary flex items-center gap-2">
                <span className="text-tertiary">🏷️</span>
                {data.categoryTagsTitle || 'Browse by Category'}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Bible Software</span>
                <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Commentaries</span>
                <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Lexicons</span>
                <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Dictionaries</span>
                <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Academic</span>
                <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Church History</span>
                <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Original Languages</span>
                <span className="px-2 py-1 bg-muted rounded text-[10px] text-muted-foreground cursor-pointer hover:bg-tertiary/10 hover:text-primary transition-colors">Theology</span>
              </div>
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
