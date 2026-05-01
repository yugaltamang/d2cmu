import { ArrowUpRight } from "lucide-react";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-sm font-bold leading-none">
            M
          </div>
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            Masters<span className="text-muted-foreground">'</span>Union
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80 font-sans">
          <a href="#outcomes" className="hover:text-foreground transition">Outcomes</a>
          <a href="#curriculum" className="hover:text-foreground transition">Curriculum</a>
          <a href="#faculty" className="hover:text-foreground transition">Faculty</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden sm:inline-flex items-center text-sm text-foreground/80 hover:text-foreground px-3 py-2 transition"
          >
            Log in
          </a>
          <a
            href="#apply"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-2 font-sans text-sm font-semibold tracking-tight hover:brightness-110 transition"
          >
            Apply Now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
