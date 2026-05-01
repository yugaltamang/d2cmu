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

        {/* Phase cards — portrait, compact */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map(({ id, name, icon: Icon, tagline, range, weeks }) => {
            const LIME = "#B6FF1A";
            const GRAY = "#1F1F1F";
            const LIGHT_GRAY = "#262626";
            const accent = LIME;

            const tornEdge =
              "M0,8 L40,2 L70,12 L110,4 L150,14 L190,6 L230,12 L270,3 L310,11 L350,5 L390,13 L430,4 L470,10 L510,2 L550,12 L590,6 L630,14 L670,4 L710,10 L750,3 L790,12 L830,5 L870,11 L910,3 L950,12 L990,6 L1030,14 L1070,4 L1110,10 L1150,3 L1200,12 L1200,0 L0,0 Z";

            return (
              <article
                key={id}
                className="group relative flex flex-col overflow-hidden bg-black border border-white/10 hover:border-white/25 transition-colors"
                style={{
                  aspectRatio: "3 / 4",
                  boxShadow: "6px 6px 0 0 rgba(0,0,0,0.5)",
                }}
              >
                {/* TOP */}
                <div className="relative" style={{ background: GRAY, color: "#fff" }}>
                  {/* Ghost repeating name */}
                  <div
                    aria-hidden
                    className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.08] leading-[0.9]"
                  >
                    {[0, 1, 2].map((r) => (
                      <div
                        key={r}
                        className="font-display italic uppercase text-[28px] tracking-[-0.04em] whitespace-nowrap text-white"
                        style={{ fontWeight: 700 }}
                      >
                        {(name + " ").repeat(20)}
                      </div>
                    ))}
                  </div>

                  {/* Phase sticker */}
                  <div
                    className="absolute top-3 right-3 -rotate-3 z-10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] border"
                    style={{ background: "#000", color: LIME, borderColor: "#000" }}
                  >
                    P{id}
                  </div>

                  <div className="relative px-4 pt-4 pb-5">
                    <div
                      className="inline-block px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.25em] border"
                      style={{
                        background: "rgba(0,0,0,0.2)",
                        borderColor: "rgba(255,255,255,0.18)",
                        color: "#fff",
                      }}
                    >
                      W {range.replace("Weeks ", "")}
                    </div>

                    <h3
                      className="mt-3 font-display italic uppercase leading-[0.85] tracking-[-0.05em] text-[clamp(2.25rem,3.2vw,3rem)]"
                      style={{ fontWeight: 800, color: "#fff" }}
                    >
                      {name}
                      <span style={{ color: accent }}>.</span>
                    </h3>

                    <div className="mt-3 flex items-start gap-2">
                      <Icon className="h-4 w-4 shrink-0 mt-[2px]" strokeWidth={2.5} style={{ color: accent }} />
                      <p
                        className="font-display uppercase text-[12px] leading-tight tracking-tight text-white/85"
                        style={{ fontWeight: 700 }}
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
                    <path d={tornEdge} fill={LIGHT_GRAY} />
                  </svg>
                </div>

                {/* BOTTOM */}
                <div
                  className="relative flex flex-col flex-1 px-4 pt-3 pb-4"
                  style={{ background: LIGHT_GRAY, color: "#fff" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span style={{ color: accent }} className="font-mono text-[10px]">▶▶</span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/55">
                      Drops
                    </span>
                    <div className="h-px flex-1 bg-white/15" />
                  </div>

                  <ul className="mt-2.5 space-y-1.5 flex-1">
                    {weeks.map((wk) => (
                      <li
                        key={wk.w}
                        className="py-1.5 px-2 border bg-white/[0.03] border-white/10"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="inline-block font-mono text-[8px] tracking-[0.12em] px-1 py-px border"
                            style={{ background: LIME, color: "#000", borderColor: LIME }}
                          >
                            W{wk.w}
                          </span>
                          <span
                            className="font-mono text-[8px] uppercase tracking-[0.15em] truncate font-bold"
                            style={{ color: accent }}
                          >
                            ↗ {wk.o}
                          </span>
                        </div>
                        <p className="mt-1 text-[11.5px] leading-snug text-white/85 font-medium">
                          {wk.q}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Barcode footer */}
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <div className="flex gap-[1.5px] h-[18px] flex-1 max-w-[100px]">
                      {Array.from({ length: 32 }).map((_, k) => (
                        <span
                          key={k}
                          className="block h-full bg-white"
                          style={{
                            width: (k * 13) % 4 === 0 ? 2 : 1,
                            opacity: k % 3 === 0 ? 0.95 : 0.5,
                          }}
                        />
                      ))}
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/45">
                      MU·{id} <span style={{ color: accent, fontWeight: 700 }}>●</span>
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
