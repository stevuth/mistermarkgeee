"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedGradientText from "../ui/animated-gradient-text";

const WorkWithMeSection = () => {
  return (
    <section id="work-with-me" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 animated-gradient opacity-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
            Ready to <AnimatedGradientText>Create</AnimatedGradientText> Together?
          </h2>
          <p className="mt-6 text-lg text-foreground/70">
            Whether you have a video project, need artist management, or want to collaborate on content, I'm here to help bring your vision to life.
          </p>
          <div className="mt-10">
            <Link href="#contact">
              <Button size="lg" className="animated-gradient text-white font-bold">
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithMeSection;
