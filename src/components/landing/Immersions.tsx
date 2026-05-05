import { Factory, Boxes } from "lucide-react";

const visits = [
  {
    icon: Factory,
    label: "Contract Manufacturing Facility",
    sub: "See how products get made at scale",
  },
  {
    icon: Boxes,
    label: "Fulfillment & Supply Chain Center",
    sub: "Inside the warehouses that move D2C",
  },
];

const Immersions = () => {
  return (
    <section
      className="relative border-t border-border/40 overflow-hidden"
      style={{ background: "hsl(165 25% 4%)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, hsl(96 75% 55% / 0.18), transparent 60%), radial-gradient(50% 40% at 0% 100%, hsl(165 80% 45% / 0.15), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 border border-white/15 rounded-xl overflow-hidden bg-white/[0.03]">
          {/* Left label */}
          <div className="lg:w-[36%] px-6 sm:px-8 py-6 lg:py-8 flex flex-col justify-center bg-white/[0.04]">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">
              2 Real-World Business Immersions
            </span>
            <h3
              className="font-display text-foreground text-xl sm:text-2xl lg:text-[26px] leading-tight tracking-tight"
              style={{ fontWeight: 500 }}
            >
              Industry visits — built into the program.
            </h3>
          </div>

          {/* Right: 2 visit chips */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
            {visits.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-4 px-5 sm:px-6 py-5 sm:py-6"
              >
                <div className="shrink-0 h-11 w-11 rounded-md border border-border/60 bg-background flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-display text-foreground text-[15px] sm:text-base leading-tight"
                    style={{ fontWeight: 500 }}
                  >
                    {label}
                  </p>
                  <p className="mt-1 text-xs text-foreground/55 leading-snug">
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Immersions;
