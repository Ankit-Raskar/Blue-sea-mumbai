import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/features/HeroSection";
import AboutSection from "@/components/features/AboutSection";
import EventsSection from "@/components/features/EventsSection";
import CuisineSection from "@/components/features/CuisineSection";
import VenueSection from "@/components/features/VenueSection";
import GallerySection from "@/components/features/GallerySection";
import TestimonialsSection from "@/components/features/TestimonialsSection";
import ContactSection from "@/components/features/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <CuisineSection />
      <VenueSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
