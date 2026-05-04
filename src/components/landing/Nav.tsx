import { ArrowUpRight } from "lucide-react";
import muLogo from "@/assets/mu-logo.svg";

const links: { label: string; href: string }[] = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Faculty", href: "#faculty" },
  { label: "Fees", href: "#fees" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#get-in-touch" },
];

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={muLogo}
            alt="Masters' Union"
            width={180}
            height={36}
            decoding="async"
            className="h-9 sm:h-10 lg:h-11 w-auto invert"
          />
        </a>

        {/* Desktop-only section links */}
        <nav className="hidden lg:flex items-center gap-1 text-[14px] text-foreground/85">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center px-3 py-1.5 rounded-full hover:bg-foreground/5 transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden lg:inline-flex items-center px-3 py-1.5 text-[14px] text-foreground/80 hover:text-foreground transition"
          >
            Log in
          </a>
          {/* Apply CTA only on desktop — mobile/tablet uses the bottom MobileNav */}
          <a
            href="#apply"
            className="hidden lg:inline-flex btn-pill-light group !py-2 !px-4 !text-[14px] whitespace-nowrap"
          >
            Start your brand
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
