import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "deep-slate": "#0f172a",
        "near-black": "#020617",
        "slate-card": "#1e293b",
        "cyber-purple": "#8b5cf6",
        "ai-blue": "#3b82f6",
        "matrix-green": "#10b981",
        "text-primary": "#f8fafc",
        "text-secondary": "#94a3b8",
        glass: "rgba(30, 41, 59, 0.5)",
        "glass-border": "rgba(148, 163, 184, 0.1)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
        "gradient-secondary": "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
        "gradient-mesh":
          "radial-gradient(circle at 10% 20%, rgba(139,92,246,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.35), transparent 50%), radial-gradient(circle at 50% 80%, rgba(16,185,129,0.25), transparent 55%)",
      },
      boxShadow: {
        glow: "0 0 35px rgba(139, 92, 246, 0.45)",
        "glow-soft": "0 0 45px rgba(59, 130, 246, 0.35)",
        "border-glow": "0 0 0 1px rgba(148, 163, 184, 0.2)",
      },
      dropShadow: {
        neon: "0 0 25px rgba(139, 92, 246, 0.65)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "scroll-left": "scroll-left 20s linear infinite",
        "pulse-slow": "pulse-slow 10s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "glow-pulse": {
          "0%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" },
          "100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-border": {
          "0%": { "border-image-source": "conic-gradient(from 0deg, #8b5cf6, #3b82f6, #10b981, #8b5cf6)" },
          "100%": { "border-image-source": "conic-gradient(from 360deg, #8b5cf6, #3b82f6, #10b981, #8b5cf6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
