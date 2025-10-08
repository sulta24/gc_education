import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GC education - template built with shadcndesign.com",
  description:
    "GC education is a modern and clean SaaS shadcn/ui template built with Pro Blocks",
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${onest.variable} relative antialiased`}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
