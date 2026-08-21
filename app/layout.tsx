import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alok — Developer · Builder · Organizer · Experimenter",
  description: "Interactive editorial portfolio for Alok. Developer, builder, organizer, and experimenter turning ideas into live products.",
  keywords: ["Alok", "Developer", "Portfolio", "Next.js", "Fullstack", "Hospate", "UnHack", "Grupmate", "Software Engineer"],
  authors: [{ name: "Alok" }],
  openGraph: {
    title: "Alok — Developer & Builder",
    description: "I build products, break things, organize people & occasionally ship something useful.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FFFFFF] text-[#111318] antialiased selection:bg-[#F4C400] selection:text-[#111318] font-sans overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
