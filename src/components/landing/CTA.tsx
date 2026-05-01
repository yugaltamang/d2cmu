import { ArrowUpRight } from "lucide-react";

const points = [
  { k: "Duration", v: "10 Weekends · 18 hrs in-room" },
  { k: "Format", v: "Masters' Union, Gurugram" },
  { k: "Start", v: "June 2026" },
  { k: "Eligibility", v: "Undergraduate degree · Any discipline" },
];

const CTA = () => {
  return (
    <section id="apply" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-[600px] pointer-events-none"
        style={{ background: "var(--gradient-spotlight)" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="rounded-[2.5rem] border border-border bg-card overflow-hidden shadow-editorial">
          <div className="grid lg:grid-cols-12">
            {/* Left — pitch */}
            <div className="lg:col-span-7 p-10 lg:p-16 relative">
              <div
                aria-hidden
                className="absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--primary) / 0.18), transparent)",
                }}
              />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Cohort 01 · June 2026
              </p>
              <h2
                className="mt-5 font-display text-foreground text-balance"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.03em",
                }}
              >
                Stop reading about D2C.
                <br />
                <span className="italic text-violet">Go build one.</span>
              </h2>
              <p className="mt-6 max-w-lg text-muted-foreground text-base lg:text-lg leading-relaxed">
                Limited seats. Application-based. Reserve your spot for the next
                cohort at the Masters' Union campus in Gurugram.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-sans text-sm font-semibold tracking-tight hover:brightness-110 transition shadow-card"
                >
                  Start your application
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 font-sans text-sm font-semibold tracking-tight text-foreground hover:border-foreground transition-colors"
                >
                  Download brochure
                </a>
              </div>
            </div>

            {/* Right — details */}
            <div className="lg:col-span-5 p-10 lg:p-16 bg-background/50 border-t lg:border-t-0 lg:border-l border-border">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
                Cohort details
              </p>
              <dl className="space-y-6">
                {points.map((p) => (
                  <div key={p.k} className="border-b border-border/70 pb-6 last:border-0 last:pb-0">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {p.k}
                    </dt>
                    <dd className="mt-2 font-display text-xl text-foreground" style={{ fontWeight: 300 }}>
                      {p.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
