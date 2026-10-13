export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavSection {
  id: 'bible' | 'hub' | 'connect';
  label: string;
  items: NavItem[];
}

export const TOP_NAV_HOME: NavItem = {
  id: 'home',
  label: 'Home',
  href: '/',
};

export const TOP_NAV_ABOUT: NavItem = {
  id: 'about',
  label: 'About',
  href: '/about',
};

export const TOP_NAV_CONTACT: NavItem = {
  id: 'contact',
  label: 'Contact Office',
  href: '/contact',
};

export const NAV_SECTIONS: NavSection[] = [
  {
    id: 'bible',
    label: 'Bible',
    items: [
      { id: 'lessons', label: 'Lessons', href: '/lessons' },
      { id: 'references', label: 'Scripture References', href: '/references' },
      { id: 'images', label: 'Bible Images', href: '/images' },
      { id: 'videos', label: 'Bible Videos', href: '/videos' },
    ],
  },
  {
    id: 'hub',
    label: 'Knowledge Hub',
    items: [
      { id: 'books', label: 'Books', href: '/books' },
      { id: 'library', label: 'Library', href: '/library' },
      { id: 'magazines', label: 'Magazines', href: '/magazines' },
      { id: 'newsletter', label: 'Daily Letter', href: '/newsletter' },
      { id: 'resources', label: 'Resources', href: '/resources' },
      { id: 'archives', label: 'Archives', href: '/archives' },
    ],
  },
  {
    id: 'connect',
    label: 'Connect Portal',
    items: [
      { id: 'quick-links', label: 'Quick Links', href: '/quick-links' },
      { id: 'zoom-info', label: 'Zoom Info', href: '/zoom-info' },
    ],
  },
];
