import { Store, TrendingUp, ShoppingBag, Instagram, ArrowUpRight } from "lucide-react";

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

type Variant = "ink" | "lime" | "paper";

const cards: {
  icon: typeof Store;
  eyebrow: string;
  big: string;
  bigSub: string;
  title: string;
  body: string;
  variant: Variant;
}[] = [
  {
    icon: Store,
    eyebrow: "01 / Storefront",
    big: "35",
    bigSub: "Days to live",
    title: "Live Shopify store, taking real orders.",
    body: "By Week 5 your store is live on a custom domain — products listed, payments wired, checkout tested. Not a Figma. A URL you can share.",
    variant: "ink",
  },
  {
    icon: TrendingUp,
    eyebrow: "02 / Customers & Revenue",
    big: "₹1L+",
    bigSub: "Revenue · 100+ orders",
    title: "Real customers. Real revenue. Defended live.",
    body: "Live Meta & Google campaigns with real budget — your first 100 paying customers, then CAC, AOV & margin defended at the showcase.",
    variant: "lime",
  },
  {
    icon: ShoppingBag,
    eyebrow: "03 / Distribution",
    big: "3+",
    bigSub: "Channels live",
    title: "Live across Amazon, Flipkart & socials.",
    body: "Listings shipped on the marketplaces that matter. Distribution you've operated, not studied.",
    variant: "paper",
  },
  {
    icon: Instagram,
    eyebrow: "04 / Brand",
    big: "1K+",
    bigSub: "Followers earned",
    title: "Instagram brand store with a real audience.",
    body: "Build your Instagram storefront from zero — content calendar shipped, reels live, DMs converting. Turn the feed into a sales channel.",
    variant: "ink",
  },
];

const Promise = () => {
  return (
    <section
      id="outcomes"
      className="relative py-16 sm:py-20 lg:py-28 border-t-2 border-[hsl(var(--ink))]"
      style={{ background: "hsl(var(--ink))" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/20">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--paper))]">
            ▣ Outcomes Feed
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-white/60">
            Four · Things · Walked · Out
          </span>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-6 items-end">
          <h2
            className="col-span-12 lg:col-span-9 relative font-sans uppercase text-[hsl(var(--paper))] text-[clamp(2rem,7vw,5.5rem)] leading-[0.88] tracking-[-0.045em]"
            style={{ fontWeight: 900 }}
          >
            Four things you{" "}
            <span className="relative inline-block">
              walk out
              <Scribble className="absolute -bottom-3 sm:-bottom-5 left-0 w-full h-[24px] sm:h-[36px]" />
            </span>{" "}
            with.{" "}
            <span className="text-white/45">
              Not a slide deck. A live brand, real revenue, customers you earned.
            </span>
          </h2>
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-[hsl(var(--lime))] text-[hsl(var(--ink))] px-4 py-3 border-2 border-[hsl(var(--lime))]">
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] font-bold">
                ▸ Outputs · 04
              </p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.35em] font-semibold opacity-80">
                Shipped · Sold · Signed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-12 gap-3 sm:gap-4">
          {cards.map(({ icon: Icon, eyebrow, big, bigSub, title, body, variant }, idx) => {
            const surface =
              variant === "lime"
                ? "hsl(var(--lime))"
                : variant === "ink"
                ? "hsl(var(--ink))"
                : "hsl(var(--paper))";
            const text = variant === "ink" ? "hsl(var(--paper))" : "hsl(var(--ink))";
            const sub = variant === "ink" ? "hsl(0 0% 65%)" : variant === "lime" ? "hsl(0 0% 15%)" : "hsl(0 0% 35%)";
            const accent = variant === "lime" ? "hsl(var(--ink))" : "hsl(var(--lime))";
            const ruleColor = variant === "ink" ? "hsl(0 0% 18%)" : variant === "lime" ? "hsl(0 0% 12%)" : "hsl(0 0% 75%)";

            return (
              <article
                key={eyebrow}
                className="col-span-12 sm:col-span-6 relative overflow-hidden"
                style={{ background: surface, color: text, minHeight: 360 }}
              >
                {/* Top strip */}
                <div
                  className="flex items-center justify-between px-4 py-2 font-sans text-[10px] uppercase tracking-[0.3em] font-bold"
                  style={{ borderBottom: `1px solid ${ruleColor}`, color: sub }}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.5} style={{ color: accent }} />
                    {eyebrow}
                  </span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} style={{ color: accent }} />
                </div>

                {(variant === "ink" || variant === "paper") && (
                  <Burst className="absolute top-12 right-4 h-9 w-9 rotate-12" />
                )}

                <div className="relative px-5 sm:px-7 pt-6 pb-14 flex flex-col h-[calc(100%-34px)]">
                  <div>
                    <p
                      className="font-sans uppercase tracking-[-0.045em] leading-[0.85]"
                      style={{ fontWeight: 900, fontSize: "clamp(3rem, 6vw, 5rem)", color: text }}
                    >
                      {big}
                      <span style={{ color: accent }}>.</span>
                    </p>
                    <p
                      className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] font-bold"
                      style={{ color: sub }}
                    >
                      {bigSub}
                    </p>
                  </div>

                  <div className="mt-auto pt-6">
                    <h3
                      className="font-sans uppercase tracking-[-0.02em] leading-[1.05] max-w-md"
                      style={{ fontWeight: 800, fontSize: "1.1rem", color: text }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] leading-relaxed max-w-lg"
                      style={{ color: variant === "ink" ? "hsl(0 0% 75%)" : variant === "lime" ? "hsl(0 0% 12%)" : "hsl(0 0% 25%)" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>

                {/* Bottom strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 font-sans text-[9px] uppercase tracking-[0.3em] font-bold"
                  style={{ borderTop: `1px solid ${ruleColor}`, color: sub, background: surface }}
                >
                  <span>@mu.school / outcome·{String(idx + 1).padStart(2, "0")}</span>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Promise;
