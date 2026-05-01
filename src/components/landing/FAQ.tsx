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
    <section id="faq" className="py-24 lg:py-32 bg-card border-y border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">FAQ</p>
        <h2 className="mt-4 font-display font-bold text-5xl lg:text-6xl leading-[0.95] tracking-tight">
          Honest <span className="italic text-violet">answers.</span>
        </h2>
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border first:border-t">
              <AccordionTrigger className="py-6 text-left font-display text-xl lg:text-2xl hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 max-w-3xl">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
