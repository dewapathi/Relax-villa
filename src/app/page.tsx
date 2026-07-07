import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import BreakfastSection from "@/components/sections/BreakfastSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <FacilitiesSection />
        <BreakfastSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
