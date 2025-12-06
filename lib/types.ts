import type { LucideIcon } from "lucide-react";

export type BadgeVariant = "purple" | "blue" | "green";

export type CTA = {
  label: string;
  href: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost" | "outline";
};

export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge: {
    text: string;
    variant: BadgeVariant;
  };
  features: string[];
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Stat = {
  value: number;
  label: string;
  suffix?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
};

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaHref: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type TrustedLogo = {
  label: string;
  initials: string;
};

export type CompanyInfo = {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  copyright: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    discord?: string;
    github?: string;
  };
};
