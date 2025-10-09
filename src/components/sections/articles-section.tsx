"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const ArticlesSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const featuredArticle = {
    title: "WAG1, UK: Saint CJ and Jo Joey",
    description: "A conversation with two rising stars in the UK's Christian hip hop scene, discussing their journey, faith, and the culture of gospel music.",
    imageUrl: "https://holyculture.net/wp-content/uploads/2024/05/IMG_20240409_124119_787-1-1024x1024.jpg",
    imageHint: "artists portrait",
    link: "https://holyculture.net/read/wag1-uk-saint-cj-and-jo-joey/",
    content: `
      <p class="mb-4">The UK's Christian hip-hop (CHH) scene is buzzing with fresh energy, and at the forefront are two artists making significant waves: Saint CJ and Jo Joey. In a recent in-depth conversation, we sat down with them to discuss their musical journeys, the intersection of faith and art, and their vision for the future of gospel music in the UK and beyond.</p>
      <h4 class="font-bold text-xl my-4 text-primary">The Journey Begins</h4>
      <p class="mb-4">Both artists share a deep-rooted passion for music, but their paths to CHH were unique. Saint CJ, known for his intricate lyricism and powerful delivery, began his career in the secular grime scene before a profound spiritual awakening redirected his talents. "I realized my gift was for more than just entertaining," he shares. "It was for ministering. I wanted my music to reflect the change that had happened in my life."</p>
      <p class="mb-4">Jo Joey, on the other hand, grew up in the church, surrounded by gospel music. His sound, which blends contemporary R&B with classic hip-hop beats, is a natural extension of his upbringing. "For me, it was never a question of if I would make music, but how I would make it my own," he explains. "I want to create songs that are sonically excellent and spiritually uplifting."</p>
      <h4 class="font-bold text-xl my-4 text-primary">Faith and Culture</h4>
      <p class="mb-4">A central theme of our conversation was the role of CHH in contemporary culture. Both artists feel a responsibility to create music that is both authentic to their faith and relevant to today's listeners. "We're not making music just for Christians," Jo Joey insists. "We're making music for everyone. The message is universal—it's about hope, redemption, and love."</p>
      <p class="mb-4">Saint CJ adds, "The culture is shifting. People are looking for something real, something with substance. CHH provides that. We're offering an alternative to the mainstream narrative, one that's grounded in truth but still hits hard."</p>
      <h4 class="font-bold text-xl my-4 text-primary">What's Next?</h4>
      <p class="mb-4">With new projects on the horizon, both Saint CJ and Jo Joey are poised for a breakout year. Their collaboration is a testament to the power of unity in the CHH community, and their dedication to their craft is inspiring. As they continue to push boundaries and challenge perceptions, one thing is clear: the future of UK gospel music is in very capable hands.</p>
      <p class="mt-6 text-sm text-foreground/50">Original article published on <a href="https://holyculture.net/read/wag1-uk-saint-cj-and-jo-joey/" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary">Holy Culture</a>.</p>
    `
  };

  return (
    <section id="articles" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">From the Blog</Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Featured Articles
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Insights, stories, and conversations from the world of gospel and creative media.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row group">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={featuredArticle.imageHint}
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="font-headline text-3xl font-bold text-foreground">
                {featuredArticle.title}
              </h3>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                {featuredArticle.description}
              </p>
              <div className="mt-6">
                 <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle className="font-headline text-3xl text-primary">{featuredArticle.title}</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="flex-grow pr-6 -mr-6">
                        <div
                            className="prose prose-invert prose-lg max-w-none text-foreground/90"
                            dangerouslySetInnerHTML={{ __html: featuredArticle.content }}
                        />
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
