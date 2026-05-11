import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/d2c-hero.webp";
import { useApplyWidget } from "@/hooks/useApplyWidget";


const Hero = () => {
  const { open } = useApplyWidget();
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background image with heavy overlay (Shopify-style cinematic hero) */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-100"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-10 sm:pb-12 lg:pb-16">
        <div className="max-w-4xl">
          <h1
            className="font-display text-foreground text-[clamp(1.875rem,8vw,6rem)] leading-[1] tracking-[-0.04em] break-words"
            style={{ fontWeight: 500 }}
          >
            B-schools <span className="text-foreground/55">teach</span> D2C.
            <br />
            We <span className="text-violet">ship</span> it.
          </h1>

          <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-foreground/75 leading-relaxed">
            Ten weekends. One live D2C brand - built from scratch, launched on Shopify, backed by paid ads, and acquiring real customers into your CRM.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <button type="button" onClick={open} className="btn-pill-light !py-2.5 !px-5 !text-sm group justify-center sm:justify-start">
              Start your brand
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
            </button>
            <a href="#curriculum" className="btn-pill-ghost !py-2.5 !px-5 !text-sm justify-center sm:justify-start">
              View Curriculum
            </a>
          </div>
        </div>

        {/* Stats strip - Shopify-style flat */}
        <dl className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-3 gap-x-3 sm:gap-x-6 gap-y-4 max-w-3xl border-t border-border/40 pt-5 sm:pt-6">
          {[
            { n: "10", l: "Weekends", sub: "Saturday only" },
            { n: "20", l: "Sessions · 40 hrs", sub: "3-4 hours every week" },
            { n: "1", l: "Live brand shipped", sub: "Real customers" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <dt className="font-display text-2xl sm:text-3xl lg:text-4xl leading-none text-foreground" style={{ fontWeight: 500 }}>
                {s.n}
              </dt>
              <dd className="mt-2 text-xs lg:text-sm text-foreground/60">{s.l}</dd>
              {s.sub && (
                <dd className="mt-1 text-[11px] lg:text-xs text-foreground/45">{s.sub}</dd>
              )}
            </div>
          ))}
        </dl>
      </div>

    </section>
  );
};

export default Hero;
