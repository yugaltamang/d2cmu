import { Hammer, Rocket, TrendingUp, Shield } from "lucide-react";

const phases = [
  {
    id: "01",
    name: "Build",
    icon: Hammer,
    tagline: "Find the wedge. Engineer the product.",
    range: "Weeks 01 — 04",
    outcome: "Brand-ready product with defensible economics",
    weeks: [
      { w: "01", q: "Identify & validate a high-potential D2C opportunity.", o: "Validated brief" },
      { w: "02", q: "Select product, source efficiently, build unit economics.", o: "Margin model" },
      { w: "03", q: "Define a differentiated brand strategy & positioning.", o: "Positioning" },
      { w: "04", q: "Create brand identity & packaging that drives recall.", o: "Identity system" },
    ],
  },
  {
    id: "02",
    name: "Launch",
    icon: Rocket,
    tagline: "Go live. Take real money.",
    range: "Weeks 05 — 06",
    outcome: "Storefront live on the web and on marketplaces",
    weeks: [
      { w: "05", q: "Build & launch a high-converting Shopify store.", o: "Live storefront" },
      { w: "06", q: "Launch & scale on Amazon, Flipkart & quick commerce.", o: "Live listings" },
    ],
  },
  {
    id: "03",
    name: "Scale",
    icon: TrendingUp,
    tagline: "Drive demand. Move units.",
    range: "Weeks 07 — 08",
    outcome: "Paid traffic engine and operations that don't break",
    weeks: [
      { w: "07", q: "Drive demand via Meta, Google & creator-led performance.", o: "Live campaigns" },
      { w: "08", q: "Set up ops, fulfilment & customer experience that retains.", o: "CX + ops playbook" },
    ],
  },
  {
    id: "04",
    name: "Defend",
    icon: Shield,
    tagline: "Prove the model. Own the room.",
    range: "Weeks 09 — 10",
    outcome: "Investor-grade growth story, defended live",
    weeks: [
      { w: "09", q: "Scale sustainably with the right growth & retention levers.", o: "Growth model" },
      { w: "10", q: "Final showcase: pitch your brand to founders & operators.", o: "Investor pitch" },
    ],
  },
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Curriculum</p>
            <h2 className="mt-4 font-display font-light text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance">
              Four phases. Ten weekends. <span className="italic text-violet">One live brand.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground leading-relaxed lg:text-lg self-end">
            The journey compounds: <span className="text-foreground">Build → Launch → Scale → Defend.</span> Each phase is an operator sprint that ends with something shipped, sold, or signed.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-4 mb-6">
          {phases.map((p, i) => (
            <div key={p.id} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-foreground">{p.id}</span>
              <span>{p.name}</span>
              {i < phases.length - 1 && <span className="flex-1 h-px bg-border ml-2" />}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {phases.map(({ id, name, icon: Icon, tagline, range, outcome, weeks }) => (
            <article
              key={id}
              className="rounded-3xl bg-card border border-border p-7 lg:p-10 group hover:border-primary/50 transition-colors flex flex-col shadow-card"
            >
              <header className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    Phase {id} · {range}
                  </p>
                  <h3 className="mt-3 font-display text-4xl lg:text-5xl leading-none tracking-tight">
                    {name}.
                  </h3>
                  <p className="mt-3 text-foreground/80 leading-snug max-w-sm">{tagline}</p>
                </div>
                <div className="shrink-0 h-14 w-14 rounded-full border border-primary/30 flex items-center justify-center bg-primary/15 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.75} />
                </div>
              </header>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {weeks.map((wk) => (
                  <div key={wk.w} className="rounded-2xl bg-background/60 border border-border p-4 lg:p-5 hover:border-primary/40 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Week {wk.w}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>
                    <p className="mt-3 font-display text-base leading-snug text-balance">{wk.q}</p>
                    <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.18em] text-foreground/60">
                      → {wk.o}
                    </p>
                  </div>
                ))}
              </div>

              <footer className="mt-6 pt-5 border-t border-border flex items-baseline justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Phase outcome
                </span>
                <span className="text-sm text-foreground/85 text-right max-w-[60%]">{outcome}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
