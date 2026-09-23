import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function About() {
  const aboutData = await client.queries.about({ relativePath: "index.md" });
  const data = aboutData.data.about;
  return (
    <div className="min-h-screen w-full flex flex-col relative text-foreground font-sans" style={{background: 'radial-gradient(circle at top left, rgba(153,212,224,0.28), transparent 45%), radial-gradient(circle at bottom right, rgba(153,212,224,0.18), transparent 50%), linear-gradient(180deg, #FCFEFE 0%, #F4FBFC 20%, #EAF7FA 45%, #DDF2F6 70%, #C8E8EF 100%)'}}>
      {/* Top Announcement Bar */}
      <div className="bg-secondary text-secondary-foreground text-xs py-2 px-4 text-center tracking-wider font-sans border-b border-border flex items-center justify-center gap-2">
        <span className="text-sm text-tertiary">📖</span>
        <span>{data.announcementText}</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline text-tertiary font-medium">{data.announcementSubtext}</span>
      </div>

      <Header activePage="about" />

      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="text-[10px]">→</span>
            <span className="text-primary font-semibold">About Us</span>
          </nav>
        </div>
      </div>

      {/* Hero/Banner Section */}
      <section className="relative py-16 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Our Mandate'}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary">
            {data.hero?.headline || 'Scholarly Devotion to the Sacred Texts'}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {data.hero?.subheadline || 'Discover the foundational vision, academic rigor, and profound faith that drives the Scriptura Research Institute.'}
          </p>
        </div>
      </section>

      {/* Core Introduction & Mission / Vision */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Introduction & Mission/Vision */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                <span className="w-1.5 h-6 bg-tertiary rounded"></span>
                {data.introTitle || 'Introduction'}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                {data.introParagraph1 || 'Scriptura Research Institute was established as an independent theological library and teaching platform.'}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                {data.introParagraph2 || 'Through our digital archives, quarterly journals, interactive seminars, and curated lessons, we serve a global community of students, scholars, pastors, and serious readers of the Bible.'}
              </p>
            </section>

            {/* Mission & Vision Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border p-6 rounded-xl space-y-3">
                <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary">{data.mission?.title || 'Our Mission'}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {data.mission?.description || 'To preserve, annotate, and teach the biblical scriptures with absolute academic integrity.'}
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl space-y-3">
                <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="text-xl">👁️</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary">{data.vision?.title || 'Our Vision'}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {data.vision?.description || 'To be the premier digital destination for serious scripture study.'}
                </p>
              </div>
            </section>

            {/* Statement of Faith / Doctrine */}
            <section className="bg-muted/40 border border-border p-8 rounded-xl space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.statementOfFaith?.badge || 'In Veritate Veritas'}</span>
                <h2 className="text-2xl font-heading font-bold text-primary">{data.statementOfFaith?.title || 'Statement of Faith & Doctrine'}</h2>
              </div>
              
              <div className="space-y-4 text-xs text-muted-foreground leading-relaxed">
                <div className="border-l-2 border-tertiary pl-4">
                  <h4 className="font-bold text-primary mb-1">{data.statementOfFaith?.point1Title || '1. The Inspiration of Scripture'}</h4>
                  <p>{data.statementOfFaith?.point1Text || 'We hold that the sixty-six books of the Old and New Testaments are the uniquely inspired, infallible, and inerrant word of God.'}</p>
                </div>
                <div className="border-l-2 border-tertiary pl-4">
                  <h4 className="font-bold text-primary mb-1">{data.statementOfFaith?.point2Title || '2. The Triune God'}</h4>
                  <p>{data.statementOfFaith?.point2Text || 'We believe in one God, eternally existing in three co-equal persons: Father, Son, and Holy Spirit.'}</p>
                </div>
                <div className="border-l-2 border-tertiary pl-4">
                  <h4 className="font-bold text-primary mb-1">{data.statementOfFaith?.point3Title || '3. Redemption & Grace'}</h4>
                  <p>{data.statementOfFaith?.point3Text || 'We confess that salvation is by grace alone, through faith alone, in Christ alone.'}</p>
                </div>
              </div>
            </section>

            {/* Team or Leadership Cards */}
            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-primary flex items-center gap-2">
                <span className="w-1.5 h-6 bg-tertiary rounded"></span>
                Academic Leadership
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Scholar 1 */}
                <div className="bg-card border border-border rounded-xl p-4 text-center space-y-3">
                  <img src="https://randomuser.me/api/portraits/men/12.jpg" className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-tertiary" alt="Dr. Charles Vance" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-primary">Dr. Charles Vance</h4>
                    <p className="text-[10px] text-tertiary uppercase tracking-wider font-semibold">Director of Hermeneutics</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground line-clamp-2">
                    Former Professor of Old Testament Studies at Harvard Divinity School, specializing in ancient covenants.
                  </p>
                </div>

                {/* Scholar 2 */}
                <div className="bg-card border border-border rounded-xl p-4 text-center space-y-3">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-tertiary" alt="Prof. Eleanor Sterling" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-primary">Dr. Thomas Keller</h4>
                    <p className="text-[10px] text-tertiary uppercase tracking-wider font-semibold">Chief Archivist</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground line-clamp-2">
                    Expert in Dead Sea Scrolls and Hellenistic Greek texts, driving our digital manuscript restoration.
                  </p>
                </div>

                {/* Scholar 3 */}
                <div className="bg-card border border-border rounded-xl p-4 text-center space-y-3">
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-tertiary" alt="Prof. Eleanor Sterling" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-primary">Prof. Julian Mercer</h4>
                    <p className="text-[10px] text-tertiary uppercase tracking-wider font-semibold">Biblical Theology Lead</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground line-clamp-2">
                    Author of "The Pauline Paradigm" and lecturer on New Testament epistolary structures.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Right: Sidebar Widget Area */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Contact Summary Widget */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4 shadow-sm">
              <h3 className="text-base font-heading font-bold text-primary border-b border-border pb-2">Academic Office</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Have questions about our doctrinal statement, research papers, or digital library access? Reach out to our administrative team.
              </p>
              <div className="space-y-2.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-tertiary">📍</span>
                  <span>100 Scholar's Row, Boston, MA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-tertiary">✉️</span>
                  <span>office@scriptura-library.org</span>
                </div>
              </div>
              <a href="/contact" className="block text-center py-2.5 bg-primary text-primary-foreground text-xs font-bold rounded hover:bg-primary/95 transition-all">
                Contact Office
              </a>
            </div>

            {/* Quote Widget */}
            <div className="bg-secondary text-secondary-foreground p-6 rounded-xl space-y-4">
              <span className="text-2xl text-tertiary">🔖</span>
              <p className="text-xs italic leading-relaxed">
                "{data.quoteWidget?.quote || 'The scripture is a deep water, where the lamb may wade, and the elephant may swim.'}"
              </p>
              <span className="block text-[10px] font-bold text-tertiary uppercase tracking-widest">— {data.quoteWidget?.author || 'Gregory the Great'}</span>
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
