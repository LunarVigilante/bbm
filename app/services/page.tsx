import { Metadata } from "next";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Blackbeard Media Group's AI-powered service catalog.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pt-10">
      <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-card/60 p-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" aria-hidden />
        <Container className="relative space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Services</p>
          <h1 className="text-4xl font-extrabold text-text-primary">
            <GradientText>AI-powered solutions</GradientText> for every growth lever
          </h1>
          <p className="max-w-3xl text-base text-text-secondary">
            Whether you need a full-stack creative pod or a standalone automation sprint, we plug into your workflows and deliver premium outputs at lightning speed.
          </p>
        </Container>
      </section>

      <Container className="space-y-10">
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <div id={service.id} key={service.id} className="grid gap-8 rounded-4xl border border-white/10 bg-slate-card/40 p-8 lg:grid-cols-3 scroll-mt-32">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Capability</p>
                <h2 className="text-2xl font-semibold text-text-primary">{service.title}</h2>
                <p className="text-sm text-text-secondary">{service.description}</p>
              </div>
              <div className="lg:col-span-2">
                <Card interactive={false} className="h-full bg-slate-card/60">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyber-purple shadow-glow">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant={service.badge.variant}>{service.badge.text}</Badge>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-text-secondary/80">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-ai-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
