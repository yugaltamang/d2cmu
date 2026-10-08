import { Mail, Phone, Clock } from "lucide-react";
import qrUrl from "@/assets/whatsapp-qr.png";

// ---- Section palette (olive -> gold canvas, floating light cards) ----
const CANVAS_A = "#A2B871";
const CANVAS_B = "#C9B45C";
const CANVAS_C = "#E8A938";
const CARD = "#FFFFFF";
const CARD_MINT = "#F4FAF6";
const INK = "#16211C";
const MUTED = "#5B6B60";
const DIVIDER = "#E6E9E2";
const ICON_EDGE_A = "#62A48C";
const ICON_EDGE_B = "#CDB06D";

// ---- WhatsApp community ----
const COMMUNITY_URL = "https://chat.whatsapp.com/CA86PochfwSJdhMF6n2wv2";
const WA_GREEN = "#25D366";
const WA_GREEN_DEEP = "#128C4B";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Thin gradient ring around a solid white icon disc
const IconDisc = ({ children }: { children: React.ReactNode }) => (
  <span
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
    style={{
      padding: "1.5px",
      background: `linear-gradient(135deg, ${ICON_EDGE_A} 0%, ${ICON_EDGE_B} 100%)`,
    }}
  >
    <span
      className="flex h-full w-full items-center justify-center rounded-full"
      style={{ backgroundColor: CARD }}
    >
      {children}
    </span>
  </span>
);

// Dashed arrow that loops down and points at the QR code
const DashedArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 90" fill="none" className={className} aria-hidden="true">
    <path
      d="M112 8 C 98 44, 76 66, 26 48"
      stroke={WA_GREEN}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="6 9"
      opacity="0.8"
    />
    <path
      d="M40 37 L 24 48 L 41 58"
      stroke={WA_GREEN}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
  </svg>
);

// 4 x 6 dot matrix
const DotMatrix = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 62 42" className={className} aria-hidden="true">
    {Array.from({ length: 4 }).map((_, r) =>
      Array.from({ length: 6 }).map((_, c) => (
        <circle
          key={`${r}-${c}`}
          cx={4 + c * 11}
          cy={4 + r * 11}
          r="2.6"
          fill={WA_GREEN}
          opacity="0.35"
        />
      ))
    )}
  </svg>
);

const GetInTouch = () => {
  return (
    <section
      id="get-in-touch"
      className="relative py-10 sm:py-12 lg:py-14"
      style={{
        color: INK,
        backgroundImage: `linear-gradient(100deg, ${CANVAS_A} 0%, ${CANVAS_B} 48%, ${CANVAS_C} 100%)`,
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          {/* ---------- Contact card ---------- */}
          <div
            className="lg:col-span-7 rounded-[24px] p-6 sm:p-8 lg:p-9"
            style={{
              backgroundColor: CARD,
              boxShadow: "0 24px 60px -34px rgba(18,40,25,0.45)",
            }}
          >
            <h2
              className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.08] tracking-[-0.03em]"
              style={{ fontWeight: 500, color: INK }}
            >
              Get in{" "}
              <span className="font-display italic" style={{ fontStyle: "italic", fontWeight: 300 }}>
                Touch
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-[15px]" style={{ color: MUTED }}>
              Admissions Office
            </p>

            <hr className="my-5 sm:my-6 border-0 h-px" style={{ backgroundColor: DIVIDER }} />

            <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr] sm:gap-6">
              <div className="flex items-center gap-3 min-w-0">
                <IconDisc>
                  <Mail className="h-[17px] w-[17px]" strokeWidth={1.6} style={{ color: INK }} />
                </IconDisc>
                <a
                  href="mailto:executive.admissions@mastersunion.org"
                  className="block text-[13px] sm:text-sm leading-snug break-words transition-colors"
                  style={{ fontWeight: 500, color: INK }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = WA_GREEN_DEEP)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = INK)}
                >
                  executive.admissions@mastersunion.org
                </a>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <IconDisc>
                  <Phone className="h-[17px] w-[17px]" strokeWidth={1.6} style={{ color: INK }} />
                </IconDisc>
                <a
                  href="tel:+919899741741"
                  className="text-[13px] sm:text-sm whitespace-nowrap transition-colors"
                  style={{ fontWeight: 500, color: INK }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = WA_GREEN_DEEP)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = INK)}
                >
                  +91 9899-741-741
                </a>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 sm:mt-5">
              <IconDisc>
                <Clock className="h-[17px] w-[17px]" strokeWidth={1.6} style={{ color: INK }} />
              </IconDisc>
              <p className="text-[13px] sm:text-sm leading-snug" style={{ fontWeight: 500, color: INK }}>
                Working Hours - Monday - Saturday, 9 AM - 9 PM IST
              </p>
            </div>
          </div>

          {/* ---------- WhatsApp community card ---------- */}
          <div
            className="relative lg:col-span-5 overflow-hidden rounded-[24px] p-6 sm:p-7"
            style={{
              backgroundColor: CARD_MINT,
              boxShadow: "0 24px 60px -34px rgba(18,40,25,0.45)",
              backgroundImage: `radial-gradient(ellipse 70% 60% at 8% 100%, rgba(226,245,235,0.95) 0%, transparent 60%), radial-gradient(ellipse 60% 55% at 100% 0%, rgba(226,245,235,0.8) 0%, transparent 55%)`,
            }}
          >
            {/* watermark bubble, cropped bottom-right */}
            <span
              className="pointer-events-none absolute -bottom-10 -right-8 h-44 w-44"
              style={{ color: WA_GREEN, opacity: 0.09 }}
            >
              <WhatsAppIcon className="h-full w-full" />
            </span>

            <div className="relative flex items-start gap-3">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: WA_GREEN, color: "#FFFFFF" }}
              >
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-[15px] sm:text-base" style={{ fontWeight: 600, color: INK }}>
                  Get Live Updates
                </p>
                <p className="text-[17px] sm:text-lg leading-tight" style={{ fontWeight: 700, color: WA_GREEN_DEEP }}>
                  Join Our WhatsApp Community
                </p>
              </div>
            </div>

            <DotMatrix className="pointer-events-none absolute left-4 top-1/2 h-[42px] w-[62px] -translate-y-1/2 sm:left-6" />

            <div className="relative mx-auto mt-5 w-fit">
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label="Join the Masters' Union D2C WhatsApp community"
              >
                <img
                  src={qrUrl}
                  alt="QR code to join the Masters' Union D2C WhatsApp community"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="h-auto w-[168px] rounded-xl sm:w-[184px]"
                />
              </a>
              <DashedArrow className="pointer-events-none absolute left-full top-1/2 h-[72px] w-[96px] -translate-y-[62%] pl-1" />
            </div>

            <p className="mt-4 text-center text-[11px] leading-relaxed sm:text-xs" style={{ color: MUTED }}>
              Scan this QR code using the WhatsApp camera
              <br className="hidden sm:block" /> to join our community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
