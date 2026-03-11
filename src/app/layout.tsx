import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Agent Hub - Discover the Best AI Agents in 2026",
  description: "Discover, compare, and integrate the best AI agents for your workflow. Find AI agent tools, platforms, and workflows for coding, writing, marketing, and more.",
  keywords: ["AI Agent", "AI Agent Tools", "AI Agent Platform", "AI Agent Directory", "AI Workflow Automation"],
  openGraph: {
    title: "AI Agent Hub - Discover the Best AI Agents in 2026",
    description: "The ultimate resource for AI agents, workflows, and integration tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50`}>
        {children}
      </body>
    </html>
  );
}