import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from "../../../tina/__generated__/client";

export default async function Contact() {
  const contactData = await client.queries.contact({ relativePath: "index.md" });
  const data = contactData.data.contact;
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
            <span className="text-primary font-semibold">Contact</span>
          </nav>
        </div>
      </div>

      {/* Page Intro */}
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-tertiary uppercase">{data.hero?.badge || 'Get in Touch'}</span>
            <h1 className="text-3xl font-heading font-bold text-primary">{data.hero?.headline || 'Contact Our Office'}</h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {data.hero?.subheadline || 'We welcome your questions, feedback, and partnership inquiries.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Email */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="text-2xl text-tertiary">✉️</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary">{data.emailCard?.title || 'Email Us'}</h3>
                <p className="text-xs text-muted-foreground mt-1">{data.emailCard?.description || 'For general inquiries and support'}</p>
              </div>
              <a href={`mailto:${data.emailCard?.email || 'contact@scriptura.org'}`} className="text-sm font-bold text-tertiary hover:underline">{data.emailCard?.email || 'contact@scriptura.org'}</a>
            </div>

            {/* Card 2: Phone */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="text-2xl text-tertiary">📞</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary">{data.phoneCard?.title || 'Call Us'}</h3>
                <p className="text-xs text-muted-foreground mt-1">{data.phoneCard?.description || 'Mon-Fri, 9:00 AM - 5:00 PM EST'}</p>
              </div>
              <a href={`tel:${data.phoneCard?.phone || '+15551234567'}`} className="text-sm font-bold text-tertiary hover:underline">{data.phoneCard?.phone || '+1 (555) 123-4567'}</a>
            </div>

            {/* Card 3: Location */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="text-2xl text-tertiary">📍</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary">{data.locationCard?.title || 'Visit Us'}</h3>
                <p className="text-xs text-muted-foreground mt-1">{data.locationCard?.description || 'Our main office location'}</p>
              </div>
              <p className="text-sm font-bold text-primary">{data.locationCard?.address || '123 Theology Lane, Scholar\'s Quarter, ST 40012'}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-heading font-bold text-primary">{data.contactForm?.title || 'Send Us a Message'}</h3>
              <p className="text-xs text-muted-foreground">{data.contactForm?.description || 'Fill out the form below and we\'ll respond within 1-2 business days.'}</p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-primary">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-primary">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-primary">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-primary">Subject</label>
                <select className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>Select a topic</option>
                  <option>General Inquiry</option>
                  <option>Theological Resources</option>
                  <option>Research Partnership</option>
                  <option>Donation & Support</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-primary">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full px-4 py-2.5 text-xs rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-bold text-sm rounded hover:bg-primary/95 transition-all uppercase tracking-wider">
                {data.contactForm?.submitButtonText || 'Send Message'}
              </button>
            </form>
          </div>

          {/* Map/Embed Placeholder */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="aspect-video bg-muted relative">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=675&fit=crop" alt="Map location" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <span className="text-4xl text-white mx-auto block">📍</span>
                  <p className="text-sm text-white font-medium">123 Theology Lane, Scholar's Quarter, ST 40012</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office/Contact Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-heading font-bold text-primary flex items-center gap-2">
                <span className="text-tertiary">🕐</span>
                {data.officeHours?.title || 'Office Hours'}
              </h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-primary">{data.officeHours?.weekdayHours || '9:00 AM - 5:00 PM'}</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-primary">{data.officeHours?.saturdayHours || '10:00 AM - 2:00 PM'}</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-muted-foreground">{data.officeHours?.sundayHours || 'Closed'}</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-border/60">
                <p className="text-[10px] text-muted-foreground">
                  * {data.officeHours?.note || 'Holiday hours may vary. Check our announcements for any schedule changes.'}
                </p>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="text-lg font-heading font-bold text-primary flex items-center gap-2">
                <span className="text-tertiary">ℹ️</span>
                Additional Information
              </h3>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-tertiary mt-0.5">✓</span>
                  <span>For urgent matters outside office hours, please email us and we'll respond the next business day.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tertiary mt-0.5">✓</span>
                  <span>Researchers and scholars interested in accessing our archives should contact us at least 2 weeks in advance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tertiary mt-0.5">✓</span>
                  <span>Donation inquiries can be directed to our development team via the main contact form.</span>
                </li>
              </ul>
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
