
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import ScrollProgressBar from "@/components/layout/scroll-progress-bar";
import { FirebaseClientProvider } from '@/firebase';

const FAVICON_URL = 'https://res.cloudinary.com/dni2duulw/image/upload/v1772496023/favicon.ico_armd5o.png?v=30';

export const metadata: Metadata = {
  metadataBase: new URL('https://mistermarkgeee.web.app'),
  title: 'MisterMarkGee | Content Creator, Artist Manager & Videographer',
  description: 'Explore the creative world of MisterMarkGee, a professional content creator, artist manager, and videographer focusing on digital witnessing and storytelling.',
  keywords: 'MisterMarkGee, Mark Macharia Gaturuku, Content Creator, Artist Manager, Videographer, Podcaster, Podcast Host, Writer, Storyteller, Creative Director, digital witnessing, CHH culture',
  authors: [{ name: 'Mark Macharia Gaturuku' }],
  creator: 'MisterMarkGee',
  publisher: 'MisterMarkGee',
  icons: {
    icon: [
      { url: FAVICON_URL, type: 'image/png', sizes: '32x32' },
      { url: FAVICON_URL, type: 'image/png', sizes: '16x16' },
    ],
    shortcut: [
      { url: FAVICON_URL, type: 'image/png' },
    ],
    apple: [
      { url: FAVICON_URL, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'MisterMarkGee | Content Creator, Artist Manager & Videographer',
    description: 'Explore projects, stories, and creative collaborations from MisterMarkGee, a professional Content Creator, Artist Manager, and Videographer.',
    url: 'https://mistermarkgeee.web.app',
    siteName: 'MisterMarkGee',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MisterMarkGee - Creative Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MisterMarkGee | Content Creator, Artist Manager & Videographer',
    description: 'The professional portfolio of MisterMarkGee: Content Creator, Artist Manager, and Videographer specialized in creative media and storytelling.',
    creator: '@mistermarkgee',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mark Macharia Gaturuku",
    "alternateName": "MisterMarkGee",
    "url": "https://mistermarkgeee.web.app",
    "image": "https://mistermarkgeee.web.app/profile%20picture.png",
    "sameAs": [
      "https://www.youtube.com/@mistermarkgee",
      "https://www.instagram.com/mistermarkgee",
      "https://www.tiktok.com/@mistermarkgee",
      "https://www.linkedin.com/in/mark-macharia-gaturuku-a92840111/"
    ],
    "jobTitle": ["Content Creator", "Artist Manager", "Videographer", "Podcast Host"],
    "description": "Mark Macharia Gaturuku (MisterMarkGee) is a Kenyan-born, Birmingham-based Content Creator, Artist Manager, Videographer, and Podcaster focused on digital witnessing through creative media."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MisterMarkGee",
    "url": "https://mistermarkgeee.web.app",
    "description": "The creative universe and professional portfolio of MisterMarkGee."
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href={FAVICON_URL} type="image/png" sizes="32x32" />
        <link rel="icon" href={FAVICON_URL} type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href={FAVICON_URL} type="image/png" />
        <link rel="apple-touch-icon" href={FAVICON_URL} sizes="180x180" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://mistermarkgeee.web.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <div className="overflow-x-hidden">
            <ScrollProgressBar />
            <Header />
            <main>{children}</main>
            <Toaster />
          </div>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
