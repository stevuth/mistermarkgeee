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
      <h3 class="font-bold text-2xl mb-2 text-primary">WAG1 UK: Saint CJ Went Stateside, Jo Joey Goes Full Circle & Your Boy Gets Married!</h3>
      <p class="text-sm text-foreground/60 mb-6">Published on October 17, 2024</p>

      <p class="mb-4">Wag1 my people it’s your brother from across the pond with another update on what’s happening.</p>
      <p class="mb-4">Yes…It has been a while and it was for a valid reason…</p>
      <p class="mb-4">In early September my best friend and I took vows before the Lord and our loved ones pledging to love each other until the Lord comes or calls us home. I know it was early days but married life is sweet. Indeed it is true what the word says that “ he that finds a wife finds a good thing and obtains favor from the Lord.”</p>
      <p class="mb-4">In this article I assert Christian music should not avoid the subject of romantic love, I talk about R&B Singer Saint CJ heading to the States and a documentary Life Music released based on the Life of Jo Joey.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Christian Rap Should Celebrate Romantic Love too</h4>
      <p class="mb-4">Writing this article got me thinking about how the secular music world has hijacked the topic of romantic love. It should be no surprise to you that it’s the major theme in music. For a time Christian rap was not known for approaching this topic until recently. We see this from the likes of Lecrae’s “ I Love You” to the well-known Sho Baraka’s “We Can Be More” anthem” I am sure there’s plenty more. This is a right and good development for the Christian hip-hop space.</p>
      <p class="mb-4">The reason I assert this is because romantic love is a gift from the Lord and Christians mustn’t be ashamed of creating songs expressing affection for their better half. After all, in as much as the Old Testament’s Song of Solomon is a representation of Christ’s love for the Church in the literal sense it celebrates romantic love and even intimacy in a marriage. And even though it’s a gift humanity has “misused, the onus is on us in the CHH space to portray it and celebrate it in its rightful context.</p>
      <p class="mb-4">In the UK a recent example of such songs is from the beloved veteran Presha J who expresses his love and fidelity to his wife in the song; “Bestie” celebrating love for his best friend.</p>
      <p class="mb-4">While I am not the soppy type (or maybe just a little). It’s worthwhile we champion and celebrate songs like this and not relegate the theme of romantic love to only secular music artists. It is a good gift to mankind fulfilling the human longing for companionship. For Christians, it is also a living metaphor for Christ’s love for the Church as explained by Paul in Ephesians chapter 5.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Saint CJ Goes Stateside</h4>
      <p class="mb-4">Christian Rnb is on the rise and in the UK it is no different. One of our own Saint CJ did some touring around campuses in the States ministering in song. His music has been well-received as he reflects when he sat down with me in the video below.</p>
      <p class="mb-4">He explains that Christian Rnb in the UK is unique in that it blends with other well-loved genres such as Afrobeats and Dancehall. A great illustration of this is one of his recent releases called “Right dere” a song that blends RnB sounds with Caribbean style to make a great hit.</p>
      <p class="mb-4">He concludes in the interview feeling encouraged by witnessing a revival among the youth he ministered to. He said that they evidenced a desire to grow in their faith in Christ. Thus Saint CJ got more than he asked for and was very overjoyed as a result.</p>
      <p class="mb-4">Saint CJ is a great artist I highly recommend who is flexing his creative pursuits including being involved in theatre. Follow him to keep in touch with what he’s up to and check his awesome music catalogue here.</p>
      <p class="mb-4">For a more in-depth interview, we released earlier this year on the Life Music Podcast, where he discusses how he is going for what God has in store for him while enduring Asperger’s and having the Lord heal him from past traumas in his younger years. In the same episode, he exhorts the listener to base their identity not on traumas, failed mistakes, or unfortunate circumstances but on Christ Jesus who loves us. Through his atonement, the Father has adopted us as children of God.</p>
      <p class="mb-4">He states that he welcomes the Christian contribution to the R&B genre by creating awesome music and offering a wholesome alternative for the listeners. I believe In doing so we are fulfilling the calling to be the salt and light of Jesus in this dark world.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Jo Joey Goes Full Circle</h4>
      <p class="mb-4">In my previous article, I mentioned 2 artists who have a gully and tough talk streak to their rap style. One of them was Jo Joey whose story was featured on the Life Music YouTube Channel.</p>
      <p class="mb-4">The documentary narrates the story of Jo Joey whose life began with a solid Christian upbringing but was caught up in the wrong crowd getting into all kinds of beef partly due to his involvement in drug dealing. The story went full circle when he encountered Christ for himself having heard testimonies of his peers with similar experiences finding hope in Jesus.</p>
      <p class="mb-4">One key question from a fan that we got to ask is why he makes most of his music in retrospect reflecting on his past life. In his two-fold response, the rapper states that the music serves as therapy as he reflects on his past life and that he wishes to encourage an audience that can relate to his experiences to find the same hope in Jesus as he did.</p>
      <p class="mb-4">Jo Joey’s testimony is evidence that no one is too far from God and that no matter how far you go God is mighty to Save. Amen!</p>

      <h4 class="font-bold text-xl my-4 text-primary">Believe that God is good and He will work it all out!</h4>
      <p class="mb-4">I hope that this article serves as an encouragement to you as you read. No matter what your story. Whether enduring conditions such as Saint CJ or getting in the wrong crowd like Jo Joey, God is orchestrating the good and bad to carve out a testimony for His glory. Romans 8:28 states “’And we know that for those who love God, all things work together for good, for those who are called according to his purpose. ‘ Amen.</p>

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
