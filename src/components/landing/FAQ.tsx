import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does outcome-driven really mean?",
    a: "Every weekend produces a tangible artefact that compounds into a real brand: a costing sheet, a Shopify store, a live ad campaign. By Week 10 you have a brand customers can buy from, not a slide deck.",
  },
  {
    q: "Do I need a startup idea before I join?",
    a: "Helpful, but not required. Week 1 is dedicated to identifying and validating a real D2C opportunity, so you can arrive idea-less and leave with one that's already pressure-tested.",
  },
  {
    q: "Who teaches the cohort?",
    a: "A deep pool of operators, founders and brand builders who've actually built brands from India's leading D2C ecosystem. They lead sessions, review your build each weekend, and sit on your final pitch panel.",
  },
  {
    q: "What is the time commitment?",
    a: "10 weekends across ~10 weeks at the Masters' Union campus in Gurugram, plus async work between sessions. Plan for 40 hours in the classroom and 4 to 6 hours of building per week.",
  },
  {
    q: "Will I actually have a live store and live ads?",
    a: "Yes. Storefront goes live in Week 3. Performance campaigns in Week 5. Marketplace listings in Week 6. Real money, real customers, real data.",
  },
  {
    q: "Who can apply?",
    a: "Undergraduates and working professionals interested in entrepreneurship, marketing or consumer brands. No prior startup experience required.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background py-12 sm:py-16 lg:py-24 border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-5">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-3 sm:px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(96 75% 55%)" }} />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
              FAQ
            </span>
          </div>

          <h2
            className="font-display text-foreground text-[clamp(1.75rem,5.5vw,3.5rem)] leading-[1.05] tracking-[-0.035em]"
            style={{ fontWeight: 500 }}
          >
            The fine print, <span className="text-violet">in plain words.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-foreground/65 leading-relaxed text-sm sm:text-base max-w-md">
            Everything you&apos;d ask before sending an application. Still curious? Write to us.
          </p>
        </div>
        <div className="lg:col-span-7">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/60 first:border-t"
              >
                <AccordionTrigger className="py-4 text-left font-display text-base lg:text-lg hover:no-underline" style={{ fontWeight: 500 }}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/70 leading-relaxed pb-5 max-w-3xl">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
