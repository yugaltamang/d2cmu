import muLogo from "@/assets/mu-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))] border-t-2 border-[hsl(var(--ink))]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/20 mb-10">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-white">
            ▣ Masters&apos; Union
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-white/55">
            End · Of · Feed
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div className="max-w-2xl">
            <a href="#" className="inline-flex items-center gap-2">
              <img src={muLogo} alt="Masters' Union" className="h-9 w-auto invert" />
            </a>
            <h3 className="mt-6 font-sans uppercase text-[hsl(var(--paper))] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[0.95] tracking-[-0.04em] max-w-md" style={{ fontWeight: 900 }}>
              Build a live brand,{" "}
              <span style={{ background: "hsl(var(--lime))", color: "hsl(var(--ink))", padding: "0 0.12em" }}>
                not a case study
              </span>
              .
            </h3>
            <p className="mt-5 text-white/65 leading-relaxed max-w-sm text-sm">
              A 10-weekend immersion by Masters&apos; Union.
            </p>
          </div>

          <span className="h-3 w-3 rounded-full" style={{ background: "hsl(var(--lime))" }} />
        </div>

        <div className="mt-12 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-white/55">
          <p>© Masters&apos; Union 2026</p>
          <p>Gurugram · Outcome-driven, by design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
