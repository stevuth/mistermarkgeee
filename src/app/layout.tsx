import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import ScrollProgressBar from "@/components/layout/scroll-progress-bar";
import { FirebaseClientProvider } from '@/firebase';
import Script from 'next/script';

const FAVICON_URL = '/MMG LOGO.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://mistermarkgeee.web.app'),
  title: 'MisterMarkGee | Content Creator, Freelance Artist Management & Videographer',
  description: 'Discover the creative world of MisterMarkGee, a content creator, freelance artist management, videographer, podcaster and writer showcasing projects, stories and creative collaborations.',
  keywords: 'MisterMarkGee, Mark Macharia Gaturuku, Content Creator, Freelance Artist Management, Videographer, Podcaster, Podcast Host, Writer, Storyteller, Creative Director, digital witnessing, CHH culture',
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
    title: 'MisterMarkGee | Content Creator, Freelance Artist Management & Videographer',
    description: 'Explore projects, stories, and creative collaborations from MisterMarkGee, a professional Content Creator, Freelance Artist Management, and Videographer.',
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
    title: 'MisterMarkGee | Content Creator, Freelance Artist Management & Videographer',
    description: 'The professional portfolio of MisterMarkGee: Content Creator, Freelance Artist Management, and Videographer specialized in creative media and storytelling.',
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
    "@id": "https://mistermarkgeee.web.app/#person",
    "name": "Mark Macharia Gaturuku",
    "alternateName": "MisterMarkGee",
    "url": "https://mistermarkgeee.web.app",
    "image": "https://mistermarkgeee.web.app/profile%20picture.png",
    "description": "Mark Macharia Gaturuku (MisterMarkGee) is a Kenyan-born, Birmingham-based Content Creator, Freelance Artist Management, Videographer, and Podcaster focused on digital witnessing through creative media.",
    "jobTitle": [
      "Content Creator",
      "Freelance Artist Management",
      "Videographer",
      "Podcast Host",
      "Creative Director",
      "Storyteller"
    ],
    "sameAs": [
      "https://www.youtube.com/@mistermarkgee",
      "https://www.instagram.com/mistermarkgee",
      "https://www.tiktok.com/@mistermarkgee",
      "https://www.linkedin.com/in/mark-macharia-gaturuku-a92840111/"
    ],
    "knowsAbout": [
      "Content Creation",
      "Freelance Artist Management",
      "Videography",
      "Podcasting",
      "Digital Media",
      "Storytelling",
      "Gospel Culture",
      "CHH Culture"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://mistermarkgeee.web.app/#business",
    "name": "MisterMarkGee",
    "image": "https://mistermarkgeee.web.app/profile%20picture.png",
    "url": "https://mistermarkgeee.web.app",
    "email": "hello@mistermarkgee.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "UK"
    },
    "priceRange": "$$",
    "description": "Professional Content Creation, Freelance Artist Management, and Videography services by MisterMarkGee.",
    "founder": {
      "@id": "https://mistermarkgeee.web.app/#person"
    },
    "sameAs": [
      "https://www.youtube.com/@mistermarkgee",
      "https://www.instagram.com/mistermarkgee",
      "https://www.tiktok.com/@mistermarkgee",
      "https://www.linkedin.com/in/mark-macharia-gaturuku-a92840111/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mistermarkgeee.web.app/#website",
    "name": "MisterMarkGee",
    "url": "https://mistermarkgeee.web.app",
    "description": "The creative universe and professional portfolio of MisterMarkGee.",
    "publisher": {
      "@id": "https://mistermarkgeee.web.app/#person"
    },
    "author": {
      "@id": "https://mistermarkgeee.web.app/#person"
    },
    "copyrightHolder": {
      "@id": "https://mistermarkgeee.web.app/#person"
    }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        {/* Facebook Pixel Noscript Fallback */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            className="hidden"
            src="https://www.facebook.com/tr?id=&ev=PageView&noscript=1"
            alt="fb-pixel"
          />
        </noscript>
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
