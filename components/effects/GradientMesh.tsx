import { cn } from "@/lib/utils";

type GradientMeshProps = {
  className?: string;
};

export function GradientMesh({ className }: GradientMeshProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-70",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-cyber-purple/30 blur-3xl" />
      <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-ai-blue/25 blur-3xl" />
    </div>
  );
}
