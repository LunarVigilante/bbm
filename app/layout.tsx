import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteName = "Blackbeard Media Group";
const siteDescription =
  "Future-proof your business with AI-powered design, marketing, automation, and content services.";

export const metadata: Metadata = {
  metadataBase: new URL("https://blackbeard.media"),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "https://blackbeard.media",
    siteName,
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    creator: "@blackbeardmedia",
    images: ["/og-cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-near-black">
      <body className={`${inter.variable} bg-near-black text-text-primary antialiased`}>
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
            <div className="absolute left-1/2 top-[-20%] h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-primary blur-3xl opacity-20 animate-pulse-slow" />
            <div className="absolute right-[10%] bottom-[-10%] h-[30rem] w-[30rem] rounded-full bg-gradient-secondary blur-3xl opacity-30 animate-spin-slow" />
          </div>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-24 pb-12">{children}</main>
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
