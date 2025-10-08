"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section id="about" ref={targetRef} className="py-24 sm:py-32 relative overflow-hidden bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Badge variant="outline" className="mb-4 border-primary text-primary">About Me</Badge>
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-secondary-foreground">
                            A Multi-Creative Force
                        </h2>
                        <p className="mt-6 text-lg text-secondary-foreground/80">
                            A digital witness to the gospel message, Mark Macharia Gaturuku (aka MisterMarkGee) is a Kenyan-born, British content creator based in the Midlands. A devoted Christian, husband, and father of two sons, Mark works as a videographer, producer, writer, and artist manager. He uses media to uplift gospel and Christian hip hop culture, blending creativity and ministry through digital witnessing, storytelling, and leadership across platforms like The Life Music App, Holy Culture, and other gospel initiatives.
                        </p>
                    </motion.div>
                    <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                        <motion.div
                            className="absolute inset-0"
                            style={{ y: imageY }}
                        >
                            <Image
                                src="/profile picture.png"
                                alt="A portrait of MisterMarkGee"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-70" />
                            <motion.div 
                                className="absolute inset-0 bg-white"
                                initial={{ scaleY: 1 }}
                                whileInView={{ scaleY: 0, transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.2 } }}
                                viewport={{ once: true, amount: 0.5 }}
                                style={{ originY: 'top' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
