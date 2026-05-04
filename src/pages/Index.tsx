import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";

import Promise from "@/components/landing/Promise";
import Curriculum from "@/components/landing/Curriculum";
import Faculty from "@/components/landing/Faculty";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import GetInTouch from "@/components/landing/GetInTouch";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Promise />
      <Curriculum />
      <Faculty />
      <FAQ />
      <CTA />
      <GetInTouch />
      <Footer />
    </main>
  );
};

export default Index;
