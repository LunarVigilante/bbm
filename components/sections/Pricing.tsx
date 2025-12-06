"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonClasses } from "@/lib/buttonVariants";
import { Container } from "@/components/ui/Container";
import { PRICING_TIERS } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 scroll-mt-32">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold text-text-primary">Plans built for momentum</h2>
          <p className="mt-2 text-base text-text-secondary">
            Scale up or down as needed. Every plan includes unlimited revisions and AI oversight.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              className={`flex h-full flex-col rounded-3xl border p-6 ${
                tier.highlighted
                  ? "border-cyber-purple/70 bg-white/5 shadow-glow"
                  : "border-white/10 bg-deep-slate/60"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-flex rounded-full bg-cyber-purple/20 px-3 py-1 text-xs font-semibold text-cyber-purple">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-text-primary">{tier.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1 text-text-primary">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-sm text-text-secondary">{tier.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-text-secondary">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ai-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.ctaHref}
                className={buttonClasses({
                  variant: tier.highlighted ? "primary" : "outline",
                  className: "mt-auto w-full text-center",
                })}
              >
                {tier.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
