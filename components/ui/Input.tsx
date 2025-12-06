import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-2xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-ai-blue focus:outline-none focus:ring-2 focus:ring-ai-blue/40",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
