import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const changaFont = localFont({
  src: "./fonts/changaOne.ttf",
  variable: "--font-changa",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${changaFont.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
