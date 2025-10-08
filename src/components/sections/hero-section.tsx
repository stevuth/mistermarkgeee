"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedGradientText from "../ui/animated-gradient-text";

const HeroSection = () => {
  const name = "MisterMarkGee".split("");
  const intro = "Hello, I'm".split("");
  const subtitleLine1 = "a Videographer • Producer • Writer •".split("");
  const subtitleLine2 = "Artist Manager".split("");

  const introContainerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
    }),
  };

  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 * i },
    }),
  };
  
  const subtitleContainerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.025, delayChildren: 1.5 * i },
    }),
  };
  
  const subtitleContainerVariants2 = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.025, delayChildren: (1.5 * i) + (subtitleLine1.length * 0.025) },
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
  
  const introLetterVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const subtitleLetterVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
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
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div
        className="relative z-20 text-center px-4 flex flex-col items-center"
      >
        <motion.div
          className="font-body text-lg md:text-2xl text-white/90 mb-4 flex justify-center flex-wrap"
          variants={introContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {intro.map((letter, index) => (
            <motion.span key={index} variants={introLetterVariants}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.h1
          className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg flex justify-center flex-wrap"
          variants={nameContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <div className="mt-6 max-w-3xl mx-auto font-body text-base md:text-xl tracking-wide text-white/90">
            <motion.p
              className="flex flex-wrap justify-center"
              variants={subtitleContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {subtitleLine1.map((letter, index) => (
                <motion.span key={index} variants={subtitleLetterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.p>
            <motion.p
              className="flex flex-wrap justify-center"
              variants={subtitleContainerVariants2}
              initial="hidden"
              animate="visible"
            >
              {subtitleLine2.map((letter, index) => (
                <motion.span key={index} variants={subtitleLetterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.p>
        </div>
        
        <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 2.5, duration: 0.8 } }}
        >
            <Button
                size="lg"
                onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <AnimatedGradientText>View My Work</AnimatedGradientText>
            </Button>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 3, duration: 1 } }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
