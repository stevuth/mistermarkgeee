"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const name = "MisterMarkGee".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 * i },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const subtitleVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.5, ease: "easeOut" } }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero image.jpg"
          alt="Abstract background image with light trails"
          fill
          className="object-cover"
          data-ai-hint="light trails abstract"
          priority
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>
      
      <div
        className="relative z-20 text-center px-4"
      >
        <motion.h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl mx-auto font-body text-base md:text-lg text-white/80"
          variants={subtitleVariants}
           initial="initial"
           animate="animate"
        >
          Content Creator • Artist Manager • Videographer • Podcaster • Writer
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
