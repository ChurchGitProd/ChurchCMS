export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                <span className="text-xl text-tertiary">📚</span>
              </div>
              <div>
                <span className="block font-heading text-xl font-bold tracking-tight text-primary-foreground">SCRIPTURA</span>
                <span className="block text-[10px] tracking-widest text-secondary-foreground/80 uppercase font-sans -mt-1">Digital Library</span>
              </div>
            </div>
            <p className="text-xs text-secondary-foreground/80 leading-relaxed">
              A meticulous, beautifully curated editorial platform dedicated purely to the preservation, study, and teaching of biblical texts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold text-tertiary mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-secondary-foreground/90">
              <li><a href="/library" className="hover:text-tertiary transition-colors">Digital Library</a></li>
              <li><a href="/lessons" className="hover:text-tertiary transition-colors">Bible Lessons</a></li>
              <li><a href="/books" className="hover:text-tertiary transition-colors">Books Collection</a></li>
              <li><a href="/magazines" className="hover:text-tertiary transition-colors">Magazines</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-heading font-bold text-tertiary mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs text-secondary-foreground/90">
              <li><a href="/references" className="hover:text-tertiary transition-colors">Bible References</a></li>
              <li><a href="/images" className="hover:text-tertiary transition-colors">Bible Images</a></li>
              <li><a href="/videos" className="hover:text-tertiary transition-colors">Video Archives</a></li>
              <li><a href="/resources" className="hover:text-tertiary transition-colors">Study Tools</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-bold text-tertiary mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2 text-xs text-secondary-foreground/90">
              <li><a href="/contact" className="hover:text-tertiary transition-colors">Contact Office</a></li>
              <li><a href="/zoom-info" className="hover:text-tertiary transition-colors">Zoom Meetings</a></li>
              <li><a href="/newsletter" className="hover:text-tertiary transition-colors">Daily Newsletter</a></li>
              <li><a href="/about" className="hover:text-tertiary transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-xs text-secondary-foreground/70">
          <p>&copy; 2024 Scriptura Digital Library. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
