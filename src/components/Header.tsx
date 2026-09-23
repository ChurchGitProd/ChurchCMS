interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage = 'home' }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-md transition-transform group-hover:scale-105">
              <span className="text-xl text-tertiary">📚</span>
            </div>
            <div>
              <span className="block font-heading text-xl font-bold tracking-tight text-primary">SCRIPTURA</span>
              <span className="block text-[10px] tracking-widest text-muted-foreground uppercase font-sans -mt-1">Digital Library</span>
            </div>
          </a>

          {/* Main Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="/" className={`px-3 py-2 text-sm font-medium transition-colors ${activePage === 'home' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'}`}>Home</a>
            
            {/* Bible Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>Bible</span>
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card rounded-xl border border-border shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/lessons" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Lessons</a>
                <a href="/images" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Bible Images</a>
                <a href="/videos" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Bible Videos</a>
              </div>
            </div>
            
            {/* Knowledge Hub Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>Knowledge Hub</span>
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card rounded-xl border border-border shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/books" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Books</a>
                <a href="/library" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Library</a>
                <a href="/magazines" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Magazines</a>
                <a href="/newsletter" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Daily Letter</a>
                <a href="/resources" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Resources</a>
                <a href="/archives" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Archives</a>
              </div>
            </div>
            
            {/* Connect Portal Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <span>Connect Portal</span>
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card rounded-xl border border-border shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="/quick-links" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Quick Links</a>
                <a href="/zoom" className="block px-3 py-2 text-xs font-medium text-primary hover:bg-muted rounded-lg">Zoom Info</a>
              </div>
            </div>
            
            <a href="/about" className={`px-3 py-2 text-sm font-medium transition-colors ${activePage === 'about' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-primary'}`}>About</a>
            <a href="/contact" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact Office</a>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <input type="text" placeholder="Search scriptures, commentaries..." className="w-64 pl-9 pr-4 py-2 text-xs rounded-lg bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground" />
              <span className="absolute left-3 top-2.5 text-muted-foreground text-sm">🔍</span>
            </div>
            <button className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-primary transition-colors">
              <span className="text-lg">☀️</span>
            </button>
            <button className="lg:hidden p-2 rounded-lg hover:bg-muted text-primary">
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
