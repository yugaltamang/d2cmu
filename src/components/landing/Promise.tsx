import { Store, Users, TrendingUp, ShoppingBag, Instagram, ArrowUpRight } from "lucide-react";
import bgPromise from "@/assets/bg-promise.jpg";

const Promise = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <img
        src={bgPromise}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
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

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5 auto-rows-[minmax(220px,auto)]">
          {/* HERO — Storefront (large) */}
          <article className="md:col-span-4 md:row-span-2 relative rounded-3xl border border-border bg-card p-8 lg:p-12 shadow-card overflow-hidden group hover:border-primary/40 transition-colors">
            <div
              aria-hidden
              className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full opacity-70"
              style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.22), transparent)" }}
            />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
                  <Store className="h-3.5 w-3.5 text-primary" strokeWidth={1.75} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">01 / Storefront</span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" strokeWidth={1.5} />
              </div>

              <div className="mt-auto pt-12">
                <p className="font-display text-[11rem] lg:text-[14rem] leading-[0.8] tracking-tighter text-violet font-thin">
                  35
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
                  days to live
                </p>
                <h3 className="mt-6 font-display font-light text-3xl lg:text-4xl leading-tight max-w-md text-balance">
                  Live Shopify store, taking real orders.
                </h3>
                <p className="mt-4 text-muted-foreground text-sm lg:text-base leading-relaxed max-w-lg">
                  By Week 5 your store is live on a custom domain — products listed, payments wired, checkout tested. Not a Figma. A URL you can share.
                </p>
              </div>
            </div>
          </article>

          {/* Customers (tall) */}
          <article className="md:col-span-2 md:row-span-2 rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-card flex flex-col group hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" strokeWidth={1.75} />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">02 / Customers</span>
            </div>
            <p className="mt-auto font-display text-7xl lg:text-8xl leading-none text-violet font-thin">
              100<span className="text-3xl lg:text-4xl align-top">+</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
              paying orders
            </p>
            <h3 className="mt-6 font-display text-xl leading-tight">
              Your first 100 paying customers.
            </h3>
            <p className="mt-3 text-xs lg:text-sm text-muted-foreground leading-relaxed">
              Live Meta &amp; Google campaigns with real budget. Measured, attributed, owned by you.
            </p>
          </article>

          {/* Revenue (wide) */}
          <article className="md:col-span-3 rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-card group hover:border-primary/40 transition-colors flex items-center gap-6">
            <div className="shrink-0">
              <TrendingUp className="h-5 w-5 text-primary mb-3" strokeWidth={1.75} />
              <p className="font-display text-6xl lg:text-7xl leading-none text-violet font-thin">
                ₹1L<span className="text-2xl align-top">+</span>
              </p>
            </div>
            <div className="border-l border-border pl-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">03 / Revenue</span>
              <h3 className="mt-2 font-display text-xl leading-tight">
                ₹1L+ in tracked revenue.
              </h3>
              <p className="mt-2 text-xs lg:text-sm text-muted-foreground leading-relaxed">
                A real milestone, not projected. CAC, AOV &amp; margin defended at the showcase.
              </p>
            </div>
          </article>

          {/* Distribution */}
          <article className="md:col-span-3 rounded-3xl border border-border bg-card p-7 lg:p-8 shadow-card group hover:border-primary/40 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <ShoppingBag className="h-5 w-5 text-primary mb-3" strokeWidth={1.75} />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">04 / Distribution</span>
                <h3 className="mt-2 font-display text-xl leading-tight">
                  Live across Amazon, Flipkart &amp; socials.
                </h3>
                <p className="mt-3 text-xs lg:text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Listings shipped on the marketplaces that matter. Distribution you've operated, not studied.
                </p>
              </div>
              <p className="font-display text-5xl leading-none text-violet font-thin shrink-0">
                3<span className="text-xl align-top">+</span>
              </p>
            </div>
          </article>

          {/* Brand (full width) */}
          <article className="md:col-span-6 rounded-3xl border border-border bg-card p-7 lg:p-10 shadow-card group hover:border-primary/40 transition-colors">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-3 flex items-center gap-4">
                <Instagram className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <p className="font-display text-6xl lg:text-7xl leading-none text-violet font-thin">
                  1K<span className="text-2xl align-top">+</span>
                </p>
              </div>
              <div className="md:col-span-9 md:border-l md:border-border md:pl-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">05 / Brand &amp; community</span>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl leading-tight">
                  Instagram brand store with a real audience.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Build your Instagram storefront from zero — content calendar shipped, reels live, DMs converting. Grow to 1,000+ followers and turn the feed into a sales channel.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Promise;
