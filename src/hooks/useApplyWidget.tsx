import { createContext, useContext, useState, ReactNode } from "react";
import ApplyWidgetModal from "@/components/ApplyWidgetModal";

interface Ctx {
  open: () => void;
  close: () => void;
}

const ApplyWidgetContext = createContext<Ctx | null>(null);

export const ApplyWidgetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ApplyWidgetContext.Provider
      value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
      <ApplyWidgetModal open={isOpen} onClose={() => setIsOpen(false)} />
    </ApplyWidgetContext.Provider>
  );
};

export const useApplyWidget = () => {
  const ctx = useContext(ApplyWidgetContext);
  if (!ctx) throw new Error("useApplyWidget must be used within ApplyWidgetProvider");
  return ctx;
};
