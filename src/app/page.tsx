import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import RolesSection from "@/components/sections/roles-section";
import FrameworkSection from "@/components/sections/framework-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import PodcastGuestSection from "@/components/sections/podcast-guest-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ZohoNewsletter from "@/components/sections/zoho-newsletter-section";
import ContactSection from "@/components/sections/contact-section";
import ArticlesSection from "@/components/sections/articles-section";
import WorkWithMeSection from "@/components/sections/work-with-me-section";
import ShowreelIntro from "@/components/sections/showreel-intro";

export default function Home() {
  return (
    <>
      <ShowreelIntro />
      <HeroSection />
      <AboutSection />
      <RolesSection />
      <FrameworkSection />
      <PortfolioSection />
      <PodcastGuestSection />
      <ArticlesSection />
      <TestimonialsSection />
      <WorkWithMeSection />
      <ZohoNewsletter />
      <ContactSection />
    </>
  );
}
