import { Hammer, Rocket, TrendingUp, Shield } from "lucide-react";

const phases = [
  {
    id: "01",
    name: "Build",
    icon: Hammer,
    tagline: "Find the wedge. Engineer the product.",
    range: "Weeks 01 — 04",
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
    weeks: [
      { w: "09", q: "Scale sustainably with the right growth & retention levers.", o: "Growth model" },
      { w: "10", q: "Final showcase: pitch your brand to founders & operators.", o: "Investor pitch" },
    ],
  },
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="bg-background py-16 lg:py-24 border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2
          className="max-w-5xl font-display text-foreground text-[clamp(2rem,4.8vw,4rem)] leading-[1] tracking-[-0.035em]"
          style={{ fontWeight: 500 }}
        >
          For anyone from idea to <span className="text-violet">income</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/65 leading-relaxed">
          Build → Launch → Scale → Defend. Four phases, ten weekends. Each phase ends with something shipped, sold, or signed.
        </p>

        <div className="mt-10 lg:mt-12 grid lg:grid-cols-2 gap-4 lg:gap-5">
          {phases.map(({ id, name, icon: Icon, tagline, range, weeks }) => (
            <article
              key={id}
              className="rounded-[28px] bg-card border border-border/60 p-6 lg:p-7 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                  Phase {id}
                </span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                  {range}
                </span>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <Icon className="h-7 w-7 text-primary mt-2" strokeWidth={1.75} />
                <h3 className="font-display text-foreground text-4xl lg:text-5xl leading-none tracking-[-0.035em]" style={{ fontWeight: 500 }}>
                  {name}.
                </h3>
              </div>

              <p className="mt-4 font-display text-lg lg:text-xl text-foreground/85 leading-snug" style={{ fontWeight: 500 }}>
                {tagline}
              </p>

              <ul className="mt-8 divide-y divide-border/60 border-t border-border/60">
                {weeks.map((wk) => (
                  <li key={wk.w} className="grid grid-cols-12 gap-3 py-4 items-baseline">
                    <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
                      W{wk.w}
                    </span>
                    <p className="col-span-7 text-[15px] text-foreground/85 leading-snug">
                      {wk.q}
                    </p>
                    <span className="col-span-3 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      {wk.o}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
