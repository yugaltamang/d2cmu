import { useEffect, useRef, useState } from "react";
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
  const scrollerRef = useRef<HTMLUListElement>(null);
  const dirRef = useRef<0 | 1 | -1>(0);
  const rafRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateProgress = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setCanLeft(el.scrollLeft > 2);
    setCanRight(el.scrollLeft < max - 2);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.8, 240);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const startAuto = (dir: 1 | -1) => {
    dirRef.current = dir;
    if (rafRef.current != null) return;
    const speed = 1.8; // px per frame
    const tick = () => {
      const el = scrollerRef.current;
      if (!el || dirRef.current === 0) {
        rafRef.current = null;
        return;
      }
      el.scrollLeft += dirRef.current * speed;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopAuto = () => {
    dirRef.current = 0;
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  useEffect(() => () => stopAuto(), []);

  return (
    <section id="faculty" className="relative bg-background py-12 sm:py-16 lg:py-24 border-t border-border/40 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={bg} alt="" loading="lazy" decoding="async" width={1920} height={1280} className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <h2
          className="max-w-5xl font-display text-foreground text-[clamp(1.75rem,6vw,4rem)] leading-[1.05] tracking-[-0.035em]"
          style={{ fontWeight: 500 }}
        >
          Taught by the people who&apos;ve <span className="text-violet">actually done it.</span>
        </h2>
        <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-foreground/65 leading-relaxed">
          A deep pool of founders and operators who&apos;ve actually built brands from zero — backing India&apos;s biggest D2C names. They lead sessions, review your build, and sit on your pitch panel — no theorists, no professors.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative mt-6 sm:mt-8 lg:mt-12 group">
        {/* Left hover zone (auto-scroll) */}
        <div
          onMouseEnter={() => startAuto(-1)}
          onMouseLeave={stopAuto}
          className="absolute inset-y-0 left-0 w-16 sm:w-28 lg:w-44 z-10 cursor-w-resize"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
          aria-hidden
        />
        {/* Right hover zone (auto-scroll) */}
        <div
          onMouseEnter={() => startAuto(1)}
          onMouseLeave={stopAuto}
          className="absolute inset-y-0 right-0 w-16 sm:w-28 lg:w-44 z-10 cursor-e-resize"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
          aria-hidden
        />

        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByCards(-1)}
          onMouseEnter={() => startAuto(-1)}
          onMouseLeave={stopAuto}
          disabled={!canLeft}
          className="hidden sm:grid place-items-center absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-card/90 border border-border/60 text-foreground hover:border-primary/60 hover:text-primary transition-all backdrop-blur disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByCards(1)}
          onMouseEnter={() => startAuto(1)}
          onMouseLeave={stopAuto}
          disabled={!canRight}
          className="hidden sm:grid place-items-center absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-card/90 border border-border/60 text-foreground hover:border-primary/60 hover:text-primary transition-all backdrop-blur disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>

        <ul
          ref={scrollerRef}
          className="flex gap-3 sm:gap-5 lg:gap-6 py-2 px-4 sm:px-6 lg:px-10 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {faculty.map((f, i) => (
            <li
              key={`${f.name}-${i}`}
              className="snap-start shrink-0 w-[150px] sm:w-[200px] lg:w-[230px] rounded-[18px] sm:rounded-[24px] overflow-hidden bg-card border border-border/60 hover:border-primary/40 transition-colors"
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
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Progress bar */}
        <div className="relative mx-auto mt-6 sm:mt-8 h-px w-[60%] max-w-[420px] bg-border/60">
          <div
            className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-primary transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Faculty;
