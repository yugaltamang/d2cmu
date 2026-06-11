import { useRef, useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";

const VIDEO_URL =
  "https://files.mastersunion.link/MU_Student_Entreprenuership_Video.mp4#t=0";

const WIDGET_ID = "d6d5c302-1fec-4e05-b8ed-b3415fd66985";
const WIDGET_BASE = "https://widget.mastersunion.org/widget";

const buildWidgetSrc = () => {
  const params = new URLSearchParams(window.location.search);
  try {
    params.append("widgetHostURL", window.top?.location.href ?? window.location.href);
  } catch {
    params.append("widgetHostURL", window.location.href);
  }
  try {
    params.append("parentReferrer", document.referrer || window.location.href);
  } catch {
    params.append("parentReferrer", window.location.href);
  }
  return `${WIDGET_BASE}/${WIDGET_ID}?${params.toString()}`;
};

const Apply = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    setStarted(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Video */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/55">
              COHORT 01 / AUGUST 2026
            </p>
            <h1
              className="mt-4 font-display text-foreground text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.05] tracking-[-0.03em]"
              style={{ fontWeight: 500 }}
            >
              Start your <span className="text-violet">brand</span>.
            </h1>
            <p className="mt-3 max-w-md text-sm sm:text-base text-foreground/70 leading-relaxed">
              Watch the showreel, then apply on the right. Limited seats, application-based.
            </p>

            <div className="relative mt-6 group">
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
                  controls={started}
                />
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
                      Play the showreel · 2 min
                    </span>
                  </button>
                )}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
                  <span className="rounded-full bg-black/60 backdrop-blur border border-white/15 px-3 py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white">
                    <span className="text-primary">●</span> D2C Showreel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Apply widget */}
          <div className="overflow-hidden rounded-2xl">
            <iframe
              id={WIDGET_ID}
              title="Apply"
              src={buildWidgetSrc()}
              width="100%"
              height={820}
              frameBorder={0}
              allow="autoplay; camera; microphone; fullscreen; display-capture"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-downloads"
              className="block w-full bg-transparent"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Apply;
