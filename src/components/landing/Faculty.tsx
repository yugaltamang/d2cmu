import { useState } from "react";
import saksham from "@/assets/faculty/saksham-kotiya.webp";
import swarup from "@/assets/faculty/swarup-potta.webp";
import shubham from "@/assets/faculty/shubham-jain.webp";
import mansi from "@/assets/faculty/mansi-khandelwal.webp";
import ankit from "@/assets/faculty/ankit-aggarwal.webp";
import pranay from "@/assets/faculty/pranay-jindal.webp";
import upamanyu from "@/assets/faculty/upamanyu-chatterjee.webp";
import alok from "@/assets/faculty/alok-srivastava.webp";
import mohit from "@/assets/faculty/mohit-gulati.webp";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const faculty = [
  { name: "Saksham Kotiya", role: "D2C Operator", photo: saksham },
  { name: "Swarup Potta", role: "Brand Strategy", photo: swarup },
  { name: "Shubham Jain", role: "Performance Mktg", photo: shubham },
  { name: "Mansi Khandelwal", role: "Ecommerce Lead", photo: mansi },
  { name: "Ankit Aggarwal", role: "Growth", photo: ankit },
  { name: "Pranay Jindal", role: "Founder", photo: pranay },
  { name: "Upamanyu Chatterjee", role: "Operator", photo: upamanyu },
  { name: "Alok Srivastava", role: "Supply Chain", photo: alok },
  { name: "Mohit Gulati", role: "Brand Builder", photo: mohit },
];

const Faculty = () => {
  const [active, setActive] = useState(0);
  const total = faculty.length;
  const cycle = (n: number) => ((n % total) + total) % total;
  const next = () => setActive((a) => cycle(a + 1));

  // Build a deck of the next 3 visible cards (active on top)
  const deck = [0, 1, 2].map((offset) => {
    const idx = cycle(active + offset);
    return { ...faculty[idx], idx, offset };
  });

  return (
    <section
      id="faculty"
      className="relative bg-background text-foreground py-20 lg:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--mu-cyan) / 0.18), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-9">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Faculty</p>
            <h2 className="mt-4 font-display font-light text-4xl lg:text-6xl leading-[0.98] tracking-tight text-balance">
              <span className="text-violet">Operators</span> &amp; <span className="text-violet">founders.</span>
              <span className="text-muted-foreground"> Not theorists.</span>
            </h2>
          </div>
          <p className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed">
            Behind India's most recognised D2C names.
          </p>
        </div>

        {/* Deck + roster */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Stacked deck */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[360px] aspect-[4/5]">
              {deck
                .slice()
                .reverse()
                .map((card) => {
                  const o = card.offset;
                  const translate = o * 14;
                  const scale = 1 - o * 0.05;
                  const rotate = o === 1 ? -2 : o === 2 ? 2.5 : 0;
                  const z = 30 - o;
                  const opacity = 1 - o * 0.18;
                  return (
                    <div
                      key={`${card.idx}-${o}`}
                      className="absolute inset-0 rounded-3xl overflow-hidden bg-card border border-border shadow-card transition-all duration-500"
                      style={{
                        transform: `translateY(${translate}px) translateX(${o * 8}px) rotate(${rotate}deg) scale(${scale})`,
                        zIndex: z,
                        opacity,
                      }}
                    >
                      <img
                        src={card.photo}
                        alt={`${card.name}, ${card.role}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      {o === 0 && (
                        <>
                          <div
                            aria-hidden
                            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent"
                          />
                          <div className="absolute bottom-0 inset-x-0 p-6">
                            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                              {String(card.idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                            </span>
                            <p className="mt-2 font-display font-light text-2xl lg:text-3xl leading-tight">
                              {card.name}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">{card.role}</p>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Deck control */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={next}
                className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-sans text-sm font-medium tracking-tight text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Next faculty
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Compact roster */}
          <ul className="lg:col-span-7 self-center divide-y divide-border border-y border-border">
            {faculty.map((f, i) => {
              const isActive = i === active;
              return (
                <li key={f.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full grid grid-cols-12 gap-3 items-baseline py-3.5 lg:py-4 text-left transition-colors ${
                      isActive ? "text-foreground" : "text-foreground/65 hover:text-foreground"
                    }`}
                  >
                    <span className="col-span-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`col-span-7 font-display leading-none transition-all ${
                        isActive ? "text-violet text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
                      }`}
                    >
                      {f.name}
                    </span>
                    <span className="col-span-3 text-xs text-muted-foreground">{f.role}</span>
                    <span className="col-span-1 text-right">
                      <ArrowUpRight
                        className={`inline h-4 w-4 transition-all ${
                          isActive ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-muted-foreground/50"
                        }`}
                        strokeWidth={1.5}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
