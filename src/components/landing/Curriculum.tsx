import { Hammer, Rocket, TrendingUp, Shield, ArrowRight } from "lucide-react";

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
    <section id="curriculum" className="py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Curriculum</p>
          <h2 className="mt-5 font-display font-light text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
            Four phases. Ten weekends.
            <br />
            <span className="italic text-violet">One live brand.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed lg:text-lg">
            Build → Launch → Scale → Defend. Each phase ends with something shipped, sold, or signed.
          </p>
        </div>

        {/* Phase rail */}
        <ol className="mt-20 space-y-px border-t border-border">
          {phases.map(({ id, name, icon: Icon, tagline, range, outcome, weeks }, idx) => (
            <li
              key={id}
              className="group relative border-b border-border py-10 lg:py-14 transition-colors hover:bg-card/40"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left: phase id + name */}
                <div className="lg:col-span-4 flex items-start gap-5">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground pt-2">
                    {id}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                        {range}
                      </p>
                    </div>
                    <h3 className="mt-3 font-display font-light text-5xl lg:text-6xl leading-none tracking-tight">
                      {name}.
                    </h3>
                    <p className="mt-4 text-foreground/80 leading-snug max-w-xs">{tagline}</p>
                  </div>
                </div>

                {/* Right: weeks list */}
                <div className="lg:col-span-8">
                  <ul className="divide-y divide-border/60">
                    {weeks.map((wk) => (
                      <li
                        key={wk.w}
                        className="grid grid-cols-12 gap-4 py-4 items-baseline"
                      >
                        <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                          Wk {wk.w}
                        </span>
                        <p className="col-span-7 font-display text-lg lg:text-xl leading-snug text-foreground text-balance">
                          {wk.q}
                        </p>
                        <span className="col-span-3 text-right text-[11px] font-mono uppercase tracking-[0.2em] text-primary/90">
                          {wk.o}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <span className="text-foreground/85">{outcome}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Curriculum;
