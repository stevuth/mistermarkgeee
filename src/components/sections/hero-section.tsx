
"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const HeroSection = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleOptions = useMemo(() => ({
    fullScreen: { enable: false },
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
      color: { value: "#87CEEB" },
      links: {
        color: "#87CEEB",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "out" as const },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 40,
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden bg-background"
    >
       {init && (
        <Particles
          id="tsparticles"
          options={particleOptions}
          className="absolute inset-0 z-20 h-full w-full pointer-events-none"
        />
      )}
      
      <div className="relative z-30 text-center px-4 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-lg md:text-2xl text-white/90 mb-4"
        >
          Hello, I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg"
        >
          MisterMarkGee
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-3xl mx-auto font-body text-base md:text-xl tracking-wide text-white/90"
        >
          <p>Content Creator • Artist Manager</p>
          <p>Videographer • Podcast Host</p>
          <p className="mt-4 text-white/70 italic">Digital witnessing through creative media and storytelling.</p>
        </motion.div>
        
        <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            <Button
                size="lg"
                onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
                className="animated-gradient text-white font-bold rounded-full px-10 h-14"
            >
                View My Work
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
