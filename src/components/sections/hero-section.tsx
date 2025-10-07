"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

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

  if (!isMounted) {
    return null;
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "hsl(210 100% 12%)",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "hsl(200 90% 64%)",
            },
            links: {
              color: "hsl(200 90% 64%)",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
