
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const testimonials = [
  { name: "Partner 1", logo: { id: "partner-1", imageUrl: "/partner 1.jpg", description: "Partner 1 Logo" }},
  { name: "Partner 2", logo: { id: "partner-2", imageUrl: "/partner 2.jpg", description: "Partner 2 Logo" }},
  { name: "Partner 3", logo: { id: "partner-3", imageUrl: "/partner 3.jpg", description: "Partner 3 Logo" }},
  { name: "Partner 4", logo: { id: "partner-4", imageUrl: "/partner 4.jpg", description: "Partner 4 Logo" }},
  { name: "Partner 5", logo: { id: "partner-5", imageUrl: "/partner 5.jpg", description: "Partner 5 Logo" }},
  { name: "Partner 6", logo: { id: "partner-6", imageUrl: "/partner 6.jpg", description: "Partner 6 Logo" }},
  { name: "Partner 7", logo: { id: "partner-7", imageUrl: "/partner 7.jpg", description: "Partner 7 Logo" }},
  { name: "Partner 8", logo: { id: "partner-8", imageUrl: "/partner 8.jpg", description: "Partner 8 Logo" }},
  { name: "Partner 9", logo: { id: "partner-9", imageUrl: "/partner 9.jpg", description: "Partner 9 Logo" }},
  { name: "Partner 10", logo: { id: "partner-10", imageUrl: "/partner 10.jpg", description: "Partner 10 Logo" }},
  { name: "Partner 11", logo: { id: "partner-11", imageUrl: "/partner 11.jpg", description: "Partner 11 Logo" }},
  { name: "Partner 12", logo: { id: "partner-12", imageUrl: "/partner 12.jpg", description: "Partner 12 Logo" }},
  { name: "Partner 13", logo: { id: "partner-13", imageUrl: "/partner 13.jpg", description: "Partner 13 Logo" }},
  { name: "Partner 14", logo: { id: "partner-14", imageUrl: "/partner 14.jpg", description: "Partner 14 Logo" }},
];

const InfiniteScroller = ({
  logos,
  direction = "left",
  speed = "normal",
}: {
  logos: typeof testimonials;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
}) => {
  return (
    <div
      className="scroller group"
      data-speed={speed}
      data-direction={direction}
    >
      <div className="scroller-inner">
        {[...logos, ...logos].map((testimonial, index) => (
          <div
            key={`${testimonial.logo.id}-${index}`}
            className="flex-shrink-0 w-36 h-24 flex items-center justify-center p-2 group-[.scroller]:[animation-play-state:running] group-hover:[animation-play-state:paused]"
          >
            <Image
              src={testimonial.logo.imageUrl}
              alt={testimonial.logo.description}
              width={120}
              height={60}
              className="object-contain w-full h-full grayscale group-hover/logo:grayscale-0 transition-all duration-300 hover:!grayscale-0 hover:scale-110 hover:drop-shadow-[0_0_10px_hsl(var(--primary))]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  if (testimonials.length === 0) {
    return null;
  }

  const midPoint = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, midPoint);
  const secondRow = testimonials.slice(midPoint);

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-transparent overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">Collaborations</Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Brands & Creators
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            A track record of excellence through creative partnership and shared vision.
          </p>
        </div>

        <motion.div
          className="mt-16 space-y-8 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <InfiniteScroller logos={firstRow} direction="right" speed="slow" />
          <InfiniteScroller logos={secondRow} direction="left" speed="normal" />
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-secondary/20 p-8 rounded-2xl border border-white/5 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="font-headline text-2xl font-bold mb-4">Worked with me before?</h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              I value your feedback and professional insight. If we've collaborated on a project, I would be honored if you could leave a recommendation on my LinkedIn profile.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/mark-macharia-gaturuku-a92840111/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Write a Recommendation
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
