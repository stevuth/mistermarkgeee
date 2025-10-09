import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import ScrollProgressBar from "@/components/layout/scroll-progress-bar";

export const metadata: Metadata = {
  title: 'MotionVerse - MisterMarkGee',
  description: 'The creative universe of MisterMarkGee — Content Creator, Artist Manager, Videographer, Podcaster, and Writer.',
  keywords: 'MisterMarkGee, Mark Macharia Gaturuku, content creator, artist manager, videographer, podcaster, writer, Christian hip hop, gospel music, digital witnessing',
  authors: [{ name: 'Mark Macharia Gaturuku' }],
  creator: 'MisterMarkGee',
  publisher: 'MisterMarkGee',
  openGraph: {
    title: 'MotionVerse - The Creative Universe of MisterMarkGee',
    description: 'Digital witnessing through creative media. Explore the work of MisterMarkGee, a content creator, artist manager, videographer, podcaster, and writer.',
    url: 'https://mistermarkgeee.web.app',
    siteName: 'MotionVerse',
    images: [
      {
        url: 'https://mistermarkgeee.web.app/og-image.png',
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
    title: 'MotionVerse - The Creative Universe of MisterMarkGee',
    description: 'Digital witnessing through creative media. Explore the work of MisterMarkGee.',
    creator: '@mistermarkgee',
    images: ['https://mistermarkgeee.web.app/og-image.png'],
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://mistermarkgeee.web.app" />
      </head>
      <body className="font-body antialiased">
        <div className="overflow-x-hidden">
          <ScrollProgressBar />
          <Header />
          <main>{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
