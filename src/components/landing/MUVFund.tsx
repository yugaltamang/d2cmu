import { Download, Sparkles } from "lucide-react";

const MUVFund = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-background border-t border-border/40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(50% 60% at 80% 20%, hsl(96 75% 55% / 0.15), transparent 60%), radial-gradient(40% 50% at 10% 90%, hsl(165 80% 45% / 0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[20px] sm:rounded-[28px] border border-border/60 bg-card p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  Bonus · Funding access
                </span>
              </div>
              <h2
                className="mt-5 font-display text-foreground text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-[-0.03em]"
                style={{ fontWeight: 600 }}
              >
                Get access to{" "}
                <span className="text-primary">Masters' Union Ventures (MUV) Fund</span>
                <span className="text-foreground/55">
                  {" "}— where top student founders get their first cheque.
                </span>
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] text-foreground/65 leading-relaxed max-w-xl">
                Pitch directly to the MUV Fund at the end of the program. Standout brands get evaluated for early-stage capital — no decks lost in inboxes.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href="/downloads/MUV-Prospectus.pdf"
                download
                className="group flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-background hover:border-primary/60 hover:bg-primary/5 transition-colors px-5 py-4"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                    PDF · 1 of 2
                  </div>
                  <div className="mt-1 font-display text-foreground text-[16px] sm:text-[17px]" style={{ fontWeight: 500 }}>
                    Download MUV Prospectus
                  </div>
                </div>
                <Download className="h-5 w-5 text-primary group-hover:-translate-y-0.5 transition" strokeWidth={2} />
              </a>
              <a
                href="/downloads/MU-Entrepreneurship-Report.pdf"
                download
                className="group flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-background hover:border-primary/60 hover:bg-primary/5 transition-colors px-5 py-4"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                    PDF · 2 of 2
                  </div>
                  <div className="mt-1 font-display text-foreground text-[16px] sm:text-[17px]" style={{ fontWeight: 500 }}>
                    Download Entrepreneurship Report
                  </div>
                </div>
                <Download className="h-5 w-5 text-primary group-hover:-translate-y-0.5 transition" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MUVFund;
