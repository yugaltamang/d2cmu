import muLogo from "@/assets/mu-logo.svg";

const cols = [
  {
    title: "Programme",
    links: ["Outcomes", "Curriculum", "Faculty", "FAQ", "Apply"],
  },
  {
    title: "Masters' Union",
    links: ["About", "Campus", "Other programmes", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["D2C playbook", "Brochure", "Alumni stories", "Blog", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="flex">
          <a href="#" className="inline-flex items-center gap-3">
            <img src={muLogo} alt="Masters' Union" className="h-7 sm:h-8 w-auto invert" />
          </a>
        </div>

        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-foreground/55">
          <p>&copy; Masters&apos; Union / D2C Immersion 2026</p>
          <p>Gurugram, India · Outcome-driven, by design.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
