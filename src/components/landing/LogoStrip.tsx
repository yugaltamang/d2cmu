const brands = [
  "Mamaearth",
  "boAt",
  "SUGAR",
  "Wakefit",
  "Snitch",
  "The Whole Truth",
  "Nykaa",
  "Mokobara",
  "Plum",
];

const LogoStrip = () => {
  return (
    <section className="bg-background border-y border-border/60">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-12 lg:py-14">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Faculty &amp; alumni shaped by India's most recognised D2C brands
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:gap-x-14">
          {brands.map((b) => (
            <li
              key={b}
              className="font-display text-2xl lg:text-3xl text-foreground/65 hover:text-foreground transition-colors"
              style={{ fontWeight: 300, letterSpacing: "-0.02em" }}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoStrip;
