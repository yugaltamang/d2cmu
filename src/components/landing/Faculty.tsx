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

const Faculty = () => {
  const loop = [...faculty, ...faculty];

  return (
    <section id="faculty" className="relative bg-background py-28 lg:py-40 border-t border-border/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2
          className="max-w-5xl font-display text-foreground text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.98] tracking-[-0.04em]"
          style={{ fontWeight: 500 }}
        >
          Meet your secret weapon. <span className="text-foreground/45">Operators.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-foreground/65 leading-relaxed">
          Nine founders, brand-builders and growth operators behind India&apos;s most recognised D2C names.
          They lead sessions, review your build, and sit on your final pitch panel.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative group mt-14 lg:mt-20">
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
          <ul className="marquee flex shrink-0 gap-5 lg:gap-6 py-2 group-hover:[animation-play-state:paused]">
            {loop.map((f, i) => (
              <li
                key={`${f.name}-${i}`}
                className="shrink-0 w-[260px] lg:w-[300px] rounded-[24px] overflow-hidden bg-card border border-border/60 hover:border-primary/40 transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={f.photo}
                    alt={`${f.name}, ${f.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.15] hover:grayscale-0 transition"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-lg text-foreground" style={{ fontWeight: 500 }}>
                    {f.name}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/55">
                    {f.role}
                  </p>
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
