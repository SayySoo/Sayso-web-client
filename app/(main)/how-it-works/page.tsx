
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import Navbar from "@/components/landing/navbar";

const steps = [
  {
    number: "01",
    title: "Submit your complaint",
    description:
      "Found something that needs attention? Submit a complaint with a clear description, category, and relevant details.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Your complaint gets assigned",
    description:
      "Your complaint is routed to the appropriate department so the right team can review and handle it.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "The team investigates",
    description:
      "Assigned staff review the issue, add updates, and work towards a practical resolution.",
    icon: Search,
  },
  {
    number: "04",
    title: "Track every update",
    description:
      "Follow the progress of your complaint through its status history. Stay informed without chasing people.",
    icon: MessageSquare,
  },
  {
    number: "05",
    title: "Get it resolved",
    description:
      "Once the issue is addressed, the complaint is marked resolved. You can see the outcome and closure details.",
    icon: CheckCircle2,
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Transparent process",
    description:
      "Every complaint has a clear status, so you know where things stand.",
  },
  {
    icon: Users,
    title: "Right department",
    description:
      "Complaints reach the relevant team instead of getting lost between departments.",
  },
  {
    icon: ClipboardList,
    title: "Organized records",
    description:
      "Descriptions, comments, and status history stay together in one place.",
  },
  {
    icon: UserCheck,
    title: "Accountability",
    description:
      "A structured workflow helps teams take ownership and follow through.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="page-enter relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background decoration */}
   {/*   <Navbar/> */}
      {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -left-40 top-[700px] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div> */}

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-4 pb-16 md:px-10 md:pt-6 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <Sparkles className="h-4 w-4" />
            A better way to speak up
          </div>

         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            From problem to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              solution.
            </span>
            <br />
            Every step matters.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            SaySo makes campus problem reporting simple, transparent, and
            accountable. Raise an issue, follow its progress, and know when
            action is taken.
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
              href="/features"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 text-sm font-semibold transition hover:bg-muted"
            >
              Explore features
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* PROCESS PREVIEW */}
        <div className="mx-auto mt-20 max-w-5xl rounded-3xl border border-border/70 bg-card/70 p-6 shadow-2xl shadow-blue-950/5 backdrop-blur-xl md:p-10">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                The SaySo workflow
              </p>
              <h2 className="mt-2 text-xl font-bold md:text-2xl">
                One connected process
              </h2>
            </div>

            <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 sm:flex">
              <Workflow className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="font-semibold">Student</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Reports an issue
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                <Workflow className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="font-semibold">SaySo</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Routes and tracks it
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="font-semibold">Department</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Reviews and resolves
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-muted px-3 py-1.5">
              Submitted
            </span>
            <ArrowRight className="h-3 w-3" />
            <span className="rounded-full bg-muted px-3 py-1.5">
              Assigned
            </span>
            <ArrowRight className="h-3 w-3" />
            <span className="rounded-full bg-muted px-3 py-1.5">
              In progress
            </span>
            <ArrowRight className="h-3 w-3" />
            <span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-emerald-600">
              Resolved
            </span>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="relative border-y border-border/60 bg-muted/20 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Five steps. One better campus.
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              No confusing processes. No wondering what happened to your
              complaint. Just a clear journey from submission to resolution.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative flex gap-5 pb-12 last:pb-0 md:gap-8"
                >
                  {/* Timeline */}
                  <div className="relative flex shrink-0 flex-col items-center">
                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-background shadow-sm transition duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>

                    {index !== steps.length - 1 && (
                      <div className="absolute top-14 h-full w-px bg-gradient-to-b from-blue-500/40 to-border" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-2xl border border-transparent p-1 transition duration-300 group-hover:border-border group-hover:bg-card group-hover:p-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400">
                        STEP {step.number}
                      </span>
                    </div>

                    <h3 className="mt-2 text-xl font-bold md:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Built around accountability
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            More than just a complaint form.
          </h2>

          <p className="mt-5 leading-7 text-muted-foreground">
            SaySo brings students and campus departments into one organized
            process, where communication and progress stay visible.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 transition group-hover:bg-blue-500/15">
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>

                <h3 className="mt-6 text-lg font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {benefit.description}
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
              <MessageSquare className="h-7 w-7" />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight md:text-5xl">
              Your voice can make a difference.
            </h2>

            <p className="mt-5 leading-7 text-blue-100">
              A better campus starts when problems are heard and action
              follows. Make your voice count with SaySo.
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
  );
}
