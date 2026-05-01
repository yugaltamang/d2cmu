import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/d2c-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Soft spotlight */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-[680px] pointer-events-none"
        style={{ background: "var(--gradient-spotlight)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, hsl(var(--mu-cyan) / 0.18), transparent)" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 pt-20 lg:pt-28 pb-20 lg:pb-28">
        {/* Eyebrow tag */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 backdrop-blur px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Cohort 01 · Applications open
          </span>
        </div>

        {/* Headline — Shopify-scale */}
        <h1
          className="mt-8 font-display text-foreground text-balance"
          style={{
            fontWeight: 300,
            fontSize: "clamp(3.25rem, 9vw, 9rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
          }}
        >
          Don't study D2C.
          <br />
          <span className="text-violet italic">Build</span> a brand
          <br />
          that sells.
        </h1>

        {/* Subhead + CTA — Shopify two-column under-hero */}
        <div className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
              A 10-weekend immersion by Masters' Union. You walk in with an idea —
              walk out with a live D2C brand. Product sourced. Shopify store live.
              Ads running. Pitched to founders.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-sans text-sm font-semibold tracking-tight hover:brightness-110 transition shadow-card"
              >
                Start free trial
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 font-sans text-sm font-semibold tracking-tight text-foreground hover:border-foreground transition-colors"
              >
                Talk to admissions
              </a>
            </div>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Application-based · Limited seats · Starts June 2026
            </p>
          </div>

          {/* Big editorial image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card shadow-editorial">
              <img
                src={heroImg}
                alt="A premium D2C brand: product, packaging and Shopify checkout"
                width={1536}
                height={1280}
                className="w-full h-[360px] lg:h-[460px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Final Showcase · Week 10
                </p>
                <p className="mt-1 font-display font-light text-2xl leading-tight text-foreground">
                  Pitch your live brand to founders &amp; operators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
