import { Hammer, Rocket, TrendingUp, Shield } from "lucide-react";

const phases = [
  {
    id: "01",
    name: "Build",
    icon: Hammer,
    tagline: "Find the wedge. Engineer the product.",
    range: "Weeks 01 — 04",
    tone: "blue",
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
    tone: "dark",
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
    tone: "dark",
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
    tone: "blue",
    weeks: [
      { w: "09", q: "Scale sustainably with the right growth & retention levers.", o: "Growth model" },
      { w: "10", q: "Final showcase: pitch your brand to founders & operators.", o: "Investor pitch" },
    ],
  },
];

// Local theme tokens — aligned with the site's bottle-green + Shopify lime palette.
const BLUE = "hsl(165 80% 45%)"; // emerald accent (kept name for compat)
const NAVY = "hsl(165 25% 4%)"; // matches --background
const LIME = "hsl(96 75% 55%)"; // matches --primary

const Curriculum = () => {
  return (
    <section
      id="curriculum"
      className="relative py-12 sm:py-20 lg:py-28 border-t border-border/40"
      style={{ background: NAVY }}
    >
      {/* Soft blue glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, hsl(96 75% 55% / 0.18), transparent 60%), radial-gradient(50% 40% at 0% 100%, hsl(165 80% 45% / 0.15), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-3 sm:px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: LIME }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
            The 10-weekend system
          </span>
        </div>

        {/* Massive heading — sans display with italic serif accents, lime underline */}
        <h2
          className="mt-5 sm:mt-6 max-w-[20ch] font-sans text-white text-[clamp(2rem,8vw,5.75rem)] leading-[1] tracking-[-0.04em]"
          style={{ fontWeight: 600 }}
        >
          Idea on{" "}
          <span className="relative inline-block text-violet">
            Friday
            <svg
              aria-hidden
              viewBox="0 0 220 18"
              preserveAspectRatio="none"
              className="absolute left-0 right-0 -bottom-2 w-full h-[14px]"
            >
              <path
                d="M2 12 C 60 2, 160 2, 218 10"
                stroke={LIME}
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          .
          <br />
          Brand by{" "}
          <span className="relative inline-block text-violet">
            Sunday
            <svg
              aria-hidden
              viewBox="0 0 240 18"
              preserveAspectRatio="none"
              className="absolute left-0 right-0 -bottom-2 w-full h-[14px]"
            >
              <path
                d="M2 10 C 80 18, 170 4, 238 12"
                stroke={LIME}
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          .
          <br />
          <span className="text-white/55">Repeat</span>{" "}
          <span className="text-violet">ten</span>{" "}
          <span className="text-white/55">times.</span>
        </h2>

        <p className="mt-6 sm:mt-8 max-w-2xl text-[15px] sm:text-[17px] text-white/70 leading-relaxed">
          Build → Launch → Scale → Defend. Every weekend ends with something{" "}
          <span className="text-white">shipped, sold, or signed</span> — never a slide.
        </p>

        {/* Phase chips row */}
        <div className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-2.5">
          {phases.map((p) => (
            <span
              key={p.id}
              className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white border border-white/15"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <span className="font-mono text-[10px] tracking-[0.25em] mr-2 text-white/55">
                {p.id}
              </span>
              {p.name}
            </span>
          ))}
        </div>

        {/* Phase cards — portrait, compact, themed */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {phases.map(({ id, name, icon: Icon, tagline, range, weeks }) => {
            const tornEdge =
              "M0,8 L40,2 L70,12 L110,4 L150,14 L190,6 L230,12 L270,3 L310,11 L350,5 L390,13 L430,4 L470,10 L510,2 L550,12 L590,6 L630,14 L670,4 L710,10 L750,3 L790,12 L830,5 L870,11 L910,3 L950,12 L990,6 L1030,14 L1070,4 L1110,10 L1150,3 L1200,12 L1200,0 L0,0 Z";

            return (
              <article
                key={id}
                className="group relative flex flex-col overflow-hidden rounded-[18px] sm:rounded-[24px] bg-card border border-border/60 hover:border-primary/40 transition-colors"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* TOP */}
                <div className="relative bg-secondary text-foreground">
                  {/* Ghost repeating name */}
                  <div
                    aria-hidden
                    className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.06] leading-[0.9]"
                  >
                    {[0, 1, 2].map((r) => (
                      <div
                        key={r}
                        className="font-display italic uppercase text-[28px] tracking-[-0.04em] whitespace-nowrap text-foreground"
                        style={{ fontWeight: 700 }}
                      >
                        {(name + " ").repeat(20)}
                      </div>
                    ))}
                  </div>

                  {/* Phase sticker */}
                  <div className="absolute top-3 right-3 -rotate-3 z-10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] rounded-full bg-background/80 text-primary border border-border/60">
                    P{id}
                  </div>

                  <div className="relative px-4 pt-4 pb-5">
                    <div className="inline-block px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.25em] rounded-full bg-background/40 border border-border/60 text-foreground/70">
                      W {range.replace("Weeks ", "")}
                    </div>

                    <h3
                      className="mt-3 font-display uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(2rem,3vw,2.75rem)] text-foreground"
                      style={{ fontWeight: 600 }}
                    >
                      {name}
                      <span className="text-primary">.</span>
                    </h3>

                    <div className="mt-3 flex items-start gap-2">
                      <Icon className="h-4 w-4 shrink-0 mt-[2px] text-primary" strokeWidth={1.75} />
                      <p
                        className="font-display text-[12.5px] leading-tight tracking-tight text-foreground/80"
                        style={{ fontWeight: 500 }}
                      >
                        {tagline}
                      </p>
                    </div>
                  </div>

                  <svg
                    aria-hidden
                    viewBox="0 0 1200 16"
                    preserveAspectRatio="none"
                    className="block w-full h-[10px] -mb-px"
                  >
                    <path d={tornEdge} className="fill-card" />
                  </svg>
                </div>

                {/* BOTTOM */}
                <div className="relative flex flex-col flex-1 px-4 pt-3 pb-4 bg-card text-foreground">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] text-primary">▶▶</span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-foreground/50">
                      Drops
                    </span>
                    <div className="h-px flex-1 bg-border/60" />
                  </div>

                  <ul className="mt-2.5 space-y-1.5 flex-1">
                    {weeks.map((wk) => (
                      <li
                        key={wk.w}
                        className="py-1.5 px-2 rounded-md border border-border/60 bg-background/40"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="inline-block font-mono text-[8px] tracking-[0.12em] px-1.5 py-px rounded-sm bg-primary text-primary-foreground">
                            W{wk.w}
                          </span>
                          <span className="font-mono text-[8px] uppercase tracking-[0.15em] truncate font-semibold text-primary">
                            ↗ {wk.o}
                          </span>
                        </div>
                        <p className="mt-1 text-[11.5px] leading-snug text-foreground/80">
                          {wk.q}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Barcode footer */}
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <div className="flex gap-[1.5px] h-[16px] flex-1 max-w-[100px]">
                      {Array.from({ length: 32 }).map((_, k) => (
                        <span
                          key={k}
                          className="block h-full bg-foreground/70"
                          style={{
                            width: (k * 13) % 4 === 0 ? 2 : 1,
                            opacity: k % 3 === 0 ? 0.9 : 0.4,
                          }}
                        />
                      ))}
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-foreground/40">
                      MU·{id} <span className="text-primary font-bold">●</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
