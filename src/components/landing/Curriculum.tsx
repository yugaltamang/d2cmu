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
    range: "Weeks 07 — 09",
    weeks: [
      { w: "07", q: "Drive demand via Meta, Google & creator-led performance.", o: "Live campaigns" },
      { w: "08", q: "Set up ops, fulfilment & customer experience that retains.", o: "CX + ops playbook" },
      { w: "09", q: "Scale sustainably with the right growth & retention levers.", o: "Growth model" },
    ],
  },
  {
    id: "04",
    name: "Defend",
    icon: Shield,
    tagline: "Prove the model. Own the room.",
    range: "Week 10",
    weeks: [
      { w: "10", q: "Final showcase: pitch your brand to founders & operators.", o: "Investor pitch" },
    ],
  },
];

// Editorial poster palette — paper white sheets on near-black canvas, hot orange accent.
const PAPER = "hsl(40 30% 96%)";
const INK = "hsl(0 0% 7%)";
const ORANGE = "hsl(14 95% 55%)";
const RULE = "hsl(0 0% 12%)";

const Hairline = ({ className = "" }: { className?: string }) => (
  <div className={`bg-[hsl(0_0%_15%)] ${className}`} style={{ height: 1 }} />
);

const PaperHairline = ({ className = "" }: { className?: string }) => (
  <div className={`${className}`} style={{ height: 1, background: "hsl(0 0% 80%)" }} />
);

// Tiny crosshair register marks (poster style)
const Crosshair = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden>
    <line x1="8" y1="0" x2="8" y2="16" stroke="currentColor" strokeWidth="0.75" />
    <line x1="0" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="0.75" />
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="0.75" fill="none" />
  </svg>
);

