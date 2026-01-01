import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const changaFont = localFont({
  src: "./fonts/changaOne.ttf",
  variable: "--font-changa",
  display: "swap",
});

export const metadata: Metadata = {
  openGraph: {
    title: 'Lee Dyer ~ Full Stack Developer',
    description: 'Lee Dyer is a full stack developer specializing in React, Next.js, TypeScript, Node.js, and SQL. View his projects or get in touch'
}

}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${changaFont.variable}` }>{children}</body>
    </html>
  );
}
