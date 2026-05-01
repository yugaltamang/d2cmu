import muLogo from "@/assets/mu-logo.svg";

const cols = [
  {
    title: "Programme",
    links: ["Outcomes", "Curriculum", "Faculty", "FAQ", "Apply"],
  },
  {
    title: "Masters' Union",
    links: ["About", "Campus", "Other programmes", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["D2C playbook", "Brochure", "Alumni stories", "Blog", "Contact"],
  },
];

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

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="col-span-2 lg:col-span-5">
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

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--lime))] font-bold pb-2 border-b border-white/20">
                {c.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-sans text-[12px] uppercase tracking-[0.15em] font-bold text-white/80 hover:text-[hsl(var(--lime))] transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1 flex lg:justify-end">
            <span className="h-3 w-3 rounded-full" style={{ background: "hsl(var(--lime))" }} />
          </div>
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
