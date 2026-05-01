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

const Scribble = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 60" className={className} aria-hidden fill="none">
    <path
      d="M4 30 C 18 8, 32 52, 50 24 S 80 50, 96 22 S 118 38, 116 30"
      stroke="hsl(var(--lime))"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const FAQ = () => {
  return (
    <section id="faq" className="bg-[hsl(var(--paper))] text-[hsl(var(--ink))] py-16 sm:py-20 lg:py-28 border-t-2 border-[hsl(var(--ink))]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between gap-3 pb-4 border-b-2 border-[hsl(var(--ink))]">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold">
            ▣ FAQ · Fine Print
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-[hsl(var(--ink))]/55">
            Plain Words · No Spin
          </span>
        </div>

        <div className="mt-10 sm:mt-14 grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <h2
              className="font-sans uppercase text-[hsl(var(--ink))] text-[clamp(2rem,5.5vw,4rem)] leading-[0.9] tracking-[-0.045em]"
              style={{ fontWeight: 900 }}
            >
              The fine print,{" "}
              <span className="relative inline-block">
                in plain words.
                <Scribble className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-[18px] sm:h-[28px]" />
              </span>
            </h2>
            <p className="mt-5 text-[hsl(var(--ink))]/70 leading-relaxed text-sm sm:text-base max-w-md">
              Everything you&apos;d ask before sending an application. Still curious? Write to us.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-[hsl(var(--ink))] text-[hsl(var(--paper))] px-3 py-2 font-sans text-[10px] uppercase tracking-[0.3em] font-bold">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(var(--lime))" }} />
              hello@mu.school
            </div>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b-2 border-[hsl(var(--ink))] first:border-t-2"
                >
                  <AccordionTrigger className="py-5 text-left font-sans uppercase text-[hsl(var(--ink))] text-base lg:text-[17px] tracking-[-0.01em] font-bold hover:no-underline group">
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-[hsl(var(--ink))]/45 font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[hsl(var(--ink))]/75 leading-relaxed pb-5 max-w-3xl pl-9">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
