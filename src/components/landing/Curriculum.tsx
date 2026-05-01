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

        {/* Phase cards */}
        <div className="mt-10 lg:mt-12 grid lg:grid-cols-2 gap-5">
          {phases.map(({ id, name, icon: Icon, tagline, range, weeks, tone }) => {
            const isBlue = tone === "blue";
            const cardBg = isBlue ? BLUE : "#0F1A2E";
            const cardBorder = isBlue ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.10)";
            const subText = isBlue ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.65)";
            const mutedText = isBlue ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.5)";
            const divider = isBlue ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.12)";
            const accent = isBlue ? LIME : LIME;

            return (
              <article
                key={id}
                className="rounded-[32px] p-7 lg:p-9 transition-transform hover:-translate-y-1"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  boxShadow: isBlue
                    ? "0 30px 80px -30px rgba(31,91,255,0.55)"
                    : "0 30px 80px -40px rgba(0,0,0,0.6)",
                }}
              >
                {/* Top row: phase pill + range */}
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{
                      background: isBlue ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.06)",
                      color: "#fff",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: accent }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                      Phase {id}
                    </span>
                  </span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: mutedText }}
                  >
                    {range}
                  </span>
                </div>

                {/* Phase name — huge, mixed sans + italic serif period */}
                <div className="mt-7 flex items-end gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background: isBlue ? "rgba(0,0,0,0.18)" : "rgba(31,91,255,0.18)",
                    }}
                  >
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.75}
                      style={{ color: isBlue ? "#fff" : LIME }}
                    />
                  </div>
                  <h3
                    className="font-sans text-white text-5xl lg:text-6xl leading-none tracking-[-0.04em]"
                    style={{ fontWeight: 600 }}
                  >
                    {name}
                    <span
                      className="font-serif italic font-normal"
                      style={{ color: accent }}
                    >
                      .
                    </span>
                  </h3>
                </div>

                {/* Tagline */}
                <p
                  className="mt-6 font-sans text-xl lg:text-[22px] leading-snug"
                  style={{ color: subText, fontWeight: 500 }}
                >
                  {tagline}
                </p>

                {/* Week list */}
                <ul
                  className="mt-8 border-t"
                  style={{ borderColor: divider }}
                >
                  {weeks.map((wk) => (
                    <li
                      key={wk.w}
                      className="grid grid-cols-12 gap-3 py-4 items-baseline border-b"
                      style={{ borderColor: divider }}
                    >
                      <span className="col-span-2">
                        <span
                          className="inline-block rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.2em]"
                          style={{
                            background: isBlue ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.06)",
                            color: "#fff",
                          }}
                        >
                          W{wk.w}
                        </span>
                      </span>
                      <p
                        className="col-span-7 text-[15px] leading-snug"
                        style={{ color: subText }}
                      >
                        {wk.q}
                      </p>
                      <span
                        className="col-span-3 text-right font-mono text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: accent }}
                      >
                        {wk.o}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
