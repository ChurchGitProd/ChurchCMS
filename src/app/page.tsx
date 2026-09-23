import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../tina/__generated__/client";

export default async function Home() {
  const homeData = await client.queries.home({ relativePath: "index.md" });
  const data = homeData.data.home;
  return (
    <div className="min-h-screen w-full flex flex-col relative text-foreground font-sans" style={{background: 'radial-gradient(circle at top left, rgba(153,212,224,0.28), transparent 45%), radial-gradient(circle at bottom right, rgba(153,212,224,0.18), transparent 50%), linear-gradient(180deg, #FCFEFE 0%, #F4FBFC 20%, #EAF7FA 45%, #DDF2F6 70%, #C8E8EF 100%)'}}>
      {/* Top Announcement Bar */}
      <div className="bg-secondary text-secondary-foreground text-xs py-2 px-4 text-center tracking-wider font-sans border-b border-border flex items-center justify-center gap-2">
        <span className="text-sm text-tertiary">📖</span>
        <span>{data.announcementText}</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline text-tertiary font-medium">{data.announcementSubtext}</span>
      </div>

      <Header activePage="home" />

      {/* Rich Hero Section with Bible-Based Identity Statement */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-border" style={{background: 'radial-gradient(circle at top right, rgba(153,212,224,0.35), transparent 40%), linear-gradient(180deg, #EAF7FA 0%, #F4FBFC 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-medium text-secondary">
                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span>PREMIUM DIGITAL BIBLE LIBRARY & SCHOLARLY ARCHIVE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                {data.hero?.headline || 'Unveiling the Depth of Holy Scripture'}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-sans">
                {data.hero?.subheadline || 'A meticulous, beautifully curated editorial platform dedicated purely to the preservation, study, and teaching of biblical texts.'}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href={data.hero?.ctaLink || '/library'} className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-primary/95 transition-all flex items-center gap-2">
                  <span>{data.hero?.ctaText || 'Explore Digital Library'}</span>
                  <span className="text-lg">→</span>
                </a>
                <a href={data.hero?.secondaryCtaLink || '/lessons'} className="px-6 py-3 bg-card text-primary border border-border font-semibold rounded-lg hover:bg-muted transition-all flex items-center gap-2">
                  <span>{data.hero?.secondaryCtaText || 'Browse Lessons'}</span>
                  <span className="text-lg text-tertiary">📖</span>
                </a>
              </div>
            </div>

            {/* Hero Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/20 to-primary/10 rounded-2xl blur-2xl -z-10"></div>
              <div className="border-4 border-border rounded-2xl p-2 bg-card shadow-2xl overflow-hidden transform hover:rotate-1 transition-transform duration-300">
                <img src={data.hero?.heroImage || '/hero image.webp'} alt="Open Bible" className="w-full h-auto rounded-lg object-cover shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Verse / Scripture of the Day */}
      <section className="py-12 border-b border-border" style={{background: '#F4FBFC'}}>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-tertiary uppercase">Scripture of the Day</span>
          <blockquote className="text-2xl sm:text-3xl font-heading italic text-primary leading-relaxed">
            "{data.scriptureOfTheDay?.verse || 'Your word is a lamp to my feet and a light to my path.'}"
          </blockquote>
          <cite className="block text-sm font-sans font-semibold text-muted-foreground not-italic">
            — {data.scriptureOfTheDay?.reference || 'Psalm 119:105 (ESV)'}
          </cite>
          <div className="pt-2 flex justify-center gap-3">
            <button className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-primary transition-colors" title="Share Verse">
              <span className="text-lg">🔗</span>
            </button>
            <button className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-primary transition-colors" title="Save to Library">
              <span className="text-lg">🔖</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Featured Content Grid */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Featured Lessons Section */}
            <section id="lessons" className="space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-tertiary rounded"></span>
                  Featured Bible Lessons
                </h2>
                <a href="/lessons" className="text-xs font-semibold text-tertiary hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1">
                  <span>View All Lessons</span>
                  <span className="text-sm">→</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Lesson Card 1 */}
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all flex flex-col group">
                  <div className="h-48 overflow-hidden relative">
                    <img src="https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Lesson" />
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded">
                      Pentateuch
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-xs text-tertiary font-semibold">Genesis 1-11 | Dr. Charles Vance</p>
                      <h3 className="text-lg font-heading font-bold text-primary group-hover:text-tertiary transition-colors">
                        The Theology of Creation & Covenant
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-3">
                        An in-depth scholarly analysis of the primeval history, exploring the structural parallels of creation narratives and the foundational covenants.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="text-sm text-tertiary">⏱️</span> 45 mins read
                      </span>
                      <a href="/lessons" className="text-primary font-semibold hover:underline">Read Lesson</a>
                    </div>
                  </div>
                </div>

                {/* Lesson Card 2 */}
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all flex flex-col group">
                  <div className="h-48 overflow-hidden relative">
                    <img src="https://uxmagic.blob.core.windows.net/public/agent-images/library_shelf-1782719371570-ajnz70oz8sg.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Lesson" />
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded">
                      Epistles
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-xs text-tertiary font-semibold">Romans 5-8 | Prof. Eleanor Sterling</p>
                      <h3 className="text-lg font-heading font-bold text-primary group-hover:text-tertiary transition-colors">
                        Grace, Justification, and the New Life
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-3">
                        Tracing Paul's masterpiece argument from legal justification to the intimate reality of life in the Holy Spirit.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/60 mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <span className="text-sm text-tertiary">⏱️</span> 50 mins read
                      </span>
                      <a href="/lessons" className="text-primary font-semibold hover:underline">Read Lesson</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Latest Bible References Section */}
            <section id="references" className="space-y-6 py-8" style={{background: '#F4FBFC', margin: '0 -16px', paddingLeft: '16px', paddingRight: '16px'}}>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-tertiary rounded"></span>
                  Latest Bible References
                </h2>
                <a href="/references" className="text-xs font-semibold text-tertiary hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1">
                  <span>View All References</span>
                  <span className="text-sm">→</span>
                </a>
              </div>

              <div className="space-y-4">
                {/* Reference Item 1 */}
                <div className="bg-card border border-border rounded-lg p-5 hover:border-tertiary transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Isaiah 53:1-12</span>
                    <span className="text-xs text-muted-foreground">Category: Messianic Prophecy</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">The Suffering Servant</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    A comprehensive cross-reference guide connecting the prophetic lyrics of Isaiah with the Passion narratives in the Gospels of Matthew and John.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Prophecy</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Atonement</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Gospel Parallel</span>
                  </div>
                </div>

                {/* Reference Item 2 */}
                <div className="bg-card border border-border rounded-lg p-5 hover:border-tertiary transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-tertiary uppercase tracking-wider">Hebrews 11:1-40</span>
                    <span className="text-xs text-muted-foreground">Category: Historical Narrative</span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">The Cloud of Witnesses</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Analyzing the historical context of Old Testament heroes of faith highlighted by the author of Hebrews to encourage first-century Jewish Christians.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Faith</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Old Testament</span>
                    <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Exhortation</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Bible Videos Section */}
            <section id="videos" className="space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-tertiary rounded"></span>
                  Featured Bible Videos
                </h2>
                <a href="/videos" className="text-xs font-semibold text-tertiary hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1">
                  <span>View All Videos</span>
                  <span className="text-sm">→</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Video Card 1 */}
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all flex flex-col group">
                  <div className="h-44 overflow-hidden relative bg-primary">
                    <img src="https://uxmagic.blob.core.windows.net/public/agent-images/library_shelf-1782719371570-ajnz70oz8sg.png" className="w-full h-full object-cover opacity-80" alt="Video cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-xl ml-1">▶</span>
                      </span>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-primary/75 text-primary-foreground text-[10px] px-2 py-1 rounded">
                      24:15
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Hermeneutics Series</span>
                    <h3 className="text-base font-heading font-bold text-primary group-hover:text-tertiary transition-colors line-clamp-1">
                      How to Read Biblical Poetry
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      Unpacking the parallelisms, figurative language, and structural beauty of Hebrew poetic literature.
                    </p>
                  </div>
                </div>

                {/* Video Card 2 */}
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all flex flex-col group">
                  <div className="h-44 overflow-hidden relative bg-primary">
                    <img src="https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png" className="w-full h-full object-cover opacity-80" alt="Video cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <span className="text-xl ml-1">▶</span>
                      </span>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-primary/75 text-primary-foreground text-[10px] px-2 py-1 rounded">
                      32:40
                    </span>
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Archaeology Series</span>
                    <h3 className="text-base font-heading font-bold text-primary group-hover:text-tertiary transition-colors line-clamp-1">
                      The Dead Sea Scrolls Discovery
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      An introduction to the Qumran caves, the manuscripts found, and their impact on modern biblical scholarship.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bible Image Gallery Preview Section */}
            <section id="images" className="space-y-6 py-8" style={{background: '#F4FBFC', margin: '0 -16px', paddingLeft: '16px', paddingRight: '16px'}}>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-tertiary rounded"></span>
                  Bible Image Gallery Preview
                </h2>
                <a href="/images" className="text-xs font-semibold text-tertiary hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1">
                  <span>View Full Gallery</span>
                  <span className="text-sm">→</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Image 1 */}
                <div className="group relative rounded-lg overflow-hidden border border-border bg-card shadow-sm aspect-square">
                  <img src="https://uxmagic.blob.core.windows.net/public/agent-images/hero_bible-1782719363350-90sctq9ygv4.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Gallery preview" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <p className="text-xs font-heading font-bold text-primary-foreground">Ancient Pentateuch Manuscript</p>
                    <p className="text-[10px] text-tertiary">Historical Artifact</p>
                  </div>
                </div>
                {/* Image 2 */}
                <div className="group relative rounded-lg overflow-hidden border border-border bg-card shadow-sm aspect-square">
                  <img src="https://uxmagic.blob.core.windows.net/public/agent-images/library_shelf-1782719371570-ajnz70oz8sg.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Gallery preview" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <p className="text-xs font-heading font-bold text-primary-foreground">Classic Leather-Bound Archives</p>
                    <p className="text-[10px] text-tertiary">Library Collection</p>
                  </div>
                </div>
                {/* Image 3 */}
                <div className="group relative rounded-lg overflow-hidden border border-border bg-card shadow-sm aspect-square">
                  <img src="https://uxmagic.blob.core.windows.net/public/agent-images/study_scene-1782719380163-v1e6si6wd9.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Gallery preview" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <p className="text-xs font-heading font-bold text-primary-foreground">Greek Scripture Annotations</p>
                    <p className="text-[10px] text-tertiary">Scholarly Study</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Books & Magazines */}
            <section id="books" className="space-y-6">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-tertiary rounded"></span>
                  Featured Books & Magazines
                </h2>
                <a href="/books" className="text-xs font-semibold text-tertiary hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1">
                  <span>Browse Catalog</span>
                  <span className="text-sm">→</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Book Card */}
                <div className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all">
                  <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=267&fit=crop" alt="The Abrahamic Promise book cover" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Book Highlight</span>
                      <h3 className="text-base font-heading font-bold text-primary">The Abrahamic Promise</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        A deep dive into the legal, historical, and spiritual ramifications of the covenant made in Genesis 15.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-muted-foreground">Author: Dr. Vance</span>
                      <a href="/books" className="text-xs font-bold text-primary hover:text-tertiary">Download PDF</a>
                    </div>
                  </div>
                </div>

                {/* Magazine Card */}
                <div className="bg-card border border-border rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all">
                  <div className="w-24 h-32 flex-shrink-0 border border-border rounded shadow-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=267&fit=crop" alt="Biblical Archaeology Review magazine cover" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">Quarterly Issue</span>
                      <h3 className="text-base font-heading font-bold text-primary">Biblical Archaeology Review</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        Exploring the latest excavations in Jerusalem and their correlation with Old Testament chronicles.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-muted-foreground">Issue #48</span>
                      <a href="#" className="text-xs font-bold text-primary hover:text-tertiary">Read Online</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Daily Newsletter Signup Section */}
            <div className="bg-primary text-primary-foreground p-6 rounded-xl space-y-4 shadow-lg border border-primary/20">
              <div className="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary">
                <span className="text-xl">✉️</span>
              </div>
              <h3 className="text-xl font-heading font-bold">{data.newsletter?.title || 'The Daily Epistle'}</h3>
              <p className="text-xs text-primary-foreground/80 leading-relaxed">
                {data.newsletter?.description || 'Receive a scholarly, editorial commentary, cross-references, and historical background directly to your inbox every morning.'}
              </p>
              <div className="space-y-2 pt-2">
                <input type="email" placeholder="Your email address" className="w-full px-3 py-2.5 text-xs rounded bg-background/10 border border-border/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-1 focus:ring-tertiary" />
                <button className="w-full py-2.5 bg-tertiary text-primary font-bold text-xs rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider">
                  {data.newsletter?.buttonText || 'Subscribe to Epistle'}
                </button>
              </div>
            </div>

            {/* Upcoming Zoom Meeting Card */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded text-[10px] font-bold tracking-widest uppercase">Live Seminar</span>
                <span className="text-xs text-tertiary font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span> Live
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-primary">{data.zoomMeeting?.title || 'Hermeneutics Roundtable: Covenant Theology'}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.zoomMeeting?.description || 'An open theological discussion with Dr. Vance and guest scholars. Includes a Q&A session on Genesis covenants.'}
              </p>
              <div className="space-y-2 text-xs text-muted-foreground pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-tertiary">📅</span>
                  <span>{data.zoomMeeting?.date || 'Thursday, March 20, 2025'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary">⏰</span>
                  <span>{data.zoomMeeting?.time || '7:00 PM - 8:30 PM EST'}</span>
                </div>
              </div>
              <a href={data.zoomMeeting?.buttonLink || '/zoom-info'} className="block text-center py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all">
                {data.zoomMeeting?.buttonText || 'Join Zoom Meeting'}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
