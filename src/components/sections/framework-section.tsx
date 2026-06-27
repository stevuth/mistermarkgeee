
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const frameworkItems = [
  {
    letter: "C",
    title: "Content",
    description: "High-quality media creation that tells compelling stories and captures truth in motion, setting a standard for creative excellence.",
    color: "border-t-primary"
  },
  {
    letter: "C",
    title: "Commentary",
    description: "Thoughtful analysis and civil discourse on culture, faith, and the world, fostering understanding through respectful engagement.",
    color: "border-t-accent"
  },
  {
    letter: "C",
    title: "Contending",
    description: "Standing firm in conviction while engaging the marketplace of ideas with intellectual and spiritual integrity.",
    color: "border-t-primary"
  },
  {
    letter: "C",
    title: "Christ",
    description: "The center of the creative universe—He is the source, the message, and the goal of every endeavor we undertake.",
    color: "border-t-accent"
  },
  {
    letter: "C",
    title: "Culture",
    description: "The mission field where creativity meets community, aiming for human and societal flourishing through digital witnessing.",
    color: "border-t-primary"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FrameworkSection = () => {
  return (
    <section id="framework" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
        <span className="text-[40rem] font-bold font-headline">5C</span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">Framework</Badge>
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
              The 5 C's Effect
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-medium text-primary italic">
              Content & Commentary · Contending for Christ in Culture
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/70 leading-relaxed">
              Engaging the modern world requires a unique blend of clarity, conviction, and grace. 
              This framework serves as the compass for every project, podcast, and partnership—ensuring 
              that creativity serves a higher purpose in the digital age.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {frameworkItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "relative p-8 bg-secondary/20 rounded-xl border-t-4 transition-all duration-300 hover:bg-secondary/40 hover:-translate-y-2 group",
                item.color
              )}
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors font-headline">
                {item.letter}
              </div>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-px w-24 bg-primary/50 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-headline italic text-foreground/90 leading-tight">
              "Creativity is not just an output; it is an act of digital witnessing—a bridge built between the sacred and the secular to reflect the glory of the Creator."
            </blockquote>
            <div className="h-px w-24 bg-primary/50 mx-auto mt-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FrameworkSection;
