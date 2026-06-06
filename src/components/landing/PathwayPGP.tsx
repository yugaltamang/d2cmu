const BOTTLE = "#062119";
const BOTTLE_DEEP = "#03130E";
const BOTTLE_SOFT = "#0A2E23";
const CREAM = "#F3EFE6";
const ACCENT = "#C9A24B";

const cards = [
  {
    num: "01",
    title: "Priority Interview",
    sub: "Jump the queue",
    body: "Priority consideration for a PGP TBM interview, subject to eligibility.",
  },
  {
    num: "02",
    title: "100% Fee Credit",
    sub: "Investment carries forward",
    body: "100% of your D2C Bootcamp fee adjusted against PGP TBM tuition upon admission.",
  },
  {
    num: "03",
    title: "Admissions Edge",
    sub: "On top of that",
    body: "A 10% scholarship on your D2C Brand Bootcamp fee, available to select participants.",
  },
];

const stats = [
  { label: "PGP TBM Cohort '25", value: "" },
  { label: "Avg. CTC", value: "₹33.39L" },
  { label: "Highest CTC", value: "₹1.28 Cr" },
  { label: "recruiters", value: "145+" },
  { label: "EiR / Chief of Staff", value: "11.2%" },
];

const PathwayPGP = () => {
  return (
    <section
      id="pathway-pgp"
      className="relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 90% 70% at 22% 10%, ${BOTTLE_SOFT} 0%, transparent 55%), linear-gradient(135deg, ${BOTTLE_DEEP} 0%, ${BOTTLE} 45%, ${BOTTLE_SOFT} 100%)`,
        color: CREAM,
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
        {/* Heading */}
        <div className="max-w-3xl">
          <p
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] mb-5"
            style={{ color: ACCENT }}
          >
            A Structured Pathway to PGP TBM
          </p>
          <h2
            className="font-display text-[clamp(2rem,4.8vw,4rem)] leading-[1.05] tracking-[-0.035em]"
            style={{ fontWeight: 500, color: CREAM }}
          >
            Build a D2C brand.{" "}
            <span
              className="italic"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                color: ACCENT,
              }}
            >
              Open the door to PGP TBM.
            </span>
          </h2>
          <p
            className="mt-5 text-sm sm:text-base leading-relaxed max-w-2xl"
            style={{ color: `${CREAM}B0` }}
          >
            The D2C Brand Bootcamp is a structured pathway into Masters' Union PGP TBM.
            For those who want a shot at the Class of 2027, here is what comes with it.
          </p>
        </div>

        {/* Three benefit cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-px rounded-xl overflow-hidden border"
          style={{
            borderColor: "rgba(243,239,230,0.14)",
            backgroundColor: "rgba(243,239,230,0.10)",
          }}
        >
          {cards.map((c) => (
            <div
              key={c.num}
              className="relative px-6 sm:px-7 py-7 sm:py-8"
              style={{ backgroundColor: BOTTLE_DEEP }}
            >
              <span
                aria-hidden
                className="absolute left-0 top-7 bottom-7 w-px"
                style={{ background: `${ACCENT}80` }}
              />
              <p
                className="font-mono text-[10px] uppercase tracking-[0.28em] mb-5"
                style={{ color: `${CREAM}70` }}
              >
                {c.num}
              </p>
              <h3
                className="font-display text-2xl sm:text-[26px] leading-tight tracking-tight"
                style={{ fontWeight: 500, color: ACCENT }}
              >
                {c.title}
              </h3>
              <p
                className="mt-1.5 text-sm font-medium"
                style={{ color: CREAM }}
              >
                {c.sub}
              </p>
              <p
                className="mt-3 text-[14px] leading-relaxed"
                style={{ color: `${CREAM}A0` }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* Stat strip */}
        <div
          className="mt-6 rounded-xl border px-5 sm:px-6 py-4 sm:py-4.5 flex flex-wrap items-baseline gap-x-6 gap-y-2"
          style={{
            borderColor: "rgba(243,239,230,0.14)",
            backgroundColor: "rgba(243,239,230,0.04)",
          }}
        >
          <span className="text-[13px]" style={{ color: `${CREAM}90` }}>PGP TBM Cohort '25</span>
          <span className="text-[13px]" style={{ color: `${CREAM}50` }}>·</span>
          <span className="text-[13px]" style={{ color: `${CREAM}90` }}>
            Avg. CTC <strong style={{ color: CREAM, fontWeight: 600 }}>₹33.39L</strong>
          </span>
          <span className="text-[13px]" style={{ color: `${CREAM}50` }}>·</span>
          <span className="text-[13px]" style={{ color: `${CREAM}90` }}>
            Highest CTC <strong style={{ color: CREAM, fontWeight: 600 }}>₹1.28 Cr</strong>
          </span>
          <span className="text-[13px]" style={{ color: `${CREAM}50` }}>·</span>
          <span className="text-[13px]" style={{ color: `${CREAM}90` }}>
            <strong style={{ color: CREAM, fontWeight: 600 }}>145+</strong> recruiters
          </span>
          <span className="text-[13px]" style={{ color: `${CREAM}50` }}>·</span>
          <span className="text-[13px]" style={{ color: `${CREAM}90` }}>
            <strong style={{ color: CREAM, fontWeight: 600 }}>11.2%</strong> EiR / Chief of Staff
          </span>
        </div>

        {/* Footnotes */}
        <ul className="mt-8 space-y-2 text-[12px] leading-relaxed" style={{ color: `${CREAM}60` }}>
          <li className="flex gap-2"><span aria-hidden>·</span><span>Placement statistics refer to the full-time PGP TBM programme.</span></li>
          <li className="flex gap-2"><span aria-hidden>·</span><span>Completion of the D2C Brand Bootcamp does not guarantee admission to PGP TBM or PGP TBM YLC. Admission is subject to the standard selection process.</span></li>
          <li className="flex gap-2"><span aria-hidden>·</span><span>100% of your D2C Bootcamp fee is adjusted against PGP TBM tuition upon admission and enrollment.</span></li>
        </ul>
      </div>
    </section>
  );
};

export default PathwayPGP;
