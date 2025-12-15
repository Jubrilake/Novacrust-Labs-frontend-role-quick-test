import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type React from "react";
import "./globals.css";

const _outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Payment Checkout - NOVACRUST",
  description:
    "Secure cryptocurrency payment gateway for converting crypto to cash",
  icons: {
    icon: [
      {
        url: "/novacrust-nobg-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/novacrust-nobg-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/novacrust-nobg-logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/novacrust-nobg-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_outfit.className}`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
