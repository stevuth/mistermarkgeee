"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { useEffect, useState } from "react";

const BlinkingCursor = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.2, repeat: Infinity }}
      className="inline-block h-[1em] w-1 bg-white ml-2 translate-y-1"
    />
  );
};


const HeroSection = () => {
  const intro = "Hello, I'm".split("");
  const name = "MisterMarkGee".split("");
  const subtitleLine1 = "a videographer • producer • writer •".split("");
  const subtitleLine2 = "and artist manager".split("");

  const totalIntroDuration = intro.length * 0.15 + 0.5;
  const totalNameDuration = name.length * 0.15 + totalIntroDuration;
  const totalSubtitle1Duration = subtitleLine1.length * 0.08 + totalNameDuration;
  const totalSubtitle2Duration = subtitleLine2.length * 0.08 + totalSubtitle1Duration;

  const [showCursor, setShowCursor] = useState({
    intro: false,
    name: false,
    subtitle1: false,
    subtitle2: false,
    final: false,
  });

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    timers.push(setTimeout(() => setShowCursor(s => ({ ...s, intro: true })), 0));
    timers.push(setTimeout(() => setShowCursor(s => ({ ...s, intro: false, name: true })), totalIntroDuration * 1000));
    timers.push(setTimeout(() => setShowCursor(s => ({ ...s, name: false, subtitle1: true })), totalNameDuration * 1000));
    timers.push(setTimeout(() => setShowCursor(s => ({ ...s, subtitle1: false, subtitle2: true })), totalSubtitle1Duration * 1000));
    timers.push(setTimeout(() => setShowCursor(s => ({ ...s, subtitle2: false, final: true })), totalSubtitle2Duration * 1000));

    return () => timers.forEach(clearTimeout);
  }, [totalIntroDuration, totalNameDuration, totalSubtitle1Duration, totalSubtitle2Duration]);

  const containerVariants = (delay: number, stagger: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  });

  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
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
          className="font-body text-lg md:text-2xl text-white/90 mb-4 flex justify-center items-baseline"
          variants={containerVariants(0.5, 0.15)}
          initial="hidden"
          animate="visible"
        >
          {intro.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
           {showCursor.intro && <BlinkingCursor />}
        </motion.div>
        
        <motion.h1
          className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg flex justify-center items-baseline"
          variants={containerVariants(totalIntroDuration, 0.15)}
          initial="hidden"
          animate="visible"
        >
          {name.map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
          {showCursor.name && <BlinkingCursor />}
        </motion.h1>

        <div className="mt-6 max-w-3xl mx-auto font-body text-base md:text-xl tracking-wide text-white/90">
            <motion.p
              className="flex flex-wrap justify-center items-baseline"
              variants={containerVariants(totalNameDuration, 0.08)}
              initial="hidden"
              animate="visible"
            >
              {subtitleLine1.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
               {showCursor.subtitle1 && <BlinkingCursor />}
            </motion.p>
            <motion.p
              className="flex flex-wrap justify-center items-baseline"
              variants={containerVariants(totalSubtitle1Duration, 0.08)}
              initial="hidden"
              animate="visible"
            >
              {subtitleLine2.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              {(showCursor.subtitle2 || showCursor.final) && <BlinkingCursor />}
            </motion.p>
        </div>
        
        <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: totalSubtitle2Duration + 0.5, duration: 0.8 } }}
        >
            <Button
                size="lg"
                onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <AnimatedGradientText>View My Work</AnimatedGradientText>
            </Button>
        </motion.div>
      </div>
      
    </section>
  );
};

export default HeroSection;
