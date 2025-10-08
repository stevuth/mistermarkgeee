import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import RolesSection from "@/components/sections/roles-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import GallerySection from "@/components/sections/gallery-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RolesSection />
      <PortfolioSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
