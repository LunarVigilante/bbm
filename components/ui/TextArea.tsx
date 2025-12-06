import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full rounded-2xl border border-glass-border bg-white/5 px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-ai-blue focus:outline-none focus:ring-2 focus:ring-ai-blue/40",
          className,
        )}
        {...props}
      />
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
