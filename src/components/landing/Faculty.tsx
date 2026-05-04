import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import saksham from "@/assets/faculty/saksham-kotiya.webp";
import swarup from "@/assets/faculty/swarup-potta.webp";
import shubham from "@/assets/faculty/shubham-jain.webp";
import mansi from "@/assets/faculty/mansi-khandelwal.webp";
import ankit from "@/assets/faculty/ankit-aggarwal.webp";
import pranay from "@/assets/faculty/pranay-jindal.webp";
import upamanyu from "@/assets/faculty/upamanyu-chatterjee.webp";
import alok from "@/assets/faculty/alok-srivastava.webp";
import mohit from "@/assets/faculty/mohit-gulati.webp";
import bg from "@/assets/bg-abstract-2.webp";

const faculty = [
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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

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
      </div>

      {/* Carousel */}
      <div className="relative mt-6 sm:mt-8 lg:mt-12">
        {/* Edge fades (visual only) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
        />

        {/* Inner arrows */}
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          className="hidden sm:grid place-items-center absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-card/90 border border-border/60 text-foreground hover:border-primary/60 hover:text-primary transition-all backdrop-blur"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          className="hidden sm:grid place-items-center absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-card/90 border border-border/60 text-foreground hover:border-primary/60 hover:text-primary transition-all backdrop-blur"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 py-2 px-4 sm:px-6 lg:px-10 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {faculty.map((f, i) => (
            <div
              key={`${f.name}-${i}`}
              className="snap-start shrink-0 w-[160px] sm:w-[210px] lg:w-[240px] rounded-[18px] sm:rounded-[24px] overflow-hidden bg-card border border-border/60 hover:border-primary/40 transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={f.photo}
                  alt={`${f.name}, ${f.role}`}
                  loading="lazy"
                  decoding="async"
                  width={460}
                  height={575}
                  className="h-full w-full object-cover grayscale-[0.15] hover:grayscale-0 transition"
                  draggable={false}
                />
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-sm sm:text-base text-foreground" style={{ fontWeight: 500 }}>
                  {f.name}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm text-foreground/60">{f.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
