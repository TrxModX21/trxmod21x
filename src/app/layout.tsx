import type { Metadata } from "next";
import "@designcodeio/threeui/style.css";
import "./globals.css";
import { ReactNode } from "react";
import Background from "@/components/Background";
import FoxCursor from "@/components/neonblade-ui/fox-cursor";

export const metadata: Metadata = {
  title: "TrxMod21X | Full-Stack Engineer & Digital Architect",
  description:
    "Explore the portfolio of TrxMod21X, a Full-Stack Software Engineer specializing in modern web and mobile applications using React, Next.js, Laravel, and Flutter.",
  keywords: [
    "TrxMod21X",
    "Teuku Rizky",
    "portfolio",
    "full-stack developer",
    "frontend engineer",
    "backend developer",
    "software engineer",
    "React",
    "Next.js",
    "Laravel",
    "Flutter",
    "Aceh",
    "Indonesia"
  ],
  authors: [{ name: "TrxMod21X", url: "https://github.com/TrxModX21" }],
  creator: "TrxMod21X",
  openGraph: {
    title: "TrxMod21X | Full-Stack Engineer & Digital Architect",
    description:
      "Explore the portfolio of TrxMod21X, a Full-Stack Software Engineer specializing in modern web and mobile applications.",
    siteName: "TrxMod21X Portfolio",
    type: "website",
    images: [
      {
        url: "/logo.jpg", // Make sure you have this image in your public folder
        width: 1200,
        height: 630,
        alt: "TrxMod21X Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrxMod21X | Full-Stack Engineer",
    description: "Explore the portfolio of TrxMod21X, a Full-Stack Software Engineer.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg", // Adds support for Apple devices
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased overflow-x-hidden">
      <body className="overflow-x-hidden">
        <div className="hidden lg:block">
          <FoxCursor
            color="green"
            size={35}
            strokeWidth={2.5}
            glowIntensity="high"
            fillOpacity={0.4}
          />
        </div>
        <Background />
        {children}
      </body>
    </html>
  );
}
