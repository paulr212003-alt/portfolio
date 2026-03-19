import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishabh Paul | AI/ML Engineer",
  description:
    "Futuristic AI/ML portfolio with analytics-driven projects, experience, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="obsidian-core" data-ai="on">
      <body
        className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-foreground)] antialiased"
      >
        {children}
      </body>
    </html>
  );
}
