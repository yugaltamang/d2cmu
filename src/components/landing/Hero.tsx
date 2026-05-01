import { ArrowUpRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/d2c-hero.jpg";
import bgHero from "@/assets/bg-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={bgHero}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-[520px]"
        style={{ background: "var(--gradient-spotlight)" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-16 lg:pb-20">
        <p className="mb-3 sm:mb-4">
          <span className="inline-block bg-foreground text-background px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs">
            Cohort 01 · Starts June 2026 · Masters' Union, Gurugram
          </span>
        </p>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[1.02] tracking-[-0.03em] text-balance text-foreground" style={{ fontWeight: 300 }}>
              Don't study D2C.
              <br />
              Ship a brand
              <br />
              that <span className="text-violet italic">sells.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              A 10-weekend immersion by Masters' Union. You walk in with an idea.
              You walk out with a live D2C brand — product sourced, Shopify store
              live, ads running, and a pitch ready for founders & operators.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-sans text-sm font-medium tracking-tight hover:brightness-110 transition"
              >
                Reserve your seat
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 font-sans text-sm font-medium tracking-tight text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                ▷ See what you'll build
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground font-display">
              <span><b className="text-foreground font-semibold">10</b> Weekends</span>
              <span><b className="text-foreground font-semibold">9</b> Sessions · 18 hrs in-room</span>
              <span><b className="text-foreground font-semibold">1</b> Live brand shipped</span>
              <span><b className="text-foreground font-semibold">9</b> Operator-faculty</span>
            </div>
          </div>

          <div className="lg:col-span-4 animate-scale-in" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 z-10 bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 inline-flex items-center gap-1.5 rounded-full">
                <Sparkles className="h-3 w-3" /> Outcome-first
              </div>
              <div className="relative overflow-hidden rounded-[2rem] bg-card border border-border shadow-editorial">
                <img
                  src={heroImg}
                  alt="A premium D2C brand mock-up: product, packaging and a Shopify checkout"
                  width={1536}
                  height={1280}
                  className="w-full h-[420px] object-cover opacity-95"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
                  <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest">Final Showcase</p>
                  <p className="text-foreground font-display font-semibold text-xl mt-1 leading-tight">Pitch your live brand to founders & operators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
