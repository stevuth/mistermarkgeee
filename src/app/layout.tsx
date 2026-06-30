
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
  description: 'The creative universe of MisterMarkGee — Content Creator, Artist Manager, Videographer, Podcaster, and Writer.',
  keywords: 'MisterMarkGee, Mark Macharia Gaturuku, content creator, artist manager, videographer, podcaster, writer, Christian hip hop, gospel music, digital witnessing',
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
    description: 'Digital witnessing through creative media. Explore the work of MisterMarkGee, a Content Creator, Artist Manager, Videographer, Podcaster, and Writer.',
    url: 'https://mistermarkgeee.web.app',
    siteName: 'MisterMarkGee',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MisterMarkGee Creative Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MisterMarkGee | Content Creator, Artist Manager & Videographer',
    description: 'Digital witnessing through creative media. Explore the work of MisterMarkGee.',
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
