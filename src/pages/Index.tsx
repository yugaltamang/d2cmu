import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import LogoStrip from "@/components/landing/LogoStrip";
import FeatureBlocks from "@/components/landing/FeatureBlocks";
import StatsBand from "@/components/landing/StatsBand";
import Curriculum from "@/components/landing/Curriculum";
import Faculty from "@/components/landing/Faculty";
import Testimonial from "@/components/landing/Testimonial";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <LogoStrip />
      <FeatureBlocks />
      <StatsBand />
      <Curriculum />
      <Faculty />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
