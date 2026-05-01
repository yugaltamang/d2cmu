import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import OutcomeBar from "@/components/landing/OutcomeBar";
import Promise from "@/components/landing/Promise";
import Curriculum from "@/components/landing/Curriculum";
import Faculty from "@/components/landing/Faculty";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <OutcomeBar />
      <Promise />
      <Curriculum />
      <Faculty />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