const Curriculum = () => {
  return (
    <section
      id="curriculum"
      className="relative py-16 sm:py-24 lg:py-32 border-t border-border/40"
      style={{ background: "hsl(0 0% 6%)" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* TOP META BAR — like the thin index strip on editorial posters */}
        <div className="flex items-center gap-3 text-white/60">
          <Crosshair className="h-3 w-3" />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
            MU / Index No. 010 — The 10-weekend system
          </span>
          <div className="h-px flex-1" style={{ background: RULE }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
            Build · Launch · Scale · Defend
          </span>
          <Crosshair className="h-3 w-3" />
        </div>

        {/* MASSIVE EDITORIAL HEADLINE */}
        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="font-sans uppercase text-white text-[clamp(2.5rem,11vw,9rem)] leading-[0.85] tracking-[-0.05em]"
              style={{ fontWeight: 800 }}
            >
              Idea
              <span className="inline-block align-middle mx-3 sm:mx-5 h-[0.55em] w-[0.55em] rounded-full" style={{ background: ORANGE }} />
              <br />
              Friday<span style={{ color: ORANGE }}>.</span>
              <br />
              Brand
              <br />
              Sunday<span style={{ color: ORANGE }}>.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 flex lg:flex-col justify-between lg:justify-end gap-4 lg:pb-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">
                ◷ 10 Weekends
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/55">
                Issue · MU/26
              </p>
            </div>
            <p className="text-[13px] sm:text-[14px] text-white/65 leading-relaxed max-w-[28ch]">
              Build → Launch → Scale → Defend. Every weekend ends with something
              <span className="text-white"> shipped, sold, or signed</span> — never a slide.
            </p>
          </div>
        </div>

        <Hairline className="mt-10 sm:mt-14" />

        {/* PHASE INDEX BAR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[hsl(0_0%_15%)] border-b" style={{ borderColor: RULE }}>
          {phases.map((p) => (
            <a
              key={p.id}
              href={`#phase-${p.id}`}
              className="group flex items-center gap-3 px-4 py-4 hover:bg-white/[0.03] transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-white/45">{p.id}</span>
              <span className="font-sans uppercase text-white text-[15px] tracking-[-0.01em]" style={{ fontWeight: 700 }}>
                {p.name}
              </span>
              <span className="ml-auto h-1.5 w-1.5 rounded-full" style={{ background: ORANGE }} />
            </a>
          ))}
        </div>

        {/* POSTER GRID — paper sheets, asymmetric layout */}
        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-4 sm:gap-5">
          {phases.map(({ id, name, icon: Icon, tagline, range, weeks }, idx) => {
            // Asymmetric poster layout: 01 tall-left, 02 short, 03 tall, 04 BIG finale wide
            const isFinale = idx === phases.length - 1;
            const layout = [
              "col-span-12 sm:col-span-6 lg:col-span-4",
              "col-span-12 sm:col-span-6 lg:col-span-3",
              "col-span-12 sm:col-span-6 lg:col-span-5",
              "col-span-12", // finale full width
            ][idx];

            // Variant: orange dominant for 02; ink/black for finale; paper for 01,03
            const isOrange = idx === 1;
            const isInk = isFinale;
            const surface = isOrange ? ORANGE : isInk ? INK : PAPER;
            const text = isInk ? "hsl(40 30% 96%)" : INK;
            const subtext = isInk ? "hsl(40 10% 70%)" : "hsl(0 0% 25%)";
            const ruleColor = isInk ? "hsl(0 0% 22%)" : "hsl(0 0% 80%)";

            return (
              <article
                key={id}
                id={`phase-${id}`}
                className={`${layout} relative overflow-hidden border`}
                style={{
                  background: surface,
                  color: text,
                  borderColor: isInk ? "hsl(0 0% 18%)" : "hsl(0 0% 80%)",
                  minHeight: isFinale ? 420 : 520,
                }}
              >
                {/* Top URL bar (poster meta) */}
                <div
                  className="flex items-center justify-between px-4 py-2 font-mono text-[9px] uppercase tracking-[0.3em]"
                  style={{ borderBottom: `1px solid ${ruleColor}`, color: subtext }}
                >
                  <span>www.mu.school / phase-{id}</span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: isOrange ? INK : ORANGE }} />
                    {range}
                  </span>
                </div>

                {/* VERTICAL LABEL on left edge */}
                <div
                  className="absolute left-0 top-10 bottom-10 w-8 flex items-center justify-center"
                  style={{ borderRight: `1px solid ${ruleColor}` }}
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.4em]"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: subtext }}
                  >
                    Phase {id} · {name}
                  </span>
                </div>

                <div className={`relative pl-12 pr-5 sm:pr-7 pt-6 pb-5 ${isFinale ? "lg:grid lg:grid-cols-12 lg:gap-8" : "flex flex-col h-[calc(100%-34px)]"}`}>
                  {/* HEADLINE BLOCK */}
                  <div className={isFinale ? "lg:col-span-6" : ""}>
                    <div className="flex items-center gap-2">
                      <span
                        className="font-mono text-[10px] uppercase tracking-[0.3em]"
                        style={{ color: subtext }}
                      >
                        {id} / {name}
                      </span>
                      <span className="h-1 w-1 rounded-full" style={{ background: isOrange ? INK : ORANGE }} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: subtext }}>
                        SS·26
                      </span>
                    </div>

                    {/* The HUGE poster word */}
                    <h3
                      className="mt-4 font-sans uppercase leading-[0.82] tracking-[-0.05em]"
                      style={{
                        fontWeight: 800,
                        fontSize: isFinale ? "clamp(3.5rem, 9vw, 7.5rem)" : "clamp(2.5rem, 5vw, 4.25rem)",
                        color: text,
                      }}
                    >
                      {name}
                      <span style={{ color: isOrange ? INK : ORANGE }}>!</span>
                    </h3>

                    <p
                      className="mt-4 font-sans uppercase tracking-[-0.01em] leading-[1.05] max-w-[18ch]"
                      style={{
                        fontWeight: 700,
                        fontSize: isFinale ? "clamp(1.25rem, 1.8vw, 1.75rem)" : "1rem",
                        color: text,
                      }}
                    >
                      {tagline}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 px-2.5 py-1 border" style={{ borderColor: ruleColor }}>
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} style={{ color: isOrange ? INK : ORANGE }} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: subtext }}>
                        {range}
                      </span>
                    </div>

                    {isFinale && (
                      <div className="hidden lg:block mt-8">
                        <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: ORANGE }}>
                          ★ Showcase Day · Live
                        </p>
                        <p className="mt-2 text-[14px] leading-relaxed max-w-[36ch]" style={{ color: text }}>
                          Final pitch — your brand, your numbers, defended live in front of{" "}
                          <span style={{ fontWeight: 700 }}>founders & operators</span>.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* DROPS LIST */}
                  <div className={isFinale ? "lg:col-span-6 mt-8 lg:mt-0" : "mt-auto pt-6"}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.35em]" style={{ color: subtext }}>
                        ▸ Drops · Weekend Output
                      </span>
                      <div className="h-px flex-1" style={{ background: ruleColor }} />
                    </div>

                    <ul className="space-y-0">
                      {weeks.map((wk, i) => (
                        <li
                          key={wk.w}
                          className="grid grid-cols-12 gap-3 py-2.5"
                          style={{ borderTop: i === 0 ? "none" : `1px solid ${ruleColor}` }}
                        >
                          <div className="col-span-2 sm:col-span-1">
                            <span
                              className="inline-block font-mono text-[10px] tracking-[0.1em] px-1.5 py-0.5"
                              style={{
                                background: isOrange ? INK : isInk ? ORANGE : INK,
                                color: isOrange ? ORANGE : isInk ? INK : PAPER,
                              }}
                            >
                              W{wk.w}
                            </span>
                          </div>
                          <p
                            className="col-span-7 sm:col-span-8 text-[12.5px] sm:text-[13px] leading-snug"
                            style={{ color: text }}
                          >
                            {wk.q}
                          </p>
                          <div className="col-span-3 text-right">
                            <span
                              className="font-mono text-[9px] uppercase tracking-[0.2em]"
                              style={{ color: isOrange ? INK : ORANGE, fontWeight: 700 }}
                            >
                              ↗ {wk.o}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {isFinale && (
                      <div className="lg:hidden mt-6 pt-5" style={{ borderTop: `1px solid ${ruleColor}` }}>
                        <p className="font-mono text-[10px] uppercase tracking-[0.4em]" style={{ color: ORANGE }}>
                          ★ Showcase Day · Live
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed" style={{ color: text }}>
                          Final pitch — your brand, your numbers, defended live in front of{" "}
                          <span style={{ fontWeight: 700 }}>founders & operators</span>.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom footer bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 font-mono text-[9px] uppercase tracking-[0.3em]"
                  style={{ borderTop: `1px solid ${ruleColor}`, color: subtext, background: surface }}
                >
                  <span>MU · {id} / 04</span>
                  <span className="flex items-center gap-2">
                    {name}
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: isOrange ? INK : ORANGE }} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM META STRIP */}
        <div className="mt-10 flex items-center gap-3 text-white/50">
          <Crosshair className="h-3 w-3" />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
            End of system · 10 weekends · 4 phases
          </span>
          <div className="h-px flex-1" style={{ background: RULE }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: ORANGE }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.35em]">
            Shipped · Sold · Signed
          </span>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
