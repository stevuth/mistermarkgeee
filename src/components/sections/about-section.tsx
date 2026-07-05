"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Instagram } from "lucide-react";

const bioText = "Mark Macharia Gaturuku, also known as MisterMarkGee, is a Kenyan-born, British Content Creator based in Birmingham. A devoted Christian, husband, and father, he excels as a Videographer, Podcast Host, Storyteller, and Freelance Artist Management. Using media to uplift Gospel and CHH culture, his multi-disciplinary creativity spans platforms like The Life Music App and Holy Culture. As a Creative Director for Gospel-led initiatives, he co-hosts The Ideologees Podcast, fostering civil discourse for human and societal flourishing through the lens of faith and culture.";

const AboutSection = () => {
    return (
        <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Badge variant="outline" className="mb-4 border-primary text-primary">Storyteller</Badge>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                            MisterMarkGee
                        </h2>
                        <div className="mt-6 text-lg text-foreground/80 leading-relaxed">
                            <p>{bioText}</p>
                        </div>
                        <motion.div 
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Link href="https://www.instagram.com/mistermarkgee?igsh=OHFoZXhwOXppdDl1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-6 bg-secondary/30 p-4 rounded-full hover:bg-secondary/60 transition-colors">
                                <div className="relative w-20 h-20">
                                    <Image 
                                        src="/instagram profile.png"
                                        alt="MisterMarkGee Instagram"
                                        fill
                                        className="rounded-full border-2 border-primary/50 group-hover:border-primary transition-all object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-lg text-foreground">Follow on Instagram</p>
                                    <p className="text-base text-foreground/70">@mistermarkgee</p>
                                </div>
                                <Instagram className="h-8 w-8 text-primary/80 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                    <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                        <Image
                            src="/profile picture.png?v=2"
                            alt="MisterMarkGee - Freelance Artist Management and Videographer"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
