import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-slate-card/40">
      <div className="absolute inset-x-0 -top-0.5 h-0.5 bg-gradient-primary" />
      <Container className="grid gap-10 py-16 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-text-secondary">{COMPANY_INFO.tagline}</p>
          <p className="text-xs text-text-secondary/70">
            Social channels are being refreshed. Check back soon for new drops.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-text-secondary">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            {FOOTER_LINKS.services.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-text-secondary">
            Resources
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            {FOOTER_LINKS.resources.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-text-secondary">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            {FOOTER_LINKS.contact.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-matrix-green/50 px-3 py-1 text-xs text-matrix-green">
            <span className="h-2 w-2 rounded-full bg-matrix-green" />
            Avg. response &lt; 24hrs
          </div>
        </div>
      </Container>
      <div className="border-t border-white/5">
        <Container className="flex flex-col gap-3 py-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <span>{COMPANY_INFO.copyright}</span>
          <span>Built with AI, delivered by humans.</span>
        </Container>
      </div>
    </footer>
  );
}
