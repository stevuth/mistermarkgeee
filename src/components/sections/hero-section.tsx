"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

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
