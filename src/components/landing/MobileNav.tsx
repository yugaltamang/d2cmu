import { useState } from "react";
import { ArrowUpRight, X, Menu, Target, BookOpen, Users, Wallet, HelpCircle, Phone, TrendingUp } from "lucide-react";
import { useApplyWidget } from "@/hooks/useApplyWidget";

const navItems = [
  { label: "Outcomes", href: "#outcomes", Icon: TrendingUp },
  { label: "Curriculum", href: "#curriculum", Icon: BookOpen },
  { label: "Faculty", href: "#faculty", Icon: Users },
  { label: "Fees", href: "#fees", Icon: Wallet },
  { label: "FAQ", href: "#faq", Icon: HelpCircle },
  { label: "Contact", href: "#get-in-touch", Icon: Phone },
  { label: "Apply", href: "#apply", Icon: Target, action: "apply" as const },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { open: openApply } = useApplyWidget();

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleNavClick = (item: (typeof navItems)[number]) => {
    if (item.action === "apply") {
      setIsOpen(false);
      openApply();
    } else {
      scrollTo(item.href);
    }
  };

  return (
    <div className="lg:hidden">
      {/* Fixed bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div
          className="backdrop-blur-xl border-t"
          style={{
            backgroundColor: "rgba(3, 19, 14, 0.95)",
            borderColor: "rgba(243,239,230,0.14)",
          }}
        >
          <div className="flex items-center justify-between px-4 sm:px-5 py-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex items-center gap-2 transition-all py-1 active:scale-95"
              style={{ color: "#F3EFE6" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center border"
                style={{
                  backgroundColor: "#062119",
                  borderColor: "rgba(243,239,230,0.18)",
                }}
              >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </div>
              <span className="tracking-[0.18em] uppercase text-[11px] font-semibold">
                {isOpen ? "Close" : "Menu"}
              </span>
            </button>
            <button
              type="button"
              onClick={openApply}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium group"
              style={{ backgroundColor: "#F3EFE6", color: "#03130E" }}
            >
              Apply Now
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-up panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="absolute bottom-[60px] left-0 right-0 backdrop-blur-xl border-t animate-in slide-in-from-bottom-4 duration-200 max-h-[70vh] overflow-y-auto"
            style={{
              backgroundColor: "rgba(3, 19, 14, 0.98)",
              borderColor: "rgba(243,239,230,0.14)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav
              className="grid grid-cols-3 gap-px"
              style={{ backgroundColor: "rgba(243,239,230,0.10)" }}
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="flex flex-col items-center gap-1.5 text-[11px] font-semibold transition-all py-4 px-2 active:scale-95"
                  style={{ backgroundColor: "#03130E", color: "#F3EFE6" }}
                >
                  <item.Icon className="h-4 w-4 opacity-60 shrink-0" strokeWidth={1.75} style={{ color: "#C9A24B" }} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
