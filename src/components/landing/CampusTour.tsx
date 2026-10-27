import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tours = [
  { id: "cds", label: "CDS Tower", url: "https://my.matterport.com/show/?m=H94FKdNQbTi&play=1&brand=1" },
  { id: "cds-second", label: "CDS Tower - 2nd Floor", url: "https://my.matterport.com/show/?m=zjAw7AksqvZ" },
  { id: "tower-a", label: "Tower A", url: "https://my.matterport.com/show/?m=fvbzUtwNH1B" },
  { id: "tower-c", label: "Tower C", url: "https://my.matterport.com/show/?m=jQcZmR1BxFc&play=1&brand=1" },
  { id: "auditorium", label: "Auditorium", url: "https://s3.mastersunion.link/assets/mu-vr/index.html" },
  { id: "food-court", label: "Food Court", url: "https://s3.mastersunion.link/assets/food-court/index.html" },
];

const CampusTour = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTour, setActiveTour] = useState(tours[0].id);
  const [inView, setInView] = useState(false);
  const [loadedTour, setLoadedTour] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setInView(false);
        setLoadedTour(null);
      }
    }, { rootMargin: "300px 0px" });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const changeTour = (value: string) => {
    setLoadedTour(null);
    setActiveTour(value);
  };

  return (
    <section id="campus" ref={sectionRef} aria-labelledby="campus-heading" className="campus-tour-section border-t border-border/40 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1.5 sm:px-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70">Our campus</span>
            </div>
            <h2 id="campus-heading" className="campus-tour-heading font-display text-[28px] font-medium leading-[1.05] tracking-normal sm:text-[40px] lg:text-[56px]">
              World-class Campus in the <span className="text-violet">Heart of Gurugram</span>
            </h2>
          </div>
          <Button asChild className="btn-pill-light h-auto shrink-0">
            <a href="https://mastersunion.org/book-a-campus-tour" target="_blank" rel="noopener noreferrer">
              Book a Visit <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>

        <Tabs value={activeTour} onValueChange={changeTour} className="mt-8 w-full">
          <div className="overflow-x-auto rounded-lg">
            <TabsList aria-label="Campus locations" className="campus-tour-tabs flex h-auto w-max min-w-full justify-between gap-4 rounded-lg border border-border px-4 py-3 lg:gap-8 lg:px-6">
              {tours.map((tour) => (
                <TabsTrigger key={tour.id} value={tour.id} className="campus-tour-tab min-h-11 shrink-0 rounded-none px-1 py-2 font-display text-sm font-medium tracking-normal lg:text-base">
                  {tour.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {tours.map((tour) => (
            <TabsContent key={tour.id} value={tour.id} className="relative mt-6 h-[65vh] min-h-[360px] max-h-[760px] overflow-hidden rounded-lg bg-background sm:min-h-[400px]">
              {loadedTour !== tour.id && (
                <div role="status" className="pointer-events-none absolute inset-0 flex items-center justify-center gap-3 text-sm text-muted-foreground">
                  <LoaderCircle className="h-5 w-5 motion-safe:animate-spin" aria-hidden="true" />
                  Loading 360° tour…
                </div>
              )}
              {inView && activeTour === tour.id && (
                <iframe
                  key={tour.id}
                  src={tour.url}
                  title={`${tour.label} 360° tour`}
                  className="relative block h-full w-full border-0"
                  allow="autoplay; fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
                  allowFullScreen
                  onLoad={() => setLoadedTour(tour.id)}
                />
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CampusTour;