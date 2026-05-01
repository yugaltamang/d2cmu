import muLogo from "@/assets/mu-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))] border-t-2 border-[hsl(var(--ink))]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a href="#" className="inline-flex items-center gap-2">
            <img src={muLogo} alt="Masters' Union" className="h-8 w-auto invert" />
          </a>
          <span className="h-3 w-3 rounded-full" style={{ background: "hsl(var(--lime))" }} />
        </div>

        <div className="mt-8 pt-5 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-white/55">
          <p>© Masters&apos; Union 2026</p>
          <p>Gurugram · Outcome-driven, by design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
