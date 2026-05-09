import saksham from "@/assets/faculty/saksham-kotiya-new.webp";
import arjun from "@/assets/faculty/arjun-vaidya.webp";
import ishaan from "@/assets/faculty/ishaan-suri.webp";
import bipin from "@/assets/faculty/bipin-kalra.webp";
import sumit from "@/assets/faculty/sumit-vijapure.webp";

const ACCENT = "#B7F24A"; // editorial lime highlight

type Member = {
  firstName: string;
  lastName: string;
  role: string;
  caption: string;
  photo: string;
};

const faculty: Member[] = [
  {
    firstName: "Saksham",
    lastName: "Kotiya",
    role: "Head, Entrepreneurship & Investment",
    caption: "Builds the founders who build the brands.",
    photo: saksham,
  },
  {
    firstName: "Arjun",
    lastName: "Vaidya",
    role: "Partner, V3 Ventures",
    caption: "Backing India's next generation of D2C.",
    photo: arjun,
  },
  {
    firstName: "Ishaan",
    lastName: "Suri",
    role: "Founder, Ecom Edge",
    caption: "Turning catalogs into compounding revenue.",
    photo: ishaan,
  },
  {
    firstName: "Bipin",
    lastName: "Kalra",
    role: "Shopify Expert",
    caption: "From storefront to scale, in one stack.",
    photo: bipin,
  },
  {
    firstName: "Sumit",
    lastName: "Vijapure",
    role: "Amazon Operator",
    caption: "Marketplace mechanics, decoded.",
    photo: sumit,
  },
];

const PosterCard = ({ m, index }: { m: Member; index: number }) => {
  const number = String(index + 1).padStart(2, "0");
  return (
    <article className="group relative overflow-hidden bg-[#0d0d0d] aspect-[3/4] w-full">
      {/* photo */}
      <img
        src={m.photo}
        alt={`${m.firstName} ${m.lastName}, ${m.role}`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      {/* moody color wash */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,16,12,0.55) 0%, rgba(20,40,28,0.35) 45%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(183,242,74,0.25), transparent 55%)",
        }}
      />

      {/* top meta row */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white/75 font-mono text-[10px] uppercase tracking-[0.28em] z-20">
        <span>Faculty</span>
        <span>{m.role.split(",")[0]}</span>
        <span>№ {number}</span>
      </div>

      {/* big italic name */}
      <div className="absolute left-0 right-0 top-[12%] z-20 px-5">
        <h3
          className="text-white leading-[0.88] tracking-[-0.02em]"
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)",
            textShadow: "0 4px 20px rgba(0,0,0,0.55)",
          }}
        >
          {m.firstName}
        </h3>
        <h3
          className="text-white leading-[0.88] tracking-[-0.02em] -mt-1"
          style={{
            fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)",
            textShadow: "0 4px 20px rgba(0,0,0,0.55)",
          }}
        >
          {m.lastName}
        </h3>

        {/* role highlight chip */}
        <span
          className="inline-block mt-3 px-2 py-[3px] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em]"
          style={{ background: ACCENT, color: "#0a0a0a" }}
        >
          {m.role}
        </span>
      </div>

      {/* bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-5 pt-10 bg-gradient-to-t from-black via-black/85 to-transparent">
        <p
          className="text-white text-[13px] sm:text-sm leading-snug"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
          }}
        >
          <span style={{ color: ACCENT }}>“</span>
          {m.caption}
          <span style={{ color: ACCENT }}>”</span>
        </p>
        <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.28em] text-white/55">
          <span>Cohort 01 / 2026</span>
          <span className="flex items-center gap-2">
            <span className="h-px w-6" style={{ background: ACCENT }} />
            D2C
          </span>
        </div>
      </div>
    </article>
  );
};

const Faculty = () => {
  return (
    <section
      id="faculty"
      className="relative bg-[#070707] py-16 sm:py-20 lg:py-28 border-t border-border/40 overflow-hidden"
    >
      {/* texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(183,242,74,0.5), transparent 40%), radial-gradient(circle at 88% 92%, rgba(255,255,255,0.4), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/55">
              The Faculty / Editorial 01
            </p>
            <h2
              className="mt-4 max-w-3xl text-white leading-[1] tracking-[-0.02em]"
              style={{
                fontFamily:
                  '"Playfair Display", "Cormorant Garamond", Georgia, serif',
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: "clamp(2rem, 5.5vw, 4rem)",
              }}
            >
              Taught by people who&apos;ve{" "}
              <span style={{ color: ACCENT }}>actually shipped</span> it.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 leading-relaxed">
            Founders and operators who&apos;ve built India&apos;s biggest D2C
            brands. They lead sessions, review your build, and sit on your pitch
            panel.
          </p>
        </div>

        {/* Grid of poster cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {faculty.map((m, i) => (
            <PosterCard key={m.firstName + m.lastName} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
