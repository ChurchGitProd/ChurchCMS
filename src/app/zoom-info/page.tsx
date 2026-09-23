import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function ZoomInfo() {
  const zoomInfoData = await client.queries.zoomInfo({ relativePath: "index.md" });
  const data = zoomInfoData.data.zoomInfo;
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
            <span className="text-primary font-semibold">Zoom Meeting Info</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Live Online Sessions'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Zoom Seminar Schedule'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'Join our live theological seminars, Bible study sessions, and scholarly discussions via Zoom.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Upcoming Meeting Hero Card */}
          <div className="bg-primary text-primary-foreground p-8 rounded-xl space-y-6 border border-primary/20 shadow-md">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold tracking-widest text-tertiary uppercase">{data.featuredMeeting?.badge || 'NEXT LIVE SESSION'}</span>
              <span className="px-2 py-0.5 bg-tertiary text-primary text-[10px] font-bold rounded">{data.featuredMeeting?.tag || 'This Thursday'}</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-bold">{data.featuredMeeting?.title || 'The Doctrine of the Trinity: A Biblical Foundation'}</h2>
              <p className="text-sm text-primary-foreground/90 leading-relaxed font-sans">
                {data.featuredMeeting?.description || 'Join Dr. Charles Vance for an in-depth exploration of the Trinitarian doctrine as revealed in Scripture.'}
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-primary-foreground/75">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">📅</span> {data.featuredMeeting?.date || 'July 4, 2024'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">🕐</span> {data.featuredMeeting?.time || '7:00 PM EST'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-tertiary">📹</span> {data.featuredMeeting?.duration || '90 Minutes'}
                </span>
              </div>
              <button className="px-6 py-2.5 bg-tertiary text-primary font-bold text-xs rounded hover:bg-tertiary/90 transition-all uppercase tracking-wider">
                {data.featuredMeeting?.buttonText || 'Join Meeting'}
              </button>
            </div>
          </div>

          {/* Meeting Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Speaker */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
              <div className="w-20 h-20 rounded-lg bg-primary/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Dr. Charles Vance" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary">{data.speakerCard?.title || 'Featured Speaker'}</h3>
                <p className="text-xs text-muted-foreground mt-1">{data.speakerCard?.name || 'Dr. Charles Vance'}</p>
                <p className="text-[10px] text-muted-foreground/70">{data.speakerCard?.role || 'Professor of Systematic Theology'}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {data.speakerCard?.bio || 'Dr. Vance has over 25 years of teaching experience and specializes in Trinitarian theology and Christology.'}
              </p>
            </div>

            {/* Card 2: Meeting Access */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="text-2xl text-tertiary">🔗</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary">{data.meetingAccessCard?.title || 'Meeting Access'}</h3>
                <p className="text-xs text-muted-foreground mt-1">{data.meetingAccessCard?.platform || 'Zoom Platform'}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-primary">Meeting ID:</span> {data.meetingAccessCard?.meetingId || '845-291-0347'}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-primary">Passcode:</span> {data.meetingAccessCard?.passcode || 'SCRIPTURA2024'}
                </p>
              </div>
            </div>

            {/* Card 3: Preparation */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="text-2xl text-tertiary">📖</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary">{data.preparationCard?.title || 'Preparation'}</h3>
                <p className="text-xs text-muted-foreground mt-1">{data.preparationCard?.subtitle || 'Recommended Reading'}</p>
              </div>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-tertiary mt-0.5">✓</span>
                  <span>{data.preparationCard?.reading1 || 'Genesis 1:26-27'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tertiary mt-0.5">✓</span>
                  <span>{data.preparationCard?.reading2 || 'Matthew 28:19'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tertiary mt-0.5">✓</span>
                  <span>{data.preparationCard?.reading3 || '2 Corinthians 13:14'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recurring / Past Meetings Listing */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-6">{data.sessionsTitle || 'Upcoming & Past Sessions'}</h3>
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">July 11, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-primary">Eschatology: The Last Things</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-primary">Upcoming</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  An exploration of biblical prophecy concerning the end times, including the return of Christ, resurrection, and final judgment.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Prof. Eleanor Sterling
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">🕐</span> 7:00 PM EST
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">June 27, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-primary">The Parables of Jesus</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-muted-foreground">Recording Available</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A comprehensive study of Jesus' parabolic teaching methods and their theological significance for understanding the Kingdom of God.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Dr. Thomas Keller
                  </span>
                  <a href="#" className="text-tertiary font-bold hover:underline">Watch Recording →</a>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">June 20, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-primary">Biblical Hermeneutics</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-muted-foreground">Recording Available</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Introduction to principles of biblical interpretation, including historical-grammatical method and literary analysis.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Dr. Michael Horton
                  </span>
                  <a href="#" className="text-tertiary font-bold hover:underline">Watch Recording →</a>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-card border border-dashed border-border rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">June 13, 2024</span>
                    <h4 className="text-lg font-heading font-bold text-muted-foreground">The Book of Hebrews</h4>
                  </div>
                  <span className="px-2 py-0.5 bg-muted rounded text-[10px] text-muted-foreground">Recording Available</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  An expository journey through the epistle to the Hebrews, focusing on Christ's supremacy and the new covenant.
                </p>
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="text-tertiary">👤</span> Prof. Sarah Williams
                  </span>
                  <a href="#" className="text-tertiary font-bold hover:underline">Watch Recording →</a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Scripture or Lesson Widget */}
          <div className="bg-secondary text-secondary-foreground p-8 rounded-xl space-y-6 border border-secondary/20 shadow-md">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-heading font-bold text-tertiary">{data.relatedScripture?.title || 'Related Scripture Study'}</h3>
              <p className="text-sm text-secondary-foreground/90 max-w-2xl mx-auto">
                {data.relatedScripture?.description || 'Prepare for upcoming sessions by studying these foundational passages. Each lesson provides historical context, theological insights, and practical application.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <a href="/lessons" className="bg-background/10 hover:bg-background/20 transition-all p-4 rounded-lg text-center">
                  <span className="text-2xl text-tertiary mx-auto mb-2 block">📖</span>
                  <p className="text-xs font-bold">{data.relatedScripture?.scripture1Title || 'Genesis 1-2'}</p>
                  <p className="text-[10px] text-secondary-foreground/70">{data.relatedScripture?.scripture1Subtitle || 'Creation Narrative'}</p>
                </a>
                <a href="/lessons" className="bg-background/10 hover:bg-background/20 transition-all p-4 rounded-lg text-center">
                  <span className="text-2xl text-tertiary mx-auto mb-2 block">📖</span>
                  <p className="text-xs font-bold">{data.relatedScripture?.scripture2Title || 'John 1:1-18'}</p>
                  <p className="text-[10px] text-secondary-foreground/70">{data.relatedScripture?.scripture2Subtitle || 'The Word Made Flesh'}</p>
                </a>
                <a href="/lessons" className="bg-background/10 hover:bg-background/20 transition-all p-4 rounded-lg text-center">
                  <span className="text-2xl text-tertiary mx-auto mb-2 block">📖</span>
                  <p className="text-xs font-bold">{data.relatedScripture?.scripture3Title || 'Acts 2'}</p>
                  <p className="text-[10px] text-secondary-foreground/70">{data.relatedScripture?.scripture3Subtitle || 'Pentecost'}</p>
                </a>
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
