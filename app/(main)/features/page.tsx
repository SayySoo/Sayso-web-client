
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  Filter,
  LayoutDashboard,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  Tags,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import Navbar from "@/components/landing/navbar";

const features = [
  {
    number: "01",
    title: "Simple complaint submission",
    description:
      "Report campus problems through a structured form. Add descriptions, select categories, and provide the details needed to understand the issue.",
    icon: FileText,
    tag: "For students",
    size: "large",
  },
  {
    number: "02",
    title: "Real-time status tracking",
    description:
      "Know what is happening with your complaint. Follow its journey from submission and assignment to investigation and resolution.",
    icon: Clock3,
    tag: "Stay informed",
    size: "small",
  },
  {
    number: "03",
    title: "Smart department assignment",
    description:
      "Complaints can be organized and routed to the relevant department, helping the right team take responsibility.",
    icon: Workflow,
    tag: "Organized workflow",
    size: "small",
  },
  {
    number: "04",
    title: "Centralized communication",
    description:
      "Keep complaint-related discussions and updates together. Students and staff can follow the conversation without losing important context.",
    icon: MessageSquare,
    tag: "Clear communication",
    size: "large",
  },
  {
    number: "05",
    title: "Complete complaint history",
    description:
      "Maintain a record of status changes and activity so complaint progress remains traceable.",
    icon: ClipboardList,
    tag: "Transparency",
    size: "small",
  },
  {
    number: "06",
    title: "Organized categorization",
    description:
      "Use categories and tags to keep complaints structured and make it easier to identify recurring campus issues.",
    icon: Tags,
    tag: "Better organization",
    size: "small",
  },
  {
    number: "07",
    title: "Role-based access",
    description:
      "Separate student and staff experiences with access based on their roles and responsibilities.",
    icon: ShieldCheck,
    tag: "Access control",
    size: "large",
  },
  {
    number: "08",
    title: "Administrative overview",
    description:
      "Give administrators a centralized view of complaint activity and departmental progress to support better oversight.",
    icon: ChartNoAxesCombined,
    tag: "For administrators",
    size: "large",
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Less friction",
    description: "A structured way to report issues without unnecessary steps.",
  },
  {
    icon: Bell,
    title: "Better visibility",
    description: "Clear complaint statuses and updates throughout the process.",
  },
  {
    icon: Users,
    title: "Shared responsibility",
    description: "Students, staff, and administrators work through one system.",
  },
];

export default function FeaturesPage() {
  return (
   <>
    
    <main className="page-enter relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background effects */}
   
     {/*  <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[130px]" />
        <div className="absolute -left-40 top-[900px] h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div>
 */}
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-4 md:px-10 md:pb-28 md:pt-6">
        
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <Sparkles className="h-4 w-4" />
            Everything you need, in one place
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Powerful features.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Meaningful change.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            From reporting a problem to seeing it resolved, SaySo brings
            everything together in one organized campus complaint management
            platform.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/how-it-works"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 text-sm font-semibold transition hover:bg-muted"
            >
              How it works
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Feature preview */}
        <div className="mx-auto mt-20 max-w-5xl rounded-3xl border border-border/70 bg-card/70 p-6 shadow-2xl shadow-blue-950/5 backdrop-blur-xl md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                The SaySo experience
              </p>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                Everything connected. Nothing overlooked.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A central place to manage the complete complaint lifecycle.
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
              <LayoutDashboard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Submit", icon: FileText, color: "text-blue-500" },
              { label: "Assign", icon: Workflow, color: "text-indigo-500" },
              { label: "Track", icon: Search, color: "text-violet-500" },
              { label: "Resolve", icon: CheckCircle2, color: "text-emerald-500" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="relative flex flex-col items-center rounded-2xl border border-border bg-background px-4 py-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>

                  <p className="mt-3 text-sm font-semibold">
                    {item.label}
                  </p>

                  {index !== 3 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="relative border-y border-border/60 bg-muted/20 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Platform capabilities
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Everything has its place.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Purposeful tools for students, staff, and administrators.
                Each feature supports a more transparent complaint resolution
                process.
              </p>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card md:flex">
              <Filter className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/5 ${
                    feature.size === "large" ? "lg:col-span-1" : ""
                  }`}
                >
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-blue-500/10" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition group-hover:bg-blue-500/15">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>

                    <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground">
                      {feature.number}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <span className="inline-flex rounded-full border border-blue-500/15 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                      {feature.tag}
                    </span>

                    <h3 className="mt-4 text-xl font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Why SaySo
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Designed around people.
          </h2>

          <p className="mt-5 leading-7 text-muted-foreground">
            Technology should make the process easier for everyone involved,
            not add another layer of complexity.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-7 transition hover:border-blue-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 pb-24 md:px-10 md:pb-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 px-7 py-16 text-center text-white shadow-2xl shadow-blue-900/20 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Sparkles className="h-7 w-7" />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight md:text-5xl">
              Make every voice count.
            </h2>

            <p className="mt-5 leading-7 text-blue-100">
              Better reporting. Clearer communication. More accountable
              resolutions. Start making your campus a better place with SaySo.
            </p>

            <Link
              href="/sign-up"
              className="group mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Get started with SaySo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
   </>
  );
}
