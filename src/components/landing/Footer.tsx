import { ArrowUpRight } from "lucide-react";

const cols = [
  {
    h: "Program",
    items: ["Curriculum", "Faculty", "Outcomes", "Apply"],
  },
  {
    h: "Masters' Union",
    items: ["About", "Campus", "Press", "Careers"],
  },
  {
    h: "Resources",
    items: ["Brochure (PDF)", "FAQ", "Contact admissions", "Privacy"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-sm font-bold leading-none">
                M
              </div>
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Masters<span className="text-muted-foreground">'</span>Union
              </span>
            </a>
            <p
              className="mt-6 font-display text-foreground text-balance max-w-md"
              style={{ fontWeight: 300, fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              The D2C immersion that ends with a brand customers can buy from.
            </p>
            <a
              href="#apply"
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-sans text-sm font-semibold tracking-tight hover:brightness-110 transition"
            >
              Reserve your seat
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.h}>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {c.h}
                </p>
                <ul className="mt-5 space-y-3">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-foreground/85 hover:text-primary transition-colors"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <p>&copy; Masters' Union · D2C Immersion 2026</p>
          <p>Gurugram, India</p>
          <p>Outcome-driven, by design.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
