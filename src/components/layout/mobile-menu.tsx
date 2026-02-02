"use client";

import { motion } from "framer-motion";
import { X, Youtube, Instagram, Linkedin, LogOut, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useUser, useAuth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";

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
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@mistermarkgee" },
  { icon: Instagram, href: "https://www.instagram.com/mistermarkgee?igsh=OHFoZXhwOXppdDl1&utm_source=qr" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mark-macharia-gaturuku-a92840111/" },
];

const MobileMenu = ({ closeMenu }: MobileMenuProps) => {
  const { user } = useUser();
  const auth = useAuth();
  const { toast } = useToast();


  const handleScrollTo = (id: string) => {
    closeMenu();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      closeMenu();
      toast({
        title: "Signed Out",
        description: "You have been successfully signed out.",
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        variant: "destructive",
        title: "Sign Out Failed",
        description: "There was a problem signing out. Please try again.",
      });
    }
  };

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
            <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
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
              <a
                href={item.href}
                className="font-headline text-3xl font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
                onClick={(e) => { e.preventDefault(); handleScrollTo(item.href);}}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
          {user && (
            <>
              <motion.li variants={itemVariants}>
                <Link href="/admin" onClick={closeMenu} className="font-headline text-3xl font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer flex items-center gap-2">
                  <Shield className="h-8 w-8" /> Admin
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 font-headline text-3xl font-medium text-destructive/80 hover:text-destructive transition-colors cursor-pointer"
                >
                  <LogOut className="h-8 w-8" />
                  Sign Out
                </button>
            </motion.li>
            </>
          )}
        </motion.ul>
      </nav>
      <motion.div
        className="text-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
      >
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-foreground/60 hover:text-foreground"
            >
              <social.icon className="w-8 h-8" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
