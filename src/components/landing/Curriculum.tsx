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

        {/* Phase cards — brutalist neon */}
        <div className="mt-10 lg:mt-12 grid lg:grid-cols-2 gap-5">
          {phases.map(({ id, name, icon: Icon, tagline, range, weeks, tone }, i) => {
            // alternate violet / lime accent per card
            const isViolet = i % 2 === 0;
            const NEON_VIOLET = "#7C3AED";
            const NEON_LIME = "#C6F24E";
            const accent = isViolet ? NEON_VIOLET : NEON_LIME;
            const accentInk = isViolet ? "#FFFFFF" : "#000000";
            const tiltClass = i % 2 === 0 ? "lg:-rotate-[0.6deg]" : "lg:rotate-[0.6deg]";

            return (
              <article
                key={id}
                className={`group relative overflow-hidden bg-black ${tiltClass} transition-transform hover:rotate-0 hover:-translate-y-1`}
                style={{
                  border: `1.5px solid ${accent}`,
                  boxShadow: `8px 8px 0 0 ${accent}`,
                }}
              >
                {/* Grain / noise overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.18]"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
                  }}
                />

                {/* Vertical mega text on right edge */}
                <div
                  aria-hidden
                  className="absolute -right-2 top-6 bottom-6 flex items-center pointer-events-none select-none"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span
                    className="font-display italic uppercase leading-none tracking-[-0.04em] text-[120px] lg:text-[160px] opacity-[0.10]"
                    style={{ color: accent, fontWeight: 700 }}
                  >
                    {name}
                  </span>
                </div>

                {/* Barcode strip top */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-[14px] flex gap-[2px] px-6 pt-[3px] opacity-80"
                >
                  {Array.from({ length: 60 }).map((_, k) => (
                    <span
                      key={k}
                      style={{
                        width: (k * 7) % 4 === 0 ? 3 : 1,
                        background: k % 5 === 0 ? accent : "#fff",
                        opacity: k % 3 === 0 ? 0.9 : 0.5,
                      }}
                      className="block h-full"
                    />
                  ))}
                </div>

                {/* Sticker — rotated phase id */}
                <div
                  className="absolute top-7 right-7 -rotate-6 z-10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    background: accent,
                    color: accentInk,
                    boxShadow: "3px 3px 0 0 #000",
                  }}
                >
                  ▮ Phase {id}
                </div>

                <div className="relative p-7 lg:p-9 pt-10">
                  {/* Range — taped label */}
                  <div className="inline-block px-2 py-1 bg-white/90 text-black font-mono text-[10px] uppercase tracking-[0.3em] -rotate-1">
                    {range}
                  </div>

                  {/* Phase name — chunky condensed display */}
                  <h3
                    className="mt-5 font-display italic uppercase text-white leading-[0.85] tracking-[-0.04em] text-[clamp(3.5rem,7vw,5.5rem)]"
                    style={{ fontWeight: 700 }}
                  >
                    {name}
                    <span style={{ color: accent }}>.</span>
                  </h3>

                  {/* Icon + tagline row */}
                  <div className="mt-5 flex items-start gap-3">
                    <Icon
                      className="h-6 w-6 shrink-0 mt-1"
                      strokeWidth={2.25}
                      style={{ color: accent }}
                    />
                    <p
                      className="font-display uppercase text-lg lg:text-xl leading-tight tracking-tight text-white/90"
                      style={{ fontWeight: 600 }}
                    >
                      {tagline}
                    </p>
                  </div>

                  {/* Divider with bracket marks */}
                  <div className="mt-7 flex items-center gap-2">
                    <span style={{ color: accent }} className="font-mono text-xs">▶</span>
                    <div className="h-px flex-1" style={{ background: accent, opacity: 0.5 }} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                      Weekly drops
                    </span>
                    <div className="h-px w-8" style={{ background: accent, opacity: 0.5 }} />
                  </div>

                  {/* Week list — brutalist rows */}
                  <ul className="mt-5 space-y-2">
                    {weeks.map((wk, idx) => (
                      <li
                        key={wk.w}
                        className="grid grid-cols-12 gap-3 items-center py-2.5 px-3 bg-white/[0.03] border border-white/10 hover:border-white/30 transition-colors"
                      >
                        <span className="col-span-2 flex items-center gap-1.5">
                          <span
                            className="font-mono text-[9px] tracking-[0.15em] px-1.5 py-0.5"
                            style={{ background: accent, color: accentInk }}
                          >
                            W{wk.w}
                          </span>
                        </span>
                        <p className="col-span-7 text-[14px] leading-snug text-white/85 font-medium">
                          {wk.q}
                        </p>
                        <span
                          className="col-span-3 text-right font-mono text-[9px] uppercase tracking-[0.18em] truncate"
                          style={{ color: accent }}
                        >
                          ↗ {wk.o}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer serial */}
                  <div className="mt-6 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
                    <span>SER/MU—{id}.{new Date().getFullYear()}</span>
                    <span style={{ color: accent }}>● LIVE</span>
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
