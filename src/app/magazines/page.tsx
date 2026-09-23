import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Magazines() {
  const magazinesData = await client.queries.magazines({ relativePath: "index.md" });
  const data = magazinesData.data.magazines;
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
            <span className="text-primary font-semibold">Magazines</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Quarterly Publications'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Scriptura Magazine'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'Our quarterly theological journal featuring scholarly articles, book reviews, biblical expositions, and contemporary theological discussions from leading scholars and pastors.'}
            </p>
          </div>
        </div>
      </section>

      {/* Issue Filters */}
      <section className="bg-card border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Years</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Issues</option>
              <option>Spring</option>
              <option>Summer</option>
              <option>Fall</option>
              <option>Winter</option>
            </select>
            <select className="px-3 py-2 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>All Topics</option>
              <option>Biblical Studies</option>
              <option>Systematic Theology</option>
              <option>Church History</option>
              <option>Ethics</option>
            </select>
          </div>
          <div className="text-xs text-muted-foreground self-start md:self-auto">
            Showing <span className="font-bold text-primary">12</span> of <span className="font-bold">48</span> issues
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Featured Issue Hero */}
          <div className="bg-primary text-primary-foreground p-8 rounded-xl space-y-6 border border-primary/20 shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="aspect-[3/4] bg-primary-foreground/10 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=533&fit=crop" alt="Winter 2024 Magazine Cover" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">{data.featuredIssue?.badge || 'FEATURED ISSUE'}</span>
                  <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">{data.featuredIssue?.tag || 'Latest'}</span>
                </div>
                <h2 className="text-3xl font-heading font-bold">{data.featuredIssue?.title || 'Winter 2024 — The Doctrine of Scripture'}</h2>
                <p className="text-sm text-primary-foreground/90 leading-relaxed font-sans">
                  {data.featuredIssue?.description || 'This special issue explores the doctrine of divine revelation, biblical inspiration, canon formation, and the authority of Scripture in contemporary theological discourse.'}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 items-center text-xs text-primary-foreground/75">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">📅</span> {data.featuredIssue?.date || 'December 2024'}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">📄</span> {data.featuredIssue?.details || '8 Articles | 120 Pages'}
                  </span>
                </div>
                <div className="pt-4 flex gap-3">
                  <a href="#" className="px-5 py-2.5 bg-tertiary text-primary font-bold text-xs rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider">
                    {data.featuredIssue?.readButtonText || 'Read Issue'}
                  </a>
                  <a href="#" className="px-5 py-2.5 bg-primary-foreground text-primary font-bold text-xs rounded hover:bg-primary-foreground/90 transition-all uppercase tracking-wider">
                    {data.featuredIssue?.downloadButtonText || 'Download PDF'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Issue Spotlight */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-6">{data.spotlightTitle || 'Latest Issue Spotlight'}</h3>
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-64 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop" alt="Fall 2024 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Fall 2024</span>
                      <h4 className="text-xl font-heading font-bold text-primary">Eschatology & Hope</h4>
                    </div>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Previous Issue</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Exploring biblical eschatology, the hope of resurrection, and the consummation of all things. Articles include "The Already/Not Yet of the Kingdom," "Resurrection Hope," and "New Creation Theology."
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="text-tertiary">👤</span> 6 Contributors
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-tertiary">📄</span> 7 Articles
                    </span>
                  </div>
                  <a href="#" className="inline-block text-tertiary font-bold text-xs hover:underline">
                    Read Fall 2024 Issue →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Magazine Cover Grid */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-6">{data.archiveTitle || 'Archive Issues'}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Issue 1 */}
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all space-y-3 group cursor-pointer">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden group-hover:bg-tertiary/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop" alt="Summer 2024 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase">Summer 2024</span>
                  <h4 className="text-sm font-heading font-bold text-primary">Ecclesiology</h4>
                  <p className="text-[10px] text-muted-foreground">The nature and mission of the church</p>
                </div>
              </div>

              {/* Issue 2 */}
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all space-y-3 group cursor-pointer">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden group-hover:bg-tertiary/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop" alt="Spring 2024 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase">Spring 2024</span>
                  <h4 className="text-sm font-heading font-bold text-primary">Christology</h4>
                  <p className="text-[10px] text-muted-foreground">The person and work of Christ</p>
                </div>
              </div>

              {/* Issue 3 */}
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all space-y-3 group cursor-pointer">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden group-hover:bg-tertiary/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop" alt="Winter 2023 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase">Winter 2023</span>
                  <h4 className="text-sm font-heading font-bold text-primary">Soteriology</h4>
                  <p className="text-[10px] text-muted-foreground">The doctrine of salvation</p>
                </div>
              </div>

              {/* Issue 4 */}
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all space-y-3 group cursor-pointer">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden group-hover:bg-tertiary/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop" alt="Fall 2023 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase">Fall 2023</span>
                  <h4 className="text-sm font-heading font-bold text-primary">Pneumatology</h4>
                  <p className="text-[10px] text-muted-foreground">The Holy Spirit in Scripture</p>
                </div>
              </div>

              {/* Issue 5 */}
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all space-y-3 group cursor-pointer">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden group-hover:bg-tertiary/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop" alt="Summer 2023 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase">Summer 2023</span>
                  <h4 className="text-sm font-heading font-bold text-primary">Biblical Hermeneutics</h4>
                  <p className="text-[10px] text-muted-foreground">Interpreting Scripture faithfully</p>
                </div>
              </div>

              {/* Issue 6 */}
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all space-y-3 group cursor-pointer">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden group-hover:bg-tertiary/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop" alt="Spring 2023 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase">Spring 2023</span>
                  <h4 className="text-sm font-heading font-bold text-primary">Church History</h4>
                  <p className="text-[10px] text-muted-foreground">2000 years of Christian faith</p>
                </div>
              </div>

              {/* Issue 7 */}
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all space-y-3 group cursor-pointer">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden group-hover:bg-tertiary/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&h=400&fit=crop" alt="Winter 2022 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase">Winter 2022</span>
                  <h4 className="text-sm font-heading font-bold text-primary">Ethics & Morality</h4>
                  <p className="text-[10px] text-muted-foreground">Christian moral formation</p>
                </div>
              </div>

              {/* Issue 8 */}
              <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all space-y-3 group cursor-pointer">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden group-hover:bg-tertiary/10 transition-colors">
                  <img src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=300&h=400&fit=crop" alt="Fall 2022 Issue" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-tertiary uppercase">Fall 2022</span>
                  <h4 className="text-sm font-heading font-bold text-primary">Apologetics</h4>
                  <p className="text-[10px] text-muted-foreground">Defending the faith</p>
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
                  Showing <span className="font-medium text-primary">1</span> to <span className="font-medium text-primary">8</span> of <span className="font-medium">48</span> issues
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
