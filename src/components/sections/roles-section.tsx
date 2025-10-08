"use client";

import { motion } from "framer-motion";
import { Video, UserCheck, Tv, Mic, PenSquare, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const roles = [
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic storytelling through visuals.",
    color: "primary",
  },
  {
    icon: UserCheck,
    title: "Artist Management",
    description: "Guiding creative journeys.",
    color: "accent",
  },
  {
    icon: Tv,
    title: "Content Creation",
    description: "Building brand narratives.",
    color: "coral",
  },
  {
    icon: Mic,
    title: "Podcasting",
    description: "Amplifying authentic voices.",
    color: "accent",
  },
  {
    icon: PenSquare,
    title: "Writing",
    description: "Creative reflections and storytelling.",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "And More...",
    description: "Always exploring new creative frontiers.",
    color: "coral",
  },
];

const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const colorClasses: { [key: string]: string } = {
  primary: "text-primary group-hover:bg-primary/20",
  accent: "text-accent-foreground group-hover:bg-accent/20",
  coral: "text-coral group-hover:bg-coral/20",
};

const RolesSection = () => {
  return (
    <section id="roles" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary">My Expertise</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-secondary-foreground">
                What I Do
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-secondary-foreground/80">
                I wear many hats, each representing a different side of my creativity.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="relative p-8 rounded-lg border border-border bg-background overflow-hidden group transition-all duration-300"
              custom={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className={`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colorClasses[role.color]}`} />
              
              <div className="relative z-10">
                  <role.icon className={`h-10 w-10 mb-4 transition-colors ${colorClasses[role.color].replace('group-hover:bg-','text-')}`} />
                  <h3 className="font-headline text-2xl font-bold text-foreground">
                      {role.title}
                  </h3>
                  <p className="mt-2 text-foreground/70">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
