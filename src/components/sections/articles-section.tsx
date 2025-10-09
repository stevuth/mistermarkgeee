"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredArticle = {
  title: "WAG1, UK: Saint CJ and Jo Joey",
  description: "A conversation with two rising stars in the UK's Christian hip hop scene, discussing their journey, faith, and the culture of gospel music.",
  imageUrl: "https://holyculture.net/wp-content/uploads/2024/05/IMG_20240409_124119_787-1-1024x1024.jpg",
  imageHint: "artists portrait",
  link: "https://holyculture.net/read/wag1-uk-saint-cj-and-jo-joey/",
};

const ArticlesSection = () => {
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
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href={featuredArticle.link} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
