import { Mail, Phone, Clock } from "lucide-react";

// Bottle green palette (scoped to this section)
const BOTTLE = "#062119";
const BOTTLE_DEEP = "#03130E";
const BOTTLE_SOFT = "#0A2E23";
const CREAM = "#F3EFE6";
const ACCENT = "#C9A24B";

const GetInTouch = () => {
  return (
    <section
      id="get-in-touch"
      className="relative py-10 sm:py-12 lg:py-14"
      style={{
        color: CREAM,
        backgroundColor: BOTTLE,
        backgroundImage: `radial-gradient(ellipse 90% 70% at 78% 8%, ${BOTTLE_SOFT} 0%, transparent 55%), linear-gradient(135deg, ${BOTTLE_DEEP} 0%, ${BOTTLE} 45%, ${BOTTLE_SOFT} 100%)`,
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left - Heading */}
          <div className="lg:col-span-5">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ color: `${CREAM}99` }}
            >
              Admissions Office
            </p>
            <h2
              className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.05] tracking-[-0.03em]"
              style={{ fontWeight: 500, color: CREAM }}
            >
              Get in{" "}
              <span
                className="font-display italic"
                style={{ fontStyle: "italic", fontWeight: 300, color: ACCENT }}
              >
                Touch
              </span>
            </h2>
            <p
              className="mt-3 max-w-md text-sm leading-relaxed"
              style={{ color: `${CREAM}b3` }}
            >
              Questions about the programme, eligibility, or admissions? Our team is here to help.
            </p>
          </div>

          {/* Right - Contact grid */}
          <ul className="lg:col-span-7 grid sm:grid-cols-4 gap-3">
            <li
              className="rounded-xl p-4 border flex flex-col gap-2 min-w-0 sm:col-span-2"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(243,239,230,0.14)" }}
            >
              <Mail className="h-5 w-5" strokeWidth={1.75} style={{ color: ACCENT }} />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: `${CREAM}99` }}>
                Email
              </p>
              <a
                href="mailto:executive.admissions@mastersunion.org"
                className="block text-sm leading-snug whitespace-nowrap transition-colors"
                style={{ fontWeight: 500, color: CREAM }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = CREAM)}
              >
                executive.admissions@mastersunion.org
              </a>
            </li>

            <li
              className="rounded-xl p-4 border flex flex-col gap-2"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(243,239,230,0.14)" }}
            >
              <Phone className="h-5 w-5" strokeWidth={1.75} style={{ color: ACCENT }} />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: `${CREAM}99` }}>
                Mobile
              </p>
              <a
                href="tel:+919899741741"
                className="text-sm transition-colors"
                style={{ fontWeight: 500, color: CREAM }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = CREAM)}
              >
                +91 9899-741-741
              </a>
            </li>

            <li
              className="rounded-xl p-4 border flex flex-col gap-2"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(243,239,230,0.14)" }}
            >
              <Clock className="h-5 w-5" strokeWidth={1.75} style={{ color: ACCENT }} />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: `${CREAM}99` }}>
                Hours
              </p>
              <p className="text-sm leading-snug" style={{ fontWeight: 500, color: CREAM }}>
                Mon - Sat<br />11:00 am - 7:00 pm IST
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
