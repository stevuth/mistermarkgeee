"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const ctaVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } 
    },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0 animated-gradient" />
      <div className="absolute inset-0 z-10 bg-background/70" />
      
      <motion.div
        className="relative z-20 text-center px-4"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
          variants={textVariants}
        >
         Creating. Managing.
          <br />
          Inspiring. Storytelling.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl mx-auto font-body text-base md:text-lg text-white/80"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }
          }}
        >
          MisterMarkGee — Content Creator • Artist Manager • Videographer •
          Podcaster • Writer.
        </motion.p>

        <motion.div
           variants={ctaVariants}
           animate="animate"
           className="mt-10"
        >
          <Button
            size="lg"
            className="group font-bold text-lg animated-gradient text-background hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            onClick={scrollToAbout}
          >
            Enter My World
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
