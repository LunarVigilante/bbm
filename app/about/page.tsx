import { Metadata } from "next";

import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { STATS } from "@/lib/constants";

const VALUES = [
  {
    title: "Human-in-the-loop",
    description: "AI accelerates production, but human art direction locks in voice, nuance, and craft.",
  },
  {
    title: "Transparent ops",
    description: "We share playbooks, dashboards, and performance data so you always know the ROI.",
  },
  {
    title: "Velocity obsessed",
    description: "We design sprints and pods that fit your roadmap and keep feedback cycles tight.",
  },
];

export const metadata: Metadata = {
  title: "About",
  description: "Meet the humans building Blackbeard Media Group.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="rounded-4xl border border-white/10 bg-white/5 p-10">
        <Container>
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">About</p>
          <h1 className="mt-4 text-4xl font-bold text-text-primary">
            Built by operators, <GradientText>for operators</GradientText>
          </h1>
          <p className="mt-4 max-w-3xl text-base text-text-secondary">
            Blackbeard Media Group was founded by product and marketing leads who spent a decade scaling venture-backed startups. We pair that experience with AI-native workflows to help teams unlock leverage fast.
          </p>
        </Container>
      </section>

      <Container className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">Our playbook</h2>
          <p className="text-base text-text-secondary">
            Every engagement begins with a discovery sprint to map your systems, ICP, and KPIs. We assemble a pod of writers, designers, strategists, and automation engineers who collaborate with shared workspaces and AI copilots.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4" />
          ))}
        </div>
      </Container>

      <Container className="grid gap-6 md:grid-cols-3">
        {VALUES.map((value) => (
          <div key={value.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-text-primary">{value.title}</h3>
            <p className="mt-2 text-sm text-text-secondary">{value.description}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}
