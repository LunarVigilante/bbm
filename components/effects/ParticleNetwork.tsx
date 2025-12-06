"use client";

import { cn } from "@/lib/utils";
import { useParticleNetwork } from "@/hooks/useParticleNetwork";

type ParticleNetworkProps = {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
};

export function ParticleNetwork({
  className,
  particleCount,
  connectionDistance,
}: ParticleNetworkProps) {
  const canvasRef = useParticleNetwork({
    particleCount,
    connectionDistance,
  });

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("block h-full w-full", className)}
    />
  );
}
