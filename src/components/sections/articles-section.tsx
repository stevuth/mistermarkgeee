
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";

type Article = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  content: string;
  datePublished: string;
  author: string;
  tags: string[];
  summary: string;
};

const formatArticleContent = (content: string) => {
  if (!content) return "";
  
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return content;
  }

  return content
    .trim()
    .split(/\n\s*\n/)
    .map(para => `<p style="margin-bottom: 1.5rem;">${para.replace(/\n/g, "<br />")}</p>`)
    .join("");
};

const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const firestore = useFirestore();

  const articlesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'blogPosts'), orderBy('datePublished', 'desc'));
  }, [firestore]);

  const { data: articles, isLoading } = useCollection<Article>(articlesQuery);

  const articlesSchema = articles ? {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MisterMarkGee Blog",
    "description": "Insights, stories, and conversations from the world of Gospel and creative media.",
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.summary,
      "image": article.imageUrl,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "datePublished": article.datePublished,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://mistermarkgeee.web.app/#articles`
      }
    }))
  } : null;

  return (
    <>
      {articlesSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesSchema) }}
        />
      )}
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
              Insights, stories, and conversations from the world of Gospel and creative media.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 max-w-5xl mx-auto md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {isLoading && <p className="text-center col-span-full">Loading articles...</p>}
            {articles && articles.length === 0 && (
              <p className="text-center col-span-full text-muted-foreground">No articles published yet.</p>
            )}
            {articles && articles.map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-card rounded-lg shadow-xl overflow-hidden flex flex-col group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={article.imageUrl || "https://picsum.photos/seed/blog/800/600"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={article.imageHint || "article image"}
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="font-headline text-2xl font-bold text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed line-clamp-3 flex-grow">
                    {article.summary}
                  </p>
                  <div className="mt-6">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => setSelectedArticle(article)}>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl h-[90vh] flex flex-col">
          {selectedArticle && (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline text-3xl text-primary">{selectedArticle.title}</DialogTitle>
                <p className="text-sm text-muted-foreground">By {selectedArticle.author} • {new Date(selectedArticle.datePublished).toLocaleDateString()}</p>
              </DialogHeader>
              <ScrollArea className="flex-grow pr-6 -mr-6 mt-4">
                  <div
                      className="prose prose-invert prose-lg max-w-none text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: formatArticleContent(selectedArticle.content) }}
                  />
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArticlesSection;
