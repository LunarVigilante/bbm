"use client";

import {
  Anthropic,
  ElevenLabs,
  Google,
  Mistral,
  OpenAI,
  Perplexity,
} from "@lobehub/icons";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";

const TECHNOLOGIES = [
  { name: "OpenAI", Component: OpenAI, caption: "Reasoning + orchestration" },
  { name: "Google Gemini", Component: Google, caption: "Multimodal insights" },
  { name: "Anthropic", Component: Anthropic, caption: "Responsible guardrails" },
  { name: "Perplexity", Component: Perplexity, caption: "Realtime research" },
  { name: "ElevenLabs", Component: ElevenLabs, caption: "Voice synthesis" },
  { name: "Mistral", Component: Mistral, caption: "Edge deployments" },
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
                <tech.Component size={32} />
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
