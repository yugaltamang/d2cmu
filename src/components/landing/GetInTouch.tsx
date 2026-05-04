import { Mail, Phone, Clock, ArrowUpRight } from "lucide-react";

// Bottle green palette (scoped to this section)
const BOTTLE = "#0B3B2E";
const BOTTLE_DEEP = "#072A20";
const BOTTLE_SOFT = "#0F4A3A";
const CREAM = "#F3EFE6";
const ACCENT = "#C9A24B"; // muted gold accent

const GetInTouch = () => {
  return (
    <section
      id="get-in-touch"
      className="relative py-16 sm:py-20 lg:py-28"
      style={{
        color: CREAM,
        backgroundColor: BOTTLE,
        backgroundImage: `radial-gradient(ellipse 90% 70% at 78% 8%, ${BOTTLE_SOFT} 0%, transparent 55%), linear-gradient(135deg, ${BOTTLE_DEEP} 0%, ${BOTTLE} 45%, ${BOTTLE_SOFT} 100%)`,
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Image */}
          <div className="order-2 lg:order-1">
            <div
              className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] aspect-[4/5] sm:aspect-[5/6]"
              style={{ backgroundColor: BOTTLE_DEEP }}
            >
              <img
                src={getInTouchImg}
                alt="Get in touch with the D2C admissions team"
                loading="lazy"
                decoding="async"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ color: `${CREAM}99` }}
            >
              Admissions Office
            </p>
            <h2
              className="mt-4 sm:mt-5 font-display text-[clamp(2rem,6vw,4rem)] leading-[1.05] tracking-[-0.04em]"
              style={{ fontWeight: 500, color: CREAM }}
            >
              Get in{" "}
              <span
                className="font-display italic"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: ACCENT,
                }}
              >
                Touch
              </span>
            </h2>
            <p
              className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed"
              style={{ color: `${CREAM}CC` }}
            >
              Have questions about the programme, eligibility, or admissions process? Our team is here to help — reach out and we&apos;ll get back to you shortly.
            </p>

            <ul className="mt-8 sm:mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span
                  className="grid place-items-center h-11 w-11 shrink-0 rounded-full"
                  style={{ backgroundColor: BOTTLE_SOFT, color: CREAM }}
                >
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: `${CREAM}99` }}
                  >
                    Email ID
                  </p>
                  <a
                    href="mailto:executive.admissions@mastersunion.org"
                    className="mt-1 block text-base sm:text-lg transition-colors"
                    style={{ fontWeight: 500, color: CREAM }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = CREAM)}
                  >
                    executive.admissions@mastersunion.org
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span
                  className="grid place-items-center h-11 w-11 shrink-0 rounded-full"
                  style={{ backgroundColor: BOTTLE_SOFT, color: CREAM }}
                >
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: `${CREAM}99` }}
                  >
                    Mobile no.
                  </p>
                  <a
                    href="tel:+919899741741"
                    className="mt-1 block text-base sm:text-lg transition-colors"
                    style={{ fontWeight: 500, color: CREAM }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = CREAM)}
                  >
                    +91 9899-741-741
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span
                  className="grid place-items-center h-11 w-11 shrink-0 rounded-full"
                  style={{ backgroundColor: BOTTLE_SOFT, color: CREAM }}
                >
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: `${CREAM}99` }}
                  >
                    Working Hours
                  </p>
                  <p
                    className="mt-1 text-base sm:text-lg"
                    style={{ fontWeight: 500, color: CREAM }}
                  >
                    Monday – Saturday, 11:00 am – 7:00 pm IST
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <a
                href="mailto:executive.admissions@mastersunion.org"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base transition-colors group"
                style={{ backgroundColor: CREAM, color: BOTTLE_DEEP, fontWeight: 500 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = ACCENT;
                  e.currentTarget.style.color = BOTTLE_DEEP;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = CREAM;
                  e.currentTarget.style.color = BOTTLE_DEEP;
                }}
              >
                Talk to admissions
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.25}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
