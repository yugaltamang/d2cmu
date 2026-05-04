import { Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import getInTouchImg from "@/assets/get-in-touch.jpg";

const GetInTouch = () => {
  return (
    <section
      id="get-in-touch"
      className="relative bg-white text-neutral-900 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] aspect-[4/5] sm:aspect-[5/6] bg-neutral-100">
              <img
                src={getInTouchImg}
                alt="Get in touch with the D2C admissions team"
                loading="lazy"
                decoding="async"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              Admissions Office
            </p>
            <h2
              className="mt-4 sm:mt-5 font-display text-[clamp(2rem,6vw,4rem)] leading-[1.05] tracking-[-0.04em] text-neutral-900"
              style={{ fontWeight: 500 }}
            >
              Get in <span className="text-violet">Touch</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm sm:text-base text-neutral-600 leading-relaxed">
              Have questions about the programme, eligibility, or admissions process? Our team is here to help — reach out and we&apos;ll get back to you shortly.
            </p>

            <ul className="mt-8 sm:mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-neutral-100 text-neutral-900">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Email ID
                  </p>
                  <a
                    href="mailto:executive.admissions@mastersunion.org"
                    className="mt-1 block text-base sm:text-lg text-neutral-900 hover:text-violet transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    executive.admissions@mastersunion.org
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-neutral-100 text-neutral-900">
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Mobile no.
                  </p>
                  <a
                    href="tel:+919899741741"
                    className="mt-1 block text-base sm:text-lg text-neutral-900 hover:text-violet transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    +91 9899-741-741
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 shrink-0 rounded-full bg-neutral-100 text-neutral-900">
                  <Clock className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                    Working Hours
                  </p>
                  <p className="mt-1 text-base sm:text-lg text-neutral-900" style={{ fontWeight: 500 }}>
                    Monday – Saturday, 11:00 am – 7:00 pm IST
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <a
                href="mailto:executive.admissions@mastersunion.org"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-6 py-3 text-sm sm:text-base hover:bg-neutral-800 transition-colors group"
                style={{ fontWeight: 500 }}
              >
                Talk to admissions
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2.25}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
