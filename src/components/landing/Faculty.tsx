import saksham from "@/assets/faculty/saksham-kotiya.webp";
import swarup from "@/assets/faculty/swarup-potta.webp";
import shubham from "@/assets/faculty/shubham-jain.webp";
import mansi from "@/assets/faculty/mansi-khandelwal.webp";
import ankit from "@/assets/faculty/ankit-aggarwal.webp";
import pranay from "@/assets/faculty/pranay-jindal.webp";
import upamanyu from "@/assets/faculty/upamanyu-chatterjee.webp";
import alok from "@/assets/faculty/alok-srivastava.webp";
import mohit from "@/assets/faculty/mohit-gulati.webp";
import { ArrowUpRight } from "lucide-react";

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
  // Duplicate list for seamless marquee loop
  const loop = [...faculty, ...faculty];

  return (
    <section
      id="faculty"
      className="relative bg-background text-foreground py-20 lg:py-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--mu-cyan) / 0.18), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Faculty · 9 operators
            </p>
            <h2 className="mt-4 font-display font-light text-4xl lg:text-6xl leading-[0.98] tracking-tight text-balance">
              <span className="text-violet">Operators</span> &amp; <span className="text-violet">founders.</span>
              <span className="text-muted-foreground"> Not theorists.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm text-muted-foreground leading-relaxed lg:max-w-[18rem] lg:ml-auto">
              Behind India's most recognised D2C names.
            </p>
            <a
              href="#"
              className="mt-4 group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground hover:text-primary transition"
            >
              See full roster
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Marquee — full bleed */}
      <div className="relative group">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-40 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 lg:w-40 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
        />

        <div className="overflow-hidden">
          <ul className="marquee flex shrink-0 gap-10 lg:gap-14 pr-10 lg:pr-14 whitespace-nowrap py-6 group-hover:[animation-play-state:paused]">
            {loop.map((f, i) => (
              <li key={`${f.name}-${i}`} className="shrink-0 flex flex-col items-center text-center w-[140px] lg:w-[160px]">
                <div className="relative h-28 w-28 lg:h-32 lg:w-32 rounded-full overflow-hidden border border-border bg-card shadow-card">
                  <img
                    src={f.photo}
                    alt={`${f.name}, ${f.role}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full ring-1 ring-inset ring-foreground/5"
                  />
                </div>
                <p className="mt-4 font-display font-light text-base lg:text-lg leading-tight text-foreground whitespace-normal">
                  {f.name}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground whitespace-normal">
                  {f.role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
