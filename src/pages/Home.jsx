import AnnouncementBar from "../components/home/AnnouncementBar";
import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/home/HeroSection";

import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import CourseSection from "../components/home/CourseSection";
import WhyVikramSection from "../components/home/WhyVikramSection";
import AudienceSection from "../components/home/AudienceSection";
import HowItWorks from "../components/home/HowItWorks";
import FAQSection from "../components/home/FAQSection";
import FinalCTA from "../components/home/FinalCTA";

import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07090c] text-white overflow-hidden">
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
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
