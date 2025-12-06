"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { SERVICES } from "@/lib/constants";

import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 scroll-mt-32">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">
            Our AI-Powered Services
          </p>
          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
            <GradientText>Comprehensive solutions</GradientText> designed to accelerate your growth
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            From content systems to automation pipelines, every engagement is engineered for measurable ROI.
          </p>
        </div>
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
