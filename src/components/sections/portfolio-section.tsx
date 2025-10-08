"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type PortfolioItem = {
  id: string;
  title: string;
  category: "Video" | "Photo" | "Writing";
  image: (typeof PlaceHolderImages)[0];
};

const portfolioItems: PortfolioItem[] = [
  { id: "1", title: "Project Alpha", category: "Video", image: PlaceHolderImages.find(i => i.id === 'portfolio-video-1')! },
  { id: "2", title: "Creative Series", category: "Photo", image: PlaceHolderImages.find(i => i.id === 'portfolio-image-1')! },
  { id: "3", title: "Deep Dive Article", category: "Writing", image: PlaceHolderImages.find(i => i.id === 'portfolio-writing-1')! },
  { id: "4", title: "Music Video", category: "Video", image: { id: "p4", imageUrl: "https://picsum.photos/seed/portfolio4/800/1200", description: "vid", imageHint: "music video"} },
  { id: "5", title: "Brand Photography", category: "Photo", image: { id: "p5", imageUrl: "https://picsum.photos/seed/portfolio5/800/600", description: "photo", imageHint: "brand"} },
  { id: "6", title: "Short Story", category: "Writing", image: { id: "p6", imageUrl: "https://picsum.photos/seed/portfolio6/600/800", description: "writing", imageHint: "book" } },
];

const PortfolioSection = () => {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    return (
        <section id="works" className="py-24 sm:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Badge variant="outline" className="mb-4 border-primary text-primary">My Works</Badge>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                        Featured Projects
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                        A glimpse into the stories I've helped bring to life.
                    </p>
                </div>
                
                <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {portfolioItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="break-inside-avoid relative rounded-lg overflow-hidden group cursor-pointer shadow-lg"
                            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            onClick={() => setSelectedItem(item)}
                        >
                            <Image
                                src={item.image.imageUrl}
                                alt={item.title}
                                width={800}
                                height={item.category === "Photo" ? 1000 : 600}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={item.image.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Badge variant="secondary" className="mb-2 bg-black/20 text-white">{item.category}</Badge>
                                    <h3 className="font-headline text-2xl font-bold text-white">{item.title}</h3>
                                </div>
                            </div>
                             <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-300 rounded-lg"/>
                        </motion.div>
                    ))}
                </div>
                
                <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
                    <DialogContent className="max-w-3xl bg-card border-border p-0">
                        {selectedItem && (
                            <>
                                <div className="relative h-96">
                                    <Image
                                        src={selectedItem.image.imageUrl}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={selectedItem.image.imageHint}
                                    />
                                </div>
                                <DialogHeader className="p-6">
                                    <DialogTitle className="font-headline text-3xl">{selectedItem.title}</DialogTitle>
                                    <DialogDescription className="text-base pt-2">
                                        This is a detailed description of {selectedItem.title}. It involved extensive creative direction and resulted in a compelling piece of content for the {selectedItem.category} category.
                                    </DialogDescription>
                                </DialogHeader>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default PortfolioSection;
