import { Store, Users, TrendingUp, ShoppingBag, Instagram } from "lucide-react";

const pillars = [
  {
    icon: Store,
    metric: "Day 35",
    label: "01 / Storefront",
    title: "Live Shopify store, taking real orders.",
    body:
      "By Week 5 your store is live on a custom domain — products listed, payments wired, checkout tested. Not a Figma. A URL you can share.",
  },
  {
    icon: Users,
    metric: "100+",
    label: "02 / First customers",
    title: "Your first 100 paying customers.",
    body:
      "Run live Meta & Google campaigns with real budget. Target is your first 100 paid orders before the cohort ends — measured, attributed, owned by you.",
  },
  {
    icon: TrendingUp,
    metric: "₹1L+",
    label: "03 / Revenue",
    title: "₹1L+ in tracked revenue.",
    body:
      "Hit a real revenue milestone, not a projected one. CAC, AOV, contribution margin and repeat rate — defended in front of founders at the final showcase.",
  },
  {
    icon: ShoppingBag,
    metric: "3+ channels",
    label: "04 / Distribution",
    title: "Live across Amazon, Flipkart & socials.",
    body:
      "Listings shipped on the marketplaces that matter, ads running on Meta + Google, content live on Instagram. Distribution you've operated, not just studied.",
  },
  {
    icon: Instagram,
    metric: "1K+ followers",
    label: "05 / Brand & community",
    title: "Instagram brand store with a real audience.",
    body:
      "Build your Instagram storefront from zero — content calendar shipped, reels live, DMs converting. Grow to 1,000+ followers and turn the feed into a sales channel.",
  },
];

const Promise = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              The promise
            </p>
            <h2 className="mt-4 font-display font-light text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              Outcomes <span className="italic text-violet">over</span> theory.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Most programs hand you frameworks. We hand you a live storefront,
              your first 100 paying customers, real revenue on the dashboard and
              listings on Amazon &amp; Flipkart. Every milestone has a number —
              and a deadline. <span className="italic text-foreground">Did it ship? Did it sell?</span>
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, metric, label, title, body }) => (
              <div key={label} className="rounded-3xl bg-card border border-border p-7 lg:p-8 group hover:border-primary/50 hover:bg-card/80 transition-colors shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-11 w-11 rounded-full bg-primary/15 border border-primary/30 grid place-items-center">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-2xl text-violet leading-none">{metric}</span>
                </div>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {label}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;
