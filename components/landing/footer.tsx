
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PRODUCT_IMAGES } from "@/public/image/image";

const footerLinks = {
  platform: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faq" },
  ],
  portals: [
    {
      label: "Student portal",
      href: "https://student-webapp.subhrokolay2-0df.workers.dev",
    },
    {
      label: "Staff portal",
      href: "#",
    },
    {
      label: "Admin portal",
      href: "#",
    },
  ],
};

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.17 3.17 1.66.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.44.11-2.99 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.31-2.63 5.26-5.14 5.54.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative pt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-20 lg:py-16">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src={PRODUCT_IMAGES.LOGO}
                alt="SaySo"
                width={90}
                height={10}
                className="w-12 object-contain"
                priority
              />
              <h1 className="text-2xl font-bold">SaySo</h1>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
              Giving every campus voice a place to be heard.
              Report, track, and resolve campus issues together.
            </p>

            <Link
              href="https://github.com/SayySoo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SaySo GitHub organization"
              className="mt-5 inline-flex size-9 items-center justify-center rounded-full border text-muted-foreground transition hover:border-blue-500/40 hover:text-blue-500"
            >
              <GitHubIcon />
            </Link>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition hover:text-blue-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold">Portals</h3>
            <ul className="space-y-3">
              {footerLinks.portals.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-blue-500"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SaySo. All rights reserved.</p>
          <p>Built to make campus voices matter.</p>
        </div>
      </div>
    </footer>
  );
}
