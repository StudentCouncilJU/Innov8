import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JU Innov8 3.0 | Innovation & Technology Summit",
  description: "Join JU Innov8 3.0, the premier innovation and technology summit featuring cutting-edge presentations, networking opportunities, and breakthrough solutions shaping the future.",
  keywords: ["innovation", "technology", "summit", "JU Innov8", "conference", "tech event"],
  authors: [{ name: "JU Innov8 Team" }],
  creator: "JU Innov8",
  publisher: "JU Innov8",
  openGraph: {
    title: "JU Innov8 3.0 | Innovation & Technology Summit",
    description: "Join JU Innov8 3.0, the premier innovation and technology summit featuring cutting-edge presentations, networking opportunities, and breakthrough solutions shaping the future.",
    type: "website",
    locale: "en_US",
    siteName: "JU Innov8 3.0",
  },
  twitter: {
    card: "summary_large_image",
    title: "JU Innov8 3.0 | Innovation & Technology Summit",
    description: "Join JU Innov8 3.0, the premier innovation and technology summit featuring cutting-edge presentations, networking opportunities, and breakthrough solutions shaping the future.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-0JYGXDHYMM" />
    </html>
  );
}
