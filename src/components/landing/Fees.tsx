const BOTTLE = "#062119";
const BOTTLE_DEEP = "#03130E";
const BOTTLE_SOFT = "#0A2E23";
const CREAM = "#F3EFE6";
const ACCENT = "#C9A24B";

const rows = [
  { label: "Application", amount: "₹500", note: "One-time" },
  { label: "Admission", amount: "₹1,00,000", note: "On offer acceptance" },
  { label: "Tuition", amount: "₹6,00,000", note: "Across the programme" },
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
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
          {/* Heading */}
          <div className="lg:max-w-xs">
            <p
              className="text-[10px] uppercase tracking-[0.22em] mb-2"
              style={{ color: ACCENT }}
            >
              Programme Fees
            </p>
            <h2 className="text-2xl sm:text-3xl font-light leading-[1.1] tracking-tight">
              Fees,{" "}
              <span className="italic" style={{ color: ACCENT }}>
                no fine print.
              </span>
            </h2>
          </div>

          {/* Inline fee row */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-xl overflow-hidden border w-full"
            style={{
              borderColor: "rgba(243,239,230,0.14)",
              backgroundColor: "rgba(243,239,230,0.10)",
            }}
          >
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex sm:block items-baseline justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-5"
                style={{ backgroundColor: BOTTLE_DEEP }}
              >
                <div className="min-w-0">
                  <p
                    className="text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: `${CREAM}99` }}
                  >
                    {row.label}
                  </p>
                  <p className="hidden sm:block mt-1 text-[11px]" style={{ color: `${CREAM}70` }}>
                    {row.note}
                  </p>
                </div>
                <p className="text-xl sm:text-2xl font-light tracking-tight whitespace-nowrap sm:mt-1.5">
                  {row.amount}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div
            className="flex lg:flex-col items-baseline lg:items-end justify-between lg:justify-center gap-2 lg:min-w-[160px] lg:border-l lg:pl-6"
            style={{ borderColor: "rgba(243,239,230,0.18)" }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.22em]"
              style={{ color: ACCENT }}
            >
              Total
            </p>
            <p className="text-2xl sm:text-3xl font-light tracking-tight">
              ₹7,00,500
              <span className="ml-1.5 text-xs opacity-60 align-middle">
                + GST
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
