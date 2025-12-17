import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Screenshots from "@/components/landing/Screenshots";
import Benefits from "@/components/landing/Benefits";
import Integrations from "@/components/landing/Integrations";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/landing/CookieConsent";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AnnouncementBanner from "@/components/landing/AnnouncementBanner";
import SocialProofNotification from "@/components/landing/SocialProofNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AnnouncementBanner />
      <main className="pt-10">
        <Hero />
        <Features />
        <Screenshots />
        <Benefits />
        <Integrations />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
      <SocialProofNotification />
    </div>
  );
};

export default Index;
