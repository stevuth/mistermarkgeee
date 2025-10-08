"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Artist A",
    role: "Musician",
    quote: "Working with MisterMarkGee transformed my career. His vision and dedication are unmatched.",
    logo: PlaceHolderImages.find(i => i.id === 'collab-logo-1')!,
  },
  {
    name: "Brand B",
    role: "Creative Director",
    quote: "The content created was beyond our expectations. Incredibly professional and creative from start to finish.",
    logo: PlaceHolderImages.find(i => i.id === 'collab-logo-2')!,
  },
  {
    name: "Podcast Guest C",
    role: "Entrepreneur",
    quote: "Felt so comfortable on the podcast. The conversation flowed naturally and the final product was top-notch.",
    logo: { id: "l3", imageUrl: "https://picsum.photos/seed/logo3/200/100", description: "logo", imageHint: "logo" },
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">Collaborations</Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-secondary-foreground">
            Words From Partners
          </h2>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm sm:max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between bg-background/50 border-border group">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <p className="italic text-foreground/80">"{testimonial.quote}"</p>
                        <div className="mt-6">
                            <p className="font-bold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-foreground/60">{testimonial.role}</p>
                        </div>
                      </CardContent>
                      <div className="p-6 border-t border-border flex justify-center">
                        <motion.div
                           initial={{ filter: "grayscale(100%)", opacity: 0.7 }}
                           whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
                           transition={{ duration: 0.5, delay: 0.2 }}
                           viewport={{ once: true }}
                        >
                            <Image
                                src={testimonial.logo.imageUrl}
                                alt={testimonial.name}
                                width={120}
                                height={60}
                                className="object-contain"
                                data-ai-hint={testimonial.logo.imageHint}
                            />
                        </motion.div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex text-foreground hover:text-primary" />
            <CarouselNext className="hidden sm:flex text-foreground hover:text-primary" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
