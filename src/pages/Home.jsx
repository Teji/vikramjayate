import AnnouncementBar from "../components/home/AnnouncementBar";
import Seo from "../components/Seo";
import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/home/HeroSection";

import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import CourseSection from "../components/home/CourseSection";
import WhyVikramSection from "../components/home/WhyVikramSection";
import AudienceSection from "../components/home/AudienceSection";
import HowItWorks from "../components/home/HowItWorks";
import FAQSection from "../components/home/FAQSection";
import MarketInsights from "../components/home/MarketInsights";
import RecommendationsSection from "../components/home/RecommendationsSection";
import FinalCTA from "../components/home/FinalCTA";

import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090c] text-white overflow-hidden">
      <Seo
        title="Vikram Jayate | Stock Market Analysis & Education"
        description="Learn stock market analysis, price action and structured market thinking with Vikram Jayate, a market professional with 15+ years of experience."
        canonical="https://vikramjayate.vercel.app/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Vikram Jayate",
              url: "https://vikramjayate.vercel.app/",
              jobTitle: "Stock Market Analyst & Educator",
            },
            {
              "@type": "WebSite",
              name: "Vikram Jayate",
              url: "https://vikramjayate.vercel.app/",
            },
          ],
        }}
      />
      <AnnouncementBar />
      <Navbar />

      <main>
        <HeroSection />
    
        <AboutSection />
        <ServicesSection />
        <CourseSection />
        <WhyVikramSection />
        <AudienceSection />
        <HowItWorks />
        <MarketInsights />
        <RecommendationsSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
