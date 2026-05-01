import { Hammer, Rocket, TrendingUp, Mic } from "lucide-react";
import pitchDayImg from "@/assets/pitch-day.jpg";

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
    name: "Pitch Day",
    icon: Mic,
    tagline: "Pitch your brand to founders & operators.",
    range: "Week 10",
    weeks: [
      { w: "10", q: "Final showcase.", o: "Investor pitch" },
    ],
  },
];

// Editorial SMM-feed palette — pure ink + paper + electric lime.
const INK = "hsl(0 0% 6%)";
const PAPER = "hsl(0 0% 96%)";
const LIME = "hsl(75 95% 55%)";

// Scribble accent — hand-drawn marker squiggle
const Scribble = ({ className = "", color = LIME }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 120 60" className={className} aria-hidden fill="none">
    <path
      d="M4 30 C 18 8, 32 52, 50 24 S 80 50, 96 22 S 118 38, 116 30"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// Burst / star sticker
const Burst = ({ className = "", color = LIME }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden>
    <polygon
      points="20,2 23,15 36,12 26,22 38,28 24,27 27,40 20,30 13,40 16,27 2,28 14,22 4,12 17,15"
      fill={color}
    />
  </svg>
);

const Curriculum = () => {
  return (
    <section
      id="curriculum"
      className="relative py-16 sm:py-24 lg:py-32 border-t border-border/40"
      style={{ background: "hsl(0 0% 88%)" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* TOP META BAR — feed header */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-black/30">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-black font-bold">
            ▣ MU · Curriculum Feed
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-black/60 font-semibold">
            10-Weekend System / SS·26
          </span>
        </div>

        {/* MASSIVE EDITORIAL HEADLINE */}
        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9 relative">
            <h2
              className="font-sans uppercase text-black text-[clamp(2.5rem,10vw,8.5rem)] leading-[0.85] tracking-[-0.05em]"
              style={{ fontWeight: 900 }}
            >
              Idea{" "}
              <span className="relative inline-block">
                <span style={{ color: "hsl(0 0% 6%)", background: LIME, padding: "0 0.15em" }}>
                  Friday
                </span>
              </span>
              .
              <br />
              Brand{" "}
              <span className="relative inline-block">
                Sunday
                <Scribble className="absolute -bottom-3 sm:-bottom-5 left-0 w-full h-[24px] sm:h-[40px]" />
              </span>
              .
            </h2>
            <Burst className="absolute -top-4 -right-2 sm:top-2 sm:right-10 h-10 w-10 sm:h-14 sm:w-14 rotate-12" />
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-3">
            <div className="bg-black text-white px-4 py-3">
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] font-bold" style={{ color: LIME }}>
                ◷ 10 Weekends
              </p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.35em] text-white/70 font-semibold">
                4 Phases · 1 Brand
              </p>
            </div>
            <p className="text-[13px] sm:text-[14px] text-black/75 leading-relaxed">
              Build → Launch → Scale → Pitch. Every weekend ends with something{" "}
              <span className="text-black font-bold">shipped, sold, or signed</span> — never a slide.
            </p>
          </div>
        </div>

        {/* PHASE INDEX TILES — quick-jump strip like an Instagram feed row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {phases.map((p) => (
            <a
              key={p.id}
              href={`#phase-${p.id}`}
              className="group relative bg-black hover:bg-[hsl(75_95%_55%)] transition-colors px-4 py-4 flex items-center justify-between"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-[0.3em] text-white/55 group-hover:text-black/55 font-bold">
                  {p.id}
                </span>
                <span className="font-sans uppercase text-white group-hover:text-black text-[18px] tracking-[-0.01em]" style={{ fontWeight: 800 }}>
                  {p.name}
                </span>
              </div>
              <span className="h-2 w-2 rounded-full" style={{ background: LIME }} />
            </a>
          ))}
        </div>

        {/* FEED GRID — square SMM tiles */}
        <div className="mt-8 sm:mt-10 grid grid-cols-12 gap-3 sm:gap-4">
          {phases.map(({ id, name, icon: Icon, tagline, range, weeks }, idx) => {
            const isFinale = idx === phases.length - 1;
            // Variant: 01 INK, 02 LIME, 03 PAPER, 04 INK BIG (finale)
            const variant: "ink" | "lime" | "paper" = isFinale
              ? "ink"
              : idx === 0
              ? "ink"
              : idx === 1
              ? "lime"
              : "paper";

            const surface = variant === "lime" ? LIME : variant === "ink" ? INK : PAPER;
            const text = variant === "ink" ? PAPER : INK;
            const subtext = variant === "ink" ? "hsl(0 0% 65%)" : variant === "lime" ? "hsl(0 0% 15%)" : INK;
            const accent = variant === "lime" ? INK : LIME;
            const ruleColor = variant === "ink" ? "hsl(0 0% 18%)" : variant === "lime" ? "hsl(0 0% 12%)" : "hsl(0 0% 75%)";

            // Layout — finale spans full width, others span 4/12
            const layout = isFinale
              ? "col-span-12"
              : "col-span-12 sm:col-span-6 lg:col-span-4";

            return (
              <article
                key={id}
                id={`phase-${id}`}
                className={`${layout} relative overflow-hidden`}
                style={{
                  background: surface,
                  color: text,
                  aspectRatio: isFinale ? "auto" : "1 / 1.05",
                  minHeight: isFinale ? 480 : undefined,
                }}
              >
                {/* Finale: grayscale pitch-day image — large, right-aligned */}
                {isFinale && (
                  <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none" aria-hidden>
                    <img
                      src={pitchDayImg}
                      alt=""
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 scale-[2] origin-center"
                      style={{ objectPosition: "50% 55%" }}
                    />
                    {/* Subtle left fade only — keep image clearly visible */}
                    <div
                      className="absolute inset-y-0 left-0 w-2/5 lg:w-1/3"
                      style={{
                        background:
                          "linear-gradient(90deg, hsl(0 0% 6%) 0%, hsl(0 0% 6% / 0.6) 60%, hsl(0 0% 6% / 0) 100%)",
                      }}
                    />
                  </div>
                )}

                {/* Top thin strip */}
                <div
                  className="flex items-center justify-between px-4 py-2 font-sans text-[10px] uppercase tracking-[0.3em] font-bold"
                  style={{ borderBottom: `1px solid ${ruleColor}`, color: subtext }}
                >
                  <span>@mu.school / phase·{id}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                    {range}
                  </span>
                </div>

                {/* Floating burst sticker — top right */}
                {(variant === "ink" || variant === "paper") && (
                  <Burst
                    className="absolute top-12 right-4 h-8 w-8 rotate-12"
                    color={LIME}
                  />
                )}

                {/* Vertical phase ribbon — left edge */}
                <div
                  className="absolute left-0 top-10 bottom-10 w-7 flex items-center justify-center"
                  style={{ background: variant === "lime" ? INK : variant === "ink" ? LIME : INK }}
                >
                  <span
                    className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      color: variant === "ink" ? INK : PAPER,
                    }}
                  >
                    Phase · {id}
                  </span>
                </div>

                <div className={`relative pl-12 pr-5 sm:pr-7 pt-6 pb-14 h-[calc(100%-34px)] flex flex-col ${isFinale ? "lg:grid lg:grid-cols-12 lg:gap-10 lg:pb-16" : ""}`}>
                  {/* HEADLINE */}
                  <div className={isFinale ? "lg:col-span-7" : ""}>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-[10px] uppercase tracking-[0.35em] font-bold" style={{ color: subtext }}>
                        {id} / {name}
                      </span>
                      <span className="h-1 w-6" style={{ background: accent }} />
                    </div>

                    <h3
                      className="mt-4 font-sans uppercase leading-[0.85] tracking-[-0.045em]"
                      style={{
                        fontWeight: 900,
                        fontSize: isFinale ? "clamp(3.5rem, 10vw, 8rem)" : "clamp(2.5rem, 4.5vw, 4rem)",
                        color: text,
                      }}
                    >
                      {variant === "lime" ? (
                        <>
                          {name}
                          <span style={{ color: INK }}>!</span>
                        </>
                      ) : (
                        <>
                          <span style={{ background: accent, color: INK, padding: "0 0.12em" }}>
                            {name}
                          </span>
                          <span style={{ color: accent }}>!</span>
                        </>
                      )}
                    </h3>

                    <p
                      className="mt-5 font-sans uppercase tracking-[-0.01em] leading-[1.1] max-w-[20ch]"
                      style={{
                        fontWeight: 800,
                        fontSize: isFinale ? "clamp(1.25rem, 1.8vw, 1.875rem)" : "0.95rem",
                        color: text,
                      }}
                    >
                      {tagline}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 px-2.5 py-1.5 border-2" style={{ borderColor: text }}>
                      <Icon className="h-3.5 w-3.5" strokeWidth={2.5} style={{ color: accent }} />
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold" style={{ color: text }}>
                        {range}
                      </span>
                    </div>

                    {isFinale && (
                      <div className="hidden lg:block mt-8 relative">
                        <Scribble className="absolute -top-2 -left-2 w-24 h-12 opacity-80" color={LIME} />
                        <p className="relative font-sans text-[11px] uppercase tracking-[0.4em] font-bold" style={{ color: LIME }}>
                          ★ Showcase Day · Live
                        </p>
                        <p className="mt-3 text-[14px] leading-relaxed max-w-[40ch]" style={{ color: text }}>
                          Final pitch — your brand, your numbers, defended live in front of{" "}
                          <span style={{ background: LIME, color: INK, padding: "0 0.2em", fontWeight: 800 }}>
                            founders & operators
                          </span>
                          .
                        </p>
                      </div>
                    )}
                  </div>

                  {/* DROPS LIST */}
                  <div className={isFinale ? "lg:col-span-5 mt-8 lg:mt-0" : "mt-auto pt-6"}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-sans text-[10px] uppercase tracking-[0.35em] font-bold" style={{ color: subtext }}>
                        ▸ Weekend Drops
                      </span>
                      <div className="h-px flex-1" style={{ background: ruleColor }} />
                    </div>

                    <ul className="space-y-0">
                      {weeks.map((wk, i) => (
                        <li
                          key={wk.w}
                          className="grid grid-cols-12 gap-2 py-2"
                          style={{ borderTop: i === 0 ? "none" : `1px solid ${ruleColor}` }}
                        >
                          <div className="col-span-2">
                            <span
                              className="inline-block font-mono text-[10px] tracking-[0.05em] px-1.5 py-0.5 font-bold"
                              style={{
                                background: accent,
                                color: variant === "lime" ? PAPER : INK,
                              }}
                            >
                              W{wk.w}
                            </span>
                          </div>
                          <p
                            className="col-span-10 sm:col-span-7 text-[12px] sm:text-[12.5px] leading-snug"
                            style={{ color: text }}
                          >
                            {wk.q}
                          </p>
                          <div className="col-span-12 sm:col-span-3 sm:text-right">
                            <span
                              className="font-sans text-[9px] uppercase tracking-[0.2em] font-bold"
                              style={{ color: variant === "paper" ? INK : accent === LIME ? (variant === "lime" ? INK : LIME) : INK }}
                            >
                              ↗ {wk.o}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {isFinale && (
                      <div className="lg:hidden mt-6 pt-5" style={{ borderTop: `1px solid ${ruleColor}` }}>
                        <p className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold" style={{ color: LIME }}>
                          ★ Showcase Day · Live
                        </p>
                        <p className="mt-2 text-[13px] leading-relaxed" style={{ color: text }}>
                          Final pitch — your brand, your numbers, defended live in front of{" "}
                          <span style={{ background: LIME, color: INK, padding: "0 0.2em", fontWeight: 800 }}>
                            founders & operators
                          </span>
                          .
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 font-sans text-[9px] uppercase tracking-[0.3em] font-bold"
                  style={{ borderTop: `1px solid ${ruleColor}`, color: subtext, background: surface }}
                >
                  <span>MU · {id} / 04</span>
                  <span className="flex items-center gap-1.5">
                    {name}
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
                  </span>
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
