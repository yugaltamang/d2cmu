import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const DEFAULT_WIDGET_ID = "d6d5c302-1fec-4e05-b8ed-b3415fd66985";
const WIDGET_BASE = "https://widget.mastersunion.org/widget";
const ALLOWED_ORIGINS = [
  "https://mastersunion.org",
  "https://widget.mastersunion.org",
];

const buildWidgetSrc = (widgetId: string) => {
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
  return `${WIDGET_BASE}/${widgetId}?${params.toString()}`;
};

interface Props {
  open: boolean;
  onClose: () => void;
  widgetId?: string;
  /** Called after the widget reports a successful submission. */
  onSubmitted?: () => void;
}

const ApplyWidgetModal = ({ open, onClose, widgetId = DEFAULT_WIDGET_ID, onSubmitted }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const onMessage = (e: MessageEvent) => {
      if (!ALLOWED_ORIGINS.includes(e.origin)) return;
      const data = e.data as { type?: string; url?: string; height?: number; widgetId?: string };
      if (!data || typeof data !== "object") return;

      const type = (data.type || "").toUpperCase();
      const isSubmitSignal =
        type.includes("SUBMIT") ||
        type.includes("SUCCESS") ||
        type === "FORM_SUBMITTED" ||
        type === "REDIRECT";

      if (isSubmitSignal && onSubmitted) {
        onSubmitted();
        return;
      }

      const isSafeHttpUrl = (raw?: string) => {
        if (!raw) return false;
        try {
          const u = new URL(raw, window.location.href);
          return u.protocol === "https:" || u.protocol === "http:";
        } catch {
          return false;
        }
      };

      if (type === "REDIRECT" && isSafeHttpUrl(data.url)) {
        window.location.href = data.url as string;
      }
      if ((type === "DOWNLOAD" || type === "OPEN_URL") && isSafeHttpUrl(data.url)) {
        window.open(data.url as string, "_blank", "noopener,noreferrer");
      }
      if (type === "RESIZE" && data.height && data.widgetId) {
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
  }, [open, onClose, onSubmitted]);

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
          id={widgetId}
          title="Apply"
          src={buildWidgetSrc(widgetId)}
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
