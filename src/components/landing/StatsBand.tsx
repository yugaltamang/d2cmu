const stats = [
  { n: "10", l: "Weekends in-room" },
  { n: "₹1L+", l: "Tracked revenue" },
  { n: "100+", l: "Paying customers" },
  { n: "9", l: "Operator faculty" },
];

const StatsBand = () => {
  return (
    <section className="relative bg-card border-y border-border overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, hsl(var(--mu-cyan) / 0.15), transparent 60%), radial-gradient(ellipse at 80% 100%, hsl(var(--primary) / 0.1), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            By the numbers
          </p>
          <h2
            className="mt-5 font-display text-foreground text-balance"
            style={{
              fontWeight: 300,
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            Receipts, not <span className="italic text-violet">theory.</span>
          </h2>
        </div>

        <dl className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-border/80 pt-12">
          {stats.map((s) => (
            <div key={s.l} className="flex flex-col">
              <dt
                className="text-violet"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 200,
                  fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                }}
              >
                {s.n}
              </dt>
              <dd className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.l}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default StatsBand;
