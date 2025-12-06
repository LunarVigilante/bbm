import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";

const SECTIONS = [
  {
    title: "Information we collect",
    description: "We only capture details that help us collaborate effectively and measure outcomes.",
    items: [
      "Contact and company details that you submit through forms, scheduling links, or direct email.",
      "Project context such as creative briefs, brand systems, datasets, analytics exports, or automation requirements shared with us for delivery.",
      "Limited usage data from our marketing site gathered via privacy-friendly analytics. We use it to understand aggregate engagement—not to fingerprint individual visitors.",
    ],
  },
  {
    title: "How we use your information",
    description: "Every data point is tied to a specific operational purpose.",
    items: [
      "Scoping work, creating statements of work, scheduling workshops, and billing retainers.",
      "Delivering design, content, automation, and advisory services with the right pods, tooling, and QA.",
      "Improving our playbooks—using anonymized patterns only—and notifying you about relevant product or security updates.",
    ],
  },
  {
    title: "Legal basis & consent",
    paragraphs: [
      "We process data under the legitimate interest of providing agency services and, where required, explicit consent (for example, when you opt-in to updates). You can withdraw consent or request that we pause processing at any time by emailing privacy@blackbeard.media.",
    ],
  },
  {
    title: "Retention & deletion",
    paragraphs: [
      "Project artifacts stay in secure workspaces for the duration of the engagement. We archive deliverables for up to 12 months so you can request copies, then purge or anonymize them unless regulations require longer retention.",
      "If you need immediate deletion after a project, just send a request—our ops team will confirm once the purge is complete.",
    ],
  },
  {
    title: "Your rights",
    items: [
      "Access: request the data we store about your org.",
      "Correction: update incorrect or outdated information.",
      "Portability: receive structured exports for your records.",
      "Erasure: ask us to delete specific files or all records (subject to contractual/legal obligations).",
    ],
  },
  {
    title: "Security & subprocessors",
    paragraphs: [
      "We enforce SSO + MFA on every system, log access, and segment environments by client. Preferred tools include Notion, Linear, Figma, Slack, and secure cloud storage—all configured with least-privilege roles.",
      "When we need specialized infrastructure (for example, model hosting or translation), we only work with vendors that meet SOC 2/ISO 27001 or equivalent standards. A current list of subprocessors is available on request.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Blackbeard Media Group handles data, confidentiality, and compliance.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-16 pt-10">
      <section className="rounded-4xl border border-white/10 bg-slate-card/60 p-10">
        <Container className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Privacy</p>
          <h1 className="text-4xl font-bold text-text-primary">Privacy policy</h1>
          <p className="text-base text-text-secondary">Last updated: May 2025</p>
          <p className="max-w-3xl text-base text-text-secondary">
            We operate as an extension of your team, which means stewardship of your data, assets, and internal knowledge is non-negotiable. This document outlines how we protect that trust.
          </p>
        </Container>
      </section>

      <Container className="space-y-10">
        {SECTIONS.map((section) => (
          <div key={section.title} className="space-y-4 rounded-3xl border border-white/10 bg-slate-card/50 p-6">
            <h2 className="text-xl font-semibold text-text-primary">{section.title}</h2>
            {section.description && <p className="text-sm text-text-secondary">{section.description}</p>}
            {section.paragraphs && (
              <div className="space-y-2 text-sm text-text-secondary">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {section.items && (
              <ul className="space-y-2 text-sm text-text-secondary">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-ai-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="space-y-3 rounded-3xl border border-white/10 bg-slate-card/50 p-6">
          <h2 className="text-xl font-semibold text-text-primary">Need something specific?</h2>
          <p className="text-sm text-text-secondary">
            For DPAs, security questionnaires, or subprocessor disclosures, email privacy@blackbeard.media. We respond within one business day and can work with your legal or procurement team to finalize the paperwork.
          </p>
        </div>
      </Container>
    </div>
  );
}
