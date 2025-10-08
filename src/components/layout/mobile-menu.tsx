"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import AnimatedGradientText from "../ui/animated-gradient-text";

type MobileMenuProps = {
  closeMenu: () => void;
};

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#roles" },
  { name: "Works", href: "#works" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const MobileMenu = ({ closeMenu }: MobileMenuProps) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-20">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-foreground hover:text-primary hover:bg-primary/10"
          >
            <motion.div whileHover={{ rotate: 90 }}>
              <X className="h-6 w-6" />
            </motion.div>
          </Button>
        </div>
      </div>
      <nav className="flex-grow flex flex-col items-center justify-center">
        <motion.ul
          className="flex flex-col items-center space-y-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.li key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                className="font-headline text-3xl font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <motion.div
        className="text-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
      >
        <Button
          size="lg"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
          }}
        >
          <AnimatedGradientText>Let's Create Magic</AnimatedGradientText>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
