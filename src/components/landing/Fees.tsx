import { ArrowUpRight } from "lucide-react";

const BOTTLE = "#0B3B2E";
const BOTTLE_DEEP = "#072A20";
const BOTTLE_SOFT = "#0F4A3A";
const CREAM = "#F3EFE6";
const ACCENT = "#C9A24B";

const rows = [
  { label: "Application Fees", amount: "₹500", note: "One-time, non-refundable" },
  { label: "Admission Fees", amount: "₹1,00,000", note: "On offer acceptance" },
  { label: "Tuition Fees", amount: "₹6,00,000", note: "Across the programme" },
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
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p
              className="text-[10px] uppercase tracking-[0.22em] mb-3"
              style={{ color: ACCENT }}
            >
              Programme Fees
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.05] tracking-tight">
              Transparent.{" "}
              <span className="italic block" style={{ color: ACCENT }}>
                Built for outcomes.
              </span>
            </h2>
            <p
              className="mt-5 text-sm sm:text-base max-w-md leading-relaxed"
              style={{ color: `${CREAM}b3` }}
            >
              A clear, milestone-based fee structure. Scholarships and financing options available on request.
            </p>

            <a
              href="#get-in-touch"
              className="mt-6 inline-flex items-center gap-2 text-sm transition-colors group"
              style={{ color: ACCENT, fontWeight: 500 }}
            >
              Discuss financing options
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </div>

          {/* Right — Fee breakdown */}
          <div className="lg:col-span-7">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderColor: "rgba(243,239,230,0.14)",
                backdropFilter: "blur(4px)",
              }}
            >
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6"
                  style={{
                    borderTop: i === 0 ? "none" : "1px solid rgba(243,239,230,0.10)",
                  }}
                >
                  <div className="min-w-0">
                    <p
                      className="text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: `${CREAM}99` }}
                    >
                      {String(i + 1).padStart(2, "0")} · {row.label}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm" style={{ color: `${CREAM}80` }}>
                      {row.note}
                    </p>
                  </div>
                  <p className="text-2xl sm:text-3xl font-light tracking-tight whitespace-nowrap">
                    {row.amount}
                  </p>
                </div>
              ))}

              {/* Total row — featured */}
              <div
                className="flex items-center justify-between gap-4 px-6 py-6 sm:px-8 sm:py-7"
                style={{ backgroundColor: CREAM, color: BOTTLE_DEEP }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] opacity-70">
                    Total Programme Fees
                  </p>
                  <p className="mt-1 text-xs opacity-60">
                    Inclusive of all components above
                  </p>
                </div>
                <p className="text-3xl sm:text-4xl font-light tracking-tight whitespace-nowrap">
                  ₹7,00,500
                  <span className="ml-2 text-xs sm:text-sm opacity-60 align-middle">
                    + GST
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
