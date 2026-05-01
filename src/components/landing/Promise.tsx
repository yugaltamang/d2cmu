import { Store, Users, TrendingUp, ShoppingBag, Instagram, ArrowUpRight } from "lucide-react";
import bg from "@/assets/bg-abstract-1.jpg";

const cards = [
  {
    icon: Store,
    eyebrow: "01 / Storefront",
    big: "35",
    bigSub: "days to live",
    title: "Live Shopify store, taking real orders.",
    body: "By Week 5 your store is live on a custom domain — products listed, payments wired, checkout tested. Not a Figma. A URL you can share.",
    span: "lg:col-span-7",
  },
  {
    icon: Users,
    eyebrow: "02 / Customers",
    big: "100+",
    bigSub: "paying orders",
    title: "Your first 100 paying customers.",
    body: "Live Meta & Google campaigns with real budget. Measured, attributed, owned by you.",
    span: "lg:col-span-5",
  },
  {
    icon: TrendingUp,
    eyebrow: "03 / Revenue",
    big: "₹1L+",
    bigSub: "tracked revenue",
    title: "Real revenue, defended live.",
    body: "Not projected. CAC, AOV & margin defended at the showcase in front of operators.",
    span: "lg:col-span-5",
  },
  {
    icon: ShoppingBag,
    eyebrow: "04 / Distribution",
    big: "3+",
    bigSub: "channels live",
    title: "Live across Amazon, Flipkart & socials.",
    body: "Listings shipped on the marketplaces that matter. Distribution you've operated, not studied.",
    span: "lg:col-span-7",
  },
  {
    icon: Instagram,
    eyebrow: "05 / Brand",
    big: "1K+",
    bigSub: "followers earned",
    title: "Instagram brand store with a real audience.",
    body: "Build your Instagram storefront from zero — content calendar shipped, reels live, DMs converting. Turn the feed into a sales channel.",
    span: "lg:col-span-12",
  },
];

const Promise = () => {
  return (
    <section id="outcomes" className="relative bg-background py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={bg} alt="" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Shopify-style massive section header */}
        <h2
          className="max-w-5xl font-display text-foreground text-[clamp(2rem,4.8vw,4rem)] leading-[1] tracking-[-0.035em]"
          style={{ fontWeight: 500 }}
        >
          Five things you walk out with.{" "}
          <span className="text-foreground/45">
            Not a slide deck. A live brand, real revenue, customers you earned.
          </span>
        </h2>

        {/* Big rounded image-style cards */}
        <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {cards.map(({ icon: Icon, eyebrow, big, bigSub, title, body, span }) => (
            <article
              key={eyebrow}
              className={`${span} group relative overflow-hidden bg-card border border-border/60 p-5 sm:p-6 lg:p-7 hover:border-primary/40 transition-colors`}
            >
              <div
                aria-hidden
                className="absolute -top-32 -right-24 h-[380px] w-[380px] rounded-full opacity-50 blur-2xl"
                style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.2), transparent)" }}
              />

              <div className="relative flex flex-col h-full min-h-[200px] sm:min-h-[240px]">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 border border-border/60 px-3 py-1.5">
                    <Icon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                      {eyebrow}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" strokeWidth={1.5} />
                </div>

                <div className="mt-auto pt-6 sm:pt-8">
                  <p className="font-display text-foreground text-[clamp(2.5rem,9vw,5rem)] leading-[0.9] tracking-[-0.04em]" style={{ fontWeight: 500 }}>
                    {big}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50 mt-3">
                    {bigSub}
                  </p>
                  <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl lg:text-[22px] leading-tight text-foreground max-w-md" style={{ fontWeight: 500 }}>
                    {title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-[15px] text-foreground/65 leading-relaxed max-w-lg">
                    {body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promise;
