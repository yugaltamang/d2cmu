import { Play, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/d2c-hero.webp";


const Hero = () => {
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
            className="font-display text-foreground text-[clamp(2rem,8vw,6rem)] leading-[1] tracking-[-0.04em]"
            style={{ fontWeight: 500 }}
          >
            B-schools <span className="text-foreground/55">teach</span> D2C.
            <br />
            We <span className="text-violet">ship</span> it.
          </h1>

          <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-foreground/75 leading-relaxed">
            Ten weekends. One live D2C brand — sourced, branded, on Shopify, with paid ads running and real customers in your CRM.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <a href="#apply" className="btn-pill-light !py-2.5 !px-5 !text-sm group justify-center sm:justify-start">
              Start your brand
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
            </a>
            <a href="#curriculum" className="btn-pill-ghost !py-2.5 !px-5 !text-sm justify-center sm:justify-start">
              <span className="grid place-items-center h-5 w-5 rounded-full bg-foreground/15">
                <Play className="h-2.5 w-2.5 fill-current" />
              </span>
              Why we built this
            </a>
          </div>
        </div>

        {/* Stats strip — Shopify-style flat */}
        <dl className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-5 max-w-3xl border-t border-border/40 pt-5 sm:pt-6">
          {[
            { n: "10", l: "Weekends" },
            { n: "9", l: "Sessions · 18 hrs" },
            { n: "1", l: "Live brand shipped" },
            { n: "9", l: "Operator-faculty" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <dt className="font-display text-2xl sm:text-3xl lg:text-4xl leading-none text-foreground" style={{ fontWeight: 500 }}>
                {s.n}
              </dt>
              <dd className="mt-2 text-xs lg:text-sm text-foreground/60">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>

    </section>
  );
};

export default Hero;
