import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import muLogo from "@/assets/mu-logo.svg";

const links: { label: string; href: string }[] = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Faculty", href: "#faculty" },
  { label: "FAQ", href: "#faq" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-50 text-[hsl(var(--paper))]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img src={muLogo} alt="Masters' Union" className="h-7 sm:h-8 w-auto invert" />
        </a>

        <nav className="hidden md:flex items-center gap-1 text-[12px] uppercase tracking-[0.2em] font-bold">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-[hsl(var(--paper))]/85 hover:text-[hsl(var(--lime))] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] font-bold text-[hsl(var(--paper))]/85 hover:text-[hsl(var(--lime))] transition-colors"
          >
            Log in
          </a>
          <a href="#apply" className="btn-pill-light group !py-1.5 sm:!py-2 !px-3 sm:!px-3.5 !text-[12px] sm:!text-[13px]">
            Start your brand
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 border-2 border-[hsl(var(--paper))] text-[hsl(var(--paper))] hover:bg-[hsl(var(--paper))] hover:text-[hsl(var(--ink))] transition"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-white/15 bg-[hsl(155_60%_7%)]/95 backdrop-blur">
          <ul className="px-4 sm:px-6 py-2 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[13px] uppercase tracking-[0.2em] font-bold text-[hsl(var(--paper))]/85 border-b border-white/15 last:border-0 hover:text-[hsl(var(--lime))]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Nav;
