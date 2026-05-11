import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ApplyWidgetModal from "@/components/ApplyWidgetModal";

const DOWNLOAD_WIDGET_ID = "060aa4ca-31f5-4f53-b6de-e303dfcde1d8";

const downloads = [
  {
    eyebrow: "",
    label: "Download Fund Prospectus",
    file: "/downloads/MUV-Prospectus.pdf",
    filename: "MUV-Prospectus.pdf",
  },
  {
    eyebrow: "Research / PDF",
    label: "Download Entrepreneurship Report",
    file: "/downloads/MU-Entrepreneurship-Report.pdf",
    filename: "MU-Entrepreneurship-Report.pdf",
  },
];

const triggerDownload = (file: string, filename: string) => {
  const a = document.createElement("a");
  a.href = file;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const MUVFund = () => {
  const [pending, setPending] = useState<{ file: string; filename: string } | null>(null);

  const onCtaClick = (e: React.MouseEvent, file: string, filename: string) => {
    e.preventDefault();
    setPending({ file, filename });
  };

  const handleSubmitted = () => {
    if (pending) {
      triggerDownload(pending.file, pending.filename);
    }
    setPending(null);
  };

  return (
    <section className="relative overflow-hidden bg-transparent text-white">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col gap-10">
        {/* Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/60">
              Your first cheque · Masters' Union <span className="text-primary">Ventures Fund</span>
            </span>
          </div>
          <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            MUV / 2024
          </span>
        </div>

        {/* Headline + body + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2
              className="font-display text-white text-[clamp(1.75rem,4vw,3.25rem)] leading-[1] tracking-[-0.035em]"
              style={{ fontWeight: 500 }}
            >
              Get access to{" "}
              <span className="text-primary">Masters' Union</span> Ventures Fund — where top student founders get their first cheque.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] sm:text-base text-white/55 leading-relaxed font-light">
              Pitch directly at the end of the program. Standout brands get evaluated for early-stage capital - no decks lost in inboxes.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            {downloads.map((d) => (
              <a
                key={d.file}
                href={d.file}
                onClick={(e) => onCtaClick(e, d.file, d.filename)}
                className="group flex items-center justify-between gap-4 border border-white/15 bg-white/[0.03] text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 px-5 py-4 cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 mb-1">
                    {d.eyebrow}
                  </span>
                  <span className="font-display text-base sm:text-lg uppercase tracking-tight" style={{ fontWeight: 500 }}>
                    {d.label}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

      </div>

      <ApplyWidgetModal
        open={pending !== null}
        onClose={() => setPending(null)}
        widgetId={DOWNLOAD_WIDGET_ID}
        onSubmitted={handleSubmitted}
      />
    </section>
  );
};

export default MUVFund;
