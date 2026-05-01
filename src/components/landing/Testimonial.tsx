import saksham from "@/assets/faculty/saksham-kotiya.webp";

const Testimonial = () => {
  return (
    <section className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          From the faculty
        </p>

        <blockquote
          className="mt-8 font-display text-foreground text-balance"
          style={{
            fontWeight: 300,
            fontSize: "clamp(2rem, 5vw, 4.25rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          <span className="text-violet">“</span>
          Most programs teach you the deck. We make you ship the brand —
          packaging, store, ads, customers.{" "}
          <span className="italic text-violet">
            By Week 10 you've defended a P&amp;L, not a hypothesis.
          </span>
          <span className="text-violet">”</span>
        </blockquote>

        <figcaption className="mt-12 flex items-center gap-5">
          <img
            src={saksham}
            alt="Saksham Kotiya"
            className="h-14 w-14 rounded-full object-cover border border-border"
          />
          <div>
            <p className="font-display text-lg text-foreground" style={{ fontWeight: 400 }}>
              Saksham Kotiya
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
              D2C Operator · Faculty Lead
            </p>
          </div>
        </figcaption>
      </div>
    </section>
  );
};

export default Testimonial;
