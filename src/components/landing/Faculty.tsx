import saksham from "@/assets/faculty/saksham-kotiya.webp";
import swarup from "@/assets/faculty/swarup-potta.webp";
import shubham from "@/assets/faculty/shubham-jain.webp";
import mansi from "@/assets/faculty/mansi-khandelwal.webp";
import ankit from "@/assets/faculty/ankit-aggarwal.webp";
import pranay from "@/assets/faculty/pranay-jindal.webp";
import upamanyu from "@/assets/faculty/upamanyu-chatterjee.webp";
import alok from "@/assets/faculty/alok-srivastava.webp";
import mohit from "@/assets/faculty/mohit-gulati.webp";
import bg from "@/assets/bg-abstract-2.jpg";

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
    <section id="faculty" className="relative bg-background py-16 lg:py-24 border-t border-border/40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={bg} alt="" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <h2
          className="max-w-5xl font-display text-foreground text-[clamp(2rem,4.8vw,4rem)] leading-[1] tracking-[-0.035em]"
          style={{ fontWeight: 500 }}
        >
          Taught by the people who&apos;ve <span className="text-violet">actually done it.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/65 leading-relaxed">
          Nine founders and operators behind India&apos;s biggest D2C names. They lead sessions, review your build, and sit on your pitch panel — no theorists, no professors.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative group mt-8 lg:mt-12">
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
                className="shrink-0 w-[200px] lg:w-[230px] rounded-[24px] overflow-hidden bg-card border border-border/60 hover:border-primary/40 transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={f.photo}
                    alt={`${f.name}, ${f.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.15] hover:grayscale-0 transition"
                  />
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
