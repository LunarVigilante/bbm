"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const LOGO_BASE = "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/";

const TECHNOLOGIES = [
  { name: "OpenAI", file: "openai.svg", caption: "Reasoning + orchestration" },
  { name: "Google Gemini", file: "google-gemini.svg", caption: "Multimodal insights" },
  { name: "Anthropic", file: "anthropic.svg", caption: "Responsible guardrails" },
  { name: "Perplexity", file: "perplexity.svg", caption: "Realtime research" },
  { name: "Midjourney", file: "midjourney.svg", caption: "Creative direction" },
  { name: "Mistral", file: "mistral-ai.svg", caption: "Edge deployments" },
];

export function TrustedBy() {
  return (
    <section className="py-16">
      <Container className="space-y-8">
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-text-secondary">Technology partners</p>
          <p className="text-base text-text-secondary">
            We design playbooks on top of the most battle-tested model providers to match each client&apos;s stack, compliance needs, and budget.
          </p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.name} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
              <div className="flex h-12 w-20 items-center justify-center">
                <Image
                  src={`${LOGO_BASE}${tech.file}`}
                  alt={`${tech.name} logo`}
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">{tech.name}</p>
                <p className="text-xs text-text-secondary">{tech.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
