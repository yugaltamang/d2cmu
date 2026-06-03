import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VIDEO_URL =
  "https://files.mastersunion.link/MU_Student_Entreprenuership_Video.mp4#t=0";

const VideoBreather = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setStarted(true);
  };

  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-transparent">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-3 sm:px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
              Real founders · Real brands
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 text-center">
          <h2
            className="font-sans text-white text-[clamp(1.6rem,4.2vw,2.75rem)] leading-[1.05] tracking-[-0.03em]"
            style={{ fontWeight: 600 }}
          >
            From classroom to{" "}
            <span className="text-primary">cash register</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] sm:text-[15px] text-white/70 leading-relaxed">
            Where ambition meets execution, products find their market & builders become brand founders.
          </p>
        </div>

        {/* Video frame — compact */}
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
              className="absolute inset-0 h-full w-full object-cover"
              playsInline
              preload="metadata"
              controls={playing}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            />

            {/* Overlay (hidden when playing) */}
            {!playing && (
              <button
                type="button"
                onClick={toggle}
                aria-label="Play video"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-black/70 via-black/20 to-black/40 transition-colors"
              >
                <span className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform group-hover:scale-105">
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  <Play className="relative h-5 w-5 sm:h-6 sm:w-6 ml-0.5" fill="currentColor" />
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/90">
                  Play the showreel · 2 min
                </span>
              </button>
            )}

            {/* Corner badges */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
              <span className="rounded-full bg-black/60 backdrop-blur border border-white/15 px-3 py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white">
                <span className="text-primary">●</span> D2C Showreel
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoBreather;
