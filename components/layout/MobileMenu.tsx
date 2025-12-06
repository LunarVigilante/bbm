"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import type { NavLink } from "@/lib/types";
import { buttonClasses } from "@/lib/buttonVariants";

type MobileMenuProps = {
  isOpen: boolean;
  links: NavLink[];
  onClose: () => void;
};

export function MobileMenu({ isOpen, links, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="menu-backdrop"
            className="fixed inset-0 z-40 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.nav
            key="menu-panel"
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-6 bg-deep-slate/95 p-6 backdrop-blur-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-text-secondary">
                Menu
              </span>
              <button
                onClick={onClose}
                className="text-text-secondary transition hover:text-text-primary"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-4 text-lg font-medium">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-text-secondary transition hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={onClose}
                className={buttonClasses({ variant: "primary", className: "text-center" })}
              >
                Get a Quote
              </Link>
              <a
                href="tel:+15551234567"
                onClick={onClose}
                className={buttonClasses({ variant: "outline", className: "text-center" })}
              >
                Call +1 (555) 123-4567
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
