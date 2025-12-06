"use client";

import { useState, type FormEvent } from "react";

import { buttonClasses } from "@/lib/buttonVariants";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "there";

    setStatus("sending");
    setStatusMessage(null);

    setTimeout(() => {
      form.reset();
      setStatus("success");
      setStatusMessage(`Thanks, ${name}! Your note is in our queue.`);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Name
          </label>
          <Input name="name" required placeholder="Avery Quinn" className="mt-2" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Company
          </label>
          <Input name="company" required placeholder="Arcadia Robotics" className="mt-2" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Email
          </label>
          <Input type="email" name="email" required placeholder="you@company.com" className="mt-2" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Interested In
          </label>
          <Input name="interest" placeholder="Design + Automation" className="mt-2" />
        </div>
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-text-secondary">
          How can we help?
        </label>
        <TextArea name="message" rows={5} required placeholder="Share context, goals, or links" className="mt-2" />
      </div>
      <button
        type="submit"
        className={buttonClasses({
          variant: "primary",
          className: "w-full text-center",
        })}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && statusMessage && (
        <p className="text-sm text-matrix-green" aria-live="polite">
          {statusMessage}
        </p>
      )}
      {status === "sending" && (
        <p className="text-sm text-text-secondary" aria-live="polite">
          Preparing your details...
        </p>
      )}
    </form>
  );
}
