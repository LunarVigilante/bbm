import { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/constants";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a consultation with Blackbeard Media Group.",
};

export default function ContactPage() {
  return (
    <Container className="grid gap-12 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-text-secondary">Contact</p>
        <h1 className="text-4xl font-bold text-text-primary">Let&apos;s build your AI advantage</h1>
        <p className="text-base text-text-secondary">
          Fill out the form and we&apos;ll reply within 24 hours. Prefer email? Reach us anytime at{" "}
          <Link href={`mailto:${COMPANY_INFO.email}`} className="text-text-primary">
            {COMPANY_INFO.email}
          </Link>
          .
        </p>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-text-primary">Direct Line</p>
          <div className="text-sm text-text-secondary">
            <p>Email: {COMPANY_INFO.email}</p>
            <p>Phone: {COMPANY_INFO.phone}</p>
            <p>Response time &lt; 24 hours</p>
          </div>
        </div>
      </div>
      <div id="schedule" className="rounded-3xl border border-white/10 bg-white/5 p-6 scroll-mt-32">
        <ContactForm />
      </div>
    </Container>
  );
}
