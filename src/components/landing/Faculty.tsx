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

// Duplicate the list so the marquee can loop seamlessly
const loop = [...faculty, ...faculty];

const Faculty = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0); // current translateX in px (negative)
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  pausedRef.current = paused;

  // Animate the track with requestAnimationFrame.
  // We translate by -halfWidth and wrap to 0 to create a seamless loop.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 40; // px per second

    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        if (half > 0) {
          let next = offsetRef.current - SPEED * dt;
          if (-next >= half) next += half; // wrap seamlessly
          offsetRef.current = next;
          track.style.transform = `translate3d(${next}px, 0, 0)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  // Arrow nudges shift the offset directly with a smooth transition
  const nudge = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const step = 280; // approx one card + gap
    const half = track.scrollWidth / 2;
    let next = offsetRef.current - dir * step;
    // Keep inside the [-half, 0] range so loop stays seamless
    if (-next >= half) next += half;
    if (next > 0) next -= half;
    offsetRef.current = next;
    track.style.transition = "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)";
    track.style.transform = `translate3d(${next}px, 0, 0)`;
    window.setTimeout(() => {
      if (track) track.style.transition = "";
    }, 520);
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
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
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

          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => nudge(-1)}
              className="grid place-items-center h-11 w-11 rounded-full bg-card/90 border border-border/60 text-foreground hover:border-primary/60 hover:text-primary transition-all backdrop-blur"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => nudge(1)}
              className="grid place-items-center h-11 w-11 rounded-full bg-card/90 border border-border/60 text-foreground hover:border-primary/60 hover:text-primary transition-all backdrop-blur"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative mt-6 sm:mt-8 lg:mt-12 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
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

        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 py-2 px-4 sm:px-6 lg:px-10 w-max will-change-transform"
        >
          {loop.map((f, i) => (
            <div
              key={`${f.name}-${i}`}
              className="shrink-0 w-[160px] sm:w-[210px] lg:w-[240px] rounded-[18px] sm:rounded-[24px] overflow-hidden bg-card border border-border/60 hover:border-primary/40 transition-colors"
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
