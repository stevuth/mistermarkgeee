"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Menu, Palette } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#roles" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" onClick={(e) => { e.preventDefault(); handleScrollTo('#home');}} className="text-foreground">
              <Palette className="h-8 w-8" />
            </Link>
            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => { e.preventDefault(); handleScrollTo(link.href);}}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors hover:scale-105 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="text-foreground hover:text-primary hover:bg-primary/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && <MobileMenu closeMenu={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
