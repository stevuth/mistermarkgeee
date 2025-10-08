"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

type VideoItem = {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoId: string; // YouTube video ID
};

type Playlist = {
  id: string;
  title: string;
  videos: VideoItem[];
};

const playlists: Playlist[] = [
  {
    id: "pl1",
    title: "The life music podcast",
    videos: [
      { id: "v1", title: "The Role of Faith in Modern Life", thumbnailUrl: "https://img.youtube.com/vi/64-4iw-We-U/hqdefault.jpg", videoId: "64-4iw-We-U" },
      { id: "v2", title: "Navigating Challenges with Belief", thumbnailUrl: "https://img.youtube.com/vi/fQNw9fC8HdY/hqdefault.jpg", videoId: "fQNw9fC8HdY" },
      { id: "v3", title: "Community and Spiritual Growth", thumbnailUrl: "https://img.youtube.com/vi/NUuxlYZ8kaA/hqdefault.jpg", videoId: "NUuxlYZ8kaA" },
      { id: "v4", title: "An Interview with a Local Leader", thumbnailUrl: "https://img.youtube.com/vi/jqf7VWKEi9Y/hqdefault.jpg", videoId: "jqf7VWKEi9Y" },
    ],
  },
  {
    id: "pl2",
    title: "Christian Hip-Hop Stories",
    videos: [
      { id: "v5", title: "The Rise of CHH: A Documentary", thumbnailUrl: "https://picsum.photos/seed/chh1/800/450", videoId: "dQw4w9WgXcQ" },
      { id: "v6", title: "Behind the Mic: Artist Spotlight", thumbnailUrl: "https://picsum.photos/seed/chh2/800/450", videoId: "dQw4w9WgXcQ" },
      { id: "v7", title: "Lyrical Theology: Breaking Down Bars", thumbnailUrl: "https://picsum.photos/seed/chh3/800/450", videoId: "dQw4w9WgXcQ" },
      { id: "v8", title: "The Culture of the Movement", thumbnailUrl: "https://picsum.photos/seed/chh4/800/450", videoId: "dQw4w9WgXcQ" },
    ],
  },
  {
    id: "pl3",
    title: "The Life Music Podcast",
    videos: [
        { id: "v9", title: "Episode 101: The Creative Process", thumbnailUrl: "https://picsum.photos/seed/podcast1/800/450", videoId: "dQw4w9WgXcQ" },
        { id: "v10", title: "Episode 102: Music and Ministry", thumbnailUrl: "https://picsum.photos/seed/podcast2/800/450", videoId: "dQw4w9WgXcQ" },
        { id: "v11", title: "Episode 103: The Business of Art", thumbnailUrl: "https://picsum.photos/seed/podcast3/800/450", videoId: "dQw4w9WgXcQ" },
        { id: "v12", title: "Episode 104: Listener Q&A", thumbnailUrl: "https://picsum.photos/seed/podcast4/800/450", videoId: "dQw4w9WgXcQ" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PortfolioSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section id="works" className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">My Works</Badge>
          <motion.h2
            className="font-headline text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Playlists
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A curated showcase of stories, conversations, and creative journeys.
          </motion.p>
        </div>

        <motion.div
          className="mt-16 space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {playlists.map((playlist) => (
            <motion.div key={playlist.id} variants={itemVariants}>
              <h3 className="font-headline text-3xl font-bold mb-8 text-accent">{playlist.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {playlist.videos.map((video) => (
                  <motion.div
                    key={video.id}
                    className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg"
                    onClick={() => setSelectedVideo(video)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      src={video.thumbnailUrl}
                      alt={video.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover transition-all duration-300 group-hover:brightness-110"
                      data-ai-hint="video thumbnail"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300" />
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      <h4 className="font-bold text-sm text-white leading-tight drop-shadow-md">{video.title}</h4>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-white/70 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(255,213,79,0.5)] transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl w-full bg-black/80 border-accent/30 p-0 aspect-video">
            {selectedVideo && (
              <>
                <DialogTitle className="sr-only">{selectedVideo.title}</DialogTitle>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
