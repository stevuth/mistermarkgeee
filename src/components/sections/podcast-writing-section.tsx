"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { Headphones, BookOpen } from "lucide-react";

const podcast = {
  title: "Creative Conversations",
  description: "Exploring the minds of artists, creators, and innovators.",
  image: PlaceHolderImages.find(i => i.id === 'podcast-cover-1')!,
};

const writing = {
  title: "The Art of Story",
  description: "A collection of essays and reflections on modern creativity.",
  image: PlaceHolderImages.find(i => i.id === 'portfolio-writing-1')!,
};

const PodcastWritingSection = () => {
  return (
    <section id="podcast-writing" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Podcast Section */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Badge variant="outline" className="mb-4 border-accent text-accent">Podcast</Badge>
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-2xl">
              <Image 
                src={podcast.image.imageUrl} 
                alt={podcast.title} 
                fill 
                className="object-cover"
                data-ai-hint={podcast.image.imageHint}
              />
            </div>
            <h3 className="font-headline text-3xl font-bold mt-6">{podcast.title}</h3>
            <p className="text-white/70 mt-2 max-w-sm">{podcast.description}</p>
            <Button variant="outline" className="mt-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Headphones className="mr-2 h-4 w-4" />
              Listen Now
            </Button>
          </motion.div>

          {/* Writing Section */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">Writing</Badge>
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-2xl group">
              <Image 
                src={writing.image.imageUrl} 
                alt={writing.title} 
                fill 
                className="object-cover"
                data-ai-hint={writing.image.imageHint}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white p-4 italic">"The first draft is just you telling yourself the story."</p>
              </div>
            </div>
            <h3 className="font-headline text-3xl font-bold mt-6">{writing.title}</h3>
            <p className="text-white/70 mt-2 max-w-sm">{writing.description}</p>
            <Button variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <BookOpen className="mr-2 h-4 w-4" />
              Read Articles
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastWritingSection;
