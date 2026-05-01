import { ArrowUpRight, Calendar, Clock, MapPin, GraduationCap, Check } from "lucide-react";

const details: { icon: typeof Calendar; label: string; value: string }[] = [
  { icon: Clock, label: "Duration", value: "10 Weekends · 9 Sessions · 18 Hours" },
  { icon: Calendar, label: "Schedule", value: "Weekends" },
  { icon: MapPin, label: "Format", value: "Masters' Union, Gurugram" },
  { icon: Calendar, label: "Start date", value: "June 2026" },
  { icon: GraduationCap, label: "Eligibility", value: "Applicants must hold an undergraduate degree" },
];

const prerequisites = [
  "Interest in entrepreneurship, ecommerce or marketing",
  "Basic familiarity with digital platforms",
  "No prior startup experience required",
];

const CTA = () => {
  return (
    <section id="apply" className="relative py-28 lg:py-40 bg-background text-foreground overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--mu-cyan) / 0.22), transparent)" }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Cohort 01 / June 2026</p>
        <h2 className="mt-6 font-display font-light text-5xl lg:text-8xl leading-[0.92] tracking-tight text-balance">
          Stop reading about D2C. <br />
          <span className="italic text-violet">Go build one.</span>
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
          Limited seats, application-based. The next cohort begins June 2026 at the Masters&apos; Union campus in Gurugram.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-sans text-sm font-medium tracking-tight hover:brightness-110 transition">
            Start your application
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-medium tracking-tight text-foreground hover:bg-foreground hover:text-background transition-colors">
            Download brochure (PDF)
          </a>
        </div>

        <div className="mt-16 text-left grid lg:grid-cols-5 gap-3">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl bg-card border border-border p-6 lg:p-7 hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em]">{label}</span>
              </div>
              <p className="mt-3 font-display text-lg leading-snug text-foreground">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 text-left grid lg:grid-cols-5 gap-3">
          <div className="rounded-2xl bg-card border border-border p-6 lg:p-7 lg:col-span-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Prerequisites</span>
            </div>
            <p className="mt-3 font-display text-lg leading-snug text-foreground">
              Built for the curious, not the credentialed.
            </p>
          </div>
          <ul className="rounded-2xl bg-card border border-border p-6 lg:p-7 lg:col-span-3 grid sm:grid-cols-1 gap-3">
            {prerequisites.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/85 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CTA;
