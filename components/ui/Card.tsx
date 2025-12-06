import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-3xl border border-glass-border bg-glass/60 p-6 backdrop-blur-xl",
        interactive &&
          "transition duration-300 hover:-translate-y-2 hover:border-cyber-purple/60 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export { Card };
