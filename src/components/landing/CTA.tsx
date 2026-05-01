import { Calendar, Clock, MapPin, GraduationCap, ArrowUpRight } from "lucide-react";

const details = [
  { icon: Clock, label: "Duration", value: "10 Weekends · 18 hrs in-room" },
  { icon: Calendar, label: "Start", value: "June 2026" },
  { icon: MapPin, label: "Format", value: "Masters' Union, Gurugram" },
  { icon: GraduationCap, label: "Eligibility", value: "Undergraduate degree" },
];

const Burst = ({ className = "", color = "hsl(var(--lime))" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden>
    <polygon
      points="20,2 23,15 36,12 26,22 38,28 24,27 27,40 20,30 13,40 16,27 2,28 14,22 4,12 17,15"
      fill={color}
    />
  </svg>
);

const Scribble = ({ className = "", color = "hsl(var(--lime))" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 120 60" className={className} aria-hidden fill="none">
    <path
      d="M4 30 C 18 8, 32 52, 50 24 S 80 50, 96 22 S 118 38, 116 30"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const CTA = () => {
  return (
    <section
      id="apply"
      className="relative py-16 sm:py-20 lg:py-28 border-t-2 border-[hsl(var(--ink))] overflow-hidden"
      style={{ background: "hsl(var(--ink))" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 text-[hsl(var(--paper))]">
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/20">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--paper))]">
            ▣ Apply · Cohort 01
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-white/60">
            June 2026 · Limited Seats
          </span>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-9 relative">
            <h2
              className="font-sans uppercase text-[hsl(var(--paper))] text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.85] tracking-[-0.05em]"
              style={{ fontWeight: 900 }}
            >
              Stop reading.
              <br />
              <span className="relative inline-block">
                <span style={{ background: "hsl(var(--lime))", color: "hsl(var(--ink))", padding: "0 0.12em" }}>
                  Start
                </span>{" "}
                selling
                <Scribble className="absolute -bottom-3 sm:-bottom-5 left-0 w-full h-[24px] sm:h-[36px]" color="hsl(var(--lime))" />
              </span>
              .
            </h2>
            <Burst className="absolute -top-4 right-0 sm:top-2 sm:right-12 h-12 w-12 rotate-12" color="hsl(var(--lime))" />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="bg-[hsl(var(--lime))] text-[hsl(var(--ink))] px-4 py-3">
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] font-bold">
                ◷ Cohort 01
              </p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.35em] font-semibold opacity-80">
                Application-based
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-xl text-white/75 leading-relaxed text-sm sm:text-base">
          Limited seats. Application-based. Cohort 01 begins{" "}
          <span className="font-bold text-[hsl(var(--paper))]">June 2026</span> at the Masters&apos; Union campus, Gurugram.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#" className="btn-pill-light group">
            Start your brand
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
          </a>
          <a href="#" className="btn-pill-ghost">
            Download brochure (PDF)
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-[hsl(0_0%_10%)] border-2 border-white/15 p-4 sm:p-5"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-[hsl(var(--lime))]" strokeWidth={2.25} />
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(var(--lime))" }} />
              </div>
              <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.3em] text-white/55 font-bold">
                {label}
              </p>
              <p className="mt-2 font-sans uppercase text-[hsl(var(--paper))] text-[15px] sm:text-[17px] leading-tight tracking-[-0.01em]" style={{ fontWeight: 800 }}>
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
