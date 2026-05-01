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
  return (
    <section id="faculty" className="relative bg-background text-foreground py-24 lg:py-32 overflow-hidden">
      <div aria-hidden className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.22), transparent)" }} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-display font-bold text-5xl lg:text-7xl leading-[0.98] tracking-tight text-balance">
              <span className="text-muted-foreground">Our</span>{" "}
              <span className="text-violet">faculty are</span>
              <br />
              operators &amp; <span className="text-violet">founders.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Founders, operators and brand builders behind some of India&apos;s most recognised D2C names. No tenured theorists. No guest lecturers.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a href="#" className="relative h-36 w-36 rounded-full badge-circle grid place-items-center group">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow text-primary-foreground/90">
                <defs>
                  <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text className="font-mono uppercase" fontSize="9" letterSpacing="3" fill="currentColor">
                  <textPath href="#circlePath">SEE ALL FACULTY · SEE ALL FACULTY · </textPath>
                </text>
              </svg>
              <ArrowUpRight className="h-7 w-7 text-primary-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-5">
          {faculty.map((f) => (
            <li key={f.name} className="rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/50 transition group shadow-card">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={f.photo}
                  alt={`${f.name}, ${f.role} faculty at Masters Union D2C Immersion`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-primary-foreground bg-primary px-2.5 py-1 rounded-full">
                  Faculty
                </span>
              </div>
              <div className="p-6 lg:p-7">
                <p className="font-display text-2xl leading-tight text-foreground">{f.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faculty;
