import { ChevronDown, ShoppingBag } from "lucide-react";

const links: { label: string; href: string }[] = [
  { label: "Outcomes", href: "#outcomes" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Faculty", href: "#faculty" },
  { label: "FAQ", href: "#faq" },
];

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="h-7 w-7 rounded-md bg-primary text-primary-foreground grid place-items-center">
            <ShoppingBag className="h-4 w-4" strokeWidth={2.25} />
          </div>
          <span className="font-display text-[19px] font-semibold tracking-tight text-foreground">
            d2c<span className="text-primary">.</span>immersion
          </span>
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
          <a href="#apply" className="btn-pill-light !py-2 !px-4 !text-[14px]">
            Start your brand
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
