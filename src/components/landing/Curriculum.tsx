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

        {/* Phases */}
        <div className="mt-20 space-y-16 lg:space-y-24">
          {phases.map(({ id, name, icon: Icon, tagline, range, outcome, weeks }) => (
            <section key={id} className="border-t border-border pt-10 lg:pt-14">
              {/* Phase header */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-10 lg:mb-12">
                <div className="lg:col-span-5 flex items-start gap-5">
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
                  </div>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 self-end">
                  <p className="font-display font-light text-2xl lg:text-3xl leading-snug text-foreground/90 text-balance">
                    {tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <span className="text-foreground/85">{outcome}</span>
                  </div>
                </div>
              </div>

              {/* Weekends — full-width rows */}
              <ul className="border-t border-border">
                {weeks.map((wk) => (
                  <li
                    key={wk.w}
                    className="group grid lg:grid-cols-12 gap-4 lg:gap-10 items-baseline border-b border-border py-6 lg:py-8 hover:bg-card/40 transition-colors px-2 -mx-2 rounded-sm"
                  >
                    <div className="lg:col-span-3 flex items-baseline gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                        Weekend
                      </span>
                      <span className="font-display font-thin text-4xl lg:text-5xl leading-none text-violet">
                        {wk.w}
                      </span>
                    </div>
                    <p className="lg:col-span-6 font-sans text-base lg:text-xl leading-snug text-foreground text-pretty">
                      {wk.q}
                    </p>
                    <div className="lg:col-span-3 lg:text-right">
                      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/90">
                        → {wk.o}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
