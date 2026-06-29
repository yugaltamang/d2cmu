import { useRef, useState } from "react";
import { Play } from "lucide-react";
import d2cPosterAsset from "@/assets/d2c-poster.jpg.asset.json";

const VIDEO_URL = "https://cdn.unionstack.link/uploads/24062026/v1/D2C_Bootcamp.mp4";
const POSTER_URL = d2cPosterAsset.url;

const BrandHook = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = async () => {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    try {
      v.muted = false;
      await v.play();
    } catch (err) {
      console.warn("[BrandHook] play() failed, retrying muted:", err);
      try {
        v.muted = true;
        await v.play();
      } catch (err2) {
        console.error("[BrandHook] video could not start:", err2);
      }
    }
  };

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-transparent">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-3 sm:px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
              Build Your First D2C Brand
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 text-center">
          <h2
            className="font-sans text-white text-[clamp(1.6rem,4.2vw,2.75rem)] leading-[1.05] tracking-[-0.03em]"
            style={{ fontWeight: 600 }}
          >
            Not Someday. <span className="text-primary">Now.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] sm:text-[15px] text-white/70 leading-relaxed">
            Whether you&apos;re starting or scaling up, master the fundamentals of building a successful D2C brand.
          </p>
        </div>

        {/* Video frame */}
        <div className="relative mt-6 sm:mt-8 group">
          {/* Glow */}
          <div
            aria-hidden
            className="absolute -inset-1 sm:-inset-2 rounded-[20px] sm:rounded-[28px] opacity-60 blur-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, hsl(96 75% 55% / 0.45), hsl(165 80% 45% / 0.35), transparent 70%)",
            }}
          />

          <div className="relative overflow-hidden rounded-[18px] sm:rounded-[24px] border border-white/15 bg-black aspect-video">
            <video
              ref={videoRef}
              src={VIDEO_URL}
              poster={POSTER_URL}
              className="absolute inset-0 h-full w-full object-cover"
              playsInline
              preload="metadata"
              controls={started}
            />

            {/* Overlay (hidden once started) */}
            {!started && (
              <button
                type="button"
                onClick={start}
                aria-label="Play video"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-black/70 via-black/20 to-black/40 transition-colors"
              >
                <span className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform group-hover:scale-105">
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  <Play className="relative h-5 w-5 sm:h-6 sm:w-6 ml-0.5" fill="currentColor" />
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/90">
                  Watch the story
                </span>
              </button>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHook;
