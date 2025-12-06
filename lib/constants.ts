import {
  ArrowRight,
  Bot,
  Calendar,
  DollarSign,
  Palette,
  PenLine,
  Settings,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

import type {
  CompanyInfo,
  CTA,
  FAQItem,
  Feature,
  NavLink,
  PricingTier,
  Service,
  Stat,
  Testimonial,
  TrustedLogo,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
];

export const HERO_PRIMARY_CTA: CTA = {
  label: "Explore Services",
  href: "#services",
  icon: ArrowRight,
  variant: "primary",
};

export const HERO_SECONDARY_CTA: CTA = {
  label: "How We Help",
  href: "https://www.youtube.com/watch?v=reUZRyXxUs4",
  variant: "outline",
};

export const SERVICES: Service[] = [
  {
    id: "writing",
    title: "Writing Services",
    icon: PenLine,
    badge: { text: "LLM-Optimized", variant: "purple" },
    description:
      "Blog posts, social media content, press releases, copywriting, and technical documentation crafted with precision.",
    features: [
      "Long-form blog content",
      "Persona-driven social posts",
      "Conversion copywriting",
      "Thought leadership articles",
      "Internal documentation",
    ],
  },
  {
    id: "design",
    title: "Design Services",
    icon: Palette,
    badge: { text: "Generative Studio", variant: "blue" },
    description:
      "Web design, UX/UI prototypes, brand identity systems, character design, and visual assets for every touchpoint.",
    features: [
      "Conversion-optimized landing pages",
      "Interactive prototypes",
      "Brand identity systems",
      "Illustration & concept art",
      "Pitch decks & marketing collateral",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & SEO",
    icon: TrendingUp,
    badge: { text: "Data-Driven", variant: "green" },
    description:
      "Strategic campaigns, email marketing automation, SEO optimization, and brand positioning for measurable growth.",
    features: [
      "Search & content audits",
      "Automation workflows",
      "Paid media strategy",
      "Analytics reporting",
      "Brand positioning",
    ],
  },
  {
    id: "assistant",
    title: "Personal Assistant",
    icon: Calendar,
    badge: { text: "24/7 AI Support", variant: "purple" },
    description:
      "Intelligent scheduling, data entry automation, travel arrangements, and administrative support on autopilot.",
    features: [
      "Calendar orchestration",
      "Research & briefing",
      "Email triage",
      "Travel logistics",
      "Knowledge base upkeep",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    badge: { text: "Full-Stack", variant: "blue" },
    description:
      "Shopify development, product optimization, conversion rate optimization, and inventory management insights.",
    features: [
      "Theme customization",
      "Product page optimization",
      "CRO experiments",
      "Inventory forecasting",
      "Marketplace integrations",
    ],
  },
  {
    id: "discord",
    title: "Discord Automation",
    icon: Bot,
    badge: { text: "Custom Bots", variant: "green" },
    description:
      "ChatGPT and Midjourney bot integration, server management, and community automation tools built to scale.",
    features: [
      "AI concierge bots",
      "Moderation automation",
      "Midjourney pipelines",
      "Community analytics",
      "Webhooks & integrations",
    ],
  },
];

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "hr", label: "Average Response" },
];

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description: "Projects completed 3x faster than traditional agencies",
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Quality",
    description: "Advanced models ensure consistent, high-quality output",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Every engagement tailored to your unique business needs",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, clear deliverables, measurable results",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Blackbeard Media Group transformed our content engine. The AI-assisted writing workflow tripled our publishing cadence without sacrificing quality.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechFlow Inc.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "Their design team delivered a full brand refresh in seven days. Every screen feels premium and converts better than our previous site.",
    author: "Marcus Johnson",
    role: "Founder & CEO",
    company: "Nexus Startups",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "Our Discord community engagement increased 300% after launching their custom automation bots and onboarding flows.",
    author: "Elena Rodriguez",
    role: "Community Director",
    company: "GameVerse Studios",
    rating: 5,
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$2,750",
    period: "/month",
    description: "Fractional AI pod for lean teams that need consistent launches",
    features: [
      "8 long-form assets",
      "18 branded visuals",
      "Foundational SEO optimization",
      "Async Slack + email support",
      "72-hour turnaround",
    ],
    ctaText: "Get Started",
    ctaHref: "/contact?plan=starter",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$6,800",
    period: "/month",
    description: "Dedicated squad for scale-ready orgs needing creative + automation retainers",
    features: [
      "20+ long-form assets",
      "40 premium visuals",
      "Advanced SEO + analytics",
      "Priority Slack support",
      "48-hour turnaround",
      "Custom automation workflows",
      "Monthly strategy sprints",
    ],
    highlighted: true,
    ctaText: "Book Strategy Call",
    ctaHref: "/contact?plan=professional",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Dedicated pods for complex, high-volume initiatives",
    features: [
      "Unlimited content creation",
      "Dedicated account director",
      "Custom AI model training",
      "White-label deliverables",
      "SLA-backed support",
      "API & data integration",
      "On-demand production",
    ],
    ctaText: "Contact Sales",
    ctaHref: "/contact?plan=enterprise",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does the AI workflow ensure quality?",
    answer:
      "Every deliverable starts with advanced models like ChatGPT-4o and Midjourney, then goes through human creative direction, QA, and brand alignment reviews.",
  },
  {
    id: "faq-2",
    question: "What is the typical onboarding time?",
    answer:
      "We finalize strategy, gather assets, and kick off production within five business days with our fast-track onboarding playbook.",
  },
  {
    id: "faq-3",
    question: "Do you work with in-house teams?",
    answer:
      "Yes. We become an extension of your marketing, product, or ops team with shared documentation, Slack channels, and weekly standups.",
  },
  {
    id: "faq-4",
    question: "Can I pause or change my plan?",
    answer:
      "Absolutely. Plans are flexible and can be paused, upgraded, or customized at any time.",
  },
  {
    id: "faq-5",
    question: "Is the content original and safe for enterprise?",
    answer:
      "All assets pass through plagiarism, compliance, and brand voice checks. Enterprise clients receive full usage rights.",
  },
  {
    id: "faq-6",
    question: "Do you cover other AI platforms?",
    answer:
      "We regularly integrate Midjourney, Runway, ElevenLabs, Perplexity, and custom LLM endpoints based on your stack.",
  },
];

