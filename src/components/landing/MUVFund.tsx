import { ArrowRight } from "lucide-react";

const MUVFund = () => {
  return (
    <section className="relative bg-background text-foreground border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col gap-10">
        {/* Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-border/40 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              Your first cheque · Masters' Union Ventures Fund
            </span>
          </div>
          <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
            MUV / 2024
          </span>
        </div>

        {/* Headline + body + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display text-foreground text-[clamp(1.75rem,4vw,3.25rem)] leading-[1] tracking-[-0.035em]"
              style={{ fontWeight: 500 }}
            >
              Get access to{" "}
              <span className="text-primary">Masters' Union</span> Ventures Fund — where top student founders get their first cheque.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] sm:text-base text-foreground/55 leading-relaxed font-light">
              Pitch directly at the end of the program. Standout brands get evaluated for early-stage capital — no decks lost in inboxes.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href="/downloads/MUV-Prospectus.pdf"
              download
              className="group flex items-center justify-between gap-4 border border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 px-5 py-4"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 mb-1">
                  Available now / PDF
                </span>
                <span className="font-display text-base sm:text-lg uppercase tracking-tight" style={{ fontWeight: 500 }}>
                  Download Fund Prospectus
                </span>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
            </a>

            <a
              href="/downloads/MU-Entrepreneurship-Report.pdf"
              download
              className="group flex items-center justify-between gap-4 border border-border/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 px-5 py-4"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 mb-1">
                  Research / PDF
                </span>
                <span className="font-display text-base sm:text-lg uppercase tracking-tight" style={{ fontWeight: 500 }}>
                  Download Entrepreneurship Report
                </span>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        {/* Footer micro-info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border/40 pt-6 font-mono text-[10px] uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-1.5">
            <span className="text-primary">Eligibility</span>
            <span className="text-foreground/45">Cohort founders</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-primary">Stage</span>
            <span className="text-foreground/45">Pre-seed</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-primary">Focus</span>
            <span className="text-foreground/45">D2C · Consumer</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-primary">Status</span>
            <span className="text-foreground/45">Actively deploying</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MUVFund;
