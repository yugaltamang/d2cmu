const LIME = "hsl(96 75% 55%)";

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
    body: "100% of your D2C Bootcamp fee adjusted against PGP TBM tuition upon admission and enrolment.",
  },
  {
    num: "03",
    title: "Admissions Edge",
    sub: "On top of that",
    body: "A 10% scholarship on your D2C Brand Bootcamp fee, available to select participants.",
  },
];

const PathwayPGP = () => {
  return (
    <section
      id="pathway-pgp"
      className="relative py-12 sm:py-20 lg:py-28 bg-transparent text-white"
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Eyebrow pill - matches Curriculum */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-3 sm:px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: LIME }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
            A Structured Pathway to PGP TBM
          </span>
        </div>

        {/* Heading - sans display matching site style */}
        <h2
          className="mt-5 sm:mt-6 max-w-[22ch] font-sans text-white text-[clamp(1.875rem,6vw,4.25rem)] leading-[1.05] tracking-[-0.035em]"
          style={{ fontWeight: 600 }}
        >
          Build a D2C brand.{" "}
          <span
            className="italic font-display text-violet"
            style={{ fontWeight: 300 }}
          >
            Open the door to PGP TBM.
          </span>
        </h2>

        <p className="mt-6 sm:mt-8 max-w-2xl text-[15px] sm:text-[17px] text-white/70 leading-relaxed">
          The D2C Brand Bootcamp is a structured pathway into Masters' Union PGP TBM.
          For those who want a shot at the{" "}
          <span className="text-white">Class of 2027</span>, here is what comes with it.
        </p>

        {/* Three benefit cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <article
              key={c.num}
              className="relative flex flex-col overflow-hidden rounded-[18px] sm:rounded-[24px] bg-card border border-border/60 hover:border-primary/40 transition-colors px-6 sm:px-7 py-7 sm:py-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-7 bottom-7 w-px"
                style={{ background: `${LIME}` , opacity: 0.5 }}
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55 mb-5">
                {c.num}
              </p>
              <h3
                className="font-sans text-2xl sm:text-[26px] leading-tight tracking-tight text-white"
                style={{ fontWeight: 600 }}
              >
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-primary">
                {c.sub}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">
                {c.body}
              </p>
            </article>
          ))}
        </div>

        {/* Stat strip */}
        <div className="mt-6 rounded-[18px] border border-border/60 bg-card/60 px-5 sm:px-6 py-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <span className="text-[13px] text-white/80">PGP TBM Cohort '25</span>
          <span className="text-[13px] text-white/30">·</span>
          <span className="text-[13px] text-white/80">
            Avg. CTC <strong className="text-white font-semibold">₹33.39L</strong>
          </span>
          <span className="text-[13px] text-white/30">·</span>
          <span className="text-[13px] text-white/80">
            Highest CTC <strong className="text-white font-semibold">₹1.28 Cr</strong>
          </span>
          <span className="text-[13px] text-white/30">·</span>
          <span className="text-[13px] text-white/80">
            <strong className="text-white font-semibold">145+</strong> recruiters
          </span>
          <span className="text-[13px] text-white/30">·</span>
          <span className="text-[13px] text-white/80">
            <strong className="text-white font-semibold">11.2%</strong> EiR / Chief of Staff
          </span>
        </div>

        {/* Footnotes */}
        <ul className="mt-8 space-y-2 text-[12px] leading-relaxed text-white/50">
          <li className="flex gap-2"><span aria-hidden>·</span><span>Placement statistics refer to the full-time PGP TBM programme.</span></li>
          <li className="flex gap-2"><span aria-hidden>·</span><span>Completion of the D2C Brand Bootcamp does not guarantee admission to PGP TBM or PGP TBM YLC. Admission is subject to the standard selection process.</span></li>
          <li className="flex gap-2"><span aria-hidden>·</span><span>100% of your D2C Bootcamp fee is adjusted against PGP TBM tuition upon admission and enrolment.</span></li>
        </ul>
      </div>
    </section>
  );
};

export default PathwayPGP;
