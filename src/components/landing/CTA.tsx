import { Calendar, Clock, MapPin, GraduationCap, ArrowUpRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import bg from "@/assets/bg-abstract-3.webp";

const details = [
  { icon: Clock, label: "Duration", value: "10 Weekends\n40 hours" },
  { icon: Calendar, label: "Start", value: "August 2026" },
  { icon: MapPin, label: "Format", value: "Online / In-Person Weekend Classes" },
  { icon: Building2, label: "Venue", value: "Masters' Union Campus, Gurgaon" },
  { icon: GraduationCap, label: "Eligibility", value: "Undergraduate degree & above" },
];

const CTA = () => {
  return (
    <section id="apply" className="relative bg-background py-12 sm:py-16 lg:py-24 border-t border-border/40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={bg} alt="" loading="lazy" decoding="async" width={1920} height={1280} className="h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
            COHORT 01 / AUGUST 2026
          </p>
          <h2
            className="mt-5 sm:mt-6 font-display text-foreground text-[clamp(2rem,7vw,4.5rem)] leading-[1.05] tracking-[-0.04em]"
            style={{ fontWeight: 500 }}
          >
            Stop reading. <br /><span className="text-violet">Start selling.</span>
          </h2>
          <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base text-foreground/70 leading-relaxed">
            Limited seats. Application-based. Cohort 01 begins August 2026 at the Masters&apos; Union campus, Gurugram.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <Link to="/apply" className="btn-pill-light group justify-center sm:justify-start">
              Start your brand
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="rounded-[18px] sm:rounded-[24px] bg-card border border-border/60 p-4 sm:p-5 hover:border-primary/40 transition-colors"
            >
              <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <p className="mt-3 sm:mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                {label}
              </p>
              <p className="mt-2 font-display text-base sm:text-xl text-foreground leading-snug whitespace-pre-line" style={{ fontWeight: 500 }}>
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