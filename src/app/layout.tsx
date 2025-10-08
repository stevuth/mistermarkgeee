import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import ScrollProgressBar from "@/components/layout/scroll-progress-bar";

export const metadata: Metadata = {
  title: 'MotionVerse - MisterMarkGee',
  description: 'The creative universe of MisterMarkGee — Content Creator, Artist Manager, Videographer, Podcaster, and Writer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
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
