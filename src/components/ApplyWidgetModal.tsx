import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const WIDGET_ID = "d6d5c302-1fec-4e05-b8ed-b3415fd66985";
const WIDGET_BASE = "https://widget.mastersunion.org/widget";
const ALLOWED_ORIGINS = [
  "https://mastersunion.org",
  "https://widget.mastersunion.org",
];

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

interface Props {
  open: boolean;
  onClose: () => void;
}

const ApplyWidgetModal = ({ open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const onMessage = (e: MessageEvent) => {
      if (!ALLOWED_ORIGINS.includes(e.origin)) return;
      const data = e.data as { type?: string; url?: string; height?: number; widgetId?: string };
      if (!data || typeof data !== "object") return;
      if (data.type === "REDIRECT" && data.url) window.location.href = data.url;
      if ((data.type === "DOWNLOAD" || data.type === "OPEN_URL") && data.url) {
        window.open(data.url, "_blank");
      }
      if (data.type === "RESIZE" && data.height && data.widgetId) {
        const el = document.getElementById(data.widgetId) as HTMLIFrameElement | null;
        if (el) el.style.height = `${data.height}px`;
      }
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("message", onMessage);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMessage);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-2xl rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 hover:bg-background border border-border text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <iframe
          id={WIDGET_ID}
          title="Apply"
          src={buildWidgetSrc()}
          width="100%"
          height={640}
          frameBorder={0}
          allow="autoplay; camera; microphone; fullscreen; display-capture"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-downloads"
          className="block w-full bg-card"
        />
      </div>
    </div>,
    document.body,
  );
};

export default ApplyWidgetModal;