export const TRUSTED_LOGOS: TrustedLogo[] = [
  { label: "Apex Labs", initials: "AL" },
  { label: "NebulaX", initials: "NX" },
  { label: "Fortress Cloud", initials: "FC" },
  { label: "OrbitOS", initials: "OS" },
  { label: "SignalWave", initials: "SW" },
  { label: "QuantumRise", initials: "QR" },
];

export const COMPANY_INFO: CompanyInfo = {
  name: "Blackbeard Media Group",
  tagline: "AI-powered solutions for modern businesses",
  email: "support@blackbeard.media",
  phone: "+1 (555) 123-4567",
  copyright: "© 2025 Blackbeard Media Group. All rights reserved.",
  socialLinks: {
    twitter: "https://twitter.com/blackbeardmedia",
    linkedin: "https://linkedin.com/company/blackbeardmedia",
    discord: "https://discord.gg/blackbeardmedia",
    github: "https://github.com/blackbeardmedia",
  },
};

export const FOOTER_LINKS = {
  services: [
    { label: "Writing Services", href: "/services#writing" },
    { label: "Design Services", href: "/services#design" },
    { label: "Marketing & SEO", href: "/services#marketing" },
    { label: "Personal Assistant", href: "/services#assistant" },
    { label: "E-commerce", href: "/services#ecommerce" },
    { label: "Discord Automation", href: "/services#discord" },
  ],
  resources: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  contact: [
    { label: "Contact Form", href: "/contact" },
    { label: "support@blackbeard.media", href: "mailto:support@blackbeard.media" },
    { label: "Schedule a Call", href: "/contact#schedule" },
  ],
};
