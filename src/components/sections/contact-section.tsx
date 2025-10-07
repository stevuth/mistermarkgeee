"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { Github, Twitter, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  const sentence = "Let’s Create Magic Together.".split("");

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 animated-gradient opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            className="font-headline text-4xl md:text-6xl font-bold text-white"
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
            className="mt-4 max-w-xl mx-auto text-lg text-white/70"
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
                    <FormLabel className="text-white/80">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background/50" />
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
                    <FormLabel className="text-white/80">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} className="bg-background/50" />
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
                    <FormLabel className="text-white/80">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} className="bg-background/50 min-h-[120px]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full md:w-auto animated-gradient text-background font-bold">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
        
        <motion.div 
            className="mt-16 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-white/60 hover:text-white"
            >
              <social.icon className="w-8 h-8"/>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
