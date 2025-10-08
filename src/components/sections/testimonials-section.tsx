"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const testimonials = [
  {
    name: "Partner 1",
    role: "Collaborator",
    quote: "Working with Mark has been an absolute pleasure. His creativity and professionalism are unmatched.",
    logo: {
      id: "partner-1",
      imageUrl: "/partner 1.jpg",
      description: "Partner 1 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 2",
    role: "Collaborator",
    quote: "A true visionary. Mark brought our project to life with incredible skill and dedication.",
    logo: {
      id: "partner-2",
      imageUrl: "/partner 2.jpg",
      description: "Partner 2 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 3",
    role: "Collaborator",
    quote: "The final result exceeded all our expectations. Highly recommended for any creative endeavor.",
    logo: {
      id: "partner-3",
      imageUrl: "/partner 3.jpg",
      description: "Partner 3 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 4",
    role: "Collaborator",
    quote: "Exceptional talent and a great collaborator. We look forward to working together again.",
    logo: {
      id: "partner-4",
      imageUrl: "/partner 4.jpg",
      description: "Partner 4 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 5",
    role: "Collaborator",
    quote: "Mark's attention to detail and creative insight are simply outstanding.",
    logo: {
      id: "partner-5",
      imageUrl: "/partner 5.jpg",
      description: "Partner 5 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 6",
    role: "Collaborator",
    quote: "A seamless process from start to finish. The quality of the work speaks for itself.",
    logo: {
      id: "partner-6",
      imageUrl: "/partner 6.jpg",
      description: "Partner 6 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 7",
    role: "Collaborator",
    quote: "Incredibly reliable and delivers top-tier results every time. A trusted partner.",
    logo: {
      id: "partner-7",
      imageUrl: "/partner 7.jpg",
      description: "Partner 7 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 8",
    role: "Collaborator",
    quote: "Incredibly reliable and delivers top-tier results every time. A trusted partner.",
    logo: {
      id: "partner-8",
      imageUrl: "/partner 8.jpg",
      description: "Partner 8 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 9",
    role: "Collaborator",
    quote: "Incredibly reliable and delivers top-tier results every time. A trusted partner.",
    logo: {
      id: "partner-9",
      imageUrl: "/partner 9.jpg",
      description: "Partner 9 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 10",
    role: "Collaborator",
    quote: "Incredibly reliable and delivers top-tier results every time. A trusted partner.",
    logo: {
      id: "partner-10",
      imageUrl: "/partner 10.jpg",
      description: "Partner 10 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 11",
    role: "Collaborator",
    quote: "Incredibly reliable and delivers top-tier results every time. A trusted partner.",
    logo: {
      id: "partner-11",
      imageUrl: "/partner 11.jpg",
      description: "Partner 11 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 12",
    role: "Collaborator",
    quote: "Incredibly reliable and delivers top-tier results every time. A trusted partner.",
    logo: {
      id: "partner-12",
      imageUrl: "/partner 12.jpg",
      description: "Partner 12 Logo",
      imageHint: "logo",
    },
  },
  {
    name: "Partner 13",
    role: "Collaborator",
    quote: "A fantastic partner who consistently delivers high-quality, creative work.",
    logo: {
      id: "partner-13",
      imageUrl: "/partner 13.jpg",
      description: "Partner 13 Logo",
      imageHint: "logo",
    },
  },
];

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary">Collaborations</Badge>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
              Words From Partners
            </h2>
          </div>
        </div>
      </section>
    );
  }

  const midPoint = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, midPoint);
  const secondRow = testimonials.slice(midPoint);

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">Collaborations</Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Words From Partners
          </h2>
        </div>

        <motion.div
          className="mt-16 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {firstRow.map((testimonial, index) => (
                <CarouselItem key={`top-${index}`} className="basis-1/4 md:basis-1/5 lg:basis-1/7 pl-1">
                  <div className="p-1 h-full flex justify-center items-center">
                    <div className="relative w-[120px] h-[60px]">
                      <Image
                        src={testimonial.logo.imageUrl}
                        alt={testimonial.logo.description}
                        fill
                        className="object-contain"
                        data-ai-hint={testimonial.logo.imageHint}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
              direction: 'rtl'
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {secondRow.map((testimonial, index) => (
                <CarouselItem key={`bottom-${index}`} className="basis-1/4 md:basis-1/5 lg:basis-1/7 pl-1">
                  <div className="p-1 h-full flex justify-center items-center">
                    <div className="relative w-[120px] h-[60px]">
                      <Image
                        src={testimonial.logo.imageUrl}
                        alt={testimonial.logo.description}
                        fill
                        className="object-contain"
                        data-ai-hint={testimonial.logo.imageHint}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
