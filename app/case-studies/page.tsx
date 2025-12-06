import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { buttonClasses } from "@/lib/buttonVariants";

const CASE_STUDIES = [
  {
    client: "Apex Labs",
    industry: "B2B SaaS",
    summary:
      "Rebuilt their content engine with AI-assisted briefs, on-brand writing, and automated design QA so the team could triple their release cadence without adding headcount.",
    metrics: [
      { label: "Publishing cadence", value: "3.4x" },
      { label: "SQL contribution", value: "+58%" },
      { label: "Production cost", value: "-32%" },
    ],
  },
  {
    client: "NebulaX",
    industry: "Gaming + Community",
    summary:
      "Built Discord copilots for onboarding, moderation, and merch drops while shipping daily Midjourney assets that kept the fandom buzzing.",
    metrics: [
      { label: "Engagement", value: "+310%" },
      { label: "Support tickets", value: "-41%" },
      { label: "Store revenue", value: "+24%" },
    ],
  },
  {
    client: "Fortress Cloud",
    industry: "Cybersecurity",
    summary:
      "Delivered a hybrid design + automation pod that rebuilt their site, shipped technical explainers, and automated webinar follow-ups tied into HubSpot.",
    metrics: [
      { label: "Pipeline velocity", value: "+47%" },
      { label: "MQL to SQL", value: "+19%" },
      { label: "Time to launch", value: "-4 weeks" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Case Studies",
  description: "See how Blackbeard Media Group drives measurable outcomes across content, design, and automation.",
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-4xl border border-white/10 bg-white/5 p-10">
        <Container className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Case Studies</p>
          <h1 className="text-4xl font-bold text-text-primary">
            Proof that <GradientText>AI-native delivery</GradientText> moves the metrics that matter
          </h1>
          <p className="max-w-3xl text-base text-text-secondary">
            Every engagement ships with clear hypotheses, dashboards, and reporting cadences. Here are a few highlights that mirror what we could do for your team.
          </p>
        </Container>
      </section>

      <Container className="space-y-8">
        {CASE_STUDIES.map((study) => (
          <div key={study.client} className="space-y-6 rounded-4xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-text-secondary">{study.industry}</p>
                <h2 className="text-2xl font-semibold text-text-primary">{study.client}</h2>
              </div>
              <div className="inline-flex rounded-full border border-cyber-purple/40 px-4 py-1 text-xs text-cyber-purple">
                Managed Pod + Automations
              </div>
            </div>
            <p className="text-base text-text-secondary">{study.summary}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-text-primary">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>

      <section className="rounded-4xl border border-white/10 bg-gradient-primary/10 p-10">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Next up</p>
            <h2 className="text-3xl font-semibold text-text-primary">Let&apos;s write your success story</h2>
            <p className="text-base text-text-secondary">
              Share your objectives and we&apos;ll map a sprint plan with projected lift, deliverables, and team structure.
            </p>
          </div>
          <Link href="/contact" className={buttonClasses({ variant: "primary" })}>
            Book a strategy call
          </Link>
        </Container>
      </section>
    </div>
  );
}
