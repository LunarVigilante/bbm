import Link from "next/link";

import { buttonClasses } from "@/lib/buttonVariants";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-4xl border border-cyber-purple/40 bg-gradient-primary/20 p-10 text-center">
          <div className="absolute inset-0 opacity-20" aria-hidden>
            <div className="absolute inset-0 bg-gradient-mesh" />
          </div>
          <div className="relative space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">
              Ready to Transform Your Business?
            </p>
            <h2 className="text-3xl font-semibold text-text-primary">
              Book a free consultation and discover how AI can supercharge your operations.
            </h2>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className={buttonClasses({ variant: "primary", className: "text-center" })}>
                Schedule Free Consultation
              </Link>
              <Link href="mailto:support@blackbeard.media" className="text-sm font-semibold text-text-secondary transition hover:text-text-primary">
                Or email us directly →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
