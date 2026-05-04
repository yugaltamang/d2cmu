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
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p
            className="text-xs uppercase tracking-[0.22em] mb-4"
            style={{ color: ACCENT }}
          >
            Programme Fees
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight">
            Invest in a programme{" "}
            <span className="italic" style={{ color: ACCENT }}>
              built for outcomes.
            </span>
          </h2>
          <p
            className="mt-6 text-base sm:text-lg max-w-xl"
            style={{ color: `${CREAM}cc` }}
          >
            Transparent fee structure, payable in milestones across the programme.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map(({ Icon, label, amount, note }) => (
            <div
              key={label}
              className="rounded-2xl p-7 border backdrop-blur-sm transition-colors"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(243,239,230,0.14)",
              }}
            >
              <Icon
                className="h-6 w-6 mb-6"
                strokeWidth={1.5}
                style={{ color: ACCENT }}
              />
              <p
                className="text-xs uppercase tracking-[0.18em]"
                style={{ color: `${CREAM}99` }}
              >
                {label}
              </p>
              <p className="mt-2 text-3xl sm:text-4xl font-light tracking-tight">
                {amount}
              </p>
              <p className="mt-3 text-sm" style={{ color: `${CREAM}b3` }}>
                {note}
              </p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div
          className="mt-6 rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border"
          style={{
            backgroundColor: CREAM,
            color: BOTTLE_DEEP,
            borderColor: "rgba(243,239,230,0.14)",
          }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] opacity-70">
              Total Fees
            </p>
            <p className="mt-2 text-4xl sm:text-5xl font-light tracking-tight">
              ₹7,00,500{" "}
              <span className="text-base sm:text-lg opacity-60 align-middle">
                + GST
              </span>
            </p>
          </div>
          <p className="text-sm sm:text-base max-w-sm opacity-75">
            Inclusive of application, admission and tuition. Scholarships and
            financing options available on request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fees;
