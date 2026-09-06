import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GARUDA — Anurag Prabhuling Swami",
  description:
    "An interactive engineering portfolio covering software, AI, data and systems.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
