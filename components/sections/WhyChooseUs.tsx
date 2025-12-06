"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { FEATURES, STATS } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section id="why" className="py-20 scroll-mt-32">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            AI-native teams with human obsession for quality
          </h2>
          <p className="text-base text-text-secondary">
            Ship premium deliverables in days, not months. Every engagement blends automation, creative direction, and measurable experimentation.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {STATS.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-slate-card/40 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyber-purple">
                <feature.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{feature.title}</h3>
                <p className="text-sm text-text-secondary">{feature.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-matrix-green">
                  <CheckCircle2 className="h-4 w-4" />
                  Verified Results
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
