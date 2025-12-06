import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";

const SECTIONS = [
  {
    title: "Definitions & scope",
    paragraphs: [
      "“Blackbeard”, “we”, or “our” refers to Blackbeard Media Group LLC. “Client”, “you”, or “your” refers to the organization executing an order form or statement of work (SOW) with us.",
      "These terms apply to all retainers, sprints, or advisory engagements unless a superseding master services agreement (MSA) is executed.",
    ],
  },
  {
    title: "Client responsibilities",
    items: [
      "Provide timely access to required systems, subject-matter experts, and brand documentation.",
      "Designate a single point of contact to consolidate feedback inside agreed-upon timelines.",
      "Confirm that any assets you supply (copy, datasets, imagery, trademarks) can be used for the engagement without infringing on third-party rights.",
    ],
  },
  {
    title: "Our commitments",
    items: [
      "Staff a dedicated pod with the skills outlined in the SOW and maintain coverage during the engagement.",
      "Operate with transparent project tracking, status reports, and acceptance criteria.",
      "Follow your security, compliance, and accessibility guidelines as documented or mutually agreed in writing.",
    ],
  },
  {
    title: "Confidentiality & intellectual property",
    paragraphs: [
      "Both parties will keep confidential information secret and use it only for the purpose of performing the services. If requested, we will sign a mutual NDA.",
      "You own all final deliverables and paid-for work product. We retain ownership of internal frameworks or libraries used to produce deliverables but grant you a perpetual license to use them as part of the engagement.",
    ],
  },
  {
    title: "Payment & change management",
    paragraphs: [
      "Unless otherwise stated, invoices are due within 15 days. Work may pause for accounts more than 15 days overdue.",
      "Scope changes are handled through written change orders or an updated SOW so we can adjust resourcing, timelines, and pricing in sync.",
    ],
  },
  {
    title: "Limitation of liability",
    paragraphs: [
      "Neither party is liable for indirect, incidental, or consequential damages. Our aggregate liability in connection with the services will not exceed the fees paid to us during the three months preceding the event that gave rise to the claim.",
      "Neither party is responsible for delays caused by factors outside their reasonable control (force majeure events).",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the State of California, without regard to conflict-of-law rules. Any disputes will be resolved in state or federal courts located in San Francisco County, California, unless both parties agree to an alternative forum.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The service terms for partnering with Blackbeard Media Group.",
};

export default function TermsPage() {
  return (
    <div className="space-y-16 pt-10">
      <section className="rounded-4xl border border-white/10 bg-white/5 p-10">
        <Container className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Terms</p>
          <h1 className="text-4xl font-bold text-text-primary">Terms & conditions</h1>
          <p className="text-base text-text-secondary">Last updated: May 2025</p>
          <p className="max-w-3xl text-base text-text-secondary">
            These terms keep collaborations transparent and predictable. They work alongside your SOW or MSA—if a conflict exists, the signed document wins.
          </p>
        </Container>
      </section>

      <Container className="space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.title} className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-text-primary">{section.title}</h2>
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
        <p className="text-xs text-text-secondary">
          Need custom language for procurement or security reviews? Email legal@blackbeard.media and we&apos;ll collaborate with your counsel.
        </p>
      </Container>
    </div>
  );
}
