import saksham from "@/assets/faculty/saksham-kotiya-new.webp";
import arjun from "@/assets/faculty/arjun-vaidya.webp";
import ishaan from "@/assets/faculty/ishaan-suri.webp";
import bipin from "@/assets/faculty/bipin-kalra.webp";
import sumit from "@/assets/faculty/sumit-vijapure.webp";

type Member = {
  name: string;
  role: string;
  photo: string;
  // grid placement on lg
  col: string;
  row: string;
  // label position relative to portrait
  labelSide: "left" | "right";
  labelAlign: "top" | "bottom";
  z?: string;
};

const faculty: Member[] = [
  {
    name: "Saksham Kotiya",
    role: "Head, Entrepreneurship & Investment",
    photo: saksham,
    col: "lg:col-start-1 lg:col-end-3",
    row: "lg:row-start-2 lg:row-end-5",
    labelSide: "right",
    labelAlign: "top",
    z: "z-30",
  },
  {
    name: "Arjun Vaidya",
    role: "Partner, V3 Ventures",
    photo: arjun,
    col: "lg:col-start-3 lg:col-end-5",
    row: "lg:row-start-1 lg:row-end-4",
    labelSide: "right",
    labelAlign: "top",
    z: "z-20",
  },
  {
    name: "Ishaan Suri",
    role: "Founder, Ecom Edge",
    photo: ishaan,
    col: "lg:col-start-5 lg:col-end-7",
    row: "lg:row-start-2 lg:row-end-5",
    labelSide: "left",
    labelAlign: "top",
    z: "z-30",
  },
  {
    name: "Bipin Kalra",
    role: "Shopify Expert",
    photo: bipin,
    col: "lg:col-start-7 lg:col-end-9",
    row: "lg:row-start-1 lg:row-end-4",
    labelSide: "left",
    labelAlign: "top",
    z: "z-20",
  },
  {
    name: "Sumit Vijapure",
    role: "Amazon Operator",
    photo: sumit,
    col: "lg:col-start-9 lg:col-end-11",
    row: "lg:row-start-2 lg:row-end-5",
    labelSide: "left",
    labelAlign: "bottom",
    z: "z-30",
  },
];

const Faculty = () => {
  return (
    <section
      id="faculty"
      className="relative bg-[#0a0a0a] py-16 sm:py-20 lg:py-28 border-t border-border/40 overflow-hidden"
    >
      {/* subtle noise / vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.12), transparent 45%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
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
            Founders and operators who&apos;ve built India&apos;s biggest D2C brands.
            They lead sessions, review your build, and sit on your pitch panel.
          </p>
        </div>

        {/* Collage Stage */}
        <div className="relative mt-12 lg:mt-20">
          {/* Giant background type */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
          >
            <div
              className="font-display text-center leading-[0.82] tracking-[-0.06em] whitespace-nowrap"
              style={{
                fontWeight: 900,
                fontSize: "clamp(8rem, 26vw, 22rem)",
                color: "#e23b3b",
                textShadow: "0 0 80px rgba(226,59,59,0.25)",
              }}
            >
              FACULTY
            </div>
          </div>

          {/* Mobile stack */}
          <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
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
                </div>
                <div className="mt-2">
                  <div className="text-foreground text-sm font-semibold leading-tight">
                    {f.name}
                  </div>
                  <div className="text-[10px] text-foreground/60 uppercase tracking-[0.12em] mt-0.5 leading-snug">
                    {f.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop collage */}
          <div className="relative hidden lg:grid grid-cols-10 grid-rows-5 gap-x-2 gap-y-0 h-[640px]">
            {faculty.map((f) => {
              const labelLeft = f.labelSide === "left";
              return (
                <div
                  key={f.name}
                  className={`relative ${f.col} ${f.row} ${f.z ?? "z-10"}`}
                >
                  {/* Portrait */}
                  <div className="relative h-full w-full overflow-hidden bg-neutral-900 ring-1 ring-white/5">
                    <img
                      src={f.photo}
                      alt={`${f.name}, ${f.role}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover grayscale contrast-110 brightness-95 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/55 mix-blend-multiply" />
                  </div>

                  {/* Tick label */}
                  <div
                    className={`absolute ${
                      f.labelAlign === "top" ? "-top-2" : "bottom-2"
                    } ${
                      labelLeft ? "right-full mr-3" : "left-full ml-3"
                    } z-40 flex items-start gap-2 ${
                      labelLeft ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span
                      className="block mt-2 h-px w-8 bg-[#e23b3b]"
                      aria-hidden
                    />
                    <div className={labelLeft ? "text-right" : "text-left"}>
                      <div className="text-foreground text-[13px] font-semibold leading-tight whitespace-nowrap">
                        {f.name}
                      </div>
                      <div className="text-[9px] text-foreground/55 uppercase tracking-[0.18em] mt-1 leading-snug">
                        {f.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Cohort badge */}
            <div className="absolute bottom-2 right-2 z-40 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
              <span className="h-px w-6 bg-foreground/30" />
              26 / D2C
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
