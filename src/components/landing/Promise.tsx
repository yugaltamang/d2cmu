import { Store, Users, TrendingUp, ShoppingBag, Instagram } from "lucide-react";

const pillars = [
  {
    icon: Store,
    metric: "35",
    suffix: "days",
    label: "01 / Storefront",
    title: "Live Shopify store, taking real orders.",
    body:
      "By Week 5 your store is live on a custom domain — products listed, payments wired, checkout tested.",
  },
  {
    icon: Users,
    metric: "100",
    suffix: "+ orders",
    label: "02 / Customers",
    title: "Your first 100 paying customers.",
    body:
      "Live Meta & Google campaigns with real budget. Measured, attributed, owned by you.",
  },
  {
    icon: TrendingUp,
    metric: "₹1L",
    suffix: "+ revenue",
    label: "03 / Revenue",
    title: "₹1L+ in tracked revenue.",
    body:
      "A real milestone, not projected. CAC, AOV & margin defended at the showcase.",
  },
  {
    icon: ShoppingBag,
    metric: "3",
    suffix: "+ channels",
    label: "04 / Distribution",
    title: "Live across Amazon, Flipkart & socials.",
    body:
      "Listings shipped on the marketplaces that matter. Distribution you've operated, not studied.",
  },
  {
    icon: Instagram,
    metric: "1K",
    suffix: "+ followers",
    label: "05 / Brand",
    title: "Instagram store with a real audience.",
    body:
      "Content calendar shipped, reels live, DMs converting. Turn the feed into a sales channel.",
  },
];

const Promise = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 right-0 h-[480px] w-[680px] rounded-full opacity-60"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.18), transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">The promise</p>
            <h2 className="mt-5 font-display font-light text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
              Outcomes <span className="italic text-violet">over</span> theory.
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-muted-foreground leading-relaxed self-end">
            Every milestone has a number — and a deadline.
            <span className="block mt-2 italic text-foreground">Did it ship? Did it sell?</span>
          </p>
        </div>

        {/* Uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {pillars.map(({ icon: Icon, metric, suffix, label, title, body }) => (
            <article
              key={label}
              className="rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-card group hover:border-primary/40 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {label}
                </span>
              </div>

              <div className="mt-10">
                <p className="font-display font-thin text-7xl leading-none text-violet">
                  {metric}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {suffix}
                </p>
              </div>

              <h3 className="mt-8 font-display text-xl leading-tight">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promise;
