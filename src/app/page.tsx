import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProceduresSection from "@/components/ProceduresSection";
import LocationsSection from "@/components/LocationsSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingNavbar from "@/components/FloatingNavbar";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <ProceduresSection />
        <LocationsSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
