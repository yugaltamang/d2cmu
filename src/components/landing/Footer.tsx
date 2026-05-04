import { Twitter, Instagram, Linkedin, Youtube, MapPin, Mail } from "lucide-react";
import muLogo from "@/assets/mu-logo.svg";

const cols = [
  {
    title: "About us",
    links: ["Experiences At The Union"],
  },
  {
    title: "Careers",
    links: [],
  },
  {
    title: "Academics",
    links: ["Postgraduate Programme", "Undergraduate Programme", "Executive Programme"],
  },
  {
    title: "Innovation",
    links: ["Student Entrepreneurship", "Faculty Research"],
  },
  {
    title: "Other Links",
    links: [
      "For Companies",
      "Jobs",
      "Become A Master",
      "Events",
      "Blog",
      "Policies and Resources",
      "Alumni",
    ],
  },
];

const socials = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Youtube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-14 pb-8">
        {/* Top: logo + nav columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#" className="inline-flex items-center">
              <img
                src={muLogo}
                alt="Masters' Union"
                width={140}
                height={28}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto invert"
              />
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="min-w-0">
              <h3 className="text-sm font-semibold tracking-wide text-background mb-4">
                {col.title}
              </h3>
              {col.links.length > 0 && (
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-background/65 hover:text-background transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Middle: accreditations + contact */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-8 border-t border-background/10">
          <div>
            <h4 className="text-sm font-semibold mb-5">Accreditations/Memberships</h4>
            <div className="flex items-center gap-5 flex-wrap">
              <span className="text-xs font-bold tracking-wider text-background/80 px-3 py-2 rounded border border-background/20">
                EFMD GLOBAL
              </span>
              <span className="text-xs font-bold tracking-wider text-background/80 px-3 py-2 rounded border border-background/20">
                AACSB
              </span>
              <span className="text-xs font-bold tracking-wider text-background/80 px-3 py-2 rounded border border-background/20">
                BSIS IMPACT
              </span>
            </div>
            <div className="mt-6 flex items-center gap-5">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end space-y-4 text-sm text-background/80">
            <p className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={1.75} />
              <span>
                DLF Cyberpark, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana, 122022
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              <a href="mailto:info@mastersunion.org" className="hover:text-background">
                info@mastersunion.org
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-background/10 flex flex-wrap items-center justify-between gap-3 text-xs text-background/55">
          <p>Copyright @ 2026 Masters&apos; Union</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-background">Privacy Policy</a>
            <a href="#" className="hover:text-background">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-background">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
