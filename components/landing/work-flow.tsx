
import {
  ArrowDown,
  CheckCircle2,
  ClipboardList,
  FilePlus2,
  MessageSquare,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";

const workflowSteps = [
  {
    number: "01",
    label: "STUDENT",
    title: "Raise your voice.",
    description:
      "Students submit complaints with descriptions, categories, and supporting images. Every issue gets its own tracking record.",
    visual: (
      <div className="relative flex size-48 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.08] shadow-[0_0_50px_rgba(59,130,246,0.10)] sm:size-56 lg:size-64">
        <div className="absolute inset-4 rounded-full border border-dashed border-blue-500/30 sm:inset-5" />

        <div className="relative w-36 rounded-xl border bg-background/90 p-3 shadow-xl backdrop-blur-xl sm:w-44 sm:rounded-2xl sm:p-4">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-lg bg-blue-500/10 sm:size-8">
              <MessageSquare className="size-4 text-blue-500" />
            </div>
            <div className="space-y-1">
              <div className="h-2 w-16 rounded-full bg-foreground/70 sm:w-20" />
              <div className="h-1.5 w-10 rounded-full bg-muted-foreground/30 sm:w-12" />
            </div>
          </div>

          <div className="mt-3 space-y-2 sm:mt-4">
            <div className="h-2 w-full rounded-full bg-muted" />
            <div className="h-2 w-4/5 rounded-full bg-muted" />
            <div className="h-2 w-3/5 rounded-full bg-muted" />
          </div>

          <div className="mt-3 flex items-center justify-between gap-1 sm:mt-4">
            <span className="text-[9px] text-muted-foreground sm:text-[10px]">
              New complaint
            </span>
            <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[8px] text-blue-500 sm:text-[9px]">
              Submitted
            </span>
          </div>
        </div>

        <div className="absolute bottom-5 right-2 flex size-9 items-center justify-center rounded-full border bg-background shadow-lg sm:bottom-8 sm:right-3 sm:size-11">
          <UserRound className="size-4 text-blue-500 sm:size-5" />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    label: "ADMIN",
    title: "The right person, assigned.",
    description:
      "Administrators review incoming complaints, select the appropriate department, and assign each issue to a staff member.",
    visual: (
      <div className="relative flex size-48 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.08] shadow-[0_0_50px_rgba(59,130,246,0.10)] sm:size-56 lg:size-64">
        <div className="absolute inset-4 rounded-full border border-dashed border-blue-500/30 sm:inset-5" />

        <div className="relative w-40 rounded-xl border bg-background/90 p-3 shadow-xl backdrop-blur-xl sm:w-48 sm:rounded-2xl sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold sm:text-xs">
              Assignment
            </span>
            <ClipboardList className="size-4 text-blue-500" />
          </div>

          <div className="mt-3 rounded-lg bg-muted/60 p-2 sm:mt-4 sm:p-3">
            <p className="text-[9px] text-muted-foreground sm:text-[10px]">
              Complaint #1024
            </p>
            <p className="mt-1 text-[10px] font-medium sm:text-xs">
              Classroom projector issue
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-blue-500/10 sm:size-8">
              <Users className="size-4 text-blue-500" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] text-muted-foreground sm:text-[10px]">
                Assigned to
              </p>
              <p className="truncate text-[10px] font-medium sm:text-xs">
                Maintenance team
              </p>
            </div>
            <CheckCircle2 className="size-4 shrink-0 text-blue-500" />
          </div>
        </div>

        <div className="absolute bottom-5 right-2 flex size-9 items-center justify-center rounded-full border bg-background shadow-lg sm:bottom-8 sm:right-3 sm:size-11">
          <ClipboardList className="size-4 text-blue-500 sm:size-5" />
        </div>
      </div>
    ),
  },
  {
    number: "03",
    label: "STAFF",
    title: "Make things better.",
    description:
      "Assigned staff members investigate the issue, take action, and update its progress until the complaint is resolved.",
    visual: (
      <div className="relative flex size-48 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/[0.08] shadow-[0_0_50px_rgba(59,130,246,0.10)] sm:size-56 lg:size-64">
        <div className="absolute inset-4 rounded-full border border-dashed border-blue-500/30 sm:inset-5" />

        <div className="relative w-36 rounded-xl border bg-background/90 p-3 shadow-xl backdrop-blur-xl sm:w-44 sm:rounded-2xl sm:p-4">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-full bg-blue-500/10 sm:size-9">
              <Wrench className="size-4 text-blue-500" />
            </div>
            <div>
              <p className="text-[11px] font-semibold sm:text-xs">
                Issue fixed
              </p>
              <p className="text-[9px] text-muted-foreground sm:text-[10px]">
                Staff update
              </p>
            </div>
          </div>

          <div className="mt-3 space-y-2 sm:mt-4">
            {[
              "Issue investigated",
              "Action completed",
              "Complaint resolved",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 shrink-0 text-blue-500" />
                <span className="text-[9px] sm:text-[10px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-5 right-2 flex size-9 items-center justify-center rounded-full border bg-background shadow-lg sm:bottom-8 sm:right-3 sm:size-11">
          <CheckCircle2 className="size-4 text-blue-500 sm:size-5" />
        </div>
      </div>
    ),
  },
];

export default function Workflow() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden py-20 sm:py-28"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[100px] sm:h-[500px] sm:w-[800px] sm:blur-[140px]"
        aria-hidden="true"
      />

      {/* Section heading */}
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-blue-500 sm:mb-5 sm:text-xs">
          <span className="size-2 rounded-full bg-blue-500" />
          HOW SAYSO WORKS
        </div>

        <h2 className="text-3xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          From reporting
          <br />
          to <span className="text-blue-500">resolution.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base">
          A connected process that brings students, administrators,
          and staff together to make campus life better.
        </p>
      </div>

      {/* Workflow steps */}
      <div className="relative mx-auto mt-16 max-w-7xl px-5 sm:mt-24 sm:px-6">

        {/* Desktop dotted curve */}
        <svg
          className="pointer-events-none absolute left-1/2 top-0 hidden h-[460px] w-screen -translate-x-1/2 overflow-visible lg:block"
          viewBox="0 0 1440 460"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="workflow-wave"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
            >
              <stop offset="0%" stopColor="#EAB308" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          <path
            d="M-80 170 C 180 -100, 420 490, 740 240 S 1190 -80, 1520 180"
            stroke="url(#workflow-wave)"
            strokeWidth="2"
            strokeDasharray="5 8"
          />
        </svg>

        <div className="relative grid gap-12 sm:gap-16 lg:grid-cols-3 lg:gap-6">

          {workflowSteps.map((step, index) => (
            <article
              key={step.number}
              className={`relative flex flex-col items-center text-center ${
                index === 1 ? "lg:mt-24" : ""
              }`}
            >
              {/* Illustration */}
              <div className="relative z-10 transition duration-500 hover:scale-105">
                {step.visual}
              </div>

              {/* Step details */}
              <div className="mt-7 w-full max-w-sm sm:mt-10">
                <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4">
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground sm:text-xs">
                    {step.number} · {step.label}
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-tight sm:text-2xl md:text-3xl">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-muted-foreground sm:mt-4">
                  {step.description}
                </p>
              </div>

              {/* Mobile vertical connector */}
              {index !== 2 && (
                <div className="mt-8 flex flex-col items-center gap-1 lg:hidden">
                  <div className="h-6 w-px bg-gradient-to-b from-blue-500/60 to-blue-500/10" />
                  <ArrowDown className="size-4 text-blue-500" />
                </div>
              )}
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
