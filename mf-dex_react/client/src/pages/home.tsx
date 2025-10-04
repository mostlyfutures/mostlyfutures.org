import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExchangeSection from "@/components/exchange-section";
import TechnologySection from "@/components/technology-section";
import StatisticsSection from "@/components/statistics-section";
import CommunitySection from "@/components/community-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ExchangeSection />
      <TechnologySection />
      <StatisticsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
