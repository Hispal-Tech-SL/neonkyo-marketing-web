import HackerBackground from "@/components/HackerBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CompetitionSection from "@/components/CompetitionSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated hacker background */}
      <HackerBackground />

      {/* Main content */}
      <div className="relative z-10">
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <CompetitionSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
