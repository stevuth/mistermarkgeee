import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import RolesSection from "@/components/sections/roles-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ZohoNewsletter from "@/components/sections/zoho-newsletter-section";
import ContactSection from "@/components/sections/contact-section";
import ArticlesSection from "@/components/sections/articles-section";
import WorkWithMeSection from "@/components/sections/work-with-me-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RolesSection />
      <PortfolioSection />
      <ArticlesSection />
      <TestimonialsSection />
      <WorkWithMeSection />
      <ZohoNewsletter />
      <ContactSection />
    </>
  );
}
