"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({
  value,
  label,
  prefix = "",
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const { ref, isIntersecting } = useInView<HTMLDivElement>({ threshold: 0.4, once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 120, damping: 20 });
  const display = useTransform(spring, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isIntersecting) {
      motionValue.set(value);
    }
  }, [isIntersecting, motionValue, value]);

  return (
    <div ref={ref} className={cn("space-y-1", className)}>
      <motion.div className="text-4xl font-extrabold text-text-primary">
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </motion.div>
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  );
}
