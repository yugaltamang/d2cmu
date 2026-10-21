import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = { q: string; a: string };
type FaqGroup = { category: string; items: Faq[] };

const faqGroups: FaqGroup[] = [
  {
    category: "The programme",
    items: [
      {
        q: "What does outcome-driven really mean?",
        a: "Every weekend produces a tangible artefact that compounds into a real brand: a costing sheet, a Shopify store, a live ad campaign. By Week 10 you have a brand customers can buy from, not a slide deck.",
      },
      {
        q: "Do I need a startup idea before I join?",
        a: "Helpful, but not required. Week 1 is dedicated to identifying and validating a real D2C opportunity, so you can arrive idea-less and leave with one that's already pressure-tested.",
      },
      {
        q: "Who can apply?",
        a: "Undergraduates and working professionals interested in entrepreneurship, marketing or consumer brands. No prior startup experience required.",
      },
      {
        q: "What is the time commitment?",
        a: "10 weekends across ~10 weeks at the Masters' Union campus in Gurugram, plus async work between sessions. Plan for 40 hours in the classroom and 4 to 6 hours of building per week.",
      },
      {
        q: "Who teaches the cohort?",
        a: "A deep pool of operators, founders and brand builders who've actually built brands from India's leading D2C ecosystem. They lead sessions, review your build each weekend, and sit on your final pitch panel.",
      },
    ],
  },
  {
    category: "Your brand & budget",
    items: [
      {
        q: "Will I actually have a live store and live ads?",
        a: "Yes. Storefront goes live in Week 3. Performance campaigns in Week 5. Marketplace listings in Week 6. Real money, real customers, real data.",
      },
      {
        q: "Who pays for inventory, ads, store setup and other business costs?",
        a: "You do. Product research, sampling, manufacturing, inventory, Shopify and domain costs, ad budgets, influencer collaborations, packaging, shipping and fulfilment are borne by the participant and are not included in the programme fee.",
      },
      {
        q: "How much extra budget should I plan beyond the fee?",
        a: "There's no single number - it depends on your product category, inventory decisions and marketing strategy. A small-range brand with limited ads costs very differently from one needing heavy manufacturing. Plan an execution budget separately from the programme fee.",
      },
    ],
  },
  {
    category: "Outcomes & support",
    items: [
      {
        q: "Are the advertised milestones (live store in 21 days, ₹1L+ revenue, 100+ orders) guaranteed?",
        a: "No. They are goals to work towards, not assured results. Outcomes depend on your category, pricing, resources and execution - and on the effort you put in.",
      },
      {
        q: "What if I don't hit those targets?",
        a: "There's no penalty. The focus is on learning to build, test assumptions and make informed decisions. Commercial outcomes depend on factors beyond the curriculum.",
      },
      {
        q: "How much one-to-one mentorship do I get?",
        a: "Three layers: three 30-minute Mentor Union sessions, a planned connect with a Masters' Union alumnus who's built a D2C brand, and uncapped calls with the programme's EIR, Saloni Gupta.",
      },
    ],
  },
  {
    category: "Pitch Day & investors",
    items: [
      {
        q: "Does everyone get to pitch to investors?",
        a: "Week 10 has a structured pitch process: an initial screening round, then shortlisted participants pitch to investors and VCs. You don't need a live product or revenue - ideation-stage ideas can pitch too.",
      },
      {
        q: "Will the programme introduce me to VCs and angel investors?",
        a: "The formal route is the Week 10 pitch. Several Masters and session leaders are themselves VCs and fund leaders, and you can build connections through Mentor Union and LinkedIn - but direct introductions outside the pitch process aren't guaranteed.",
      },
    ],
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
            Everything you&apos;d ask before sending an application. Pick a topic to see the
            questions. Still curious? Write to us.
          </p>
        </div>
        <div className="lg:col-span-7">
          <Accordion type="single" collapsible>
            {faqGroups.map((group, gi) => (
              <AccordionItem
                key={group.category}
                value={`cat-${gi}`}
                className="border-b border-border/60 first:border-t"
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <span className="flex flex-1 items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "hsl(96 75% 55%)" }}
                    />
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/70"
                      style={{ fontWeight: 500 }}
                    >
                      {group.category}
                    </span>
                    <span className="h-px flex-1 bg-border/50" />
                    <span className="shrink-0 font-mono text-[10px] text-foreground/35">
                      {group.items.length}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-3">
                  <div className="pl-3 sm:pl-5">
                    <Accordion type="single" collapsible>
                      {group.items.map((f, i) => (
                        <AccordionItem
                          key={i}
                          value={`cat-${gi}-item-${i}`}
                          className="border-b border-border/40 first:border-t"
                        >
                          <AccordionTrigger className="py-3.5 text-left font-display text-sm lg:text-base hover:no-underline" style={{ fontWeight: 500 }}>
                            {f.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-foreground/70 leading-relaxed pb-4 max-w-3xl">
                            {f.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
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
