
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Quote,
  MessageSquare,
  Sparkles,
  Star,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Student",
    department: "Computer Science",
    initials: "AM",
    color: "from-blue-500 to-indigo-600",
    quote:
      "Having one place to report campus problems makes the process much easier. You can submit an issue and follow its progress without having to chase multiple departments.",
    featured: true,
  },
  {
    name: "Sarah Williams",
    role: "Student",
    department: "Information Technology",
    initials: "SW",
    color: "from-violet-500 to-purple-600",
    quote:
      "The idea of being able to track a complaint and see updates is genuinely useful. It makes the whole process feel more organized.",
  },
  {
    name: "Daniel Carter",
    role: "Department Staff",
    department: "Campus Operations",
    initials: "DC",
    color: "from-cyan-500 to-blue-600",
    quote:
      "A structured complaint workflow can make it easier for departments to understand incoming issues and keep track of what needs attention.",
  },
  {
    name: "Emily Parker",
    role: "Student",
    department: "Business Administration",
    initials: "EP",
    color: "from-pink-500 to-rose-600",
    quote:
      "Clear communication matters. Having complaint details and updates together helps everyone stay on the same page.",
  },
  {
    name: "Ryan Cooper",
    role: "Administrator",
    department: "Campus Administration",
    initials: "RC",
    color: "from-emerald-500 to-teal-600",
    quote:
      "A centralized view of complaints and their progress can help administrators understand recurring issues and improve accountability.",
  },
  {
    name: "Olivia Bennett",
    role: "Student",
    department: "Electronics",
    initials: "OB",
    color: "from-orange-500 to-amber-600",
    quote:
      "A simple reporting experience is important. Students should be able to explain an issue without navigating a complicated process.",
  },
];

const values = [
  {
    icon: MessageSquare,
    title: "Every voice matters",
    description:
      "Every student should have a clear way to communicate campus concerns.",
  },
  {
    icon: ShieldCheck,
    title: "Trust through transparency",
    description:
      "Clear updates and traceable progress help build confidence in the process.",
  },
  {
    icon: Users,
    title: "Better together",
    description:
      "Students, staff, and administrators all contribute to a better campus.",
  },
];

export default function TestimonialsPage() {
  const featured = testimonials[0];
  const otherTestimonials = testimonials.slice(1);

  return (
    <main className="page-enter relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background effects */}
     {/*  <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute -left-40 top-[700px] h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div> */}

      {/* HERO */}
      <section className="page-enter-item relative mx-auto max-w-7xl px-6 pb-16 pt-4 md:px-10 md:pb-20 md:pt-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <Sparkles className="h-4 w-4" />
            Voices that matter
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Real voices.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Better campuses.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            A better campus starts with listening. Discover the perspectives
            that inspire a more transparent and connected complaint
            management experience.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2">
              <GraduationCap className="h-4 w-4 text-blue-500" />
              Student perspectives
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2">
              <Users className="h-4 w-4 text-indigo-500" />
              Staff perspectives
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="page-enter-item relative mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-card/80 p-7 shadow-2xl shadow-blue-950/5 backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                <Quote className="h-5 w-5" />
                Featured perspective
              </div>

              <blockquote className="mt-7 max-w-3xl text-2xl font-semibold leading-relaxed tracking-tight md:text-3xl lg:text-4xl">
                "{featured.quote}"
              </blockquote>

              <div className="mt-9 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${featured.color} text-sm font-bold text-white`}
                >
                  {featured.initials}
                </div>

                <div>
                  <p className="font-semibold">{featured.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {featured.role} · {featured.department}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden h-44 w-44 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/5 lg:flex">
              <Quote className="h-20 w-20 text-blue-500/40" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="page-enter-item relative border-y border-border/60 bg-muted/20 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Community perspectives
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Different roles. One shared goal.
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              A campus works better when everyone has a way to be heard.
              Here are some example perspectives from the people SaySo is
              designed to serve.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherTestimonials.map((item) => (
              <article
                key={item.initials}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="absolute right-6 top-6">
                  <Quote className="h-8 w-8 text-blue-500/20 transition group-hover:text-blue-500/40" />
                </div>

                <div className="flex items-center gap-1 text-blue-500">
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Community perspective
                  </span>
                </div>

                <p className="mt-7 flex-1 text-sm leading-8 text-muted-foreground">
                  "{item.quote}"
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-xs font-bold text-white`}
                  >
                    {item.initials}
                  </div>

                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.role} · {item.department}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="page-enter-item relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            What we believe
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Listening is where change begins.
          </h2>

          <p className="mt-5 leading-7 text-muted-foreground">
            SaySo is built around a simple idea: campus concerns deserve
            attention, communication, and meaningful action.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEEDBACK CTA */}
      <section className="page-enter-item relative px-6 pb-24 md:px-10 md:pb-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-7 py-16 text-center text-white shadow-2xl shadow-blue-900/20 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <MessageSquare className="h-7 w-7" />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight md:text-5xl">
              Have something to share?
            </h2>

            <p className="mt-5 leading-7 text-blue-100">
              Your feedback can help shape a better SaySo experience.
              Tell us what you think, share an idea, or simply say hello.
            </p>

            <Link
              href="/contact-us"
              className="group mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Share your feedback
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
