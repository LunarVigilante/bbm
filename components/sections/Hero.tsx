"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

import { buttonClasses } from "@/lib/buttonVariants";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { HERO_PRIMARY_CTA, HERO_SECONDARY_CTA } from "@/lib/constants";

import { ParticleNetwork } from "@/components/effects/ParticleNetwork";

const headline = [
  "Future-Proof",
  "Your",
  "Business",
  "with",
  "AI-Powered",
  "Solutions",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 scroll-mt-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-text-secondary"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Blackbeard Media Group • AI Agency
          </motion.div>
          <h1 className="text-4xl font-black leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            {headline.map((word, index) => (
              <motion.span
                key={word}
                className="mr-2 inline-block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
              >
                {index === 2 ? <GradientText>{word}</GradientText> : word}
              </motion.span>
            ))}
          </h1>
          <p className="text-lg text-text-secondary">
            Leveraging the power of ChatGPT and Midjourney to deliver ultra-efficient writing, design, marketing, and automation services.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={HERO_PRIMARY_CTA.href}
              className={buttonClasses({ variant: "primary", className: "group text-center" })}
            >
              {HERO_PRIMARY_CTA.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href={HERO_SECONDARY_CTA.href}
              target="_blank"
              className={buttonClasses({ variant: "outline", className: "backdrop-blur text-center" })}
            >
              <Play className="h-4 w-4" />
              {HERO_SECONDARY_CTA.label}
            </Link>
          </div>
          <div className="flex items-center gap-10 text-sm text-text-secondary">
            <div>
              <p className="text-3xl font-bold text-text-primary">500+</p>
              Projects delivered
            </div>
            <div>
              <p className="text-3xl font-bold text-text-primary">98%</p>
              Client satisfaction
            </div>
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
          <ParticleNetwork className="absolute inset-0" particleCount={90} connectionDistance={180} />
          <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/20 via-transparent to-transparent" />
          <div className="relative z-10 h-full w-full">
            <div className="absolute inset-x-10 top-10 rounded-3xl border border-white/10 bg-deep-slate/70 p-6 text-sm text-text-secondary backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-text-secondary/60">
                Neural canvas
              </p>
              <p className="mt-2 text-base font-semibold text-text-primary">
                Real-time AI orchestration
              </p>
              <p className="mt-2 text-sm">
                We pair best-in-class foundation models with bespoke automations to keep your brand always-on.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
