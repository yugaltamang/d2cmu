import Nav from "@/components/landing/Nav";
import MobileNav from "@/components/landing/MobileNav";
import Hero from "@/components/landing/Hero";

import Promise from "@/components/landing/Promise";
import Curriculum from "@/components/landing/Curriculum";
import MUVFund from "@/components/landing/MUVFund";
import Immersions from "@/components/landing/Immersions";
import Faculty from "@/components/landing/Faculty";
import FAQ from "@/components/landing/FAQ";
import Fees from "@/components/landing/Fees";
import CTA from "@/components/landing/CTA";
import GetInTouch from "@/components/landing/GetInTouch";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground pb-[60px] lg:pb-0">
      <Nav />
      <Hero />
      <Promise />
      <Curriculum />
      <Immersions />
      <MUVFund />
      <Faculty />
      <Fees />
      <FAQ />
      <CTA />
      <GetInTouch />
      <Footer />
      <MobileNav />
    </main>
  );
};

export default Index;
