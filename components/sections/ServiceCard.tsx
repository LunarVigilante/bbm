"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 200, damping: 25 }}>
      <Card className="h-full">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyber-purple shadow-glow">
            <Icon className="h-6 w-6" />
          </div>
          <Badge variant={service.badge.variant}>{service.badge.text}</Badge>
        </div>
        <h3 className="mt-6 text-xl font-semibold text-text-primary">{service.title}</h3>
        <p className="mt-2 text-sm text-text-secondary">{service.description}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-text-secondary/80">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ai-blue" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
