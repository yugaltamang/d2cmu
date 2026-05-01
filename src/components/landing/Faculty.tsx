import { useState } from "react";
import saksham from "@/assets/faculty/saksham-kotiya.webp";
import swarup from "@/assets/faculty/swarup-potta.webp";
import shubham from "@/assets/faculty/shubham-jain.webp";
import mansi from "@/assets/faculty/mansi-khandelwal.webp";
import ankit from "@/assets/faculty/ankit-aggarwal.webp";
import pranay from "@/assets/faculty/pranay-jindal.webp";
import upamanyu from "@/assets/faculty/upamanyu-chatterjee.webp";
import alok from "@/assets/faculty/alok-srivastava.webp";
import mohit from "@/assets/faculty/mohit-gulati.webp";
import { ArrowUpRight } from "lucide-react";

const faculty = [
  { name: "Saksham Kotiya", role: "D2C Operator", photo: saksham },
  { name: "Swarup Potta", role: "Brand Strategy", photo: swarup },
  { name: "Shubham Jain", role: "Performance Mktg", photo: shubham },
  { name: "Mansi Khandelwal", role: "Ecommerce Lead", photo: mansi },
  { name: "Ankit Aggarwal", role: "Growth", photo: ankit },
  { name: "Pranay Jindal", role: "Founder", photo: pranay },
  { name: "Upamanyu Chatterjee", role: "Operator", photo: upamanyu },
  { name: "Alok Srivastava", role: "Supply Chain", photo: alok },
  { name: "Mohit Gulati", role: "Brand Builder", photo: mohit },
];

const Faculty = () => {
  const [active, setActive] = useState(0);
  const current = faculty[active];

  return (
    <section id="faculty" className="relative bg-background text-foreground py-20 lg:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(closest-side, hsl(var(--mu-cyan) / 0.18), transparent)" }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-9">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Faculty</p>
            <h2 className="mt-4 font-display font-light text-4xl lg:text-6xl leading-[0.98] tracking-tight text-balance">
              <span className="text-violet">Operators</span> &amp; <span className="text-violet">founders.</span>
              <span className="text-muted-foreground"> Not theorists.</span>
            </h2>
          </div>
          <p className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed">
            Behind India's most recognised D2C names.
          </p>
        </div>

        {/* Spotlight + list */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Spotlight image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-card border border-border shadow-card">
              {faculty.map((f, i) => (
                <img
                  key={f.name}
                  src={f.photo}
                  alt={`${f.name}, ${f.role}`}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  Faculty · {String(active + 1).padStart(2, "0")} / {String(faculty.length).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display font-light text-3xl lg:text-4xl leading-tight">
                  {current.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{current.role}</p>
              </div>
            </div>
          </div>

          {/* List */}
          <ul className="lg:col-span-7 lg:pl-4 self-center divide-y divide-border border-y border-border">
            {faculty.map((f, i) => {
              const isActive = i === active;
              return (
                <li key={f.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`w-full grid grid-cols-12 gap-3 items-baseline py-4 lg:py-5 text-left transition-colors ${
                      isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    <span className="col-span-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`col-span-7 font-display leading-none transition-all ${
                        isActive
                          ? "text-violet text-3xl lg:text-4xl"
                          : "text-2xl lg:text-3xl"
                      }`}
                    >
                      {f.name}
                    </span>
                    <span className="col-span-3 text-xs lg:text-sm text-muted-foreground">{f.role}</span>
                    <span className="col-span-1 text-right">
                      <ArrowUpRight
                        className={`inline h-4 w-4 transition-all ${
                          isActive ? "text-primary translate-x-0.5 -translate-y-0.5" : "text-muted-foreground/50"
                        }`}
                        strokeWidth={1.5}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
