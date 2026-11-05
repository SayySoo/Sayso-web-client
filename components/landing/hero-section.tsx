
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="platform"
      className="relative isolate page-enter-item  mx-auto flex max-w-7xl flex-col items-center overflow-visible px-4 pb-16  text-center sm:px-6 sm:pb-20 sm:pt-28"
    >
      {/* Background blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-600/[0.12] blur-[100px] sm:h-[600px] sm:w-[800px] sm:blur-[140px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-64 -z-10 h-[250px] w-[350px] -translate-x-1/2 rounded-full bg-sky-500/[0.08] blur-[100px] sm:h-[350px] sm:w-[700px] sm:blur-[120px]"
        aria-hidden="true"
      />

      {/* Yellow dotted wave: desktop and tablet */}
      <svg
        className="pointer-events-none absolute left-1/2 top-36 -z-0 hidden h-[420px] w-screen -translate-x-1/2 overflow-visible opacity-100 md:block"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="yellow-wave"
            x1="0"
            y1="0"
            x2="1440"
            y2="0"
          >
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FDE047" stopOpacity="1" />
            <stop offset="100%" stopColor="#EAB308" stopOpacity="0.8" />
          </linearGradient>

          <filter
            id="wave-glow"
            x="-20%"
            y="-50%"
            width="140%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M-100 190 C 180 -20, 420 390, 760 250 S 1240 -50, 1540 200"
          stroke="url(#yellow-wave)"
          strokeWidth="2.5"
          strokeDasharray="5 7"
          filter="url(#wave-glow)"
        />
      </svg>

      {/* Eyebrow */}
      <div className="relative z-10 mb-6 flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground sm:mb-8 sm:text-xs sm:tracking-[0.18em]">
        <span className="size-2 shrink-0 rounded-full bg-blue-500 shadow-[0_0_12px_#3B82F6]" />
        CAMPUS COMPLAINT MANAGEMENT
      </div>

      {/* Heading */}
      <h1 className="relative z-10 max-w-5xl text-4xl font-medium leading-[1.12] tracking-tight sm:text-6xl sm:leading-[1.08] md:text-7xl lg:text-[82px]">
        Your campus.
        <br />
        Your voice.
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-sky-400 bg-clip-text text-transparent">
          Real change.
        </span>
      </h1>

      {/* Description */}
      <p className="relative z-10 mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-8 sm:text-lg sm:leading-8">
        A smarter way to report campus issues, track complaints, and
        connect students, staff, and administrators to build a better
        campus experience.
      </p>

      {/* CTA buttons */}
      <div className="relative z-10 mt-7 flex w-full max-w-xs flex-col justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:gap-4">
        <Button
          
          size="lg"
          className="h-12 w-full rounded-xl px-7 text-sm shadow-[0_0_30px_rgba(37,99,235,0.25)] transition hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] sm:h-14 sm:w-auto sm:rounded-2xl sm:px-8 sm:text-base"
        >
          <Link href="#portals" className="flex items-center">
            Get started
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button
          
          size="lg"
          variant="outline"
          className="h-12 w-full rounded-xl px-7 text-sm backdrop-blur-sm transition hover:border-blue-500/50 hover:bg-blue-500/10 sm:h-14 sm:w-auto sm:rounded-2xl sm:px-8 sm:text-base"
        >
          <Link href="#how-it-works" className="flex items-center">
            <BookOpen className="mr-2 size-4" />
            How it works
          </Link>
        </Button>
      </div>

      {/* Dashboard showcase */}
      <div className="relative z-10 mt-16 w-full max-w-6xl overflow-hidden rounded-2xl border shadow-[0_0_60px_rgba(37,99,235,0.08)] sm:mt-24 sm:rounded-[28px]">
        <div className="grid md:grid-cols-2">

          {/* Left content */}
          <div className="flex flex-col justify-center p-5 text-left sm:p-8 md:p-12">
            <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold tracking-widest sm:mb-6 sm:text-xs">
              <ShieldCheck className="size-4 shrink-0 text-blue-500" />
              TRANSPARENT COMPLAINT TRACKING
            </div>

            <h2 className="max-w-lg text-2xl font-medium leading-tight sm:text-3xl md:text-4xl">
              Every complaint deserves to be heard.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:mt-5 sm:text-base sm:leading-7">
              From submission to resolution, SaySo keeps everyone
              connected with a transparent complaint management process.
            </p>

            <Link
              href="#portals"
              className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-500 transition hover:opacity-75 sm:mt-8"
            >
              Explore the platform
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Right dashboard preview */}
          <div className="relative flex items-center justify-center overflow-hidden bg-blue-500/[0.04] p-4 sm:p-8 md:p-12">
            <div className="pointer-events-none absolute right-0 top-0 size-48 rounded-full bg-blue-500/10 blur-[80px] sm:size-64 sm:blur-[90px]" />

            <div className="relative w-full max-w-md rounded-xl border p-4 shadow-xl backdrop-blur-xl sm:rounded-2xl sm:p-5">

              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium sm:text-sm">
                  Complaint overview
                </span>

                <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[10px] text-blue-500 sm:px-3 sm:text-xs">
                  This month
                </span>
              </div>

              {/* Statistics */}
              <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                {[
                  ["24", "Submitted"],
                  ["08", "In progress"],
                  ["16", "Resolved"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="min-w-0 rounded-lg border bg-muted/40 p-2 sm:rounded-xl sm:p-3"
                  >
                    <p className="text-xl font-semibold sm:text-2xl">
                      {value}
                    </p>
                    <p className="mt-1 break-words text-[9px] text-muted-foreground sm:text-xs">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Complaint status */}
              <div className="mt-4 rounded-lg border bg-muted/20 p-3 sm:mt-5 sm:rounded-xl sm:p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium sm:text-sm">
                    Library Wi-Fi issue
                  </span>

                  <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[9px] text-blue-500 sm:text-[10px]">
                    In progress
                  </span>
                </div>

                <div className="mt-4 flex gap-1.5 sm:mt-5 sm:gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-blue-500" />
                  <div className="h-1.5 flex-1 rounded-full bg-blue-500" />
                  <div className="h-1.5 flex-1 rounded-full bg-muted" />
                </div>

                <div className="mt-3 flex justify-between gap-1 text-[9px] text-muted-foreground sm:text-[10px]">
                  <span>Submitted</span>
                  <span>Assigned</span>
                  <span>Resolved</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
