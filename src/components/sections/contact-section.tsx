"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { Youtube, Instagram, Linkedin, Mail, CheckCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@mistermarkgee" },
  { icon: Instagram, href: "https://www.instagram.com/mistermarkgee?igsh=OHFoZXhwOXppdDl1&utm_source=qr" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mark-macharia-gaturuku-a92840111/" },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@mistermarkgee.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Your message has been submitted successfully. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Could not send your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }


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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-secondary/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} className="bg-secondary/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} className="bg-secondary/50 min-h-[120px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full md:w-auto animated-gradient text-white font-bold" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Form>
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
