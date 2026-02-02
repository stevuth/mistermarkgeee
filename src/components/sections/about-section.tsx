
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Instagram } from "lucide-react";

const bioText = "Mark Macharia Gaturuku, also known as MisterMarkGee, is a Kenyan-born, British content creator based in Birmingham, West Midlands. A devoted Christian, husband, and father, he works as a videographer, producer, writer, and artist manager, using media to uplift Gospel and Christian Hip Hop culture. His multi-disciplinary creativity spans platforms such as The Life Music App, Holy Culture, Affinity Xtra, and other Gospel-led initiatives. He is also the co-host of The Ideologees Podcast, a platform committed to fostering respectful, civil discourse across political and ideological divides for the purpose of human and societal flourishing.";

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    return <motion.span style={{ opacity }} className="relative text-white">{children}</motion.span>
}

const AboutSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: scrollYProgressContainer } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
    
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: paragraphRef,
        offset: ["start 0.9", "start 0.1"]
    });

    const words = bioText.split(" ");

    return (
        <section id="about" ref={targetRef} className="py-24 sm:py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Badge variant="outline" className="mb-4 border-primary text-primary">About Me</Badge>
                        <motion.h2 
                            className="font-headline text-4xl md:text-5xl font-bold text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Creative Fusion
                        </motion.h2>
                        <p
                            ref={paragraphRef}
                            className="mt-6 text-lg text-foreground/80 leading-relaxed"
                        >
                            {words.map((word, i) => {
                                const start = i / words.length;
                                const end = start + (1 / words.length);
                                return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}{' '}</Word>
                            })}
                        </p>
                        <motion.div 
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Link href="https://www.instagram.com/mistermarkgee?igsh=OHFoZXhwOXppdDl1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-6 bg-secondary/30 p-4 rounded-full hover:bg-secondary/60 transition-colors">
                                <Image 
                                    src="/instagram profile.png"
                                    alt="MisterMarkGee Instagram"
                                    width={80}
                                    height={80}
                                    className="rounded-full border-2 border-primary/50 group-hover:border-primary transition-all"
                                />
                                <div className="text-left">
                                    <p className="font-bold text-lg text-foreground">Follow on Instagram</p>
                                    <p className="text-base text-foreground/70">@mistermarkgee</p>
                                </div>
                                <Instagram className="h-8 w-8 text-primary/80 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                    <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                        <div
                            className="absolute inset-0"
                        >
                            <Image
                                src="/profile picture.png?v=2"
                                alt="A portrait of MisterMarkGee"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
