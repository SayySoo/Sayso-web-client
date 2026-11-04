
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqGroups = [
  {
    title: "General",
    questions: [
      {
        question: "What is SaySo?",
        answer:
          "SaySo is a campus complaint management platform that connects students, staff, and administrators. It provides a structured way to report campus issues, assign responsibilities, and track complaints through resolution.",
      },
      {
        question: "Who can use SaySo?",
        answer:
          "SaySo is designed for three types of users: students who submit and track complaints, administrators who review and assign complaints, and staff members who handle assigned issues.",
      },
    ],
  },
  {
    title: "Complaints & Tracking",
    questions: [
      {
        question: "How can I submit a complaint?",
        answer:
          "Students can access the student portal, sign in, and submit a complaint with its category, description, and supporting information. Once submitted, the complaint can be tracked through its status.",
      },
      {
        question: "What happens after I submit a complaint?",
        answer:
          "The complaint becomes available to administrators for review. An administrator can assign it to the appropriate staff member, who investigates the issue and updates its progress until it is resolved.",
      },
      {
        question: "Can I track the status of my complaint?",
        answer:
          "Yes. Students can view their submitted complaints and follow their progress, including updates as the complaint moves through the management process.",
      },
      {
        question: "Who is responsible for resolving complaints?",
        answer:
          "Administrators are responsible for reviewing and assigning complaints. The assigned staff member handles the issue, updates its progress, and marks it as resolved when the work is complete.",
      },
    ],
  },
 /*  {
    title: "Accounts & Access",
    questions: [
      {
        question: "Are student, staff, and admin portals different?",
        answer:
          "Yes. SaySo provides separate interfaces for students, staff, and administrators. Each portal has its own features and permissions based on the user's role.",
      },
      {
        question: "Is my account information protected?",
        answer:
          "SaySo uses role-based access so users can access the features and information appropriate to their account. Users should keep their login credentials private.",
      },
    ],
  }, */
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>("0-0");

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden py-20 sm:py-28"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[120px] sm:h-[500px] sm:w-[600px]"
        aria-hidden="true"
      />

      {/* Heading */}
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <div className="mb-4 flex items-center justify-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-blue-500 sm:text-xs">
          <span className="size-2 rounded-full bg-blue-500" />
          GOT QUESTIONS?
        </div>

        <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
          Frequently asked
          <br />
          <span className="text-blue-500">questions.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base">
          Everything you need to know about using SaySo to report,
          manage, and resolve campus complaints.
        </p>
      </div>

      {/* FAQ groups */}
      <div className="mx-auto mt-14 max-w-4xl px-5 sm:mt-20 sm:px-6">
        {faqGroups.map((group, groupIndex) => (
          <div key={group.title} className="mb-10 last:mb-0">
            {/* Group title */}
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
              {group.title}
            </h3>

            {/* Questions */}
            <div className="border-y border-dashed">
              {group.questions.map((item, questionIndex) => {
                const itemId = `${groupIndex}-${questionIndex}`;
                const isOpen = openItem === itemId;
                const answerId = `faq-answer-${itemId}`;

                return (
                  <article
                    key={item.question}
                    className={`relative border-b border-dashed last:border-b-0 transition-colors duration-500 ${
                      isOpen
                        ? "border-x border-x-blue-500/20 bg-blue-500/[0.025]"
                        : "border-x border-x-transparent"
                    }`}
                  >
                    {/* Question button */}
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenItem(isOpen ? null : itemId)
                      }
                      className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left transition-colors duration-300 hover:text-blue-500 sm:px-5 sm:py-6"
                    >
                      <span className="text-sm font-medium leading-6 sm:text-base">
                        {item.question}
                      </span>

                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                          isOpen
                            ? "rotate-180 border-blue-500/30 bg-blue-500/10 text-blue-500"
                            : "text-muted-foreground"
                        }`}
                      >
                        <ChevronDown className="size-4" />
                      </span>
                    </button>

                    {/* Animated answer */}
                    <div
                      id={answerId}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-5 pr-12 text-sm leading-7 text-muted-foreground sm:px-5 sm:pb-6 sm:pr-16">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mx-auto mt-12 max-w-3xl px-5 text-center">
        <p className="text-sm text-muted-foreground">
          Still have questions? Reach out to your campus administrator.
        </p>
      </div>
    </section>
  );
}
