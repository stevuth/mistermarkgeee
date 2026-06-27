
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
    tagline: "Capturing stories through motion.",
    description: "From concept to final cut, I produce cinematic videos that resonate with audiences and deliver powerful messages with technical precision.",
    imageUrl: "/videographer.jpg",
    imageHint: "videography cinematic",
    link: "#showcase"
  },
  {
    icon: Music,
    title: "Producer",
    tagline: "Bringing creative visions to life.",
    description: "I manage complex media projects from inception to delivery, ensuring a high-standard final product that aligns with strategic creative goals.",
    imageUrl: "/producer.jpg",
    imageHint: "music production",
    link: "#works"
  },
  {
    icon: PenSquare,
    title: "Writer",
    description: "I craft compelling narratives across various formats—from long-form articles to concise digital copy—that engage, inform, and inspire.",
    tagline: "Weaving words that connect.",
    imageUrl: "/writer.jpg",
    imageHint: "writing book",
    link: "#articles"
  },
  {
    icon: UserCheck,
    title: "Freelance Artist Management",
    tagline: "Guiding creative journeys.",
    description: "Supporting artists with high-impact short-term campaigns, providing strategic management that yields measurable results for diverse creative talents.",
    imageUrl: "/Artist Manager.jpg",
    imageHint: "artist portrait",
    link: "#contact"
  },
  {
    icon: Podcast,
    title: "Podcaster",
    tagline: "Spreading hope through sound.",
    description: "A seasoned voice in digital media, specializing in civil discourse at the intersection of faith, politics, and culture. I offer a Christ-centered perspective aimed at fostering societal flourishing through thoughtful dialogue and media engagement.",
    imageUrl: "/podcaster.jpg?v=2",
    imageHint: "podcast microphone",
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
                Professional Scope
            </motion.h2>
            <motion.p 
                className="mt-4 max-w-2xl mx-auto text-lg text-white/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Driven by the 5C Framework—Content, Commentary, Contending, Christ, and Culture—I employ a multi-disciplinary approach to media production and storytelling, ensuring every project serves the goal of digital witnessing and creative excellence.
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
                alt={role.title}
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
                
                {role.title !== 'Freelance Artist Management' && (
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
