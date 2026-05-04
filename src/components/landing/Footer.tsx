import { Twitter, Instagram, Linkedin, Youtube, MapPin, Mail } from "lucide-react";
import muLogo from "@/assets/mu-logo.svg";

const BASE = "https://mastersunion.org";

const cols = [
  {
    title: "About us",
    titleHref: `${BASE}/about-us`,
    links: [{ label: "Experiences At The Union", href: `${BASE}/experiences-at-the-union` }],
  },
  {
    title: "Careers",
    titleHref: `${BASE}/careers`,
    links: [],
  },
  {
    title: "Academics",
    links: [
      { label: "Postgraduate Programme", href: `${BASE}/postgraduate-programme` },
      { label: "Undergraduate Programme", href: `${BASE}/undergraduate-programme` },
      { label: "Executive Programme", href: `${BASE}/executive-programme` },
    ],
  },
  {
    title: "Innovation",
    links: [
      { label: "Student Entrepreneurship", href: `${BASE}/student-entrepreneurship` },
      { label: "Faculty Research", href: `${BASE}/faculty-research` },
    ],
  },
  {
    title: "Other Links",
    links: [
      { label: "For Companies", href: `${BASE}/for-companies` },
      { label: "Jobs", href: `${BASE}/jobs` },
      { label: "Become A Master", href: `${BASE}/become-a-master` },
      { label: "Events", href: `${BASE}/events` },
      { label: "Blog", href: `${BASE}/blog` },
      { label: "Policies and Resources", href: `${BASE}/policies-and-resources` },
      { label: "Alumni", href: `${BASE}/alumni` },
    ],
  },
];

const socials = [
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com/mastersunion_" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mastersunion.co/" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/school/mastersunion/" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@MastersUnion" },
];

const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-14 pb-8">
        {/* Top: logo + nav columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href={BASE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center" aria-label="Masters' Union home">
              <img
                src={muLogo}
                alt="Masters' Union"
                width={220}
                height={44}
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-14 w-auto invert"
              />
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="min-w-0">
              <h3 className="text-sm font-semibold tracking-wide text-foreground mb-4">
                {col.titleHref ? (
                  <a href={col.titleHref} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    {col.title}
                  </a>
                ) : (
                  col.title
                )}
              </h3>
              {col.links.length > 0 && (
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground/65 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Middle: accreditations + contact */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 pt-8 border-t border-border/10">
          <div>
            <div className="flex items-center gap-5">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end space-y-4 text-sm text-foreground/80">
            <p className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={1.75} />
              <span>
                DLF Cyberpark, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana, 122022
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              <a href="mailto:info@mastersunion.org" className="hover:text-foreground">
                info@mastersunion.org
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/10 flex flex-wrap items-center justify-between gap-3 text-xs text-foreground/55">
          <p>Copyright @ 2026 Masters&apos; Union</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-foreground">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
