import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  showText?: boolean;
  className?: string;
};

export function Logo({ showText = true, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Blackbeard Media Group"
      className={cn(
        "group inline-flex items-center gap-3 text-lg font-semibold tracking-tight",
        className,
      )}
    >
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-primary text-xl font-black text-white shadow-glow">
        B
        <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/30 opacity-0 transition group-hover:opacity-100" />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className="text-sm uppercase tracking-[0.3em] text-text-secondary">
            Blackbeard
          </span>
          <span className="text-base font-bold text-text-primary">
            Media Group
          </span>
        </span>
      )}
    </Link>
  );
}
