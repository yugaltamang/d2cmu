import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src={muLogo} alt="Masters' Union" width={140} height={28} decoding="async" className="h-6 sm:h-7 w-auto invert" />
        </a>

        <nav className="hidden md:flex items-center gap-1 text-[15px] text-foreground/85">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-foreground/5 transition"
            >
              {l.label}
              <ChevronDown className="h-3.5 w-3.5 text-foreground/40" strokeWidth={2} />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-[14px] text-foreground/80 hover:text-foreground transition"
          >
            Log in
          </a>
          <a href="#apply" className="btn-pill-light group !py-1.5 sm:!py-2 !px-3 sm:!px-4 !text-[13px] sm:!text-[14px] whitespace-nowrap">
            <span className="hidden sm:inline">Start your brand</span>
            <span className="sm:hidden">Apply</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-border/60 text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <ul className="px-4 sm:px-6 py-3 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] text-foreground/85 hover:text-foreground border-b border-border/30 last:border-0"
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
