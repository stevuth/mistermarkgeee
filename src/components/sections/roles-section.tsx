
"use client";

import { motion } from "framer-motion";
import { Video, UserCheck, PenSquare, Music, ArrowRight, Podcast } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const roles = [
  {
    icon: Video,
    title: "Videographer",
    tagline: "Capturing stories through cinematic motion.",
    description: "Expert videography and production from concept to final cut, delivering high-quality cinematic media that captures truth in motion.",
    imageUrl: "/videographer.jpg",
    imageHint: "videography cinematic",
    link: "#showcase"
  },
  {
    icon: Music,
    title: "Creative Director",
    tagline: "Bringing professional visions to life.",
    description: "Leading creative direction for complex media projects, ensuring every endeavor reflects the standard of creative excellence.",
    imageUrl: "/producer.jpg",
    imageHint: "creative director",
    link: "#works"
  },
  {
    icon: PenSquare,
    title: "Storyteller",
    description: "Crafting compelling narratives that engage, inform, and inspire across digital platforms, long-form articles, and social media.",
    tagline: "Weaving words that connect culture.",
    imageUrl: "/writer.jpg",
    imageHint: "writing book",
    link: "#articles"
  },
  {
    icon: UserCheck,
    title: "Artist Manager",
    tagline: "Strategic artist management and campaigns.",
    description: "helping artists with campaigns on a short term basis yielding results for various artists",
    imageUrl: "/Artist Manager.jpg",
    imageHint: "artist manager",
    link: "#contact"
  },
  {
    icon: Podcast,
    title: "Podcast Host",
    tagline: "Fostering civil discourse through media.",
    description: "A seasoned voice and podcast host specializing in the intersection of faith, politics, and culture for human flourishing.",
    imageUrl: "/podcaster.jpg?v=2",
    imageHint: "podcast host",
    link: "#pl2"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const RolesSection = () => {

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="roles" className="py-24 sm:py-32 bg-secondary/20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <Badge variant="outline" className="mb-4 border-white/50 text-white">Expertise</Badge>
            <motion.h2 
                className="font-headline text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Professional Content Creator
            </motion.h2>
            <motion.p 
                className="mt-4 max-w-2xl mx-auto text-lg text-white/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Driven by the 5C Framework, I offer a professional, multi-disciplinary approach to media production, artist management, and storytelling.
            </motion.p>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {roles.map((role) => (
            <motion.div
              key={role.title}
              className="relative rounded-lg overflow-hidden h-[500px] p-8 flex flex-col justify-end group cursor-pointer shadow-2xl"
              variants={panelVariants}
            >
              <Image
                src={role.imageUrl}
                alt={`${role.title} - MisterMarkGee`}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 20vw"
                className="object-cover absolute inset-0 -z-20 transition-transform duration-500 ease-in-out group-hover:scale-105"
                data-ai-hint={role.imageHint}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-300" />
              
              <div className="relative z-10 text-white transform-gpu translate-y-[calc(100%-100px)] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                 <h3 className="font-headline text-3xl font-bold tracking-wide">
                    {role.title}
                </h3>
                <p className="mt-4 text-white/90 text-sm leading-relaxed">
                  {role.description}
                </p>
                
                {role.title !== 'Artist Manager' && (
                  <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleScrollTo(role.link)}
                      className="mt-6 bg-transparent text-white border-white/50 hover:bg-white hover:text-background font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
                  >
                      View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSection;
