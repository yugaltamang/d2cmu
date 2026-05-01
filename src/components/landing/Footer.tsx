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
    <footer className="bg-background border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-3">
              <img src={muLogo} alt="Masters' Union" className="h-8 w-auto invert" />
              <span className="h-6 w-px bg-border/60" aria-hidden />
              <span className="font-display text-[15px] font-medium tracking-tight text-foreground/80">
                d2c<span className="text-primary">.</span>immersion
              </span>
            </a>
            <p className="mt-5 text-foreground/65 leading-relaxed max-w-sm text-[15px]">
              A 10-weekend immersion by Masters&apos; Union. Build a live D2C brand —
              not a case study.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[15px] text-foreground/80 hover:text-primary transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs text-foreground/55">
          <p>&copy; Masters&apos; Union / D2C Immersion 2026</p>
          <p>Gurugram, India · Outcome-driven, by design.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
