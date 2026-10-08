import { Mail, Phone, Clock } from "lucide-react";
import qrAsset from "@/assets/whatsapp-qr.png.asset.json";

// Bottle green palette (scoped to this section)
const BOTTLE = "#062119";
const BOTTLE_DEEP = "#03130E";
const BOTTLE_SOFT = "#0A2E23";
const CREAM = "#F3EFE6";
const ACCENT = "#C9A24B";

// WhatsApp community
const COMMUNITY_URL = "https://chat.whatsapp.com/CA86PochfwSJdhMF6n2wv2";
const WA_GREEN = "#1EAA5D";
const WA_GREEN_DEEP = "#0F7A41";
const WA_INK = "#1E232A";
const WA_MUTED = "#596573";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
          {/* Left - Heading + WhatsApp community */}
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

            {/* WhatsApp community QR card */}
            <div
              className="mt-6 max-w-sm rounded-2xl p-5"
              style={{ backgroundColor: CREAM, boxShadow: "0 18px 40px -20px rgba(0,0,0,0.7)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: WA_GREEN, color: "#FFFFFF" }}
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0">
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: WA_MUTED }}
                  >
                    Get live updates
                  </p>
                  <p
                    className="font-display text-base leading-tight sm:text-lg"
                    style={{ fontWeight: 600, color: WA_GREEN_DEEP }}
                  >
                    Join our WhatsApp community
                  </p>
                </div>
              </div>

              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block"
                aria-label="Join the Masters' Union D2C WhatsApp community"
              >
                <img
                  src={qrAsset.url}
                  alt="QR code to join the Masters' Union D2C WhatsApp community"
                  width={200}
                  height={200}
                  loading="lazy"
                  className="mx-auto h-auto w-[176px] rounded-lg sm:w-[192px]"
                  style={{ border: `1px solid ${WA_MUTED}22` }}
                />
              </a>

              <p
                className="mt-3 text-center text-[11px] leading-relaxed sm:text-xs"
                style={{ color: WA_MUTED }}
              >
                Scan this QR code using the WhatsApp camera to join our community
              </p>
            </div>
          </div>

          {/* Right - Contact grid */}
          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                Mon - Sat<br />9:00 am - 9:00 pm IST
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
