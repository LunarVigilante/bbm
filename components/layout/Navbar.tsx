"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import { buttonClasses } from "@/lib/buttonVariants";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/useScrollPosition";

import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const scrolled = useScrollPosition(30);
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(15,23,42,0.85)" : "rgba(15,23,42,0)",
          boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.4)" : "0 0 0 rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        }}
        className="fixed inset-x-0 top-0 z-30"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-sm">
          <Logo />
          <nav className="hidden items-center gap-8 text-text-secondary lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-medium transition hover:text-text-primary"
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact"
              className={buttonClasses({ variant: "outline", className: "border-transparent bg-white/5" })}
            >
              Get a Quote
            </Link>
          </div>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-secondary transition hover:border-white/40 hover:text-text-primary lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>
      <MobileMenu isOpen={open} links={NAV_LINKS} onClose={() => setOpen(false)} />
    </>
  );
}
