
"use client";

import { motion } from "framer-motion";
import { Mic2, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const PodcastGuestSection = () => {
  return (
    <section id="podcast-guesting" className="py-24 bg-secondary/10 border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Mic2 className="mx-auto h-12 w-12 text-primary mb-6" />
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
            Guest Appearances & Media Inquiries
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed mb-10">
            I am available for guest appearances on podcasts, radio shows, and digital platforms. I specialize in discussing the intersection of faith and culture, the future of Christian Hip Hop, and fostering civil discourse in a polarized world. If you are looking for a professional, Christ-centered perspective for your next episode or show, I would be honored to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="animated-gradient text-white font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule an Interview
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              General Media Request
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastGuestSection;
