
"use client";

import { useEffect, useRef } from "react";
import {
  Quote,
  GraduationCap,
  Users,
  ShieldCheck,
  Building2,
  BookOpen,
  Wrench,
} from "lucide-react";

const testimonials = [
  {
    role: "Student",
    category: "STUDENT EXPERIENCE",
    quote:
      "Reporting campus issues feels much easier when everything is available in one place.",
    initials: "ST",
    icon: GraduationCap,
  },
  {
    role: "Staff",
    category: "STAFF EXPERIENCE",
    quote:
      "Having assigned complaints in one dashboard makes it easier to manage daily tasks.",
    initials: "SF",
    icon: Users,
  },
  {
    role: "Administrator",
    category: "ADMIN EXPERIENCE",
    quote:
      "A centralized view gives administrators better visibility into complaint progress.",
    initials: "AD",
    icon: ShieldCheck,
  },
  {
    role: "Student",
    category: "STUDENT EXPERIENCE",
    quote:
      "Being able to follow a complaint after submitting it makes the process clearer.",
    initials: "ST",
    icon: BookOpen,
  },
  {
    role: "Staff",
    category: "STAFF EXPERIENCE",
    quote:
      "Clear assignments help staff understand which issues need their attention.",
    initials: "SF",
    icon: Wrench,
  },
  {
    role: "Campus community",
    category: "CAMPUS EXPERIENCE",
    quote:
      "A structured complaint process can help create a more responsive campus.",
    initials: "CC",
    icon: Building2,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".testimonial-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative isolate overflow-hidden py-20 sm:py-24"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[120px] sm:size-[500px]"
        aria-hidden="true"
      />

      {/* Heading */}
      <div className="testimonial-reveal mx-auto max-w-3xl px-5 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-blue-500 sm:text-xs">
          <span className="size-2 rounded-full bg-blue-500" />
          VOICES OF THE CAMPUS
        </div>

        <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
          Built around people.
          <br />
          <span className="text-blue-500">Driven by feedback.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base">
          A better complaint management experience starts with
          understanding the people who use it.
        </p>
      </div>

      {/* Testimonial cards */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-3 px-5 sm:grid-cols-2 sm:gap-4 sm:px-6 lg:grid-cols-3">
        {testimonials.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={`${item.category}-${index}`}
              style={{
                transitionDelay: `${(index % 3) * 120}ms`,
              }}
              className="testimonial-reveal group relative flex min-h-[205px] flex-col justify-between overflow-hidden rounded-2xl border bg-card/60 p-5 backdrop-blur-xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_10px_35px_rgba(37,99,235,0.08)] sm:min-h-[215px] sm:p-6"
            >
              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-blue-500/[0.05] blur-3xl transition-all duration-700 group-hover:bg-blue-500/[0.13]" />

              {/* Card top */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex size-9 items-center justify-center rounded-xl border bg-muted/50">
                    <Icon className="size-4 text-blue-500" />
                  </div>

                  <span className="text-[10px] font-medium tracking-wider text-muted-foreground">
                    {item.category}
                  </span>
                </div>

                <div className="mt-5">
                  <Quote className="mb-2 size-5 text-blue-500/50" />

                  <p className="text-sm leading-6 text-foreground/85">
                    {item.quote}
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div className="relative mt-5 flex items-center gap-3 border-t pt-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[10px] font-semibold text-blue-500">
                  {item.initials}
                </div>

                <div>
                  <p className="text-xs font-semibold">{item.role}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    SaySo community
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="testimonial-reveal mt-8 text-center text-xs text-muted-foreground">
        Making campus feedback easier to share and act on.
      </p>
    </section>
  );
}
