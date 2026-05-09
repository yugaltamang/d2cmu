import { Calendar, Clock, MapPin, GraduationCap, ArrowUpRight, Building2 } from "lucide-react";
import bg from "@/assets/bg-abstract-3.webp";
import { useApplyWidget } from "@/hooks/useApplyWidget";

const details = [
  { icon: Clock, label: "Duration", value: "10 Weekends · 40 hrs" },
  { icon: Calendar, label: "Start", value: "August 2026" },
// ...
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
            COHORT 01 / AUGUST 2026
          </p>
// ...
          <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base text-foreground/70 leading-relaxed">
            Limited seats. Application-based. Cohort 01 begins August 2026 at the Masters&apos; Union campus, Gurugram.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <button type="button" onClick={open} className="btn-pill-light group justify-center sm:justify-start">
              Start your brand
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
            </button>
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
              <p className="mt-2 font-display text-base sm:text-xl text-foreground leading-snug" style={{ fontWeight: 500 }}>
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
