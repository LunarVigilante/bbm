import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-gradient-primary text-text-primary shadow-glow hover:scale-[1.02] hover:shadow-glow-soft active:scale-95",
  secondary:
    "bg-slate-card text-text-primary shadow-glow-soft hover:-translate-y-0.5",
  outline:
    "border border-glass-border text-text-primary hover:border-cyber-purple/60 hover:shadow-border-glow",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;

export type ButtonClassOptions = {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
};

export function buttonClasses({
  variant = "primary",
  fullWidth,
  className,
}: ButtonClassOptions = {}) {
  return cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai-blue focus-visible:ring-offset-2 focus-visible:ring-offset-near-black",
    VARIANTS[variant],
    fullWidth && "w-full",
    className,
  );
}

export { VARIANTS };
