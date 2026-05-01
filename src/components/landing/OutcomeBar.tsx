const items = [
  "Live Shopify store",
  "Sourced product + packaging",
  "Brand identity system",
  "Performance ad campaigns",
  "Marketplace listings",
  "Unit economics model",
  "Investor-ready pitch",
  "Founder feedback",
];

const OutcomeBar = () => {
  return (
    <section id="outcomes" className="relative bg-background overflow-hidden py-10">
      <div className="relative -rotate-[3deg] tape border-y border-primary/50 overflow-hidden shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.6)]">
        <div className="py-4 flex">
          <div className="marquee flex shrink-0 gap-12 pr-12 whitespace-nowrap">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="font-display text-sm uppercase tracking-[0.2em] text-primary-foreground inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/70" />
                You ship: {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeBar;
