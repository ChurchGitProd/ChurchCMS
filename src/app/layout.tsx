import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://scriptura.library'),
  title: {
    default: "Scriptura Digital Library",
    template: "%s | Scriptura Digital Library",
  },
  description: "Exploring the Sacred Texts with Scholarly Precision & Reverence",
  openGraph: {
    title: "Scriptura Digital Library",
    description: "Exploring the Sacred Texts with Scholarly Precision & Reverence",
    siteName: "Scriptura Digital Library",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scriptura Digital Library",
    description: "Exploring the Sacred Texts with Scholarly Precision & Reverence",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('scriptura_theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme','dark');}else{document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans transition-colors duration-200`}>
        {children}
      </body>
    </html>
  );
}
