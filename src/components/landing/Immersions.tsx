import { Factory, Boxes } from "lucide-react";
import manufacturingImg from "@/assets/immersions/manufacturing.jpg";
import fulfillmentImg from "@/assets/immersions/fulfillment.jpg";

const visits = [
  {
    icon: Factory,
    label: "Contract Manufacturing Facility",
    sub: "See how products get made at scale",
    image: manufacturingImg,
  },
  {
    icon: Boxes,
    label: "Fulfillment & Supply Chain Center",
    sub: "Inside the warehouses that move D2C",
    image: fulfillmentImg,
  },
];

const Immersions = () => {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-10 sm:py-14">
        <div className="flex flex-col gap-6 border border-white/15 rounded-xl overflow-hidden bg-white/[0.03]">
          {/* Top label */}
          <div className="px-6 sm:px-8 pt-6 sm:pt-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2 block">
              2 Real-World Business Immersions
            </span>
            <h3
              className="font-display text-white text-xl sm:text-2xl lg:text-[26px] leading-tight tracking-tight max-w-2xl"
              style={{ fontWeight: 500 }}
            >
              Industry visits — built into the program.
            </h3>
          </div>

          {/* Visit cards with images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {visits.map(({ icon: Icon, label, sub, image }) => (
              <div
                key={label}
                className="group relative overflow-hidden bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={label}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                <div className="relative -mt-20 px-5 sm:px-6 pb-5 sm:pb-6 flex items-end gap-4">
                  <div className="shrink-0 h-11 w-11 rounded-md border border-white/15 bg-white/[0.06] backdrop-blur flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-display text-white text-[15px] sm:text-base leading-tight"
                      style={{ fontWeight: 500 }}
                    >
                      {label}
                    </p>
                    <p className="mt-1 text-xs text-white/55 leading-snug">
                      {sub}
                    </p>
                  </div>
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
