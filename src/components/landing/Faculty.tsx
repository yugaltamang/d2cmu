import saksham from "@/assets/faculty/saksham-kotiya-new.webp";
import arjun from "@/assets/faculty/arjun-vaidya.webp";
import ishaan from "@/assets/faculty/ishaan-suri.webp";
import bipin from "@/assets/faculty/bipin-kalra.webp";
import sumit from "@/assets/faculty/sumit-vijapure.webp";
import bg from "@/assets/bg-abstract-2.webp";

const faculty = [
  { name: "Saksham Kotiya", role: "Head Entrepreneurship & Investment", photo: saksham },
  { name: "Arjun Vaidya", role: "Partner, V3 Ventures", photo: arjun },
  { name: "Ishaan Suri", role: "Founder, Ecom Edge", photo: ishaan },
  { name: "Bipin Kalra", role: "Shopify Expert", photo: bipin },
  { name: "Sumit Vijapure", role: "Amazon Operator", photo: sumit },
];

const Faculty = () => {
  return (
    <section
      id="faculty"
      className="relative bg-background py-12 sm:py-16 lg:py-24 border-t border-border/40 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img
          src={bg}
          alt=""
          loading="lazy"
          decoding="async"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div>
          <h2
            className="max-w-5xl font-display text-foreground text-[clamp(1.75rem,6vw,4rem)] leading-[1.05] tracking-[-0.035em]"
            style={{ fontWeight: 500 }}
          >
            Taught by the people who&apos;ve <span className="text-violet">actually done it.</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-foreground/65 leading-relaxed">
            A deep pool of founders and operators who&apos;ve actually built brands from zero - backing India&apos;s biggest D2C names. They lead sessions, review your build, and sit on your pitch panel - no theorists, no professors.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {faculty.map((f, i) => (
            <div
              key={`${f.name}-${i}`}
              className="group relative overflow-hidden bg-card border border-border/60 hover:border-primary/60 transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={f.photo}
                  alt={`${f.name}, ${f.role}`}
                  loading="lazy"
                  decoding="async"
                  width={460}
                  height={575}
                  className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 border-l-2 border-primary/0 group-hover:border-primary transition-all duration-300">
                <div className="text-foreground text-sm sm:text-base font-medium leading-tight tracking-tight">
                  {f.name}
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] text-primary uppercase tracking-[0.12em] leading-snug font-semibold">
                  {f.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
