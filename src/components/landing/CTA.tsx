import { Calendar, Clock, MapPin, GraduationCap } from "lucide-react";

const details = [
  { icon: Clock, label: "Duration", value: "10 Weekends · 18 hrs in-room" },
  { icon: Calendar, label: "Start", value: "June 2026" },
  { icon: MapPin, label: "Format", value: "Masters' Union, Gurugram" },
  { icon: GraduationCap, label: "Eligibility", value: "Undergraduate degree" },
];

const CTA = () => {
  return (
    <section id="apply" className="relative bg-background py-16 lg:py-24 border-t border-border/40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[600px]"
        style={{ background: "var(--gradient-spotlight)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-5xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
            Cohort 01 / June 2026
          </p>
          <h2
            className="mt-6 font-display text-foreground text-[clamp(3rem,8vw,8rem)] leading-[0.95] tracking-[-0.045em]"
            style={{ fontWeight: 500 }}
          >
            Build fast on{" "}
            <span className="text-violet">your idea.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-foreground/70 leading-relaxed">
            Limited seats, application-based. The next cohort begins June 2026 at the Masters&apos; Union campus in Gurugram.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#" className="btn-pill-light">
              Start your application
            </a>
            <a href="#" className="btn-pill-ghost">
              Download brochure (PDF)
            </a>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-[24px] bg-card border border-border/60 p-7 hover:border-primary/40 transition-colors"
            >
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                {label}
              </p>
              <p className="mt-2 font-display text-xl text-foreground leading-snug" style={{ fontWeight: 500 }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
