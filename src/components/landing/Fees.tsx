import { FileText, GraduationCap, Wallet } from "lucide-react";

const BOTTLE = "#0B3B2E";
const BOTTLE_DEEP = "#072A20";
const BOTTLE_SOFT = "#0F4A3A";
const CREAM = "#F3EFE6";
const ACCENT = "#C9A24B";

const items = [
  {
    Icon: FileText,
    label: "Application Fees",
    amount: "₹500",
    note: "One-time, non-refundable",
  },
  {
    Icon: GraduationCap,
    label: "Admission Fees",
    amount: "₹1,00,000",
    note: "Payable on offer acceptance",
  },
  {
    Icon: Wallet,
    label: "Tuition Fees",
    amount: "₹6,00,000",
    note: "Across the programme",
  },
];

const Fees = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 90% 70% at 78% 8%, ${BOTTLE_SOFT} 0%, transparent 55%), linear-gradient(135deg, ${BOTTLE_DEEP} 0%, ${BOTTLE} 45%, ${BOTTLE_SOFT} 100%)`,
        color: CREAM,
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
          <div className="max-w-xl">
            <p
              className="text-[10px] uppercase tracking-[0.22em] mb-2"
              style={{ color: ACCENT }}
            >
              Programme Fees
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-[1.1] tracking-tight">
              Invest in a programme{" "}
              <span className="italic" style={{ color: ACCENT }}>
                built for outcomes.
              </span>
            </h2>
          </div>
          <p
            className="text-sm max-w-sm"
            style={{ color: `${CREAM}b3` }}
          >
            Transparent fee structure, payable in milestones across the programme.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          {items.map(({ Icon, label, amount, note }) => (
            <div
              key={label}
              className="rounded-xl p-5 border backdrop-blur-sm flex items-start gap-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(243,239,230,0.14)",
              }}
            >
              <Icon
                className="h-5 w-5 mt-1 shrink-0"
                strokeWidth={1.5}
                style={{ color: ACCENT }}
              />
              <div className="min-w-0">
                <p
                  className="text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: `${CREAM}99` }}
                >
                  {label}
                </p>
                <p className="mt-1 text-2xl font-light tracking-tight">
                  {amount}
                </p>
                <p className="mt-1 text-xs" style={{ color: `${CREAM}99` }}>
                  {note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div
          className="mt-3 rounded-xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 border"
          style={{
            backgroundColor: CREAM,
            color: BOTTLE_DEEP,
            borderColor: "rgba(243,239,230,0.14)",
          }}
        >
          <div className="flex items-baseline gap-3 flex-wrap">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">
              Total Fees
            </p>
            <p className="text-2xl sm:text-3xl font-light tracking-tight">
              ₹7,00,500{" "}
              <span className="text-sm opacity-60 align-middle">+ GST</span>
            </p>
          </div>
          <p className="text-xs sm:text-sm max-w-sm opacity-70">
            Scholarships and financing options available on request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fees;
