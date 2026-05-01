import { ArrowUpRight, Check } from "lucide-react";
import bgPromise from "@/assets/bg-promise.jpg";
import heroImg from "@/assets/d2c-hero.jpg";
import bgCta from "@/assets/bg-cta.jpg";

type Block = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  bullets: string[];
  cta: string;
  image: string;
  reverse?: boolean;
};

const blocks: Block[] = [
  {
    eyebrow: "Build · Weeks 01 — 04",
    title: (
      <>
        Find the wedge. <span className="text-violet italic">Engineer</span> the product.
      </>
    ),
    body:
      "Validate a real D2C opportunity. Source product, build unit economics that defend a margin, and ship a brand identity that earns recall on a crowded shelf.",
    bullets: [
      "Validated brief, not a pitch deck",
      "Costing sheet with defended margins",
      "Brand identity & packaging shipped",
    ],
    cta: "Inside the build phase",
    image: bgPromise,
  },
  {
    eyebrow: "Launch · Weeks 05 — 06",
    title: (
      <>
        Go live. <span className="text-violet italic">Take real money.</span>
      </>
    ),
    body:
      "Ship a Shopify store on a custom domain by Week 5. List on Amazon, Flipkart and quick commerce by Week 6. Real checkout, real orders, real attribution.",
    bullets: [
      "Live Shopify store, custom domain",
      "Marketplace listings shipped",
      "Payments, logistics, support wired",
    ],
    cta: "See storefront standards",
    image: heroImg,
    reverse: true,
  },
  {
    eyebrow: "Scale · Weeks 07 — 08",
    title: (
      <>
        Drive demand. <span className="text-violet italic">Move units.</span>
      </>
    ),
    body:
      "Stand up performance on Meta and Google with real budget. Build a creator engine, then operationalise CX so the brand doesn't crack at 100+ orders.",
    bullets: [
      "100+ tracked paying customers",
      "₹1L+ in defended revenue",
      "CX & ops playbook in production",
    ],
    cta: "How we measure scale",
    image: bgCta,
  },
];

const FeatureBlocks = () => {
  return (
    <section id="outcomes" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              The promise
            </p>
            <h2
              className="mt-5 font-display text-foreground text-balance"
              style={{
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 0.96,
                letterSpacing: "-0.03em",
              }}
            >
              Outcomes <span className="italic text-violet">over</span> theory.
              <br />
              Shipped. Sold. Defended.
            </h2>
          </div>
          <p className="lg:col-span-4 self-end text-muted-foreground leading-relaxed">
            Every milestone has a number — and a deadline.
            <span className="block mt-2 italic text-foreground">
              Did it ship? Did it sell?
            </span>
          </p>
        </div>

        {/* Alternating feature blocks */}
        <div className="space-y-28 lg:space-y-40">
          {blocks.map((b, i) => (
            <article
              key={i}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-6 ${
                  b.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative rounded-[2rem] overflow-hidden border border-border bg-card shadow-editorial aspect-[4/5] lg:aspect-[5/6]">
                  <img
                    src={b.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, hsl(var(--background) / 0.55) 100%)",
                    }}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/90 bg-background/60 backdrop-blur px-2.5 py-1 rounded-full border border-border/60">
                      0{i + 1} / 03
                    </span>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div
                className={`lg:col-span-6 ${
                  b.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                  {b.eyebrow}
                </p>
                <h3
                  className="mt-4 font-display text-foreground text-balance"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(2rem, 4.2vw, 3.75rem)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.025em",
                  }}
                >
                  {b.title}
                </h3>
                <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {b.body}
                </p>
                <ul className="mt-8 space-y-3">
                  {b.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-foreground/90"
                    >
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm lg:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#curriculum"
                  className="mt-8 group inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-foreground border-b border-foreground/40 hover:border-primary hover:text-primary transition-colors pb-1"
                >
                  {b.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlocks;
