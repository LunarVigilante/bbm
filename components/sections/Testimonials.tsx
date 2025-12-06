"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <Container className="space-y-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-bold text-text-primary">Loved by teams worldwide</h2>
          <p className="mt-2 text-base text-text-secondary">
            Proof that AI-assisted delivery can feel bespoke, human, and on-brand every time.
          </p>
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={TESTIMONIALS[active].id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: TESTIMONIALS[active].rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-cyber-purple text-cyber-purple" />
                ))}
              </div>
              <p className="text-xl font-semibold text-text-primary">
                “{TESTIMONIALS[active].quote}”
              </p>
              <div className="text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">{TESTIMONIALS[active].author}</span> · {TESTIMONIALS[active].role} @ {TESTIMONIALS[active].company}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                className={`h-2 w-8 rounded-full transition ${index === active ? "bg-cyber-purple" : "bg-white/10"}`}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial from ${testimonial.author}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
