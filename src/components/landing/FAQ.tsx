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
    a: "9 operators, founders and brand builders from India's leading D2C ecosystem. They lead sessions, review your build each weekend, and sit on your final pitch panel.",
  },
  {
    q: "What is the time commitment?",
    a: "10 weekends across ~10 weeks at the Masters' Union campus in Gurugram, plus async work between sessions. Plan for 18 hours in-room and 4 to 6 hours of building per week.",
  },
  {
    q: "Will I actually have a live store and live ads?",
    a: "Yes. Storefront goes live in Week 5. Marketplace listings in Week 6. Performance campaigns in Week 7. Real money, real customers, real data.",
  },
  {
    q: "Who can apply?",
    a: "Undergraduates and working professionals interested in entrepreneurship, marketing or consumer brands. No prior startup experience required.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background py-28 lg:py-40 border-t border-border/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <h2
            className="font-display text-foreground text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.04em]"
            style={{ fontWeight: 500 }}
          >
            Questions, <span className="text-violet">answered.</span>
          </h2>
          <p className="mt-6 text-foreground/65 leading-relaxed text-lg max-w-md">
            Everything you need to know before you apply. Still curious? Drop us a line.
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
                <AccordionTrigger className="py-6 text-left font-display text-lg lg:text-xl hover:no-underline" style={{ fontWeight: 500 }}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-foreground/70 leading-relaxed pb-6 max-w-3xl">
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
