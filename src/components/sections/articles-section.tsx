"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type Article = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  content: string;
};

const articles: Article[] = [
  {
    title: "WAG1, UK: Saint CJ and Jo Joey",
    description: "A conversation with two rising stars in the UK's Christian hip hop scene, discussing their journey, faith, and the culture of gospel music.",
    imageUrl: "/article 1.jpg",
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
  },
  {
    title: "What’s Happening In CHH Across The Pond",
    description: "An update on UK Christian Hip-Hop, featuring Condoseven, Paddy Simba, Kudz, TKE3, and ItsKC.",
    imageUrl: "/article 2.jpg",
    imageHint: "microphone dj",
    link: "https://holyculture.net/read/whats-happening-in-chh-across-the-pond-with-wag1-uk-2/",
    content: `
      <h3 class="font-bold text-2xl mb-2 text-primary">What’s Happening In CHH Across The Pond with Wag1 UK</h3>
      <p class="text-sm text-foreground/60 mb-6">Published on April 30, 2024</p>
      <p class="mb-4">Here’s another wonderful update on what’s happening in UK Christian Hip-Hop. Melodic rap duo Condoseven released an EP, Paddy Simba released a pre-summer banger, and Kudz graced Aligned Vision, (a Video Production Company catered to Christian Hip-Hop and other related genres) with a freestyle Music Video. TKE3 sat down with Life Music to discuss his journey thus far as an Artist and Producer. Also, if boom-bap rap is your thing I will introduce you to ItsKC.</p>
      
      <h4 class="font-bold text-xl my-4 text-primary">Condoseven Brand New EP: Storm Is Over Now</h4>
      <p class="mb-4">The duo Condoseven is back with a brand new project employing their melodic rap style to get real personal about the pains of life while expressing joy and praise for their encounter with the grace of Jesus Christ.</p>
      <p class="mb-4">Condoseven comprises a duo of friends NL and JY who boast 1 Million streams already and have gained a large following beyond the British Isles. They make music that fuses the life experiences they navigate through as followers of Jesus.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Paddy Simba – “Bless God” Single.</h4>
      <p class="mb-4">The Birmingham artist is already creating summer hits before the season begins. He released the song “Bless God” a hot track inspired by the psalmist who “blesses the Lord at all times”</p>
      <p class="mb-4">Paddy Simba is an artist to watch based in the UK’s 2nd largest city. His mission is summed up with the acronym HTTW which stands for Hope to the World. Inspired by legends like Lecrae and UK’s Guvna B, he joins the ranks of artists who aim to use their gifts to propagate the gospel message as the only hope for mankind.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Kudz is Showing Us How it’s Done on The Mic</h4>
      <p class="mb-4">We have Queens killing it in the booth and Kudz is another excellent example of ladies grabbing the mic and dropping gems while the beat is spinning.</p>
      <p class="mb-4">I first came across this emcee during the BFTK concert last year. Bars for the Kingdom is an annual Hip-Hop concert founded by Legendary emcee Rev J who aims to champion and feature artists around the country whilst edifying Christians and evangelizing those who have not yet placed their faith in Christ.</p>
      <p class="mb-4">She is an up-and-comer with just 3 singles released with much more on the way from her on the horizon.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Life Music Sits Down With TKE3</h4>
      <p class="mb-4">Life Music is in the process of creating a streaming platform for Christian music offering better remuneration for artists. In addition, we have a Podcast where we sit down with artists from around the world. Last week we sat down with the producer/artist who boasts 4 albums that fuse Rap, R&B Afrobeats, and soulful vibes to generate a sound people enjoy. He recently released a project called Lighthouse which I recommend you add to your playlist.</p>
      <p class="mb-4">TKE3 is a multi-talented creative Born in Nigeria and raised in the UK. The reason for his artist name is firstly he has had 2 names before the current one whilst pursuing the direction of a secular artist. However, after coming to faith in the “third take” he is now fully committed to using his skills to propagate the Gospel message. The name has another meaning inspired by the Old Testament narrative of Samuel where the Lord was calling him and responded correctly the third time having received advice from Eli.</p>

      <h4 class="font-bold text-xl my-4 text-primary">One to Watch: ItsKC</h4>
      <p class="mb-4">Rap has evolved into sub-genres we enjoy and is indicative of how the genre has developed over time. However, for those who love the Boom-Bap sound then I recommend this emcee who flows so effortlessly over the beats.</p>
      <p class="mb-4">Now fellas, if you are in London and you need a haircut or shape up then KC is your guy but while he is not cutting hair he is making cuts in the studio with a flow that demonstrates his dedication to sharpening his skills.</p>
      <p class="mb-4">As seen in the above post KC likes to show his clients at the barbershop some of the tracks he has recorded at the studio and seeing the client’s reaction they would recommend this artist to you. I don’t know about the States but here in the UK you can guarantee brutal honesty amidst conversations in the barbershop.</p>
      <p class="mt-6 text-sm text-foreground/50">Original article published on <a href="https://holyculture.net/read/whats-happening-in-chh-across-the-pond-with-wag1-uk-2/" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary">Holy Culture</a>.</p>
    `
  },
  {
    title: "WAG 1 UK: The Legend Of Roger Moore, J1W and The Return of Collistar",
    description: "An installment of the Wag1 UK article series giving you the info on what you need to know about what is going on in Christian Hip Hop within the British Isles.",
    imageUrl: "/article 3.jpg",
    imageHint: "uk music",
    link: "https://holyculture.net/read/wag-1-uk-the-legend-of-roger-moore-j1w-and-the-return-of-collistar/",
    content: `
      <h3 class="font-bold text-2xl mb-2 text-primary">WAG 1 UK: The Legend Of Roger Moore, J1W and The Return of Collistar</h3>
      <p class="text-sm text-foreground/60 mb-6">Published on May 8, 2024</p>
      <p class="mb-4">We are back with yet another installment of the Wag1 UK article series giving you the info on what you need to know about what is going on in Christian Hip Hop within the British Isles.</p>
      
      <h4 class="font-bold text-xl my-4 text-primary">Life Music Sits Down With Roger Moore</h4>
      <p class="mb-4">As much as we like to honor those in the limelight it is just as important to honor the legends who make things happen behind the scenes. Roger is responsible for bringing Lecrae, Da Truth, Trip Lee, and Lisa Mclendon among other great artists to cities around the UK.</p>
      <p class="mb-4">This has led to a strong network among Christian rappers from both the US and the UK.</p>
      <p class="mb-4">The most notable example of this is the prolific “Don’t Waste Your Life” by Lecrae which features UK CHH heavyweight Dwayne Tryumf.</p>
      <p class="mb-4">Roger, the visionary behind the GL live concerts, deserves credit and is an inspirational figure in Christian music.</p>
      <p class="mb-4">He is a gentleman worth giving flowers to while he can still smell them.</p>
      <p class="mb-4">Roger is the CEO of Affinity Xtra Radio, which champions gospel music of black origin. He is also the Director of the Gospel Music Industry Alliance in the UK and together with the organization RSL, Gospel Music now has recognized accreditation and rightly deserves considering the genre’s influence across the whole music landscape globally.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Joshuah Wiehahn aka J1W Wins the Latest “Weight or Wait” Competition.</h4>
      <p class="mb-4">The UK-based producer has won the latest competition “Weight or weight”. It is a credit to Holy Culture for giving voice to its fanbase for feedback and encouraging artistic excellence both for artists and producers.</p>
      <p class="mb-4">The 18-year-old is an amazing producer who has worked with the likes of Limoblaze, and Dru Bex Reblah among other great creatives.</p>
      <p class="mb-4">The meaning behind his artist’s name is based on the truth that Jesus is the only way to the Father, that there is just 1 way.</p>
      <p class="mb-4">What is amazing about him is the strides he has made in his relatively young age and his ability to work with artists beyond the UK borders. Furthermore, his work shows that he has his pulse on what characterizes a great beat people vibe to and compliments the artists he works alongside.</p>
      <p class="mb-4">He is one creative person to watch. If at age 18 he has achieved so much then the future looks very bright for him as he looks ahead.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Collistar Is Back</h4>
      <p class="mb-4">Firstly a reason to love this emcee is the East London “Cockney” Accent. If you have watched any London gangster films like Snatch starring Jason Statham then you will know exactly what I mean.</p>
      <p class="mb-4">The people who have this accent are known for their rhyming slang as well as back slang where one says the word backward: for example you would say ‘yob’ in place of the word ‘boy’. The significance of this is that the word yob is now part of formal spoken language and politicians have been found to use the term to describe youth involved in criminal and anti-social behavior.</p>
      <p class="mb-4">After a hiatus, the emcee is back and dropping tunes leaving listeners wanting more from his vault.</p>
      <p class="mb-4">Collistar is known for his combination of social commentary, and life experiences whilst pointing people to the hope of the gospel. His most streamed song is titled “1952” which is an example of this.</p>

      <p class="mt-6 text-sm text-foreground/50">Life Music is creating a streaming App catered solely to Christian artists with better remuneration than other platforms. THE APP IS COMING OUT SOON SO WATCH THIS SPACE GUYS. In the meantime, I encourage you to follow my company Life Music on all socials (@thelifemusicapp). We have a Podcast that has featured guests from all over the world including ATL rapper Suave Colione. You can find the episodes on our YouTube channel.</p>
      <p class="mt-6 text-sm text-foreground/50">Original article published on <a href="https://holyculture.net/read/wag-1-uk-the-legend-of-roger-moore-j1w-and-the-return-of-collistar/" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary">Holy Culture</a>.</p>
    `
  },
];


const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <>
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

          <div className="mt-16 grid gap-12 max-w-5xl mx-auto md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                className="bg-card rounded-lg shadow-xl overflow-hidden flex flex-col group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={article.imageHint}
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="font-headline text-2xl font-bold text-foreground">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed line-clamp-3 flex-grow">
                    {article.description}
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
              </DialogHeader>
              <ScrollArea className="flex-grow pr-6 -mr-6">
                  <div
                      className="prose prose-invert prose-lg max-w-none text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
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
