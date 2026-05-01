import saksham from "@/assets/faculty/saksham-kotiya.webp";
import swarup from "@/assets/faculty/swarup-potta.webp";
import shubham from "@/assets/faculty/shubham-jain.webp";
import mansi from "@/assets/faculty/mansi-khandelwal.webp";
import ankit from "@/assets/faculty/ankit-aggarwal.webp";
import pranay from "@/assets/faculty/pranay-jindal.webp";
import upamanyu from "@/assets/faculty/upamanyu-chatterjee.webp";
import alok from "@/assets/faculty/alok-srivastava.webp";
import mohit from "@/assets/faculty/mohit-gulati.webp";

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

const Burst = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden>
    <polygon
      points="20,2 23,15 36,12 26,22 38,28 24,27 27,40 20,30 13,40 16,27 2,28 14,22 4,12 17,15"
      fill="hsl(var(--lime))"
    />
  </svg>
);

const Scribble = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 60" className={className} aria-hidden fill="none">
    <path
      d="M4 30 C 18 8, 32 52, 50 24 S 80 50, 96 22 S 118 38, 116 30"
      stroke="hsl(var(--lime))"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const Faculty = () => {
  const loop = [...faculty, ...faculty];

  return (
    <section id="faculty" className="relative bg-[hsl(var(--ink))] text-[hsl(var(--paper))] py-16 sm:py-20 lg:py-28 border-t-2 border-[hsl(var(--ink))] overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/20">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-white">
            ▣ Faculty Roll · 09
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-white/55">
            Operators · Founders · Builders
          </span>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-12 gap-6 items-end">
          <h2
            className="col-span-12 lg:col-span-9 relative font-sans uppercase text-[hsl(var(--paper))] text-[clamp(2rem,7vw,5.5rem)] leading-[0.88] tracking-[-0.045em]"
            style={{ fontWeight: 900 }}
          >
            Taught by people who&apos;ve{" "}
            <span className="relative inline-block">
              <span style={{ background: "hsl(var(--lime))", color: "hsl(var(--ink))", padding: "0 0.12em" }}>
                actually
              </span>
              <Burst className="absolute -top-4 -right-6 h-9 w-9 rotate-12" />
            </span>{" "}
            <span className="relative inline-block">
              done it.
              <Scribble className="absolute -bottom-3 sm:-bottom-5 left-0 w-full h-[24px] sm:h-[36px]" />
            </span>
          </h2>
          <p className="col-span-12 lg:col-span-3 text-sm sm:text-base text-white/70 leading-relaxed max-w-md">
            Nine founders & operators behind India&apos;s biggest D2C names. They lead sessions, review your build, and sit on your pitch panel —{" "}
            <span className="text-white font-bold">no theorists, no professors</span>.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative group mt-10 sm:mt-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 lg:w-40 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--ink)), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 lg:w-40 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--ink)), transparent)" }}
        />
        <div className="overflow-hidden">
          <ul className="marquee flex shrink-0 gap-3 sm:gap-4 py-2 group-hover:[animation-play-state:paused]">
            {loop.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                className="shrink-0 w-[160px] sm:w-[210px] lg:w-[240px] relative bg-[hsl(var(--paper))] border-2 border-[hsl(var(--paper))] overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={f.photo}
                    alt={`${f.name}, ${f.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale contrast-110 hover:grayscale-0 transition"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-[hsl(var(--lime))] text-[hsl(var(--ink))] font-sans text-[9px] uppercase tracking-[0.25em] font-black px-1.5 py-0.5">
                  {String((i % faculty.length) + 1).padStart(2, "0")}
                </div>
                <div className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))] px-3 py-2 flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="font-sans text-[11px] uppercase tracking-[0.05em] font-bold truncate">{f.name}</p>
                    <p className="font-sans text-[8.5px] uppercase tracking-[0.3em] text-white/55 font-semibold truncate">{f.role}</p>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--lime))" }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
