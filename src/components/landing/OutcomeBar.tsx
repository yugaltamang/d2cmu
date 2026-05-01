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
      <div className="relative -rotate-[3deg] tape border-y border-foreground/10 overflow-hidden shadow-editorial">
        <div className="py-4 flex">
          <div className="marquee flex shrink-0 gap-12 pr-12 whitespace-nowrap">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="font-mono text-xs uppercase tracking-[0.2em] text-foreground inline-flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
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
