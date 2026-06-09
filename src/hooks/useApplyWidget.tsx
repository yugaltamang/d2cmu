import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import ApplyWidgetModal from "@/components/ApplyWidgetModal";

interface Ctx {
  open: () => void;
  close: () => void;
}

const APPLY_HASH = "#apply";

const ApplyWidgetContext = createContext<Ctx | null>(null);

export const ApplyWidgetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    if (window.location.hash !== APPLY_HASH) {
      window.history.pushState(null, "", APPLY_HASH);
    }
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    if (window.location.hash === APPLY_HASH) {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === APPLY_HASH) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <ApplyWidgetContext.Provider value={{ open, close }}>
      {children}
      <ApplyWidgetModal open={isOpen} onClose={close} />
    </ApplyWidgetContext.Provider>
  );
};

export const useApplyWidget = () => {
  const ctx = useContext(ApplyWidgetContext);
  if (!ctx) throw new Error("useApplyWidget must be used within ApplyWidgetProvider");
  return ctx;
};
