"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  PlaceHolderImages.find(i => i.id === 'gallery-1')!,
  PlaceHolderImages.find(i => i.id === 'gallery-2')!,
  PlaceHolderImages.find(i => i.id === 'gallery-3')!,
  { id: "g4", imageUrl: "https://picsum.photos/seed/gallery4/1200/800", description: "BTS", imageHint: "studio" },
  { id: "g5", imageUrl: "https://picsum.photos/seed/gallery5/1200/800", description: "BTS", imageHint: "lights" },
];

const GallerySection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 - 100 / galleryImages.length}%`]);

  return (
    <section id="gallery" ref={targetRef} className="relative h-[300vh] bg-secondary">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pointer-events-none">
            <Badge variant="outline" className="mb-4 border-white text-white">Behind The Scenes</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
                The Creative Process
            </h2>
        </div>
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative w-[80vw] md:w-[50vw] h-[70vh] rounded-lg overflow-hidden shrink-0"
              initial={{ filter: "blur(20px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ root: targetRef, once: true, amount: "some" }}
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                sizes="80vw"
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
