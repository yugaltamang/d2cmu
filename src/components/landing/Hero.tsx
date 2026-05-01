import { Play, ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-green.png";

const Burst = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden>
    <polygon
      points="20,2 23,15 36,12 26,22 38,28 24,27 27,40 20,30 13,40 16,27 2,28 14,22 4,12 17,15"
      fill="hsl(var(--lime))"
    />
  </svg>
);

const Scribble = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 60" className={className} aria-hidden fill="none">
    <path
      d="M4 30 C 18 8, 32 52, 50 24 S 80 50, 96 22 S 118 38, 116 30"
      stroke="hsl(var(--lime))"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden text-[hsl(var(--paper))]"
      style={{ background: "hsl(155 55% 7%)" }}
    >
      {/* Hero background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Darken left side for headline legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, hsl(155 60% 5% / 0.85) 0%, hsl(155 60% 5% / 0.55) 45%, hsl(155 60% 5% / 0.25) 100%)",
          }}
        />
        {/* Top fade for nav legibility */}
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{ background: "linear-gradient(180deg, hsl(155 60% 5%) 0%, transparent 100%)" }}
        />
        {/* Bottom fade into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: "linear-gradient(0deg, hsl(155 60% 5%) 0%, transparent 100%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-10 sm:pb-12 lg:pb-16">
        {/* Top meta strip */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/20">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-white">
            ▣ Cohort 01 · June 2026
          </span>
          <span className="hidden sm:inline font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-white/60">
            Masters' Union · Gurugram
          </span>
        </div>

        <div className="mt-10 sm:mt-14 relative">
          <h1
            className="font-sans uppercase text-[hsl(var(--paper))] text-[clamp(2.5rem,11vw,9.5rem)] leading-[0.85] tracking-[-0.05em]"
            style={{ fontWeight: 900 }}
          >
            B-Schools{" "}
            <span className="text-white/40">teach</span>{" "}
            <span style={{ background: "hsl(var(--lime))", color: "hsl(var(--ink))", padding: "0 0.12em" }}>
              D2C
            </span>
            .
            <br />
            We{" "}
            <span className="relative inline-block">
              ship
              <Scribble className="absolute -bottom-3 sm:-bottom-5 left-0 w-full h-[24px] sm:h-[36px]" />
            </span>{" "}
            it.
          </h1>
          <Burst className="absolute -top-4 right-0 sm:top-2 sm:right-8 h-10 w-10 sm:h-14 sm:w-14 rotate-12" />

          <p className="mt-8 sm:mt-10 max-w-2xl text-sm sm:text-base lg:text-lg text-white/75 leading-relaxed">
            Ten weekends. One live D2C brand — sourced, branded, on Shopify, with paid ads running and{" "}
            <span className="text-white font-bold">real customers</span> in your CRM.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3">
            <a href="#apply" className="btn-pill-light group">
              Start your brand
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
            </a>
            <a href="#curriculum" className="btn-pill-ghost group">
              <span className="grid place-items-center h-5 w-5 bg-[hsl(var(--lime))] text-[hsl(var(--ink))]">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
              Why we built this
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <dl className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-5 max-w-4xl border-t-2 border-white/30 pt-6">
          {[
            { n: "10", l: "Weekends" },
            { n: "9", l: "Sessions · 18 hrs" },
            { n: "1", l: "Live brand shipped" },
            { n: "9", l: "Operator-faculty" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <dt className="font-sans uppercase text-[hsl(var(--paper))] text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em]" style={{ fontWeight: 900 }}>
                {s.n}<span style={{ color: "hsl(var(--lime))" }}>.</span>
              </dt>
              <dd className="mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
