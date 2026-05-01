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

// Local theme tokens (electric blue + lime + deep navy) — scoped to this section only.
const BLUE = "#1F5BFF";
const NAVY = "#0B1220";
const LIME = "#C6F24E";

const Curriculum = () => {
  return (
    <section
      id="curriculum"
      className="relative py-20 lg:py-28 border-t border-border/40"
      style={{ background: NAVY }}
    >
      {/* Soft blue glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(31,91,255,0.35), transparent 60%), radial-gradient(50% 40% at 0% 100%, rgba(31,91,255,0.22), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: LIME }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
            The 10-weekend system
          </span>
        </div>

        {/* Massive heading — sans display with italic serif accents, lime underline */}
        <h2
          className="mt-6 max-w-[20ch] font-sans text-white text-[clamp(2.5rem,6.4vw,5.75rem)] leading-[0.95] tracking-[-0.04em]"
          style={{ fontWeight: 600 }}
        >
          Idea on{" "}
          <span className="relative inline-block font-serif italic font-normal">
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
          <span className="relative inline-block font-serif italic font-normal">
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
          <span style={{ color: LIME }} className="font-serif italic font-normal">
            ten
          </span>{" "}
          <span className="text-white/55">times.</span>
        </h2>

        <p className="mt-8 max-w-2xl text-[17px] text-white/70 leading-relaxed">
          Build → Launch → Scale → Defend. Every weekend ends with something{" "}
          <span className="text-white">shipped, sold, or signed</span> — never a slide.
        </p>

        {/* Phase chips row */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {phases.map((p) => (
            <span
              key={p.id}
              className="rounded-full px-4 py-2 text-sm font-medium text-white border border-white/15"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <span className="font-mono text-[10px] tracking-[0.25em] mr-2 text-white/55">
                {p.id}
              </span>
              {p.name}
            </span>
          ))}
        </div>

        {/* Phase cards — torn-edge brutalist (lime / gray / black) */}
        <div className="mt-10 lg:mt-12 grid lg:grid-cols-2 gap-5">
          {phases.map(({ id, name, icon: Icon, tagline, range, weeks }, i) => {
            const LIME = "#B6FF1A";
            const GRAY = "#1F1F1F";
            const LIGHT_GRAY = "#2A2A2A";
            // Gray-dominant: all cards use gray panels, lime only as accent ink
            const limeOnTop = true;
            const topBg = GRAY;
            const topInk = "#fff";
            const bottomBg = LIGHT_GRAY;
            const bottomInk = "#fff";
            const accent = LIME;

            const tornEdge =
              "M0,8 L40,2 L70,12 L110,4 L150,14 L190,6 L230,12 L270,3 L310,11 L350,5 L390,13 L430,4 L470,10 L510,2 L550,12 L590,6 L630,14 L670,4 L710,10 L750,3 L790,12 L830,5 L870,11 L910,3 L950,12 L990,6 L1030,14 L1070,4 L1110,10 L1150,3 L1200,12 L1200,0 L0,0 Z";

            return (
              <article
                key={id}
                className="group relative overflow-hidden bg-black border border-white/10 hover:border-white/25 transition-colors"
                style={{ boxShadow: "10px 10px 0 0 rgba(0,0,0,0.5)" }}
              >
                {/* TOP HALF */}
                <div className="relative" style={{ background: topBg, color: topInk }}>
                  <div
                    aria-hidden
                    className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.10] leading-[0.9]"
                    style={{ color: topInk }}
                  >
                    {[0, 1, 2].map((r) => (
                      <div
                        key={r}
                        className="font-display italic uppercase text-[44px] tracking-[-0.04em] whitespace-nowrap"
                        style={{ fontWeight: 700 }}
                      >
                        {(name + " ").repeat(20)}
                      </div>
                    ))}
                  </div>

                  <div
                    className="absolute top-5 right-5 -rotate-3 z-10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] border-2"
                    style={{
                      background: limeOnTop ? "#000" : LIME,
                      color: limeOnTop ? LIME : "#000",
                      borderColor: limeOnTop ? "#000" : LIME,
                    }}
                  >
                    PHASE {id}
                  </div>

                  <div className="relative px-7 lg:px-9 pt-7 pb-12">
                    <div
                      className="inline-block px-2 py-1 font-mono text-[10px] uppercase tracking-[0.3em] border"
                      style={{
                        background: "rgba(0,0,0,0.08)",
                        borderColor: limeOnTop ? "rgba(0,0,0,0.3)" : "rgba(182,255,26,0.4)",
                        color: topInk,
                      }}
                    >
                      ▮ {range}
                    </div>

                    <h3
                      className="mt-4 font-display italic uppercase leading-[0.82] tracking-[-0.05em] text-[clamp(4rem,8vw,7rem)]"
                      style={{ fontWeight: 800, color: topInk }}
                    >
                      {name}
                      <span style={{ color: accent }}>.</span>
                    </h3>

                    <div className="mt-4 flex items-start gap-3 max-w-md">
                      <Icon className="h-6 w-6 shrink-0 mt-1" strokeWidth={2.5} style={{ color: accent }} />
                      <p
                        className="font-display uppercase text-base lg:text-lg leading-tight tracking-tight"
                        style={{ fontWeight: 700, color: topInk, opacity: 0.92 }}
                      >
                        {tagline}
                      </p>
                    </div>
                  </div>

                  <svg
                    aria-hidden
                    viewBox="0 0 1200 16"
                    preserveAspectRatio="none"
                    className="block w-full h-[14px] -mb-px"
                  >
                    <path d={tornEdge} fill={bottomBg} />
                  </svg>
                </div>

                {/* BOTTOM HALF */}
                <div
                  className="relative px-7 lg:px-9 pt-6 pb-7"
                  style={{ background: bottomBg, color: bottomInk }}
                >
                  <div className="flex items-center gap-2">
                    <span style={{ color: accent }} className="font-mono text-xs">▶▶</span>
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: limeOnTop ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.7)" }}
                    >
                      Weekly drops · what ships
                    </span>
                    <div
                      className="h-px flex-1"
                      style={{ background: limeOnTop ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.25)" }}
                    />
                  </div>

                  <ul className="mt-4 space-y-2">
                    {weeks.map((wk) => {
                      const rowBg = limeOnTop ? LIGHT_GRAY : "rgba(0,0,0,0.06)";
                      const rowBorder = limeOnTop ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.18)";
                      const qColor = limeOnTop ? "rgba(255,255,255,0.92)" : "#000";
                      const oColor = limeOnTop ? LIME : "#000";
                      return (
                        <li
                          key={wk.w}
                          className="grid grid-cols-12 gap-3 items-center py-2.5 px-3 border"
                          style={{ background: rowBg, borderColor: rowBorder }}
                        >
                          <span className="col-span-2">
                            <span
                              className="inline-block font-mono text-[10px] tracking-[0.15em] px-1.5 py-0.5 border-2"
                              style={{
                                background: limeOnTop ? LIME : "#000",
                                color: limeOnTop ? "#000" : LIME,
                                borderColor: limeOnTop ? LIME : "#000",
                              }}
                            >
                              W{wk.w}
                            </span>
                          </span>
                          <p className="col-span-7 text-[14px] leading-snug font-medium" style={{ color: qColor }}>
                            {wk.q}
                          </p>
                          <span
                            className="col-span-3 text-right font-mono text-[9px] uppercase tracking-[0.18em] truncate font-bold"
                            style={{ color: oColor }}
                          >
                            ↗ {wk.o}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div className="flex gap-[2px] h-[28px] flex-1 max-w-[180px]">
                      {Array.from({ length: 48 }).map((_, k) => (
                        <span
                          key={k}
                          className="block h-full"
                          style={{
                            width: (k * 13) % 4 === 0 ? 3 : 1,
                            background: limeOnTop ? "#fff" : "#000",
                            opacity: k % 3 === 0 ? 0.95 : 0.55,
                          }}
                        />
                      ))}
                    </div>
                    <div
                      className="font-mono text-[9px] uppercase tracking-[0.3em]"
                      style={{ color: limeOnTop ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.7)" }}
                    >
                      MU—{id}.{new Date().getFullYear()} · <span style={{ color: accent, fontWeight: 700 }}>● LIVE</span>
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
