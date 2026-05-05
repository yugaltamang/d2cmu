import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const WIDGET_ID = "d6d5c302-1fec-4e05-b8ed-b3415fd66985";
const WIDGET_SRC = "https://cdn.mastersunion.org/widget/iframe.js";

declare global {
  interface Window {
    LoadWidget?: new (id: string) => unknown;
  }
}

const loadScript = () =>
  new Promise<void>((resolve, reject) => {
    if (window.LoadWidget) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${WIDGET_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject());
      return;
    }
    const s = document.createElement("script");
    s.src = WIDGET_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject();
    document.body.appendChild(s);
  });

interface Props {
  open: boolean;
  onClose: () => void;
}

const ApplyWidgetModal = ({ open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled) return;
        try {
          if (window.LoadWidget) new window.LoadWidget(WIDGET_ID);
        } catch (e) {
          console.error("Widget init failed", e);
        }
      })
      .catch(() => console.error("Failed to load widget script"));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelled = true;
      document.removeEventListener("keydown", onKey);
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
          width="100%"
          height="640"
          className="block w-full bg-card"
        />
      </div>
    </div>,
    document.body,
  );
};

export default ApplyWidgetModal;
