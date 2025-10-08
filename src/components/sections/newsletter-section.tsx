"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const NewsletterSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Subscribed!",
      description: "Thanks for joining the newsletter. Look out for updates in your inbox.",
    });
    form.reset();
  }

  return (
    <section id="newsletter" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold mt-6 text-foreground">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Join my newsletter to get the latest updates on projects, behind-the-scenes content, and exclusive insights delivered right to your inbox.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input 
                        placeholder="your.email@example.com" 
                        {...field} 
                        className="bg-background/80 h-12 text-base" 
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="h-12 animated-gradient text-white font-bold">
                Subscribe
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
