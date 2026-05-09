import saksham from "@/assets/faculty/saksham-kotiya-new.webp";
import arjun from "@/assets/faculty/arjun-vaidya.webp";
import ishaan from "@/assets/faculty/ishaan-suri.webp";
import bipin from "@/assets/faculty/bipin-kalra.webp";
import sumit from "@/assets/faculty/sumit-vijapure.webp";

type Member = {
  name: string;
  role: string;
  photo: string;
  // desktop placement (percent of stage)
  left: string;
  top: string;
  width: string;
  height: string;
  z: number;
  // label
  labelLeft: string;
  labelTop: string;
  labelAlign: "left" | "right";
  tickWidth?: number;
};

const RED = "#E63329";

const faculty: Member[] = [
  {
    name: "Saksham Kotiya",
    role: "Head, Entrepreneurship & Investment",
    photo: saksham,
    left: "1%",
    top: "22%",
    width: "20%",
    height: "70%",
    z: 30,
    labelLeft: "1%",
    labelTop: "10%",
    labelAlign: "left",
  },
  {
    name: "Arjun Vaidya",
    role: "Partner, V3 Ventures",
    photo: arjun,
    left: "20%",
    top: "8%",
    width: "20%",
    height: "72%",
    z: 20,
    labelLeft: "20%",
    labelTop: "0%",
    labelAlign: "left",
  },
  {
    name: "Ishaan Suri",
    role: "Founder, Ecom Edge",
    photo: ishaan,
    left: "39%",
    top: "26%",
    width: "22%",
    height: "70%",
    z: 40,
    labelLeft: "40%",
    labelTop: "13%",
    labelAlign: "left",
  },
  {
    name: "Bipin Kalra",
    role: "Shopify Expert",
    photo: bipin,
    left: "60%",
    top: "6%",
    width: "20%",
    height: "72%",
    z: 20,
    labelLeft: "61%",
    labelTop: "-2%",
    labelAlign: "left",
  },
  {
    name: "Sumit Vijapure",
    role: "Amazon Operator",
    photo: sumit,
    left: "79%",
    top: "24%",
    width: "20%",
    height: "70%",
    z: 30,
    labelLeft: "60%",
    labelTop: "84%",
    labelAlign: "right",
  },
];

const Faculty = () => {
  return (
    <section
      id="faculty"
      className="relative bg-[#0a0a0a] py-16 sm:py-20 lg:py-28 border-t border-border/40 overflow-hidden"
    >
      {/* subtle grain */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 85% 90%, rgba(230,51,41,0.18), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/55">
              The Faculty / Cohort 01
            </p>
            <h2
              className="mt-4 max-w-3xl font-display text-foreground text-[clamp(1.75rem,5.5vw,3.75rem)] leading-[1.05] tracking-[-0.035em]"
              style={{ fontWeight: 500 }}
            >
              Taught by the people who&apos;ve{" "}
              <span className="text-violet">actually done it.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/60 leading-relaxed">
            Founders and operators who&apos;ve built India&apos;s biggest D2C
            brands. They lead sessions, review your build, and sit on your pitch
            panel.
          </p>
        </div>

        {/* ===== Mobile / tablet: clean grid ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:hidden">
          {faculty.map((f) => (
            <div key={f.name} className="relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={f.photo}
                  alt={`${f.name}, ${f.role}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div
                  className="absolute left-0 top-0 h-full w-[3px]"
                  style={{ background: RED }}
                />
              </div>
              <div className="mt-2 flex items-start gap-2">
                <span
                  className="mt-2 block h-px w-5 shrink-0"
                  style={{ background: RED }}
                />
                <div>
                  <div className="text-foreground text-[13px] font-semibold leading-tight">
                    {f.name}
                  </div>
                  <div className="text-[10px] text-foreground/55 uppercase tracking-[0.14em] mt-1 leading-snug">
                    {f.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Desktop: collage stage ===== */}
        <div
          className="relative hidden lg:block w-full"
          style={{ height: "640px" }}
        >
          {/* Massive background type */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
          >
            <div
              className="font-display text-center leading-[0.78] tracking-[-0.07em] whitespace-nowrap italic"
              style={{
                fontWeight: 900,
                fontSize: "clamp(14rem, 32vw, 30rem)",
                color: RED,
                transform: "skewX(-6deg)",
                textShadow:
                  "0 0 120px rgba(230,51,41,0.35), 0 0 8px rgba(230,51,41,0.4)",
              }}
            >
              D2C
            </div>
          </div>

          {/* Cohort marker top-right */}
          <div className="absolute top-0 right-0 z-50 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
            <span className="h-px w-8" style={{ background: RED }} />
            2026 / 05
          </div>

          {/* Portraits */}
          {faculty.map((f) => (
            <div
              key={f.name}
              className="absolute group"
              style={{
                left: f.left,
                top: f.top,
                width: f.width,
                height: f.height,
                zIndex: f.z,
              }}
            >
              <div className="relative h-full w-full overflow-hidden bg-neutral-900 ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                <img
                  src={f.photo}
                  alt={`${f.name}, ${f.role}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale contrast-110 brightness-95 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-[1.02]"
                />
                {/* darken edges */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55 mix-blend-multiply pointer-events-none" />
                {/* red accent edge */}
                <div
                  className="absolute left-0 top-0 h-full w-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: RED }}
                />
              </div>
            </div>
          ))}

          {/* Labels (separate layer so they sit above all portraits) */}
          {faculty.map((f) => (
            <div
              key={`label-${f.name}`}
              className="absolute z-50 pointer-events-none"
              style={{
                left: f.labelLeft,
                top: f.labelTop,
                maxWidth: "200px",
              }}
            >
              <div
                className={`flex items-start gap-2 ${
                  f.labelAlign === "right" ? "flex-row-reverse text-right" : ""
                }`}
              >
                <span
                  className="mt-[7px] block h-px shrink-0"
                  style={{
                    width: "26px",
                    background: RED,
                  }}
                />
                <div>
                  <div className="text-white text-[13px] font-semibold leading-tight whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {f.name}
                  </div>
                  <div className="text-[9px] text-white/70 uppercase tracking-[0.18em] mt-1 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {f.role}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom-left meta */}
          <div className="absolute bottom-0 left-0 z-50 flex items-center gap-3">
            <div
              className="font-display text-foreground"
              style={{ fontSize: "11px", letterSpacing: "0.32em" }}
            >
              MASTERS&apos; UNION · D2C BUILD COHORT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
