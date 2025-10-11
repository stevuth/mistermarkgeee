
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { Youtube, Instagram, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@mistermarkgee" },
  { icon: Instagram, href: "https://www.instagram.com/mistermarkgee?igsh=OHFoZXhwOXppdDl1&utm_source=qr" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mark-macharia-gaturuku-a92840111/" },
];

const ContactSection = () => {
  const sentence = "Let’s Create Magic Together.".split("");

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 animated-gradient opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            className="font-headline text-4xl md:text-6xl font-bold text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.03 }}
          >
            {sentence.map((char, index) => (
              <motion.span key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-xl mx-auto text-lg text-foreground/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.8, duration: 1 } }}
            viewport={{ once: true }}
          >
            Have a project in mind or just want to say hi? Drop me a line.
          </motion.p>
        </div>

        <motion.div
          className="mt-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form action="https://formsubmit.co/hello@mistermarkgee.com" method="POST" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/80">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Your Name" required className="bg-secondary/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/80">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-secondary/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground/80">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell me about your project..." required className="bg-secondary/50 min-h-[120px]" />
            </div>
             {/* This is a honeypot field to prevent spam */}
            <input type="text" name="_honey" style={{display: 'none'}} />
            {/* This disables the reCAPTCHA */}
            <input type="hidden" name="_captcha" value="false" />
            <div className="text-center">
              <Button type="submit" size="lg" className="w-full md:w-auto animated-gradient text-white font-bold">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:hello@mistermarkgee.com"
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>hello@mistermarkgee.com</span>
          </a>
        </motion.div>
        
        <motion.div 
            className="mt-8 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1.2, duration: 1 } }}
            viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-foreground/60 hover:text-foreground"
            >
              <social.icon className="w-8 h-8"/>
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center mt-16 text-sm text-foreground/50">
          Developed by <a href="https://stevuthtech.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Stevuth Tech</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
