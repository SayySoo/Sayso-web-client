
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/landing/navbar";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: contactEmail || "Contact email not configured",
    description: "Send us your questions anytime.",
  },
  {
    icon: Clock3,
    label: "Response time",
    value: "Within 24–48 hours",
    description: "We aim to get back to you as soon as possible.",
  },
  {
    icon: MapPin,
    label: "Our focus",
    value: "Your campus",
    description: "Making campus communication better.",
  },
];

const subjects = [
  "General enquiry",
  "Technical support",
  "Account related",
  "Complaint management",
  "Partnership",
  "Other",
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    if (!contactEmail) {
      setFeedback({
        type: "error",
        message:
          "Contact email is not configured yet. Please try again later.",
      });
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `[SaySo] ${formData.subject}`
    );

    const body = encodeURIComponent(
      `Hello SaySo Team,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Regards,
${formData.name}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setFeedback({
      type: "success",
      message:
        "Your email draft is ready. Send it from your email application to reach us.",
    });

    setIsSubmitting(false);
  };

  const updateField = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
   <main className="page-enter relative min-h-screen overflow-hidden bg-background text-foreground">
   
      {/* Background atmosphere */}
     {/*  <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute -left-40 top-[500px] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[130px]" />
      </div> */}

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-12 pt-4 md:px-10 md:pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            <Sparkles className="h-4 w-4" />
            We're here to listen
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Let's start a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              conversation.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            Have a question, an idea, or need a hand? We'd love to hear
            from you. Tell us what's on your mind.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT SIDE */}
          <div className="space-y-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Get in touch
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Every great solution starts with a conversation.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                Whether you're a student, staff member, or administrator,
                we're always open to feedback and suggestions that make
                SaySo better.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card/70 p-5 transition duration-300 hover:border-blue-500/40 hover:bg-card"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 transition group-hover:bg-blue-500/15">
                      <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">
                        {detail.label}
                      </p>

                      <p className="mt-1 break-words font-semibold">
                        {detail.value}
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust card */}
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>

                <h3 className="font-semibold">
                  Your voice matters.
                </h3>
              </div>

              <p className="relative mt-4 text-sm leading-7 text-muted-foreground">
                We believe better communication creates better campuses.
                Your feedback helps us build a platform that works for
                everyone.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-xl" />

            <div className="relative rounded-[1.75rem] border border-border bg-card/90 p-6 shadow-2xl shadow-blue-950/5 backdrop-blur-xl sm:p-9">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    Send us a message
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill in the details below and let's talk.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 sm:flex">
                  <MessageCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name and Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                    >
                      Your name <span className="text-blue-500">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                    >
                      Email address <span className="text-blue-500">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium"
                  >
                    What is this about?{" "}
                    <span className="text-blue-500">*</span>
                  </label>

                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      updateField("subject", e.target.value)
                    }
                    className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>

                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Your message{" "}
                      <span className="text-blue-500">*</span>
                    </label>

                    <span className="text-xs text-muted-foreground">
                      {formData.message.length}/2000
                    </span>
                  </div>

                  <textarea
                    id="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={6}
                    placeholder="Tell us a little about what you need..."
                    value={formData.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-7 outline-none transition placeholder:text-muted-foreground/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                {/* Feedback */}
                {feedback && (
                  <div
                    role="status"
                    className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                      feedback.type === "success"
                        ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-600"
                        : "border-destructive/20 bg-destructive/5 text-destructive"
                    }`}
                  >
                    {feedback.type === "success" ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    ) : (
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                    )}

                    {feedback.message}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Preparing..." : "Send message"}

                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-xs leading-6 text-muted-foreground">
                  By sending this message, you agree to communicate with
                  the SaySo team regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative px-6 pb-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card/60 p-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-xl font-bold">
              Want to understand SaySo first?
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Explore how the platform works before getting started.
            </p>
          </div>

          <Link
            href="/how-it-works"
            className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-semibold transition hover:border-blue-500/40 hover:bg-muted"
          >
            How it works
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
