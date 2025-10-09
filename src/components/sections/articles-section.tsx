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
  {
    title: "WAG 1 UK: Laura Ehio, Namesbliss & Melvillous",
    description: "An update on UK Christian Hip-Hop, highlighting soulful singers, dope emcees, and talented producers.",
    imageUrl: "/article 4.jpg",
    imageHint: "uk music artist",
    link: "https://holyculture.net/read/wag-1-uk-laura-ehio-gives-us-afro-fused-rb-namesbliss-melvillous-are-killin-it-and-much-more/",
    content: `
      <h3 class="font-bold text-2xl mb-2 text-primary">WAG 1 UK: Laura Ehio Gives Us Afro-fused R&B, Namesbliss & Melvillous Are Killin’ It and Much More.</h3>
      <p class="text-sm text-foreground/60 mb-6">Published on May 21, 2024</p>
      <p class="mb-4">Wag1 my people! It’s the Super Creative Kid Mister Mark Gee again giving you another lowdown on what is going on across the pond. Here intending to spotlight great creatives you should know yet again!</p>
      <p class="mb-4">Today I highlight wonderful singers with amazing vocalists from different backgrounds who complement each other well, 2 dope emcees killing it and gaining appeal beyond the CHH scene and getting nods from many regardless of race, color, or creed. I’ll also introduce you to a wonderful RnB artist and producer who boasts more than millions of streams.</p>
      <p class="mb-4">He was also featured in the Life Music spotlight this week, and Leslie Skye, an amazing rapper with an incredible testimony shedding light on the dangers of the music industry.</p>
      
      <h4 class="font-bold text-xl my-4 text-primary">Laura Ehio drops an Afro-fused R&B summer Hit “See Me” ft Becca Folkes</h4>
      <p class="mb-4">Laura is an amazing soulful artist you should know. She is no stranger to streaming platforms. One of her last singles “Pompous’ has gained over a million plays on Spotify. The artist boasts of mixed heritage and is a London-based British-Irish Artist of Nigerian heritage.  Before gaining prominence as an artist, she earned a reputation as a vocal coach and her songs show evidence that she aims for excellence in her craft.</p>
      <p class="mb-4">“See Me” features Becca, an amazing worship leader known for her wonderful vocals and her passion for worship as evidenced when she leads congregations in song during church services, conferences, and other events.</p>
      <p class="mb-4">Like Laura, Becca has released a song called “Daily” which has gained over a million streams.</p>
      <p class="mb-4">Her vocal range is no surprise when you understand her COGIC church background.</p>
      <p class="mb-4">The Church of God in Christ ( hence the name COGIC) is a prolific Pentecostal denomination with its founding based in the United States and known for its contribution to Gospel music on a global scale.</p>
      <p class="mb-4">She is also a member of the Manor Collective, a group of incredible worship leaders in the UK worth checking out (if you haven’t) such as Calledout Music, Tertia May, and Junior Garr.</p>
      <p class="mb-4">What is amazing about these 2 individuals is their varied backgrounds in their development as artists.</p>
      <p class="mb-4">On the one hand, Becca is a worship leader with her roots planted within the church context whereas Laura has experience in the industry as a vocal arranger as well as a self-taught guitarist.</p>
      <p class="mb-4">Thus the collaboration demonstrates how good these artists are and proves that there is not just one exclusive way to chart your path to becoming an awesome artist.</p>
      
      <h4 class="font-bold text-xl my-4 text-primary">Namesbliss and Melvillous Are Killing it</h4>
      <p class="mb-4">It is not foreign to us in the UK that Christian rappers are regarded as “cornballs” worldwide.</p>
      <p class="mb-4">This is why the moment when emcees like Lecrae, Datin, and Andy Mineo are invited on reputable radio shows to drop a freestyle and show their excellence is greeted with enthusiasm.</p>
      <p class="mb-4">The same thing is happening on this side of the pond with the 2 emcees showing their lyrical ability coupled with punchline and flows that cause even the most devout of the genre’s fans to turn their heads in amazement.</p>
      <p class="mb-4">Namesbliss is an artist taking the UK rap scene in general by storm. Like in the US, some artists are overt and explicit in communicating the Gospel message in their lyrics. Others take the approach of speaking about life like secular artists but implicitly undergirded with Christian undertones. Namesbliss falls in the 2nd category and can gain appeal to both Christian and non-Christian audiences. His most streamed song has gained more than one million streams.</p>
      <p class="mb-4">Melvillous is in the same lane as Namesbliss. Previously though, his first few projects fell under the first category of “rap minister” but as time spanned he took a different direction. Like his counterpart, he is fully committed to being an authentic witness for Christ in his creative pursuits.</p>
      <p class="mb-4">So to the naysayers who still assert that Christian Hip Hop is corny, it is time you look closely and no doubt what you see will make you reconsider your evaluation.</p>
      <p class="mb-4">These emcees are dope in their own right and kill it on the mic anywhere anytime.</p>
      
      <h4 class="font-bold text-xl my-4 text-primary">Life Music Sits With Leslie Skye</h4>
      <p class="mb-4">This week Life Music had the great pleasure of sitting down with Leslie Skye.</p>
      <p class="mb-4">Born in London, Leslie then moved to Ghana briefly at a young age which is his family’s native home country.</p>
      <p class="mb-4">Later he relocated back to London and was attracted by the trappings of life in the Hood or “projects” as they are known in the United States. This led to him being put in prison and after deep self-evaluation, came to faith in Christ.</p>
      <p class="mb-4">His story led him to become a student at Cambridge University, an institution held in the highest esteem like America’s Princeton. After graduation, he became a mentor to the youth in his local context offering guidance to those who like him are attracted to the “hood life” and trying to encourage them to a more wholesome path.</p>
      <p class="mb-4">Before he entered the Christian rap scene after becoming a believer, he pursued becoming an artist in the secular music scene with his eyes set on ascending in the music industry. However, all that changed when he witnessed strange spiritual phenomena among his past associates that led him to flee to Christ.</p>
      <p class="mb-4">He discusses this and more in part 1 of his interview in the Life Music Podcast.</p>
      
      <h4 class="font-bold text-xl my-4 text-primary">R&B Producer and Artist 1. Timothy On Our Artist Spotlight</h4>
      <p class="mb-4">Gospel R&B is on the wave and it’s no different here in the UK.As part of our content plan, we spotlight great acts worthy of our appreciation, whom we would love to feature on the Life Music App and benefit from when the app is released.</p>
      <p class="mb-4">What makes the artist great is first that he is multi-talented demonstrating competency both as a producer and artist.</p>
      <p class="mb-4">Secondly, like other genres such as Hip Hop and Rock, it is good to see Christians coming to the RnB space and releasing songs with quality that is as good as their non-Christian counterparts.</p>
      <p class="mb-4">He has a smooth tone to his voice and his production has a Hip-hop element, it would be no surprise if he decides to enlist a rapper to collaborate with in the future.</p>
      <p class="mb-4">His use of social media to promote his songs has given him the ability to spread awareness about his music and has led him to gain an audience that is intrigued by what he is working on and what he will be releasing soon.</p>
      <p class="mb-4">The song below features the amazing R&B songstress Alia Lara. This track is proof of how talented he is as a producer and artist and one worth watching out for more to come. Like the artists mentioned previously the artist is doing well on streaming platforms with the song “Moonlight” generating over 2 million streams.</p>
      <p class="mb-4">In addition, I recommend Alia Lara’s Kingdom-minded playlist to be in the know of wonderful R&B songs from Christians in that very space.</p>
      <p class="mb-4">The artists who create these songs are not only good for your playlists but also solely because of the quality of the music. It is also because Christian music can aid us in reassessing our focus. Too many times we can be overwhelmed by life’s pressures as well as bombardment with the pains in our world as seen in our news bulletins. Christian artists can help us set our minds on “thing above’ as Paul encourages the church in his epistles.</p>
      <p class="mb-4">Despite the crises in our lives and problems in the world, it is wonderful to see saints taking Christ’s commission to be a light in the dark world seriously. As you read this I encourage you, whatever your gifts and talents, to do the same. In addition, don’t just read the news and fill your time on social media alone. Read the word of God to be filled with hope. The Apostle Paul to the Church in Rome writes:</p>
      <p class="mb-4 italic">“May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.” Romans 15:13</p>
      
      <p class="mt-6 text-sm text-foreground/50">Life Music is creating a streaming app catered solely to Christian artists with better remuneration than other platforms. THE APP IS COMING OUT SOON SO WATCH THIS SPACE GUYS. In the meantime, I encourage you to follow my company Life Music on all socials (@thelifemusicapp). We have a Podcast that has featured guests from all over the world including ATL rapper Suave Colione. You can find the episodes on our YouTube channel.</p>
      <p class="mt-6 text-sm text-foreground/50">Original article published on <a href="https://holyculture.net/read/wag-1-uk-laura-ehio-gives-us-afro-fused-rb-namesbliss-melvillous-are-killin-it-and-much-more/" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary">Holy Culture</a>.</p>
    `
  },
  {
    title: "WAG-1 UK Is Back- Sizzling Summer Events, Awesome Artists, And Great Bangers For Your Playlist!",
    description: "An update on UK Christian Hip-Hop, featuring Still Shadey, Natalie Okri, Reblah, and Jo Joey.",
    imageUrl: "/article 5.jpg",
    imageHint: "summer music",
    link: "https://holyculture.net/read/wag-1-uk-is-back-sizzling-summer-events-awesome-artists-and-great-bangers-for-your-playlist/",
    content: `
      <h3 class="font-bold text-2xl mb-2 text-primary">WAG-1 UK Is Back- Sizzling Summer Events, Awesome Artists, And Great Bangers For Your Playlist!</h3>
      <p class="text-sm text-foreground/60 mb-6">Published on August 1, 2024</p>
      <p class="mb-4">Wag1 family, it’s your super creative kid, Mister Mark Gee!</p>
      <p class="mb-4">I am back with a summer sizzler of updates on what’s happening in Christian urban music on the small island across The Pond.</p>
      <p class="mb-4">It’s summertime; the sun’s out, so that means exciting events, coupled with great summer bangers and artists you should be looking out for.</p>
      <p class="mb-4">Still Shadey is a rapper making waves in the UK with an upcoming release with a well-loved US rapper.</p>
      <p class="mb-4">I will introduce you to Britain’s Got Talent semi-finalist and her decision to radically depart from her success as a secular Afrobeats artist. Recommend 2 South London rappers if gully boom-bap lyricism is your thing.</p>
      <p class="mb-4">Let’s go!</p>

      <h4 class="font-bold text-xl my-4 text-primary">Still Shadey</h4>
      <p class="mb-4">Still Shadey, the Mobo Award-winning rapper, needs no introduction. He is an artist who Rapzilla has recognized for making waves and broadening his appeal beyond the Christian Hip-Hop space. The Mobo Awards are as prolific an alternative to the VMA Awards or Grammys in the United States. So, winning such an award among many means, he must be doing something amazing.</p>
      <p class="mb-4">Born Luke Peters in the inner city of London was caught up in the trappings of gang street culture but is now a Christian– wants to be a living example using his gifting to inspire the youth to choose a positive path. The song “Mirror Mirror” exemplifies this combined with an epic cinematic music video. The rapper takes from Hip Hop Legend Nas and asks the young audience to repeat the words “I know I can be who I wanna be.”</p>
      <p class="mb-4">It is a good guess that the impulse to make such a song resulted from his new status as a husband and father, who desired to make a difference in his community.</p>
      <p class="mb-4">Still Shadey is revving things up with a recent social post announcing an upcoming collab track with the legendary Lecrae.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Natalie Okri Says Goodbye To The World</h4>
      <p class="mb-4">The Lord Jesus proclaimed that we must bid farewell to the world to follow him and count the cost while considering this decision. The above-stated artist who has made waves in secular music has now shifted and decided to serve Christ.</p>
      <p class="mb-4">Natalie gained prominence in the Afrobeat genre years after becoming a semi-finalist on Britain’s Got Talent at a very young tender age.</p>
      <p class="mb-4">In recent social posts she admitted to misleading people can be found constantly warning her followers of the kind of music they consume and to avoid its mind-corrupting messaging.</p>
      <p class="mb-4">The artist has made a public departure from pursuing the world, as evidenced in the shift of her latest song, a wonderful Afrobeats infused with the message of hope.</p>

      <h4 class="font-bold text-xl my-4 text-primary">For Those That Love Gully Lyrics Here’s Reblah and Jo Joey</h4>
      <p class="mb-4">Drill and Trap might be trending, but boom-bap lyrics will always have their place. Jo Joey, a South Londoner and friend of Still Shadey, is a great rapper from the hood but saved. If you are into the likes of Datin, Will Cata, and C4 Crotona, you know that gully going hard on the beat waxing lyrical while at the same time repping Jesus? Yes, that’s what this artist is all about.</p>
      <p class="mb-4">These are two fellas like Still Shadey whom the Lord has transformed by the gospel. They now employ their gifting to testify of the grace of Christ while still going hard on the beat, as is expected for any emcee anywhere.</p>
      <p class="mb-4">Reblah released a recent album he states was given by the Lord through a dream. In the same reel, he makes it explicitly clear how he regards himself as a minister of the gospel and he intends to be a faithful witness for Jesus both on and off the mic. Listen to his latest project, Holy Impact.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Consider The Grace Brunch and BFTK if you’re in the UK</h4>
      <p class="mb-4">The Grace Brunch is easily one of the best day parties to attend. Held in London, it features food, a time of fellowship, and great performances from incredible artists.</p>
      <p class="mb-4">The summer event took place this past month; however, you can regard this as a promo for the next time. Follow them on their socials to get regular updates on what’s coming up.</p>
      <p class="mb-4">Barz for the Kingdom or BFTK for short, led by Incredible rapper Rev J is an annual concert that features the best Christian Urban acts from genres ranging from Rap to RNB, Drill, and Reggae. The Next event will be held on August 17th.</p>

      <h4 class="font-bold text-xl my-4 text-primary">Life Music Sits With Feed’em</h4>
      <p class="mb-4">Life Music is creating a streaming App catered solely to Christian artists with better remuneration than other platforms. THE APP IS COMING OUT SOON SO WATCH THIS SPACE GUYS. In the meantime, I encourage you to follow my company Life Music on all socials (@thelifemusicapp). We have a Podcast that has featured guests from all over the world including ATL rapper Suave Colione, Konola, Dia Day, Shack Santima, Eliza King and so many more.</p>
      <p class="mb-4">Recently, we spoke to Rapper and Creative Entrepreneur Feed’em. Born as Tracey Lenga in the Democratic of Congo, the artist narrates his life story from his encounter with witchcraft at a young age to moving to the UK, being saved and delivered, and now establishing his feet as a Grime MC and Kingdom music Champion.</p>
      <p class="mb-4">Now married and with children, the artist knows intimately the transforming power of the gospel and has a passion to share the hope of its message by employing his grime skills to reach out to young audiences outside the four walls of the church.</p>
      <p class="mb-4">One of his notable achievements, as well as his latest project release, The Gospel of Grime (check it out), is hosting live events and ciphers that feature other talented emcees from the UK. He also hosts live concerts with Datin and Bizzle as headliners, bringing huge crowds to such events.</p>
      <p class="mb-4">The artist is also a youth leader with an organization with a Christian ethos, which fuels the fire of reaching the youth, who are tomorrow’s future leaders.</p>
      <p class="mt-6 text-sm text-foreground/50">Original article published on <a href="https://holyculture.net/read/wag-1-uk-is-back-sizzling-summer-events-awesome-artists-and-great-bangers-for-your-playlist/" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary">Holy Culture</a>.</p>
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
