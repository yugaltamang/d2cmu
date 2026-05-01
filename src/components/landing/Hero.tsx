import { Play } from "lucide-react";
import heroImg from "@/assets/d2c-hero.jpg";

const logos = [
  "boAt", "Mamaearth", "WakeFit", "Sleepy Owl", "Plum", "Bombay Shaving Co", "The Souled Store", "Licious",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background image with heavy overlay (Shopify-style cinematic hero) */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-50"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-14 lg:pt-20 pb-12 lg:pb-16">
        <div className="max-w-4xl">
          <h1
            className="font-display text-foreground text-[clamp(3.25rem,9vw,9rem)] leading-[0.95] tracking-[-0.045em]"
            style={{ fontWeight: 500 }}
          >
            Don&apos;t study D2C.
            <br />
            <span className="text-foreground/55">Build the brand</span>
            <br />
            <span className="text-violet">they line up for.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg lg:text-xl text-foreground/75 leading-relaxed">
            Dream big and ship fast. A 10-weekend immersion by Masters&apos; Union — walk in with an idea, walk out with a live D2C brand.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#apply" className="btn-pill-light">
              Start for free
            </a>
            <a href="#curriculum" className="btn-pill-ghost">
              <span className="grid place-items-center h-5 w-5 rounded-full bg-foreground/15">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
              Why we built this
            </a>
          </div>
        </div>

        {/* Stats strip — Shopify-style flat */}
        <dl className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-8 max-w-4xl">
          {[
            { n: "10", l: "Weekends" },
            { n: "9", l: "Sessions · 18 hrs" },
            { n: "1", l: "Live brand shipped" },
            { n: "9", l: "Operator-faculty" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <dt className="font-display text-5xl lg:text-6xl leading-none text-foreground" style={{ fontWeight: 500 }}>
                {s.n}
              </dt>
              <dd className="mt-3 text-sm text-foreground/60">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Logo strip — "trusted by" Shopify-style */}
      <div className="relative border-t border-border/60 bg-background/60">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-5">
            India&apos;s D2C ecosystem in the room
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {logos.map((l) => (
              <span key={l} className="text-foreground/60 text-base lg:text-lg font-display tracking-tight" style={{ fontWeight: 500 }}>
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
