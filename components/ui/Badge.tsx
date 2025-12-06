import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const BADGE_STYLES: Record<string, string> = {
  purple: "bg-cyber-purple/15 text-cyber-purple",
  blue: "bg-ai-blue/15 text-ai-blue",
  green: "bg-matrix-green/15 text-matrix-green",
};

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: keyof typeof BADGE_STYLES;
};

export function Badge({ className, children, variant = "purple", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide",
        BADGE_STYLES[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
