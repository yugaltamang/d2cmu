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
            className="font-display text-foreground text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.04em]"
            style={{ fontWeight: 500 }}
          >
            Don&apos;t study D2C.
            <br />
            <span className="text-foreground/55">Build the brand</span>
            <br />
            <span className="text-violet">they line up for.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base lg:text-lg text-foreground/75 leading-relaxed">
            Dream big and ship fast. A 10-weekend immersion by Masters&apos; Union — walk in with an idea, walk out with a live D2C brand.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#apply" className="btn-pill-light !py-2.5 !px-5 !text-sm">
              Start for free
            </a>
            <a href="#curriculum" className="btn-pill-ghost !py-2.5 !px-5 !text-sm">
              <span className="grid place-items-center h-5 w-5 rounded-full bg-foreground/15">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
              Why we built this
            </a>
          </div>
        </div>

        {/* Stats strip — Shopify-style flat */}
        <dl className="mt-10 lg:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 max-w-3xl border-t border-border/40 pt-6">
          {[
            { n: "10", l: "Weekends" },
            { n: "9", l: "Sessions · 18 hrs" },
            { n: "1", l: "Live brand shipped" },
            { n: "9", l: "Operator-faculty" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <dt className="font-display text-3xl lg:text-4xl leading-none text-foreground" style={{ fontWeight: 500 }}>
                {s.n}
              </dt>
              <dd className="mt-2 text-xs lg:text-sm text-foreground/60">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Logo strip — "trusted by" Shopify-style */}
      <div className="relative border-t border-border/60 bg-background/60">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-3">
            India&apos;s D2C ecosystem in the room
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {logos.map((l) => (
              <span key={l} className="text-foreground/60 text-sm lg:text-base font-display tracking-tight" style={{ fontWeight: 500 }}>
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
