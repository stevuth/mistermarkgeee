"use client";

import { motion } from "framer-motion";
import { Video, UserCheck, PenSquare, Music, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Image from "next/image";

const roles = [
  {
    icon: Video,
    title: "Videographer",
    tagline: "Capturing stories through motion.",
    description: "From concept to final cut, I produce cinematic videos that resonate with audiences and deliver powerful messages.",
    imageUrl: "/videographer.jpg",
    imageHint: "videography cinematic",
  },
  {
    icon: Music,
    title: "Producer",
    tagline: "Bringing creative visions to life.",
    description: "I manage projects from start to finish, ensuring a smooth process and a high-quality final product that exceeds expectations.",
    imageUrl: "/producer.jpg",
    imageHint: "music production",
  },
  {
    icon: PenSquare,
    title: "Writer",
    description: "I craft compelling narratives, from short-form content to in-depth articles, that engage and inspire readers.",
    tagline: "Weaving words that connect.",
    imageUrl: "/writer.jpg",
    imageHint: "writing book",
  },
  {
    icon: UserCheck,
    title: "Artist Manager",
    tagline: "Guiding creative journeys.",
    description: "I partner with artists to develop their brand, strategize their career path, and create opportunities for growth.",
    imageUrl: "/Artist Manager.jpg",
    imageHint: "artist portrait",
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
  return (
    <section id="roles" className="py-24 sm:py-32 bg-background text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <Badge variant="outline" className="mb-4 border-white/50 text-white">My Expertise</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                What I Do
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                I wear many hats, each representing a different side of my creative fusion.
            </p>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {roles.map((role) => (
            <motion.div
              key={role.title}
              className="relative rounded-lg overflow-hidden h-[450px] p-8 flex flex-col justify-end group cursor-pointer shadow-2xl lg:h-[600px] bg-white/10 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none"
              variants={panelVariants}
            >
              <Image
                src={role.imageUrl}
                alt={role.title}
                fill
                sizes="(max-width: 1023px) 100vw, 25vw"
                className="object-cover absolute inset-0 -z-20"
                data-ai-hint={role.imageHint}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-[hsl(var(--background)/0.8)] to-accent/50 opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="relative z-10 text-white">
                 <h3 className="font-headline text-3xl font-bold tracking-wide">
                    {role.title}
                </h3>
                <p className="mt-4 text-white/90 text-sm leading-relaxed">{role.description}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-6 bg-transparent text-white border-white/50 hover:bg-white hover:text-background font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSection;
