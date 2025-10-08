"use client";

import { motion } from "framer-motion";
import { Video, UserCheck, PenSquare, Film } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const roles = [
  {
    icon: Video,
    title: "Videographer",
    description: "Cinematic storytelling through visuals.",
    color: "primary",
  },
  {
    icon: Film,
    title: "Producer",
    description: "Bringing creative visions to life.",
    color: "accent",
  },
  {
    icon: PenSquare,
    title: "Writer",
    description: "Creative reflections and storytelling.",
    color: "primary",
  },
  {
    icon: UserCheck,
    title: "Artist Manager",
    description: "Guiding creative journeys.",
    color: "accent",
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
  accent: "text-accent group-hover:bg-accent/20",
  coral: "text-coral group-hover:bg-coral/20",
};

const RolesSection = () => {
  return (
    <section id="roles" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary">My Expertise</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                What I Do
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
                I wear many hats, each representing a different side of my creativity.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="relative p-8 rounded-lg border border-border bg-card overflow-hidden group transition-all duration-300"
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
                  <h3 className="font-headline text-2xl font-bold text-card-foreground">
                      {role.title}
                  </h3>
                  <p className="mt-2 text-card-foreground/70">{role.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
