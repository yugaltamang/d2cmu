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
      <div
        className="relative border-t border-border/40 overflow-hidden"
        style={{ background: "hsl(165 25% 4%)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(40% 25% at 80% 5%, hsl(96 75% 55% / 0.18), transparent 70%), radial-gradient(35% 20% at 0% 35%, hsl(165 80% 45% / 0.15), transparent 70%), radial-gradient(40% 25% at 90% 70%, hsl(96 75% 55% / 0.12), transparent 70%)",
          }}
        />
        <div className="relative">
          <Curriculum />
          <Immersions />
          <MUVFund />
        </div>
      </div>
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
